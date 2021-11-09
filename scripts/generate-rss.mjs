import fs from 'fs';
import path from 'path';
import RSS from 'rss';
import matter from 'gray-matter';
import yaml from 'js-yaml';

const DOMAIN = process.env.DOMAIN || 'willin.wang';
const SITE_NAME = process.env.SITE_NAME || 'Willin Wang';
const POST_PATH = path.join(process.cwd(), '_source/blog');
const postFilePaths = fs.readdirSync(POST_PATH).filter((path) => /\.mdx?$/.test(path));

function generate() {
  const feed = new RSS({
    title: SITE_NAME,
    site_url: `https://${DOMAIN}`,
    feed_url: `https://${DOMAIN}/feed.xml`
  });

  postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POST_PATH, filePath));
    const slug = filePath.replace(/(\.mdx?)$/, '');
    const { data, content } = matter(source, {
      engines: {
        yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA })
      }
    });
    feed.item({
      title: data.title,
      url: `https://${DOMAIN}/blog/${slug}`,
      date: data.date,
      description: content
    });
  });
  fs.writeFileSync('./public/feed.xml', feed.xml({ indent: true }));
}

generate();
