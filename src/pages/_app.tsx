// stylesheets
import "assets/styles/main.scss"
import "src/styles/globals.scss"
import layout from "src/styles/layout.module.scss"

import { Tooltip } from "assets/components/tooltip"
import { StrictMode } from "react"
import Container from "src/components/app/container"
import Navigation from "src/components/app/navigation"
import Ruler from "src/components/app/ruler"
import { AppType } from "next/app"
import { trpc } from "src/backend/api/trpc"
import { AnimatePresence } from "framer-motion"

const App: AppType = ({ Component, pageProps, router }) => {
    return (
        <StrictMode>
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
        </StrictMode>
    )
}

export default trpc.withTRPC(App)

declare global {
    interface LayoutProps {
        id: string
        children?: React.ReactNode | React.ReactNode[]
    }
}
