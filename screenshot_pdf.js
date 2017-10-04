const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://marion.neocodesoftware.com/fmi/webd/FMServer_Sample', {networkIdleTimeout: 10000, waitUntil: 'networkidle'});
  await page.pdf({path: 'webd_ss.pdf', format: 'A4'});

  await browser.close();
})();