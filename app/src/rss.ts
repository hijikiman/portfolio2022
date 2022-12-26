import fs from 'fs-extra'
import Parser from 'rss-parser'

type FeedItem = {
    title: string
    link: string
    contentSnippet?: string
    isoDate?: string
}

const parser = new Parser()
async function fetchFeedItems(url: string) {
    const feed = await parser.parseURL(url)
    if (!feed?.items?.length) return []

    return feed.items.map(({ title, link, contentSnippet, isoDate }) => ({
        title,
        link,
        contentSnippet,
        isoDate,
    })) as FeedItem[]
}

;(async function () {
    const posts = await fetchFeedItems('https://konseki.hokora.jp/index.xml')
    fs.ensureDirSync('.feed')
    fs.writeJsonSync('.feed/posts.json', posts)
})()
