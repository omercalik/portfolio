import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link rel="icon" href="https://omerberkancalik.com/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
            rel="stylesheet preload prefetch"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap"
            rel="stylesheet preload prefetch"
            as="style"
            onload="this.onload=null;this.rel='stylesheet'"
          />
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
