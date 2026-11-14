# Dobson Development

The website for Dobson Development Pty Ltd: Apple, Proton and Claude for Australian business.

Live at https://dobsondevelopment.com.au

Two static pages with their styles inline: the home page, `index.html`, and the white paper, `white-paper/index.html`, which also carries its PDF. GitHub Pages serves it as is; pushing to `main` publishes. The previous multi-page site is in the git history.

The logo is the `dobson_dev_` wordmark with a cyan-to-violet cursor. Vector files are in `assets/brand/`. Typeface: Geist (SIL OFL), self-hosted in `assets/fonts/`.

The white paper page and its PDF are generated. The source text is `tools/white-paper/paper.md`; `build.py` and `pdf.py` in the same folder rebuild the page and the PDF (usage is at the top of `build.py`).
