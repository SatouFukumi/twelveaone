import NextApp from "next/app"
import { trpc } from "src/backend/api/trpc"
import { Tooltip } from "assets/components/tooltip"

// stylesheets
import "assets/styles/main.scss"
import "src/styles/globals.scss"
import layout from 'src/styles/layout.module.scss'
import Container from "components/app/container"
import Ruler from "components/app/ruler"
import Navigation from "components/app/navigation"

class App extends NextApp {
    render(): JSX.Element {
        const { Component, pageProps } = this.props

        return (
            <section id={layout.app}>
                {/* helpers */}
                <Tooltip />

                {/* main content */}
                <Ruler id={layout.ruler} />
                <Navigation id={layout.navigation} />
                <Container id={layout.container}>
                    <Component {...pageProps} />
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
