import "src/styles/tailwind.css"
import "src/styles/globals.css"
import { type AppProps, type AppType } from "next/app"
import { trpc } from "src/utils/trpc"
import { AppHead } from "src/components/head"

const App: AppType = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <AppHead />
    
      <Component
        {...pageProps}
        key={router.asPath}
      />
    </>
  )
}

export default trpc.withTRPC(App)
