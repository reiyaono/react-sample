import { render, screen, RenderResult, fireEvent, act } from '@testing-library/react'
import { DelayInput } from './index'

// DelayInputコンポーネントに関するテスト
describe('DelayInput', () => {
  let renderResult: RenderResult
  let handleChange: jest.Mock

  beforeEach(() => {
    // モック関数を作成する
    handleChange = jest.fn()

    // モック関数をDelayButtonに渡して描画
    renderResult = render(<DelayInput onChange={handleChange}></DelayInput>)

    // タイマーをjestのものに置き換える
    jest.useFakeTimers()
  })

  afterEach(() => {
    renderResult.unmount()

    // タイマーを元のものに戻す
    jest.useFakeTimers()
  })

  // span要素のテキストが空であることをテスト
  it('should deplay empty in span on initial render', () => {
    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    // 初期表示は空
    expect(spanNode).toHaveTextContent('入力したテキスト:')
  })

  // 入力直後はspan要素が「入力中...」と表示するかテスト
  it('should display 「入力中...」 immediately after onChange event occurs', () => {
    const inputText = 'Text Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement
    
    //inputのonCHangeイベントを呼び出す
    fireEvent.change(inputNode, { target: {value: inputText } })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement

    // 入力中と表示するか確認
    expect(spanNode).toHaveTextContent('入力中...')
  })

  // 入力して一秒後にテキストが表示されるかテスト
  it('should display input text 1second after onChange event occurs', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    // inputのonChangeイベントを呼び出す
    fireEvent.change(inputNode, { target: { value: inputText }})

    // act関数内で実行することによりタイマーのコールバック中で起きる状態変更が反映されることを保証する
    // TODO:　調査
    await act(() => {
      // タイマーにセットされたtimeoutを全て実行する
      jest.runAllTimers()
    })

    const spanNode = screen.getByTestId('display-text') as HTMLSpanElement
    //　入力したテキストが表示されるか確認
    expect(spanNode).toHaveTextContent(`入力したテキスト: ${inputText}`)
  })

  // 入力して一秒後にonChangeが呼ばれるかテスト
  it('should call onChange 1second after onChange event occur', async () => {
    const inputText = 'Test Input Text'
    const inputNode = screen.getByTestId('input-text') as HTMLInputElement

    // inputのonChangeイベントを呼び出す
    fireEvent.change(inputNode, { target: { value: inputText }})

    // タイマーの実行
    await act(() => {
      jest.runAllTimers()
    })

    //モック関数を私呼ばれたか確認する
    expect(handleChange).toHaveBeenCalled()
  })
})