import { NextPage } from "next"
import { useRouter } from "next/router"

const Member: NextPage = () => {
    const router = useRouter()
    const { member } = router.query
    
    return <>{member}</>
}

export default Member
