import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Products from './components/Products/Products'

class App extends Component{
  state = {
    products: [
      { id: 1,total: 0},
      { id: 2,total: 0},
      { id: 3,total: 0},
      { id: 4,total: 0},
    ]
  }
  clickIncrement = (id) => {
    let prodIndex = this.state.products.findIndex(prod => prod.id === id)
    let updatedState = [
      ...this.state.products,
      Object.assign(this.state.products[prodIndex],{id: this.state.products[prodIndex].id,
        total: this.state.products[prodIndex].total + 1})
    ]
    updatedState.splice(this.state.products.length,1);
    this.setState({products: updatedState})
  }

  clickDelete = (id) => {
    let prodIndex = this.state.products.findIndex(prod => prod.id === id)
    let updatedProds = this.state.products.filter(prod => prod.id !== id)
    this.setState({products: updatedProds})
  }

  render() {
    let sum = 0;
    this.state.products.map(prod => sum = sum + +prod.total);
    return (
      <div className="App">
        <Header total={sum}/>
        <Products products = {this.state.products} clickIncrement={this.clickIncrement} clickDelete={this.clickDelete}/>
      </div>      
    )
  }
}
export default App;
