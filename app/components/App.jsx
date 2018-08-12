import React, { Component } from 'react'

import Products from '../containers/products'
import ShoppingCart from '../containers/shoppingCart'

export default class App extends Component {
  render(){
    return (
      <div>
        <p>Welcome to our shop!</p>
        <Products />
        <ShoppingCart />
      </div>
    )
  }
}
