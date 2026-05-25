# JARQS AI LAB

Static public website for `ai.jarqs.net`.

The site is a lightweight cyberpunk-inspired AI operations lab and personal
business card for Jarek Koscielecki.

Default language is English. A Polish version is available through the EN/PL
toggle in the header and is stored locally in the browser.

## Scope

- Static HTML, CSS, and JavaScript only.
- No backend.
- No private infrastructure links.
- No secrets, IP addresses, tokens, or internal hostnames.
- Designed for Cloudflare Pages.

## Local Preview

Open `index.html` directly in a browser, or serve the directory with any static
file server.

Example:

```bash
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```

## Cloudflare Pages

Recommended settings:

```text
Framework preset: None
Build command: none
Build output directory: /
Production branch: main
Custom domain: ai.jarqs.net
```

Optional redirects can be configured later from `jarqs.net` or `www.jarqs.net`
to `https://ai.jarqs.net`.

## Files

```text
index.html          Main page
styles.css          Visual system and layout
main.js             Canvas background, ticker animation, and EN/PL language toggle
assets/favicon.svg  Browser icon
assets/og-card.svg  Social preview image
_headers            Cloudflare Pages security headers
robots.txt          Search crawler policy
sitemap.xml         Minimal sitemap
```
