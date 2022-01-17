import { Component } from 'react'
import Products from './components/Products'

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
        <Products
          addCartItem={() => {
            console.log('add cart')
          }}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App
