import type { NextPage } from "next"
import { trpc } from "src/utils/trpc"

const Index: NextPage = () => {
  const { data, isLoading } = trpc.test.useQuery()

  if (isLoading || !data) return <>Loading...</>

  return (
    <div className="text-3xl text-black font-sans">Hello from index - {data}</div>
  )
}

export default Index
