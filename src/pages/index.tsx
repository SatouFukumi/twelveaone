import type { NextPage } from "next"
import { trpc } from "src/utils/trpc"
import "twin.macro"

const Index: NextPage = () => {
  const { data, isLoading } = trpc.test.useQuery()

  if (isLoading || !data) return <>Loading...</>

  return (
    <div tw="text-2xl text-black font-luckiestGuy">
      Hello from index - {data}
    </div>
  )
}

export default Index
