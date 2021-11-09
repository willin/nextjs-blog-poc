import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import yaml from 'js-yaml';
import { iPost } from '../types/post';

export const POST_PATH = path.join(process.cwd(), '_source/blog');
export const PAGE_PATH = path.join(process.cwd(), '_source/page');

export const postFilePaths = fs.readdirSync(POST_PATH).filter((path) => /\.mdx?$/.test(path));
export const pageFilePaths = fs.readdirSync(PAGE_PATH).filter((path) => /\.mdx?$/.test(path));

function getMDXContent(filePath: string): iPost {
  const source = fs.readFileSync(filePath);
  const { data, content } = matter(source, {
    engines: {
      yaml: (s) => yaml.load(s, { schema: yaml.JSON_SCHEMA }) as object
    }
  });
  const slug = filePath.replace(/^(.+)\/([^/]+)\.mdx?$/, '$2');
  return {
    ...data,
    slug,
    content
  } as any as iPost;
}

export function getPost(filePath: string): iPost {
  return getMDXContent(path.join(POST_PATH, filePath));
}

export function getPage(filePath: string): iPost {
  return getMDXContent(path.join(PAGE_PATH, filePath));
}
