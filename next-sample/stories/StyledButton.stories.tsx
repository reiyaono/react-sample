import React, { useState } from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { StyledButton } from '../components/StyledButton'
import { action } from '@storybook/addon-actions'
// TODO: docsが表示されないので調査が必要
import MDXDocument from './StyledButton.mdx'

 const incrementAction = action('increment')

// ファイル内のStory設定
export default {
  // グループ名
  title: 'StyledButton',
  // 使用するコンポーネント
  component: StyledButton,
  argTypes: {
    variant: {
      control: { style: 'radio' },
      options: ['primary', 'success', 'transparent'],
      onClick: {action: 'clicked' 
    },
    children: {
      control: { type: 'text' }
    }
  }},
  parameters: {
    docs: {
      page: MDXDocument
    }
  }
} as ComponentMeta<typeof StyledButton>

// テンプレートコンポーネントを実装
//Storybookから渡されたpropsをそのままButtonに渡す
const Template: ComponentStory<typeof StyledButton> = (args) => <StyledButton { ...args } />

export const TemplateTest = Template.bind({})

TemplateTest.args = {
  variant: 'primary',
  children: 'Primary'
}

export const Primary = (props: any) => {
  const [count, setCount] = useState(0)
  const onClick = (e: React.MouseEvent) => {
    incrementAction(e, count)
    setCount((c) => c + 1)
  }
  return (
    <StyledButton { ...props } variant="primary" onClick={onClick}>
      Count: {count}
    </StyledButton>
  )
}

export const Success = (props: any) => {
  return (
    <StyledButton {...props} variant="success">
      Success
    </StyledButton>
  )
}

export const Transparent = (props: any) => {
  return (
    <StyledButton { ...props } variant="transparent">
      Transparent
    </StyledButton>
  )
}