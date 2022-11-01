import NextDocument, { Head, Html, Main, NextScript } from "next/document"

export default class Document extends NextDocument {
    render(): JSX.Element {
        return (
            <Html lang="vi">
                <Head>
                    <meta charSet="utf-8" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
