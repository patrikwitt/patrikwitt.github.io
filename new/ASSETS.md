# Assets and reference direction

## Private reference PDFs

`inspiration/NIVA_graphic_profile_update.pdf` (8 pages) and
`inspiration/NIVA_logos_icons.pdf` (3 pages) are user-supplied private drafts.
The inspiration directory is ignored by Git and excluded from preview/export.
Do not copy whole PDFs or whole rendered reference pages to public output.

The graphic profile specifies warm off-white `#f5f2ec` and sand `#e2dcd2`,
natural matte surfaces, EB Garamond headings, and DM Sans body text. The draft
website follows the neutral colors and editorial spacing, using local system
serif/sans-serif fallbacks rather than downloading or extracting fonts.
The RGB values and printed hex values differ slightly in the PDF; this draft
uses the printed hex values.

## Approved local proof-of-concept extracts

The user authorized image extraction from these PDFs for the local proof of concept.
These selected crops ARE public site assets, unlike the source PDFs:

- `images/niva-box-concept.webp`: front-facing product-box mockup from page 7
  of `NIVA_graphic_profile_update.pdf`. Used in the hero and product-line preview.
- `images/niva-hangtag-concept.webp`: front-facing hanging-label mockup from
  page 6 of the same PDF. Used in the product-line preview.

Extracted by rendering the PDF locally with macOS PDFKit and cropping the
selected mockups. WebP files are resized and compressed. No reference PDF is
required at runtime. These are packaging/identity concepts, not verified final
products. The site labels them accordingly. No stock-license claim is made;
confirm rights and final product information before public launch.

## Other assets

- `images/favicon.svg`: original neutral monogram created for this project.
- No third-party scripts, remote fonts, or image services are used.

## Wooden-toy product previews

Six user-supplied packaging sheets were present when this revision began.
A seventh photo, the triangular shape sorter, was added during the work.
Original sheets stay private in `inspiration/`; only the selected product
cutouts are included in the site. The user authorized these for the prototype.

| Site asset | Private source | Visible product |
| --- | --- | --- |
| `images/sorting-triangle.webp` | `Sorting  Triangle with new color.png` | Triangular shape sorter and loose pieces |
| `images/building-blocks.webp` | `PH05D040 100pcs blocks set_1.png` | Assembled pastel wooden blocks |
| `images/tractor.webp` | `44-30013 -PH05B166-1.png` | Tractor, animal trailer, and sheep |
| `images/pounding-bench.webp` | `44-30023-PH05Q034-1.png` | Pounding bench and wooden mallet |
| `images/guitar.webp` | `44-30025（PH08G014.jpg` | Farm-themed wooden toy guitar |
| `images/play-fruit.webp` | `44-30027-01.png` | Fruit pieces, toy knife, and wooden board |
| `images/dessert-set.webp` | `44-30028-PH01D020-1.png` | Wooden pretend desserts and accessories |

Method: isolate the relevant photo region, then use the built-in image tool
in background-extraction edit mode to remove packaging text, graphics, and
dielines. Preserve the visible product, arrangement, and original paint colors.
Optimize the selected RGBA results as WebP with transparency. These are
AI-edited prototype images, not pixel-exact original product photographs.
Review against approved photography before using them as catalogue imagery.
No age recommendations, piece counts, certifications, or brand relationships
from the draft packaging are asserted by the website.

The shape sorter started as a standalone product photograph; only its white
background was removed. Its original is also kept private.

The image-edit instructions are recorded in `IMAGE_PROMPTS.md`.

### Expanded color direction

- Dusty blue `#dce8ed`: wheels, blocks, dessert details; hero and contact panels.
- Pale sage `#e1e8da`: tractor, guitar, and bench; product backgrounds.
- Butter yellow `#f1e9c9`: blocks and small painted details; product background.
- Muted pink `#eee0e2`: a secondary accent, used for one dessert panel.
- Cool off-white `#f6f8f6`: the overall page, balanced by slate `#2c3d46` text.
- Slate blue `#476575`: buttons and selected headline words.

These are softened interpretations of the product colors, not exact paint
specifications. Product images themselves are not recolored. NIVA's warmer
neutral imagery remains in a smaller supporting concept section.

## Current color comparison revision

The previous pastel palette above is superseded by the ten themes documented
in `THEMES.md` and defined in `js/themes.js`. Default: Studio Blue, with slightly
stronger blue, sage, and ochre surfaces. Pink UI surfaces have been removed in
all themes; original product colors in the images remain unchanged. The warmer
NIVA interpretation is available as NIVA Paper in the comparison selector.

## SpeedGame corporate wordmark

- Private source: `inspiration/Speedgame_logo_black.jpg`, supplied by the user.
- Public asset: `images/speedgame-wordmark-black.jpg` (496 × 71), an unchanged
  copy of the supplied wordmark. Used only in the header and footer, with
  a textual SpeedGame alternative. Inline company-name mentions use the
  surrounding text font.
- Lettering: thin, geometric, uppercase sans serif. The raster source alone
  does not establish an exact typeface or font license. No substitute font
  is presented as an exact match and no commercial font files are bundled.
- CSS `mix-blend-mode: multiply` lets the white JPEG background merge with
  the light palette surfaces while keeping the black letterforms unchanged.
- Metadata, page titles, and accessible labels retain normal textual naming.
