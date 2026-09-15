# Dingshengan Roofing Website

Static bilingual product website for Dingshengan ASA synthetic resin roof tiles, UPVC roofing sheets and accessories.

## Local preview

```powershell
python -m http.server 8765
```

Open `http://127.0.0.1:8765/` in a browser.

## Content and SEO

- `index.html` is the English page; `zh.html` is its crawlable Chinese equivalent.
- `js/main-v11.js` provides site behavior. `js/seo-content.js` contains current bilingual SEO copy.
- After changing either of those files, regenerate both static pages with `node scripts/build-locales.cjs`.
- `sitemap.xml`, `robots.txt`, Open Graph metadata, canonical URLs, hreflang annotations and descriptive structured data are included.
- Product structured data deliberately has no invented price, availability, ratings or certification claims. Add only information supported by current product records and test documents.

## Publishing

This repository publishes through GitHub Pages. Push reviewed commits to the configured production branch. Before stating that the privacy notice is legally complete, replace the broad Foshan location with the verified legal entity name and full business address.
