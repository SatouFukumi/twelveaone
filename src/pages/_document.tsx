import { Main, NextScript, Head, Html } from "next/document"

const Document = () => {
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

export default Document
