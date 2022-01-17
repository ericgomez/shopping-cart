import { Component } from 'react'

class Product extends Component {
  render () {
    const { product, addCartItem } = this.props

    console.log(this.props)
    return (
      <div>
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    )
  }
}

export default Product
