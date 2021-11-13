import { ComputedFields, defineDocumentType, makeSource } from 'contentlayer/source-files';

const computedFields: ComputedFields = {
  // readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
  wordCount: {
    type: 'number',
    // eslint-disable-next-line
    resolve: (doc) => doc.body.raw.split(/\s+/gu).length
  },
  slug: { type: 'string', resolve: (_) => _._raw.flattenedPath.replace('blog/', '') }

  // slug: {
  //   type: 'string',
  //   resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
  // }
};

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'blog/*.mdx',
  bodyType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true }
  },
  computedFields
}));

const contentLayerConfig = makeSource({
  contentDirPath: '_source',
  documentTypes: [Post]
  // mdx: {
  //   remarkPlugins: [remarkGfm],
  //   rehypePlugins: [
  //     rehypeSlug,
  //     rehypeCodeTitles,
  //     rehypePrism,
  //     [
  //       rehypeAutolinkHeadings,
  //       {
  //         properties: {
  //           className: ['anchor']
  //         }
  //       }
  //     ]
  //   ]
  // }
});

export default contentLayerConfig;

// import { defineDocumentType, makeSource } from 'contentlayer/source-files';

// const Doc = defineDocumentType(() => ({
//   name: 'Doc',
//   filePathPattern: '**/*.mdx',
//   bodyType: 'mdx',
//   fields: {
//     title: { type: 'string', required: true }
//   }
// }));

// export default makeSource({
//   contentDirPath: 'content',
//   documentTypes: [Doc]
// });

// import { defineDocumentType, makeSource } from 'contentlayer/source-files'
// import highlight from 'rehype-highlight'

// export const Post = defineDocumentType(() => ({
//   name: 'Post',
//   fields: {
//     title: {
//       type: 'string',
//       description: 'The title of the post',
//       required: true,
//     },
//     date: {
//       type: 'date',
//       description: 'The date of the post',
//       required: true,
//     },
//   },
// }))

// export default makeSource({
//   contentDirPath: 'posts',
//   documentTypes: [Post],
//   markdown: { rehypePlugins: [highlight] },
// })
