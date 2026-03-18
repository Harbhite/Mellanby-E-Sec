from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Go to the local dev server
        page.goto('http://localhost:4173')

        # Test 1: Desktop viewport for secondary items
        page.set_viewport_size({"width": 1280, "height": 800})
        page.wait_for_timeout(1000)
        page.screenshot(path='screenshot-desktop.png')

        # Test 2: Mobile viewport for toggle button
        page.set_viewport_size({"width": 375, "height": 667})
        page.wait_for_timeout(1000)
        page.screenshot(path='screenshot-mobile.png')

        # Test 3: Mobile viewport, open menu
        page.click('button[aria-controls="mobile-menu"]')
        page.wait_for_timeout(1000)
        page.screenshot(path='screenshot-mobile-menu-open.png')

        browser.close()

if __name__ == '__main__':
    run()
