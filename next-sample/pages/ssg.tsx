// 型のために導入
import { NextPage } from 'next'
// Next.jsの組み込みコンポーネント
import Head from 'next/head'

// ページコンポーネントのpropsの型定義(ここでは空)
type SSGProps = {}

// SSG向けのページを実装
// NextPageはNext.jsのPages向けの型
// NextPage<props>でpropsが入るPageであることを明示
const SSG: NextPage<SSGProps> = () => {
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
      </main>
    </div>
  )
}

export default SSG
