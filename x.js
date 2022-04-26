const userAgent = require('user-agents');
const puppeteer = require('puppeteer');
(async () => {
    for(i=0;i<3000;i++){
   const browser = await puppeteer.launch({executablePath:"/usr/lib/chromium-browser/chromium-browser", args:['--no-sandbox']});
    
    const page = await browser.newPage();
    await page.setUserAgent(userAgent.toString())
    await page.goto('https://codehs.com/sandbox/id/python-3-Bwiokn')
    await page.waitForTimeout(2000)
    await page.mouse.click(580,125,{'button': 'left'})
    await page.waitForTimeout(1000)
    await page.mouse.click(580,400,{'button': 'left'})
    for(y=0;y<450;y++) {
        await page.keyboard.press('KeyH')
        await page.waitForTimeout(2000)
        await page.keyboard.press('KeyS')
        await page.waitForTimeout(2000)
        await page.keyboard.press('KeyH')
        await page.waitForTimeout(2000)
        console.log(`a${i}${y}`)
    }
    await page.waitForTimeout(1000)
    await page.mouse.click(630,125,{'button': 'left'})
    await page.waitForTimeout(5000)
    await browser.close();
    }
})();
