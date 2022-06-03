// Bot Interactions

// const puppeteer = require("puppeteer")
import puppeteer from "puppeteer";

// anon function
(async () => {
    // Open a browser visible to a user (rather than headless):
    const browser = await puppeteer.launch({ headless: false });
    // Open a tab/page:
    const page = await browser.newPage()
    // Go to a website:
    await page.goto("https://quotes.toscrape.com")

    // Click the 'log-in' button on the homepage:
    await page.click('a[href="/login"]')

    // Enter UN & PW + set a delay for each character entry of 1 Sec's (so it looks like a real person is entering the data ... sometimes helps thwart website detection of bots):
    await page.type("#username", "sou7hernsaint", {delay: 100})
    await page.type("#password", "pw1234")

    await page.click('input[value="Login"]')

    console.log("logIn:");
    // Close browser once this is all finished
    // await browser.close()
})();
