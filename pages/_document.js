import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="http://omerberkancalik.com/favicon2.ico" />
          <meta name="theme-color" content="black" />
        </Head>

        {/* <Head /> */}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
