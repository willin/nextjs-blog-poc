import { useMDXComponent } from 'next-contentlayer/hooks';
import Head from 'next/head';
import Link from 'next/link';
import { allPosts } from '.contentlayer/data';
import type { Post } from '.contentlayer/types';
import { Locales } from '../../../i18n';

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

const langs = Locales.map((l) => l[0]);

export function getStaticPaths() {
  const paths = [];
  for (let i = 0; i < allPosts.length; i += 1) {
    const p = allPosts[i];
    paths.push(...langs.map((l) => ({ params: { slug: p.slug }, locale: l })));
  }
  return {
    paths,
    fallback: false
  };
}

export function getStaticProps({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);

  return { props: { post } };
}
