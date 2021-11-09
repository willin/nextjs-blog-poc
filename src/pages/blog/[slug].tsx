import Head from 'next/head';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { postFilePaths, getPost } from '../../lib/filesystem';
import { iPost } from '../../types/post';

const components = {
  Head,
  Link
};

export default function PostPage({ source, frontMatter }: { source: any; frontMatter: iPost }) {
  return (
    <article>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...source} components={components} />
    </article>
  );
}
export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const { content, ...data } = getPost(`${params.slug}.mdx`);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    },
    scope: data as any as Record<string, unknown>
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  };
};

export const getStaticPaths = () => {
  const paths = postFilePaths.map((path) => path.replace(/\.mdx?$/, '')).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false
  };
};
