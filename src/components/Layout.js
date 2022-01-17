import { Component } from 'react'

const styles = {
  layout: {
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#0a283e',
    display: 'flex',
    flexDirection: 'column'
  },
  container: {
    width: '1200px'
  }
}

class Layout extends Component {
  render () {
    return (
      <div style={styles.layout}>
        <header>
          <h1>React App</h1>
        </header>
        <main style={styles.container}>{this.props.children}</main>
      </div>
    )
  }
}

export default Layout
