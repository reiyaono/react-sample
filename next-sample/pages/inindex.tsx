import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import styled, { css } from 'styled-components'

type ButtonProps = {
  color: string
  backgroundColor: string
}

const H1 = styled.h1`
  color: red;
`

// span要素にスタイルを適用したコンポーネント
const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background: red;
  border-radius: 16px;
`

// color, background, border-colorはpropsから渡す
// const Button = styled.button<ButtonProps>`
//   color: ${(props) => props.color};
//   background: ${(props) => props.backgroundColor};
//   border: 2px solid ${(props) => props.color};

//   font-size: 2em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border-radius: 8px;
//   cursor: pointer;
// `

const redBox = css`
  padding: 0.25em 1em;
  border: 3px solid #ff0000;
  border-radius: 10px;
`

const font = css`
  color: #1e90ff;
  font-size: 2em;
`

const Button = styled.button`
  background: transparent;
  margin: 1em;
  cursor: pointer;

  ${redBox}
  ${font}
`
const Text = styled.p`
  font-weight: bold;

  ${font}
`

const BorderedText = styled(Text)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
`


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <H1>
          Welcome to Next.js
        </H1>
        <Badge>This is Badge</Badge>
        <div>
          <Button>
            Hello
          </Button>
          <Button>
            World
          </Button>
          <BorderedText>World</BorderedText>
          <Text as="a" href="/">
            Go to index
          </Text>
        </div>
      </main>
    </div>
  )
}

export default Home
