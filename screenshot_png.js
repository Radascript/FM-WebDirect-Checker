const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://marion.neocodesoftware.com/fmi/webd/FMServer_Sample', {networkIdleTimeout: 10000, waitUntil: 'networkidle'});
  await page.screenshot({path: 'webd.png'});

  await browser.close();
})();