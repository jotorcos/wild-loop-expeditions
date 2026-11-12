# Wild Loop Expeditions

A premium, founder-led concept for private cycling expeditions in Eastern Spain, based in Valencia. The site is built with Astro and TypeScript as a fast, static, single-page experience with dedicated sections for experiences, destinations, the planning process, about and enquiries.

## Run locally

```sh
npm install
npm run dev
npm run check
npm run build
```

## Enquiry form setup

The enquiry form currently validates its required name, email and trip-idea fields in the browser, then formats the entered details for the visitor to copy. **It does not send or store enquiries.** To accept submissions, connect a secure form endpoint (for example, a serverless function or a form provider) and update the form submit handler in `src/pages/index.astro` to POST to that endpoint. Configure spam protection, privacy/data-retention practices and an appropriate success/error state before launch. Do not put secret keys in client-side code.

## Photography and launch notes

Photography is loaded from Unsplash image URLs with responsive sizing parameters; replace or self-host selected images if you need a guaranteed asset set, and confirm the applicable Unsplash license/terms for your intended use. Fonts are loaded from Google Fonts with system fallbacks. Before launch, review the copy and destination imagery, add a privacy notice appropriate to any form backend, and configure analytics only if required. The site intentionally avoids prices, testimonials, fixed departures, named founder credentials and unconfirmed operational claims.
