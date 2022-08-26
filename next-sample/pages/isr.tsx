import { GetStaticPaths, NextPage, GetStaticProps } from "next";
import Link from 'next/link'
import Head from 'next/head'
import Router, { useRouter } from 'next/router'

type ISRProps = {
  message: string
}


const ISR: NextPage <ISRProps> = (props) => {
  const { message } = props
  const router = useRouter()
  const onClick = () => {
    // /ssrへ遷移する
    router.push('/ssr')

    router.push({
      pathname: '/ssg',
      query: { keyword: 'hello' }
    })
  }

  if (router.isFallback) {
    return <div>Loading....</div>
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>このページはISRによってビルド時に生成されたページです。</p>
        <p> { message }</p>
        <Link href="/ssr?keyword=next">
          <a>Go To SSR</a>
        </Link>
        <br />
        <Link
          href={{
            pathname: '/ssg',
            query: { keyword: 'hello' }
          }}>
            <a>GO TO SSG</a>
        </Link>
        <button onClick={onClick}>go to ssg</button>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にこのページのgetStaticPropsが実行されました`

  return {
    props: {
      message
    },
    // ページの有効期限を秒単位で指定
    revalidate: 60
  }
}

export default ISR
