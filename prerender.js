import puppeteer from 'puppeteer'
import fs from 'fs'
import path from 'path'

const routes = [
    '/',
    '/about',
    '/services',
    '/projects',
    '/drones',
    '/contact',
    '/impressum',
    '/datenschutz',
]

const baseUrl = 'http://localhost:4000'
const distPath = './dist'

const run = async () => {
    const browser = await puppeteer.launch()

    for (const route of routes) {
        const page = await browser.newPage()
        await page.goto(baseUrl + route, { waitUntil: 'networkidle0' })

        const html = await page.content()

        const filePath =
            route === '/'
                ? `${distPath}/index.html`
                : `${distPath}${route}/index.html`

        fs.mkdirSync(path.dirname(filePath), { recursive: true })
        fs.writeFileSync(filePath, html)

        console.log(`✔ prerendered ${route}`)
    }

    await browser.close()
}

run()