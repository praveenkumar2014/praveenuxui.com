# PRAVEENUXUI — local UX/UI profile

A local, offline mirror of the public pages of `https://amaterasu.ai/`, rebranded as a UX/UI profile for PRAVEENUXUI. The original WebGL theme, layout, frames, fonts and transitions are preserved; the written content, logo, metadata and voiceovers are original UX/UI copy.

## Run

```bash
cd /Users/mac/amaterasu-local
node serve.mjs 3000
```

Open http://localhost:3000/ and http://localhost:3000/aleph.

## Refresh and rebrand

```bash
node mirror.mjs
node rebrand.mjs
```

- `mirror.mjs` re-downloads the homepage, `/aleph`, Nuxt bundles, fonts, transition frames, WebGL textures and audio, and rewrites remote Storyblok URLs to local paths.
- `rebrand.mjs` is idempotent. It applies the PRAVEENUXUI copy, replaces the wordmark and footer logo with `~/Downloads/praveenlogo.png`, updates headings, labels, links and metadata, and calls `assets.py` to regenerate the OG image, favicons and spoken audio.
- `assets.py` uses the local macOS `say` voice (Samantha) plus `ffmpeg` to replace the old mental-health narration with the new UX/UI scripts. Replace the generated MP3s under `site/_remote/a.storyblok.com/` with real recordings when available.

## Content approach

- Splash label: `Welcome`.
- Brand: `PRAVEENUXUI` everywhere; original logo replaced in the header, footer, favicons and social image.
- Copy is original writing inspired by seven usability principles (visibility, feedback, constraints, mapping, consistency, affordances and signifiers) and the seven-stage action cycle. It is not copied from the reference text.
- The work page keeps the original section frames; its headings narrate a goal-to-outcome interaction loop.

## Deploy

The included `Dockerfile` serves the static mirror with Node on port `3000`.

```bash
docker build -t praveenuxui-profile .
docker run --rm -p 3000:3000 praveenuxui-profile
```

For Coolify, the existing `praveenuxui.com` application uses this repo's `docker-compose.yml`. The container listens only on the internal proxy port `80`; no host port is published, so it does not conflict with Dokploy's host port `3000`. Domains are already configured as `praveenuxui.com` and `www.praveenuxui.com` with SSL/Let's Encrypt.

## Notes

- Social links now point to generic X/LinkedIn homepages and email goes to `hello@praveenuxui.com`.
- The `/aleph` route and component names remain unchanged so the mirrored app still works; only visible labels were renamed to `Selected Work` / `Work`.
- External links left as-is are limited to the site's own asset host, which is rewritten locally.
- The page is WebGL-driven; a GPU-capable browser is needed for the full effect.
