import NextDocument, { Head, Html, Main, NextScript } from "next/document"
import SplashScreen from "src/components/splash-screen"

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="vi">
        <Head>
          <meta charSet="utf-8" />

          <link rel="shortcut icon" href="/icons/favicon.ico" />
        </Head>

        <body
          style={{
            display: "block",
            margin: 0,
            padding: 0,
            minWidth: "100vw",
            minHeight: "100vh",
          }}
        >
          <SplashScreen />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
