const userAgent = require('user-agents');
const puppeteer = require('puppeteer');
(async () => {
    for(i=0;i<3000;i++){
    const browser = await puppeteer.launch({executablePath:"/usr/lib/chromium-browser/chromium-browser", args:['--no-sandbox']});
    const page = await browser.newPage();
    await page.setUserAgent(userAgent.toString())
    await page.goto('https://codehs.com/sandbox/id/python-3-Qo0kCC')
    await page.waitForTimeout(2000)
    await page.mouse.click(580,125,{'button': 'left'})
    await page.waitForTimeout(15000)
    await page.mouse.click(625,125,{'button': 'left'})
    await page.waitForTimeout(500)
    await page.screenshot({'path': 'stop.png'})
    await page.waitForTimeout(1500)
    await page.mouse.click(580,125,{'button': 'left'})
    await page.waitForTimeout(1000)
    for(y=0;y<350;y++) {
        await page.mouse.click(580,400,{'button': 'left'})
        await page.keyboard.press('KeyH')
        await page.waitForTimeout(5000)
        await page.keyboard.press('KeyS')
        await page.waitForTimeout(5000)
        await page.keyboard.press('KeyH')
        await page.waitForTimeout(5000)
        console.log(`pimpo${i}${y}`)
    }
    await page.waitForTimeout(1000)
    await page.mouse.click(630,125,{'button': 'left'})
    await page.waitForTimeout(5000)
    await browser.close();
    }
})();
