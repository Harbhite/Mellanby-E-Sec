from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:3000/#/maintenance")

    # Wait for the page to load
    page.wait_for_selector("h1:has-text('MAINTENANCE')")

    # Verify labels work by filling inputs using get_by_label
    print("Filling form using get_by_label...")
    try:
        page.get_by_label("Block/Location").select_option("BLOCK B")
        page.get_by_label("Urgency").select_option("URGENT (24HR)")
        page.get_by_label("Nature of Issue").fill("Test Issue")
        page.get_by_label("Detailed Description").fill("Test Description")
        print("Successfully filled form using labels.")
    except Exception as e:
        print(f"Failed to fill form using labels: {e}")

    # Take a screenshot of the filled form
    page.screenshot(path="verification/filled_form.png")
    print("Screenshot saved to verification/filled_form.png")

    # Click Submit
    print("Clicking submit...")
    page.get_by_role("button", name="SUBMIT REPORT").click()

    # Wait for error message (since backend is likely missing)
    # The error message should have role="alert"
    try:
        error_locator = page.get_by_role("alert")
        error_locator.wait_for(state="visible", timeout=5000)
        print("Error message with role='alert' found.")
        page.screenshot(path="verification/error_message.png")
        print("Screenshot saved to verification/error_message.png")
    except Exception as e:
        print("Could not find alert role:", e)
        # Maybe it succeeded? Check for success message with alert role too.
        try:
            success_locator = page.get_by_role("alert").filter(has_text="Request Submitted Successfully")
            if success_locator.is_visible():
                print("Success message with role='alert' found.")
        except:
            pass

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
