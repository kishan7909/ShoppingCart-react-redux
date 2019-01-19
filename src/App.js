import React from 'react';
import ShoppingApp from './ShoppingApp'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {connect} from 'react-redux'

import AddCart from './components/AddCart';

function App (props){

    return (
      <Router>
      <div>
      <h1 className="text-center">Shopping App</h1>
      <nav className="breadcrumb">
            <div className="ml-auto mr-auto">
            <Link className="breadcrumb-item" to="/">Home</Link>
            <Link className="breadcrumb-item" to="/about">About</Link>
            <Link className="breadcrumb-item" to="/cart"><span className="badge badge-danger mr-2">{props.cart.length}</span>Add To cart</Link>
            </div>
      </nav>

      <Route path="/" exact true component={ShoppingApp} />
      <Route path="/cart" component={AddCart} />

      </div>

      </Router>
    );
  }


function mapStateToProps(state){
  return {
      items : state.items,
      cart : state.cart
  }
}

export default connect(mapStateToProps)(App);
