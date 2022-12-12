import type { NextPage } from "next"
import "twin.macro"

const Index: NextPage = () => {
  return (
    <div tw="grid [height: 100vh] [width: 100vw] bg-[#0a2461]">
      <div tw="m-auto font-luckiestGuy text-3xl text-[#fffaff]">Hi there!</div>
    </div>
  )
}

export default Index
