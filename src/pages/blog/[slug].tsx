import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
import Link from 'next/link';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';

const components = {
  Head,
  Link
};

export default function PostPage({ post }: { post: Post }) {
  const Component = useMDXComponent(post.body.code);
  return (
    <article>
      <h1>{post.title}</h1>
      <Link href='/blog'>Back</Link>
      <Component components={components} />
    </article>
  );
}

export function getStaticPaths() {
  return {
    paths: allPosts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false
  };
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return { props: { post } };
}
