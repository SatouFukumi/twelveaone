import { type NextPage } from "next/types"
import "twin.macro"

const Index: NextPage = () => {
  return (
    <div tw="grid [height: 100vh] [width: 100vw] bg-[#0a2461]">
      <div tw="m-auto font-luckiestGuy text-3xl text-[#fffaff]">
        HELLO THERE!
      </div>
    </div>
  )
}

export default Index
