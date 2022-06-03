// const puppeteer = require("puppeteer")
import puppeteer from "puppeteer";

// anon function
(async () => {
    // Open a browser visible to a user (rather than headless):
    const browser = await puppeteer.launch({ headless: false });
    // Open a tab/page:
    const page = await browser.newPage()
    // Go to a website:
    await page.goto("https://james-boyette.com")
    // // Take a screen shot
    // await page.screenshot({path: "mywebsite.png"})

    const grabText = await page.evaluate(() => {
        const sectionId = document.querySelector("#bannerDope h2")
        // Note: if the class etc has a white space, you need to insert a '.' instead:
        // ".col-lg-6   intro-content" => ".col-lg-6.intro-content"

        // Return 'James M Boyette':
        // return sectionId.innerHTML;
        // returns ...
        // James <span style="opacity: 0%;">
        // </span> M <span style="opacity: 0%;">
        // </span> Boyette

        return sectionId.innerText;
    })
    console.log("grabText:", grabText);

  
    
    const grabLangs = await page.evaluate(() => {
        const sectionId = document.querySelector("#languages.after() div")

        const techTags = document.querySelectorAll(".row.back-end ul li")

        return sectionId.innerText;
    })
    console.log("grabLangs:", grabLangs);

    // Close browser once this is all finished
    await browser.close()
})();
