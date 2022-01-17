import { Component } from 'react'

const styles = {
  title: {
    marginBottom: '30px'
  }
}

class Title extends Component {
  render () {
    return (
      <header>
        <h1 style={styles.title}>Shopping Cart</h1>
      </header>
    )
  }
}

export default Title
