import { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = {
    pruducts: [
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
        <p>Hello World!.</p>
      </div>
    )
  }
}

export default App
