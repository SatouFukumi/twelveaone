import NextDocument, { Head, Html, Main, NextScript } from "next/document"
import { DocumentHead } from "src/components/head"
import SplashScreen from "src/components/splash-screen"

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="vi">
        <Head>
          <DocumentHead />
        </Head>

        <body style={{ display: 'block' }}>
          <SplashScreen />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
