import assert from 'assert'
import * as cheerio from 'cheerio'
import { Feed } from 'feed'

export async function GET(req: Request) {
  let siteUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!siteUrl) {
    throw Error('Missing NEXT_PUBLIC_SITE_URL environment variable')
  }

  let author = {
    name: 'Mission Resources Centre | MRC 宣教資源中心',
    email: 'info@misrescent.org',
  }

  let feed = new Feed({
    title: author.name,
    description:
      '這是主耶穌基督升天之前給祂教會的大使命。在維省近年華人教會不斷增長, 其中有不少的中小型教會願意推廣宣教事工，但縱使她們有一顆熱切的心,由於資源的限制，宣教對她們來說是一個很大的障礙。但是，如果眾教會能一起工作，便可以更容易結合資源和努力來實現大使命。Mission Resource Centre 宣教資源中心宗旨:​​ 聯繫維省內有宣教心志的教會。提供教會有一套簡潔而有效的宣教課程。通過課程讓各弟兄姊妹增加對宣教的認識和神學基礎。為有志參與宣教工作的門徒提供鼓勵和訓練。',
    author,
    id: siteUrl,
    link: siteUrl,
    image: `${siteUrl}/favicon.ico`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}`,
    feedLinks: {
      rss2: `${siteUrl}/feed.xml`,
    },
  })

  let articleIds = require
    .context('../articles', true, /\/page\.mdx$/)
    .keys()
    .filter((key) => key.startsWith('./'))
    .map((key) => key.slice(2).replace(/\/page\.mdx$/, ''))

  for (let id of articleIds) {
    let url = String(new URL(`/articles/${id}`, req.url))
    let html = await (await fetch(url)).text()
    let $ = cheerio.load(html)

    let publicUrl = `${siteUrl}/articles/${id}`
    let article = $('article').first()
    let title = article.find('h1').first().text()
    let date = article.find('time').first().attr('datetime')
    let content = article.find('[data-mdx-content]').first().html()

    assert(typeof title === 'string')
    assert(typeof date === 'string')
    assert(typeof content === 'string')

    feed.addItem({
      title,
      id: publicUrl,
      link: publicUrl,
      content,
      author: [author],
      contributor: [author],
      date: new Date(date),
    })
  }

  return new Response(feed.rss2(), {
    status: 200,
    headers: {
      'content-type': 'application/xml',
      'cache-control': 's-maxage=31556952',
    },
  })
}
