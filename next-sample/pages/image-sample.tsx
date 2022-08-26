import { NextPage } from 'next'
import Image from 'next/image'
import AnyaImage from '../public/images/anya.png'

const ImageSample: NextPage<void> = (props) => {
  return (
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      <img src="/images/anya.png" />
      <p>Imageコンポーネントで表示した場合</p>
      <Image src={AnyaImage} />
      <p>Imageで表示した場合は事前に描画エリアが確保されます</p>
    </div>
  )
}

export default ImageSample
