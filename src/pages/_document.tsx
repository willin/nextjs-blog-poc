import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document<{ locale?: string }> {
  render() {
    return (
      <Html lang={this.props.locale}>
        <Head />
        <body className='text-black dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
