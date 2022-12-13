import "src/styles/reset.css"
import "src/styles/tailwind.css"
import "src/styles/globals.scss"
import { type AppProps, type AppType } from "next/app"
import { trpc } from "src/utils/trpc/trpc-next"
import Head from "next/head"

const App: AppType = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <Head>
        <meta />
      </Head>

      <Component
        {...pageProps}
        key={router.asPath}
      />
    </>
  )
}

export default trpc.withTRPC(App)
