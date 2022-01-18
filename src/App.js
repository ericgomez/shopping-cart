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
    ],
    isCartVisible: false
  }

  addCartItem = product => {
    const { cart } = this.state

    // search product
    if (cart.find(item => item.name === product.name)) {
      // update quantity
      const newCart = cart.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      return this.setState({ cart: newCart })
    }

    // if not found, add new product
    const newCart = [...cart, { ...product, quantity: 1 }]
    return this.setState({ cart: newCart })
  }

  showCart = () => {
    if (this.state.cart.length === 0) return

    this.setState({ isCartVisible: !this.state.isCartVisible })
  }

  render () {
    const { isCartVisible } = this.state

    return (
      <div>
        <Navbar
          cart={this.state.cart}
          isCartVisible={isCartVisible}
          showCart={this.showCart}
        />
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
