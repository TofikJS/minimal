import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(contex){
    return rss({
        title: 'Astro Learner | Blog',
        description: 'My journey learning Astro',
        site: contex.site,
        items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
        customData: `<language>en-us</language>`,
    })
}