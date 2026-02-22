import os
import sys
from playwright.sync_api import sync_playwright

def verify_auth_protection():
    with sync_playwright() as p:
        # Launch browser
        browser = p.chromium.launch(headless=True)
        context = browser.new_context()
        page = context.new_page()

        # Navigate to Admin Dashboard (should redirect to Login)
        print("Navigating to /#/admin...")
        try:
            page.goto("http://localhost:3000/#/admin", timeout=10000)
            page.wait_for_load_state("networkidle")

            # Check URL - should be /login or /#/login
            url = page.url
            print(f"Current URL: {url}")

            if "login" in url.lower():
                print("SUCCESS: Redirected to Login page.")
            else:
                print(f"FAILURE: Did not redirect to Login. stayed at {url}")
                # Check if we are seeing dashboard content
                if page.locator("text=Dashboard").count() > 0:
                    print("FAILURE: Dashboard content visible without login!")
                    sys.exit(1)
                else:
                    print("WARNING: Not on dashboard, but URL is strange.")

            # Check for Login form elements
            if page.locator("input[type='email']").count() > 0 and page.locator("input[type='password']").count() > 0:
                 print("SUCCESS: Login form fields present.")
            else:
                 print("FAILURE: Login form fields missing.")
                 sys.exit(1)

        except Exception as e:
            print(f"Error: {e}")
            sys.exit(1)
        finally:
            browser.close()

if __name__ == "__main__":
    verify_auth_protection()
