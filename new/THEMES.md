# Color comparison themes

Ten schemes ordered from mild to stronger. Default: **04 · Studio Blue**.
No palette recolors photographs or uses light pink UI surfaces.

| # | Theme | Feeling | Color direction |
| --- | --- | --- | --- |
| 01 | NIVA Paper | Quiet | Warm paper, stone & charcoal |
| 02 | Natural Oak | Soft | Wood, oatmeal & tobacco |
| 03 | Mineral Sage | Calm | Stone, olive & mineral blue |
| 04 | Studio Blue | Balanced | Dusty blue, sage & warm ochre |
| 05 | Nordic Coast | Fresh | Sea glass, slate & sandy yellow |
| 06 | The Workshop | Earthy | Mustard, warm timber & ink |
| 07 | Field Notes | Outdoors | Leaf, denim & harvest yellow |
| 08 | Harbour & Gold | Confident | Atlantic blue with golden accents |
| 09 | Play Blueprint | Graphic | Cobalt, cool grey & bold ochre |
| 10 | Playhouse | Strong | Ink blue, leaf & sun-warmed gold |

Each theme supplies page, text, border, accent, hover, hero/product surfaces,
and section/contact colors from a single data file: `js/themes.js`.

CSS contains the default palette as a no-JavaScript fallback. The comparison
control appears only after its JavaScript has initialized. Hover previews do
not overwrite a saved selection. Clicking a radio option or using native
radio keys selects it. Storage failures fall back gracefully.

Validation: all ten palettes passed 230 foreground/background contrast checks
at 4.5:1 or higher. JavaScriptCore runtime checks with a DOM fixture covered
hover, preview rollback, selection, touch-hover exclusion, keyboard entry,
Escape, focus exit, outside click, theme-color metadata, and valid/invalid/
blocked local storage. This is logic verification; full browser visual and
native input behavior checks remain pending in this environment.
