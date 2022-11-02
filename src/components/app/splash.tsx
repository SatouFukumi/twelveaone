import Image from "next/image"
import styles from "src/styles/splash.module.scss"
import useSplashScreen from "./use-splash-screen"

const Splash: React.FC = () => {
    const { show } = useSplashScreen()

    return (
        <div
            id={styles.splash}
            data-show={show}
        >
            <div className={styles.logo}>
                <Image
                    alt=""
                    fill
                    src={require("public/icons/favicon.ico")}
                    blurDataURL={require("public/icons/favicon.ico")}
                    sizes="auto"
                />
            </div>
            <span className={styles.title}>12A1 Fanpage</span>

            <div className={styles.loadingBar}>
                <div className={styles.loadingThumb} />
            </div>

            <div>
                <svg
                    className={styles.waves}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28"
                    preserveAspectRatio="none"
                    shapeRendering="auto"
                >
                    <defs>
                        <path
                            id="gentle-wave"
                            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                        />
                    </defs>
                    <g className={styles.parallax}>
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="0"
                            fill="rgba(255,255,255,0.7)"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="3"
                            fill="rgba(255,255,255,0.5)"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="5"
                            fill="rgba(255,255,255,0.3)"
                        />
                        <use
                            xlinkHref="#gentle-wave"
                            x="48"
                            y="7"
                            fill="#fff"
                        />
                    </g>
                </svg>
            </div>
        </div>
    )
}

export default Splash
