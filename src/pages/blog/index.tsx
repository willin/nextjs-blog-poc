import Link from 'next/link';
import { postFilePaths, getPost } from '../../lib/filesystem';
import { iPost } from '../../types/post';

export default function BlogPage({ posts }: { posts: iPost[] }) {
  return (
    <main>
      <h1>Blog</h1>
      {posts.map((post) => (
        <article key={post.slug}>
          <h2>
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <time>{post.date}</time>
        </article>
      ))}
    </main>
  );
}

export function getStaticProps() {
  const posts = postFilePaths
    .map((filePath) => getPost(filePath))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return {
    props: {
      posts
    }
  };
}
