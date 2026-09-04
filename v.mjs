import { chromium } from 'playwright';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', proxy: { server: process.env.HTTPS_PROXY } });
const out = '/tmp/claude-0/-home-user-nomad-vibe/f95ba3b1-b09d-5e7e-893c-cec9f2c1dc78/scratchpad';
const ctx = await b.newContext({ viewport: { width: 1440, height: 950 }, ignoreHTTPSErrors: true, deviceScaleFactor: 1.5 });
const p = await ctx.newPage();
await p.goto('file:///home/user/nomad-vibe/nancy-torrealba/index.html');
await p.waitForLoadState('networkidle').catch(() => {});
await p.evaluate(async () => { await document.fonts.ready; await Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))); document.querySelectorAll('.revelar').forEach(e=>e.classList.add('visible')); });
await p.waitForTimeout(500);
await p.screenshot({ path: `${out}/o-portada.png` });
await p.locator('#contacto').screenshot({ path: `${out}/o-contacto.png` });
// foco visible
await p.keyboard.press('Tab');
await p.screenshot({ path: `${out}/o-foco.png`, clip: { x: 400, y: 0, width: 640, height: 120 } });
console.log('overflow:', await p.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1));
await b.close();
