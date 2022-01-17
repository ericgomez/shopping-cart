import { Component } from 'react'
import Products from './components/Products'
import Layout from './components/Layout'

class App extends Component {
  state = {
    products: [
      {
        name: 'Tomato',
        price: 1.5,
        image: '/products/tomato.jpg'
      },
      {
        name: 'Potato',
        price: 2.5,
        image: '/products/potato.jpg'
      },
      {
        name: 'Carrot',
        price: 3.5,
        image: '/products/carrot.jpg'
      }
    ]
  }
  render () {
    return (
      <div>
        <Layout>
          <Products
            addCartItem={() => {
              console.log('add cart')
            }}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App
