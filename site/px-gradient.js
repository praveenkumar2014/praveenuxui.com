(function () {
  'use strict';

  var canvas = document.createElement('canvas');
  canvas.id = 'px-gradient';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(canvas, document.body.firstChild);

  var ctx = canvas.getContext('2d', { alpha: false });
  var W = 0, H = 0, dpr = 1;
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var BLOBS = [
    { c: [255, 176, 40], x: 0.12, y: 0.78, r: 0.60, ax: 0.10, ay: 0.06, sx: 0.00021, sy: 0.00017, ph: 0.0, a: 0.92 },
    { c: [243, 77, 17],  x: 0.38, y: 0.66, r: 0.52, ax: 0.13, ay: 0.09, sx: 0.00017, sy: 0.00023, ph: 1.4, a: 0.86 },
    { c: [141, 12, 57],  x: 0.66, y: 0.46, r: 0.56, ax: 0.11, ay: 0.12, sx: 0.00014, sy: 0.00019, ph: 2.7, a: 0.90 },
    { c: [37, 10, 74],   x: 0.84, y: 0.22, r: 0.64, ax: 0.09, ay: 0.10, sx: 0.00019, sy: 0.00013, ph: 4.1, a: 0.96 },
    { c: [2, 9, 58],     x: 0.28, y: 0.18, r: 0.70, ax: 0.14, ay: 0.07, sx: 0.00012, sy: 0.00016, ph: 5.5, a: 1.00 },
    { c: [255, 120, 24], x: 0.52, y: 0.92, r: 0.42, ax: 0.08, ay: 0.05, sx: 0.00026, sy: 0.00021, ph: 3.3, a: 0.70 }
  ];

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    canvas.style.width = W + 'px';
    canvas.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function paint(t) {
    // deep-space base
    var base = ctx.createLinearGradient(0, 0, W, H);
    base.addColorStop(0, '#02093a');
    base.addColorStop(0.5, '#0a0630');
    base.addColorStop(1, '#000a2e');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, W, H);

    ctx.globalCompositeOperation = 'screen';
    for (var i = 0; i < BLOBS.length; i++) {
      var b = BLOBS[i];
      var x = (b.x + Math.sin(t * b.sx + b.ph) * b.ax) * W;
      var y = (b.y + Math.cos(t * b.sy + b.ph * 1.3) * b.ay) * H;
      var r = Math.max(W, H) * b.r * (0.92 + Math.sin(t * 0.00023 + i) * 0.08);
      var g = ctx.createRadialGradient(x, y, 0, x, y, r);
      var c = b.c;
      g.addColorStop(0, 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + b.a + ')');
      g.addColorStop(0.45, 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',' + (b.a * 0.55) + ')');
      g.addColorStop(1, 'rgba(' + c[0] + ',' + c[1] + ',' + c[2] + ',0)');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);
    }
    ctx.globalCompositeOperation = 'source-over';

    // flowing sunset wave bands across the lower half
    var bands = [
      { y: 0.62, amp: 0.055, speed: 0.00034, col: [255, 140, 20], alpha: 0.20, freq: 1.6 },
      { y: 0.74, amp: 0.045, speed: 0.00027, col: [243, 77, 17], alpha: 0.16, freq: 2.1 },
      { y: 0.86, amp: 0.038, speed: 0.00041, col: [141, 12, 57], alpha: 0.14, freq: 1.3 }
    ];
    ctx.globalCompositeOperation = 'screen';
    for (var k = 0; k < bands.length; k++) {
      var bd = bands[k];
      ctx.beginPath();
      ctx.moveTo(0, H);
      for (var px = 0; px <= W; px += 12) {
        var wave = Math.sin(px / W * Math.PI * bd.freq + t * bd.speed) * bd.amp * H
                 + Math.sin(px / W * Math.PI * bd.freq * 2.3 - t * bd.speed * 0.7) * bd.amp * H * 0.35;
        ctx.lineTo(px, H * bd.y + wave);
      }
      ctx.lineTo(W, H);
      ctx.closePath();
      var wg = ctx.createLinearGradient(0, H * bd.y, 0, H);
      wg.addColorStop(0, 'rgba(' + bd.col[0] + ',' + bd.col[1] + ',' + bd.col[2] + ',' + bd.alpha + ')');
      wg.addColorStop(1, 'rgba(' + bd.col[0] + ',' + bd.col[1] + ',' + bd.col[2] + ',0)');
      ctx.fillStyle = wg;
      ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';

    // subtle vignette
    var vg = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.25, W / 2, H / 2, Math.max(W, H) * 0.78);
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(0,0,0,0.45)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);
  }

  var start = performance.now();
  function loop(now) {
    paint(reduced ? 0 : (now - start));
    if (!reduced) requestAnimationFrame(loop);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });
  requestAnimationFrame(loop);
})();
