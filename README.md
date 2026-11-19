# Dobson Development

The public website for Dobson Development Pty Ltd: managed Mac IT, Google Workspace, 1Password and Claude for Australian businesses.

Live at https://dobsondevelopment.com.au. GitHub Pages serves the static files directly; pushing to `main` publishes.

The homepage keeps the `dobson_dev` branding, Geist typeface and cyan/violet palette. Service pages and the About page use `services.css`. Each public page has a title, description and canonical URL; the homepage includes Organization and WebSite structured data. `sitemap.xml` lists all public landing pages.

Edit the static HTML directly. Keep page titles, descriptions, canonical URLs and structured data consistent with the visible copy, and update `sitemap.xml` when adding public pages.

The white paper and PDF are generated from `tools/white-paper/paper.md` using the existing `build.py` and `pdf.py`. The social image is rendered from `tools/og/og.html`.

Commercial model: A$99 per person/month + GST is management and support only. All software subscriptions are additional; clients pay Anthropic directly for Claude. Custom Claude engineering and projects are scoped separately.
