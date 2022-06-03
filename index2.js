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
    // // Take a screen shot
    // await page.screenshot({path: "mywebsite.png"})

    const grabQuotes = await page.evaluate(() => {
        const quotes = document.querySelectorAll('.quote')
        console.log("quotes:", quotes);
        let quotesArr = []
        quotes.forEach((quoteTag) => {
            const quoteInfo = quoteTag.querySelectorAll('span')
            console.log("quoteInfo:", quoteInfo)
            const actualQuote = quoteInfo[0]
            console.log("actualQuote:", actualQuote)
            const actualAuthor = quoteInfo[1]
            console.log("actualAuthor:", actualAuthor)

            const authorName = actualAuthor.querySelector("small")
            console.log("authorName:", authorName)

            quotesArr.push({quote: actualQuote.innerText, author: authorName.innerText})
            // console.log("quotesArr:", quotesArr)
        })
        return quotesArr
    })

    console.log("grabQuotes:", grabQuotes);
    // Close browser once this is all finished
    // await browser.close()
})();
