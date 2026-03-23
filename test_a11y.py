from playwright.sync_api import sync_playwright

def test_a11y_hamburger():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        # Mobile viewport
        context = browser.new_context(viewport={'width': 375, 'height': 667})
        page = context.new_page()

        page.goto('http://localhost:4173/#/')
        page.wait_for_selector('nav')

        # Take initial screenshot
        page.screenshot(path='mobile_menu_closed.png')

        # Find hamburger button
        btn = page.locator('button[aria-controls="mobile-menu"]')

        # Verify initial ARIA attributes
        assert btn.get_attribute('aria-expanded') == 'false', "aria-expanded should be false initially"
        assert btn.get_attribute('aria-label') == 'Open menu', "aria-label should be 'Open menu' initially"

        # Click the button
        btn.click()

        # Wait for menu to appear (animate-in)
        page.wait_for_selector('#mobile-menu')

        # Take open screenshot
        page.screenshot(path='mobile_menu_open.png')

        # Verify updated ARIA attributes
        assert btn.get_attribute('aria-expanded') == 'true', "aria-expanded should be true after click"
        assert btn.get_attribute('aria-label') == 'Close menu', "aria-label should be 'Close menu' after click"

        # Check secondary links in desktop view
        context_desktop = browser.new_context(viewport={'width': 1280, 'height': 800})
        page_desktop = context_desktop.new_page()
        page_desktop.goto('http://localhost:4173/#/')
        page_desktop.wait_for_selector('nav')

        # Look for the Archive secondary item link by its text/title
        archive_link = page_desktop.locator('a[title="Archive"]')
        assert archive_link.get_attribute('aria-label') == 'Archive', "secondary item should have aria-label"

        page_desktop.screenshot(path='desktop_navbar.png')

        browser.close()
        print("Playwright test completed successfully.")

if __name__ == '__main__':
    test_a11y_hamburger()
