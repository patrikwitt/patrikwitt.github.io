# SpeedGame — product-line and color-theme draft

A local-only, buildless replacement concept. Existing root pages are unchanged.

## Private references

`inspiration/` contains private draft PDFs and product/packaging sheets. It is ignored by Git. Never serve
the repository root or /new directly: a generic static server would expose
ignored files. Never deploy /new as an unfiltered directory.

## Safe local preview

From the repository root:

```sh
python3 new/preview.py
```

Open http://127.0.0.1:8000/ in a browser. The helper copies ONLY `index.html`,
`css/`, `js/`, and `images/` to a temporary public directory, then serves that
snapshot on loopback. It excludes private inspiration, documentation, and PDFs.
Restart the preview to see source changes. Ctrl-C stops it and removes the
snapshot. No installation or build is needed.

## Comparing themes

The sticky top selector offers ten schemes, ordered from mild to stronger.
Hover over the selector to open it, then hover a palette to preview it live.
Click a radio option to keep it. Leaving an uncommitted preview restores the
selected theme. Click outside or press Escape to close. On a keyboard, open
with Enter/Space or Arrow Down, then use the native radio arrow keys. Touch
users can tap to open and select. The chosen theme is remembered locally when
browser storage is available. No server or account is involved.

The default is Studio Blue. No palette uses pink page surfaces; photos retain
their original product colors. See THEMES.md for the palette lineup.

## Public export

```sh
python3 new/preview.py --export /tmp/speedgame-public
```

Choose an empty directory outside /new. Deploy only the resulting public
output when deployment is explicitly authorized. The original reference PDFs and product sheets must never
be included. Selected image extracts in `images/` are intentionally included.

## Structure

- `index.html`: responsive introduction, seven wooden-toy previews, NIVA concepts, brand enquiries,
  and contact details.
- `css/styles.css`: muted blue, sage, yellow, and pink accents, fluid typography, responsive layouts.
- `js/main.js`: theme preview, selection, local persistence, and copyright year.
- `js/themes.js`: the ten palettes and default selection.
- `images/`: optimized product cutouts, selected PDF extracts, and original favicon.
- `ASSETS.md`: reference analysis, asset origin, and usage notes.
- `preview.py`: allowlisted local preview and public export.

## Before launch

- Confirm all final products, availability, descriptions, and image rights.
- Replace AI-edited product previews with approved catalogue photographs.
- Confirm represented brands before adding logos.
- Confirm Jenny's email and phone (copied from the existing site).
- Review English copy and whether Swedish should be added.
- Confirm the production domain before adding canonical URLs and a sitemap.
- Review the layout in browsers at mobile, tablet, and desktop widths.

No form backend, analytics, cookies, or external services are included.

## Live color comparison

The sticky palette selector offers ten themes, ordered from mild to stronger:
NIVA Paper, Natural Oak, Mineral Sage, Studio Blue (default), Nordic Coast,
The Workshop, Field Notes, Harbour & Gold, Play Blueprint, and Playhouse.
No theme uses pink backgrounds.

Hover the selector to open it, then hover an option to preview. Click an option
to keep it. Leaving the menu restores the chosen theme. Click/tap the summary
also opens it; native radio buttons support Tab, arrow keys, and Space.
Arrow Down on the summary opens the choices, and Escape dismisses them.
Selections are saved locally when browser storage is available. Private mode
or blocked storage does not prevent switching themes.

Themes live in `js/themes.js`. The CSS supplies Studio Blue without JavaScript.
Only page colors change; product photography stays unchanged.
