import { Component } from 'react'
import Product from './Product'

class Products extends Component {
  render () {
    const { products, addCartItem } = this.props

    return (
      <div>
        {products.map(product => (
          <Product
            addCartItem={addCartItem}
            key={product.name}
            product={product}
          />
        ))}
      </div>
    )
  }
}

export default Products
