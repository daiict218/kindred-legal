# kindred-legal

Public home for Kindred's legal pages, served via GitHub Pages at
`https://daiict218.github.io/kindred-legal/`.

## What's here

- `index.html` — the Kindred Privacy Notice (rendered from source)
- `render.js` — the build script that converts markdown to HTML
- `build.sh` — thin shell wrapper; run this to rebuild

## Source of truth

The privacy notice content lives in `privacy-notice.md` in this repo. Do not edit
`index.html` by hand — edit the Markdown, run the build script, and commit both.

## How to rebuild after a content update

```
cd kindred-legal
npm run build      # or: ./build.sh
git add index.html
git commit -m "chore: rebuild privacy notice from updated source"
git push
```

GitHub Pages picks up the new `index.html` within ~60 seconds.

## Contact email status

The notice currently uses `ajaygaur319@gmail.com`. This will switch to
`privacy@kindred.in` once the `kindred.in` domain is registered (tracker: R238).
