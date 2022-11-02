// stylesheets
import "assets/styles/main.scss"
import "src/styles/globals.scss"
import layout from "src/styles/layout.module.scss"

import { Div, Tooltip } from "assets/components/tooltip"
import { StrictMode, useEffect } from "react"
import Container from "src/components/app/container"
import Ruler from "src/components/app/ruler"
import { AppType } from "next/app"
import { trpc } from "src/backend/api/trpc"
import { AnimatePresence } from "framer-motion"
import Splash from "src/components/app/splash"
import Navigation from "src/components/app/navigation"
import useSplashScreen from "src/components/app/use-splash-screen"

const App: AppType = ({ Component, pageProps, router }) => {
    const set = useSplashScreen((state) => state.set)

    useEffect(() => set(false), [set])

    return (
        <StrictMode>
            <section id={layout.app}>
                {/* splash */}
                <Splash />

                {/* helpers */}
                <Tooltip />

                {/* main content */}
                <Ruler id={layout.ruler} />
                <Navigation id={layout.navigation} />
                <Container id={layout.container}>
                    <AnimatePresence>
                        <Div
                            key={1}
                            tooltip="hi"
                            style={{ height: 200 }}
                            padding={false}
                        />
                        <Div
                            key={2}
                            tooltip="lorem5000000000000000000000000000000000"
                            style={{ height: 200 }}
                        />
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
