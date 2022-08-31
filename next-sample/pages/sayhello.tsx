import { useState, useEffect } from 'react'

function SayHello(){
  // 内部で状態を保つためuseStateを利用
  const [data, setData] = useState({ name: '' })
  // 外部のAPIにリクエストするのは副作用なのでuseEffect内で処理
  console.log('----')
  useEffect(() => {
    fetch('api/hello')
      .then((res) => res.json())
      .then((profile) => {
        setData(profile)
      })
  }, [])
  return <div>hello {data.name}</div>
}

export default SayHello
