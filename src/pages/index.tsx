import { type NextPage, type GetServerSideProps } from "next/types"
import { trpc } from "src/utils/trpc"
import "twin.macro"

type SSProps = { foo: string }

export const getServerSideProps: GetServerSideProps<SSProps> = async () => {
  return {
    props: { foo: "bar" },
  }
}

const Index: NextPage<SSProps> = ({ foo }) => {
  const { data: name } = trpc.example.useQuery()

  return (
    <div tw="grid [height: 100vh] [width: 100vw] bg-[#0a2461]">
      <div tw="m-auto font-luckiestGuy text-3xl text-[#fffaff]">
        {!name ? `${foo} loading...` : `Hi there, ${name}`}
      </div>
    </div>
  )
}

export default Index
