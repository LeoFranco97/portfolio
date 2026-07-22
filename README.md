# Leonardo Franco, Art Director

Personal portfolio site. React + TypeScript + Tailwind + Framer Motion, built with Vite.

## Running it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build into dist/
npm run preview  # serve the production build locally
```

## Where to change things

Almost all copy and imagery is in **`src/data/site.ts`**. You should not need to
touch component code to update the site.

| What you want to change | Where |
| --- | --- |
| Name, tagline, email, WhatsApp, social links | `profile` |
| The paragraph in the About section | `aboutText` |
| Countries strip under About | `territories` |
| Performance-marketing Results section | `results` |
| The six services and their descriptions | `services` |
| The three project cards | `projects` |
| Scrolling image strips | `marqueeRowOne`, `marqueeRowTwo` |
| Availability table in the Contact section | `availability` |
| Job history | `experience` |

## Images

All artwork lives in `public/work/`. To swap one, drop the new file in that
folder and point the matching entry in `src/data/site.ts` at it. Filenames are
referenced without a leading slash, for example `work/berlanda-smart.jpg`.

Keep images under roughly 1600px on the long edge and save as JPEG. The current
set totals about 8 MB.

### Hero portrait

The hero serves `public/portrait.webp` and falls back to `public/portrait.png`.
If neither exists, a monogram stands in, so the hero never shows a broken image.

The current files are the 3D avatar, cropped to its alpha bounds so the figure
sits flush on the bottom edge. WebP is 179 KB against 1.4 MB for the same image
as a full-size PNG, which matters because the hero loads immediately.

To replace it, drop a new cut-out over `public/portrait.png` and regenerate the
WebP:

```python
from PIL import Image
im = Image.open("public/portrait.png").convert("RGBA")
im.crop(im.getchannel("A").getbbox()).save(
    "public/portrait.webp", "WEBP", quality=88, method=6
)
```

The portrait tilts in 3D toward the cursor via `src/components/Magnet.tsx`
(`perspective: 900px`, up to 14 degrees on each axis). The effect is skipped on
touch devices and when `prefers-reduced-motion` is set.

### Redacted work (Bond and Partners)

The Bond images in `public/work/bond-*.jpg` are **permanently redacted at the
pixel level**: each was downsampled to a 48px thumbnail, blurred, then scaled
back up before export. There is no recoverable detail in the published files.

This is deliberate. A CSS `filter: blur()` would leave the original image
downloadable from the network tab, which is not confidentiality, only the
appearance of it. If you ever swap these files, redact them the same way rather
than blurring in the browser.

Any project can carry the same treatment by setting `nda: true` on its entry in
`projects`. That swaps the "Live Project" button for an "Under NDA" badge and
puts a "Confidential" label over the large image.

When material clears for release, replace the files and drop the `nda` flag.

The Results section screenshots in `public/results/proof-*.jpg` use the same
pixel-level redaction over the client and campaign names. The polished
dashboard, `public/results/dashboard.png`, was supplied already anonymised and
is shown as-is.

## Deploying

A GitHub Actions workflow at `.github/workflows/deploy.yml` builds and publishes
to GitHub Pages on every push to `main`.

One-time setup: in the repository, go to **Settings, Pages** and set
**Source** to **GitHub Actions**.

The Vite `base` is set to `'./'`, so the same build also works on Netlify,
Vercel, or a custom domain with no changes.

## Notes

- Fonts load from Google Fonts (Kanit, weights 300 to 900).
- Motion is reduced for visitors who have `prefers-reduced-motion` set.
- The magnetic hover on the portrait is skipped on touch devices.
