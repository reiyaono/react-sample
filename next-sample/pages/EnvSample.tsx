// ERROR
import { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'

const EnvSample: NextPage = (props) => {
  // サーバーサイドで描画する際は'test1'と表示され、クライアントサイドで再描画するときはundefinedと表示される
  console.log('process.env.TEST', process.env.TEST)
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEST)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* サーバーサイド描画はtest1と表示され、クライアントサイドで再描画されると何も表示されない */}
        <p>{process.env.TEST}</p>
        {/* test2が表示される */}
        <p>{process.env.NEXT_PUBLIC_TEST}</p>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // test1が表示される
  console.log('process.env.TEST', process.env.TEST)
  //test2が表示される
  console.log('process.env.NEXT_PUBLIC_TEST', process.env.NEXT_PUBLIC_TEXT)

  return {
    props: {}
  }
}

export default EnvSample
