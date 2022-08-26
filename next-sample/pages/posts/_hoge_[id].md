import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import { useRouter } from 'next/router'
import { isContext } from "vm";

type PostProps = {
  id: string
}

const Post: NextPage<PostProps> = (props) => {
  const { id } = props
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページは静的サイト生成によってビルド時に生成されたページです</p>
        <p>{ `/posts/${id}に対応するページです`}</p>
      </main>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths: GetStaticPaths = async () => {
  const paths = [
    {
      params: {
        id: '1'
      }
    },
    {
      params: {
        id: '2'
      }
    },
    {
      params: {
        id: '3'
      }
    },
  ]

  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<PostProps> = async (content) => {
  const id = Array.isArray(content.params[id]) ? isContext.params['id'][0] : isContext.params['id']

  return {
    props: {
      id
    }
  }
}

export default getStaticProps
