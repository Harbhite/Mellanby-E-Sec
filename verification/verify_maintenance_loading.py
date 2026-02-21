import time
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the maintenance page
    page.goto("http://localhost:3000/#/maintenance")
    page.wait_for_selector("h1:has-text('MAINTENANCE')")

    # Fill form
    page.get_by_label("Block/Location").select_option("BLOCK B")
    page.get_by_label("Urgency").select_option("URGENT (24HR)")
    page.get_by_label("Nature of Issue").fill("Broken window")
    page.get_by_label("Detailed Description").fill("Window in room 101 is shattered.")

    # Click submit
    submit_button = page.get_by_role("button", name="SUBMIT REPORT")
    submit_button.click()

    # Check for loading state immediately
    try:
        page.wait_for_selector("text=SUBMITTING...", timeout=2000)
        print("Loading state verified: SUBMITTING... text found.")

        # Take a screenshot of the loading state
        page.screenshot(path="verification/maintenance_loading.png")
        print("Screenshot saved to verification/maintenance_loading.png")
    except Exception as e:
        print(f"Loading state not found: {e}")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
