import { memo } from "react"

const Container: React.FC<LayoutProps> = ({ id, children }) => {
    return <div id={id}>{children}</div>
}

export default memo(Container)
