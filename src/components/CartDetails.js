import { Component } from 'react'

const styles = {
  cartDetails: {
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: '5px',
    marginTop: '30px',
    boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
    width: '300px',
    right: '50px'
  },
  ul: {
    margin: 0,
    padding: 0
  },
  product: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '25px 20px',
    borderBottom: '1px solid #aaa'
  }
}
class CartDetails extends Component {
  render () {
    const { cart } = this.props

    return (
      <div>
        <div style={styles.cartDetails}>
          <ul style={styles.ul}>
            {cart.map(item => (
              <li style={styles.product} key={item.name}>
                <img src={item.image} alt={item.name} width='50' height='32' />
                {item.name}
                <span>{item.quantity}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CartDetails
