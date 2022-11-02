import Link from "next/link"
import { memo } from "react"

const Navigation: React.FC<LayoutProps> = ({ id }) => {
    return (
        <nav
            id={id}
            role="navigation"
        >
            <Link href='/'>home</Link>
            <Link href="/members">members</Link>
        </nav>
    )
}

export default memo(Navigation)
