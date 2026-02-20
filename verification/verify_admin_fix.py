from playwright.sync_api import sync_playwright

def verify_admin_dashboard():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        # Navigate to the Admin Dashboard (HashRouter)
        url = "http://localhost:3000/#/admin/dashboard"
        print(f"Navigating to {url}...")
        try:
            page.goto(url, timeout=10000)

            # Wait for the specific "Dashboard" text to appear, indicating successful load
            # Using wait_for_selector with text content to be robust
            print("Waiting for dashboard content...")
            page.wait_for_selector("text=Dashboard", timeout=5000)

            # Additional check for some content that shouldn't be there if it was empty/broken
            content = page.content()
            if "Dashboard" in content:
                print("Dashboard text found.")
            else:
                print("Dashboard text NOT found.")

            # Take a screenshot
            screenshot_path = "verification/admin_dashboard_verified.png"
            page.screenshot(path=screenshot_path)
            print(f"Screenshot saved to {screenshot_path}")

        except Exception as e:
            print(f"Verification failed: {e}")
            browser.close()
            exit(1)

        browser.close()

if __name__ == "__main__":
    verify_admin_dashboard()
