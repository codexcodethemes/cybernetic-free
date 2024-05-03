const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");

const date = new Date().toISOString();
// An array with your links
const links = [
    { url: "/", changefreq: "daily", lastmod: date, priority: 1 },
    { url: "/infinite", changefreq: "monthly", lastmod: date, priority: 0.7 },
    {
        url: "/contact",
        changefreq: "monthly",
        lastmod: date,
        priority: 0.5,
    },
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: "https://www.CHANGEME.com" });

// Return a promise that resolves with your XML string
return streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
    const sitemap = data.toString();
    fs.writeFileSync("./dist/sitemap.xml", sitemap);
});
