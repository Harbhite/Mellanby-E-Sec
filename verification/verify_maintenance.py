import time
from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the maintenance page
    page.goto("http://localhost:3000/#/maintenance")

    # Wait for the page to load
    page.wait_for_selector("h1:has-text('MAINTENANCE')")
    print("Page loaded.")

    # Check if labels are associated with inputs
    # We can use get_by_label to verify this association exists
    try:
        page.get_by_label("Block/Location").select_option("BLOCK B")
        page.get_by_label("Urgency").select_option("URGENT (24HR)")
        page.get_by_label("Nature of Issue").fill("Broken window")
        page.get_by_label("Detailed Description").fill("Window in room 101 is shattered.")
        print("Form filled successfully using labels.")
    except Exception as e:
        print(f"Error filling form: {e}")
        browser.close()
        return

    # Focus on an input to check focus styles
    page.get_by_label("Nature of Issue").focus()

    # Take a screenshot of the filled form with focus
    page.screenshot(path="verification/maintenance_form_filled.png")
    print("Screenshot saved to verification/maintenance_form_filled.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
