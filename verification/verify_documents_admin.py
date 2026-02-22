from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    # Navigate to the documents admin page directly
    # The AuthProvider should default to Mock Admin if no session
    page.goto("http://localhost:3000/#/admin/documents")

    # Wait for content to load
    try:
        page.wait_for_selector("text=Documents", timeout=10000)
        page.wait_for_selector("text=Archive Management", timeout=10000)
        page.wait_for_selector("text=Upload Document", timeout=10000)
        print("Page loaded successfully.")
    except Exception as e:
        print(f"Error waiting for selector: {e}")
        # Take a screenshot anyway to see what's wrong
        page.screenshot(path="verification/error_screenshot.png")
        browser.close()
        return

    # Take screenshot
    page.screenshot(path="verification/documents_admin.png")
    print("Screenshot saved to verification/documents_admin.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
