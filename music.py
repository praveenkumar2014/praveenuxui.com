"""Generate a seamless ambient music loop for the PRAVEENUXUI site."""
import os
import numpy as np
from scipy.signal import fftconvolve

SR = 44100
DUR = 96.0                 # 8 chords x 12 s
N = int(SR * DUR)
OUT = os.path.join('site', 'audio', 'ambient.mp3')

# Dm9, Bbmaj7, Fmaj7, Cadd9, Dm9, Gm7, Bbmaj7, A7sus4
CHORDS = [
    [50, 53, 57, 60, 64],
    [46, 50, 53, 57],
    [41, 45, 48, 52],
    [48, 52, 55, 62],
    [50, 53, 57, 60, 64],
    [43, 46, 50, 53],
    [46, 50, 53, 57],
    [45, 50, 55, 60],
]
SEG = DUR / len(CHORDS)


def hz(m):
    return 440.0 * 2 ** ((m - 69) / 12)


def envelope(n, attack, release, length=None):
    length = length or n
    e = np.ones(length, dtype=np.float64)
    a = int(SR * attack)
    r = int(SR * release)
    if a > 0:
        e[:a] = np.linspace(0, 1, a) ** 1.6
    if r > 0:
        e[-r:] = np.linspace(1, 0, r) ** 1.6
    if length < n:
        e = np.pad(e, (0, n - length))
    return e


def pad(freq, n, seed):
    rng = np.random.default_rng(seed)
    t = np.arange(n) / SR
    det = rng.uniform(-0.35, 0.35)
    sig = (
        np.sin(2 * np.pi * freq * t)
        + 0.32 * np.sin(2 * np.pi * (freq * 2 + det) * t)
        + 0.13 * np.sin(2 * np.pi * freq * 3 * t)
    )
    sig *= envelope(n, 2.6, 3.4)
    slow = 0.82 + 0.18 * np.sin(2 * np.pi * 0.055 * t + seed)
    return sig * slow


def pluck(freq, n, amp=1.0):
    t = np.arange(n) / SR
    env = np.exp(-t * 5.2) * (1 - np.exp(-t * 260))
    sig = np.sin(2 * np.pi * freq * t) + 0.22 * np.sin(2 * np.pi * freq * 2 * t)
    return sig * env * amp


def build():
    pads = np.zeros(N)
    arp = np.zeros(N)
    bass = np.zeros(N)

    for idx, chord in enumerate(CHORDS):
        start = int(idx * SEG * SR)
        seg = int(SEG * SR)
        root = chord[0] - 12

        # pad voices
        for j, note in enumerate(chord):
            voice = pad(hz(note), seg, idx * 10 + j)
            voice *= 0.55 if j == 0 else 0.42
            pads[start:start + seg] += voice / len(chord) * 1.8

        # soft bass
        t = np.arange(seg) / SR
        b = np.sin(2 * np.pi * hz(root) * t) * envelope(seg, 1.2, 2.4)
        b *= 0.9 + 0.1 * np.sin(2 * np.pi * 0.12 * t)
        bass[start:start + seg] += b * 0.5

        # arpeggio every 0.75 s
        step = int(0.75 * SR)
        k = 0
        pos = 0
        while pos + step <= seg:
            note = chord[(k * 3 + idx) % len(chord)] + 12
            p = pluck(hz(note), step, amp=0.30)
            arp[start + pos:start + pos + step] += p
            pos += step
            k += 1

    mix = pads * 0.62 + arp * 0.20 + bass * 0.30

    # reverb impulse
    rl = int(SR * 2.2)
    rt = np.arange(rl) / SR
    rng = np.random.default_rng(7)
    impulse = rng.normal(0, 1, rl) * np.exp(-rt * 2.6)
    impulse[0] = 0
    wet = fftconvolve(mix, impulse)[:N] * 0.22
    mix = mix + wet

    # gentle low-pass one-pole
    alpha = 0.36
    out = np.empty_like(mix)
    prev = 0.0
    for i in range(N):
        prev = prev + alpha * (mix[i] - prev)
        out[i] = prev

    # fade for seamless loop
    fade = int(SR * 1.2)
    out[:fade] *= np.linspace(0, 1, fade)
    out[-fade:] *= np.linspace(1, 0, fade)

    peak = np.max(np.abs(out)) or 1.0
    out = out / peak * 0.82
    return out


def main():
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    pcm = (build() * 32767).astype('<i2')
    wav = OUT + '.wav'
    pcm.tofile(wav)
    import subprocess
    subprocess.run([
        'ffmpeg', '-y', '-loglevel', 'error',
        '-f', 's16le', '-ar', str(SR), '-ac', '1', '-i', wav,
        '-codec:a', 'libmp3lame', '-b:a', '128k', OUT
    ], check=True)
    os.remove(wav)
    print('generated', OUT, os.path.getsize(OUT), 'bytes')


if __name__ == '__main__':
    main()
