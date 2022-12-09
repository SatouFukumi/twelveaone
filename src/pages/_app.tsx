import "src/styles/globals.css"
import NextApp, { type AppProps } from "next/app"
import { trpc } from "src/utils/trpc"

class App extends NextApp<AppProps> {
  render() {
    const { Component, pageProps, router } = this.props

    return (
      <Component
        {...pageProps}
        key={router.asPath}
      />
    )
  }
}

export default trpc.withTRPC(App)
