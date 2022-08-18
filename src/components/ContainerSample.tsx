const Container = (props: { title: string; children: React.ReactElement} ) => {
  const { title, children } = props

  return (
    <div style={{ background: 'red' }}>
      <span>{ title }</span>
      <div>{ children }aaa</div>
    </div>
  )
}

const Parent = () => {
  return (
    <Container title="Hello">
      <p>ここの部分が背景色が囲まれます</p>
    </Container>
  )
}

export default Parent
