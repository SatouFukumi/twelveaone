import NextDocument, { Main, NextScript, Head, Html } from "next/document"

export default class Document extends NextDocument {
    render(): JSX.Element {
        return (
            <Html lang='vi'>
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
