
from playwright.sync_api import sync_playwright
import time

def verify():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()

        print("Navigating to Events page...")
        try:
            page.goto("http://localhost:3000/#/events", wait_until="networkidle")
            time.sleep(3) # Extra wait for any React rendering

            # Check for Mock Event
            if page.is_visible("text=Annual Hall Dinner"):
                print("PASS: Found 'Annual Hall Dinner' on Events page.")
            else:
                print("FAIL: Did NOT find 'Annual Hall Dinner' on Events page.")
                page.screenshot(path="debug_events.png")

        except Exception as e:
            print(f"Error checking Events: {e}")

        print("Navigating to News page...")
        try:
            page.goto("http://localhost:3000/#/news", wait_until="networkidle")
            time.sleep(3)

            # Check for Mock News
            found_title = page.is_visible("text=New Solar Inverters")
            found_summary = page.is_visible("text=The Hall Management has completed")

            if found_title or found_summary:
                print("PASS: Found mock news on News page.")
            else:
                print("FAIL: Did NOT find mock news on News page.")
                page.screenshot(path="debug_news.png")

        except Exception as e:
            print(f"Error checking News: {e}")

        browser.close()

if __name__ == "__main__":
    verify()
