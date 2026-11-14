"""Prints the locally served white paper page to PDF. Serve the repo root on port 8765 first."""
import os
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, 'white-paper', 'change-your-outlook-on-it.pdf')
CHROME = os.environ.get('CHROME', '/usr/bin/google-chrome')

with sync_playwright() as p:
    b = p.chromium.launch(executable_path=CHROME, args=['--no-sandbox'])
    pg = b.new_page()
    pg.goto('http://127.0.0.1:8765/white-paper/', wait_until='networkidle')
    pg.emulate_media(media='print')
    pg.evaluate("document.fonts.ready")
    pg.wait_for_timeout(500)
    pg.pdf(path=OUT, prefer_css_page_size=True, print_background=True, tagged=True, outline=True)
    b.close()
print('wrote', OUT)
