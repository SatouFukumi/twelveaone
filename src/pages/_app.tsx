// stylesheets
import "assets/styles/main.scss"
import "src/styles/globals.scss"
import layout from "src/styles/layout.module.scss"

import { Tooltip } from "assets/components/tooltip"
import Container from "components/app/container"
import Navigation from "components/app/navigation"
import Ruler from "components/app/ruler"
import NextApp from "next/app"
import { trpc } from "src/backend/api/trpc"
import { AnimatePresence } from "framer-motion"

class App extends NextApp {
    render(): JSX.Element {
        const { Component, router, pageProps } = this.props

        return (
            <section id={layout.app}>
                {/* helpers */}
                <Tooltip />

                {/* main content */}
                <Ruler id={layout.ruler} />
                <Navigation id={layout.navigation} />
                <Container id={layout.container}>
                    <AnimatePresence>
                        <Component
                            key={router.asPath}
                            {...pageProps}
                        />
                    </AnimatePresence>
                </Container>
            </section>
        )
    }
}

export default trpc.withTRPC(App)

declare global {
    interface LayoutProps {
        id: string
        children?: React.ReactNode | React.ReactNode[]
    }
}
