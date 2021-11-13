import fs from 'fs';
import RSS from 'rss';
import { allPosts } from '.contentlayer/data';

const DOMAIN = process.env.DOMAIN || 'willin.wang';
const SITE_NAME = process.env.SITE_NAME || 'Willin Wang';

function generate() {
  const feed = new RSS({
    title: SITE_NAME,
    site_url: `https://${DOMAIN}`,
    feed_url: `https://${DOMAIN}/feed.xml`
  });
  allPosts.map((post) => {
    feed.item({
      title: post.title,
      url: `https://${DOMAIN}/blog/${post.slug}`,
      date: post.date,
      description: 'post.summary'
    });
  });
  fs.writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
