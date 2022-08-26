// 型のために導入
import { NextPage, GetStaticProps, NextPageContext } from 'next'
// Next.jsの組み込みコンポーネント
import Head from 'next/head'

// ページコンポーネントのpropsの型定義(ここでは空)
type SSGProps = {
  message: string
}

// SSGはgetStaticPropsが返したpropsを受け取ることができる
// NextPage<SSGProps>はmessage: stringのみを受け取って生成されるページの型
const SSGS: NextPage<SSGProps> = (props) => {
  const { message } = props
  return (
    <div>
      <Head>
        <title>Static Site Generation</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main>
        <p>
          このページは静的サイト生成によってビルト時に作成されたページです
        </p>
        <p>{ message }</p>
      </main>
    </div>
  )
}

// getStaticPropsはビルド時に実行される
// GetStaticProps<SSGProps>はSSGPropsに引数をとるgetStaticPropsの型
export const getStaticProps: GetStaticProps<SSGProps> = async (context) => {
  const timestamp = new Date().toLocaleString()
  const message = `${timestamp}にgetStaticPropsが実行されました`
  console.log(message)
  return {
    // ここで返したpropsを元にページコンポーネントを描画する
    props: {
      message
    }
  }
}

export default SSGS
