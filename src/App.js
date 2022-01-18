import { Component } from 'react'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Title from './components/Title'

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
    ],
    cart: [
      // {
      //   name: 'Carrot',
      //   price: 3.5,
      //   image: '/products/carrot.jpg',
      //   quantity: 1
      // }
    ]
  }

  addCartItem = product => {
    const { cart } = this.state
    const newCart = [...cart, { ...product, quantity: 1 }]

    return this.setState({ cart: newCart })
  }

  render () {
    console.log(this.state.cart)
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products
            addCartItem={this.addCartItem}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App
