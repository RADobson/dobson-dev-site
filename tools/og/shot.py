"""Renders tools/og/og.html to assets/images/og.png. Serve the repo root on port 8765 first."""
import os
from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, 'assets', 'images', 'og.png')
CHROME = os.environ.get('CHROME', '/usr/bin/google-chrome')

with sync_playwright() as p:
    b = p.chromium.launch(executable_path=CHROME, args=['--no-sandbox'])
    pg = b.new_page(viewport={'width': 1200, 'height': 630})
    pg.goto('http://127.0.0.1:8765/tools/og/og.html', wait_until='networkidle')
    pg.evaluate("document.fonts.ready")
    pg.wait_for_timeout(500)
    pg.screenshot(path=OUT)
    b.close()
print('wrote', OUT)
