import Link from 'next/link';
import { useRouter } from 'next/router';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';

export default function BlogPage({ posts }: { posts: Post[] }) {
  const { locale } = useRouter();

  return (
    <main>
      <h1>Blog</h1>
      <Link href='/'>Back</Link>
      {posts.map((post) => (
        <article key={post.slug}>
          <h2>
            <Link href={`/blog/${post.slug}`} locale={locale}>
              {post.title}
            </Link>
          </h2>
          <time>{post.date}</time>
        </article>
      ))}
    </main>
  );
}

export function getStaticProps() {
  const posts = allPosts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return {
    props: {
      posts
    }
  };
}
