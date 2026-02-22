from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        try:
            print("Navigating to maintenance page...")
            page.goto("http://localhost:3000/#/maintenance")

            # Wait for the page to load
            page.wait_for_selector("h1:has-text('MAINTENANCE')")

            # Fill out the form using get_by_label to verify accessibility
            print("Filling form using get_by_label...")
            page.get_by_label("Block/Location").select_option("BLOCK A")
            page.get_by_label("Urgency").select_option("NORMAL")
            page.get_by_label("Nature of Issue").fill("Test Issue")
            page.get_by_label("Detailed Description").fill("This is a test description.")

            # Take a screenshot of filled form
            page.screenshot(path="verification/maintenance_form_filled.png")
            print("Form filled screenshot taken.")

            # Click submit
            print("Submitting form...")
            submit_button = page.get_by_role("button", name="SUBMIT REPORT")
            submit_button.click()

            # Wait for result (likely an error since backend isn't real)
            alert = page.locator("[role='alert']")
            alert.wait_for()

            # Check aria-live attribute
            aria_live = alert.get_attribute("aria-live")
            print(f"Alert found with aria-live='{aria_live}'")

            page.screenshot(path="verification/maintenance_result.png")
            print("Result screenshot taken.")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification/error.png")
            raise e
        finally:
            browser.close()

if __name__ == "__main__":
    run()
