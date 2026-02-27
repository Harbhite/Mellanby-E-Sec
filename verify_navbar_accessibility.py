
import asyncio
from playwright.async_api import async_playwright, expect

async def run():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()

        # Navigate to the home page
        await page.goto("http://localhost:3000")

        # Verify the mobile menu button has the correct initial ARIA attributes
        # We need to set viewport to mobile size to see the hamburger menu
        await page.set_viewport_size({"width": 375, "height": 667})

        # The mobile menu button should have aria-label="Open menu" and aria-expanded="false"
        mobile_menu_btn = page.locator("button[aria-label='Open menu']")
        await expect(mobile_menu_btn).to_be_visible()
        await expect(mobile_menu_btn).to_have_attribute("aria-expanded", "false")

        # Click the button to open the menu
        await mobile_menu_btn.click()

        # Verify the button now has aria-label="Close menu" and aria-expanded="true"
        # Note: The aria-label changes, so we need to locate it by the new label or other attributes
        close_menu_btn = page.locator("button[aria-label='Close menu']")
        await expect(close_menu_btn).to_be_visible()
        await expect(close_menu_btn).to_have_attribute("aria-expanded", "true")

        # Verify secondary items have aria-labels
        # We'll check the desktop view for secondary items as they are always present there
        await page.set_viewport_size({"width": 1280, "height": 800})

        # Check for Council link
        council_link = page.locator("a[aria-label='Council']")
        await expect(council_link).to_be_visible()

        # Check for Archive link
        archive_link = page.locator("a[aria-label='Archive']")
        await expect(archive_link).to_be_visible()

        # Check for Maintenance link
        maintenance_link = page.locator("a[aria-label='Maintenance']")
        await expect(maintenance_link).to_be_visible()

        print("Navbar ARIA verification successful!")

        await browser.close()

if __name__ == "__main__":
    asyncio.run(run())
