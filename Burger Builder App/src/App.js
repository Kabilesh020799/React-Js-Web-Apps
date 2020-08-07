import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent/asyncComponent'

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index'
import { connect } from 'react-redux';

const asyncCheckout = asyncComponent(()=>{
  return import ('./containers/Checkout/Checkout')
})

const asyncOrders = asyncComponent(()=>{
  return import ('./containers/Orders/Orders')
})

const asyncAuth = asyncComponent(()=>{
  return import ('./containers/Auth/Auth')
})

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignUp();
  }
  render () {
    let route = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to ="/"></Redirect>
      </Switch>
    )
    if(this.props.isAuthenticated) {
      route = (<Switch>
            <Route path="/checkout" component={asyncCheckout} />
            <Route path="/orders" component={asyncOrders} />
            <Route path="/logout" component={Logout}/>
            <Route path="/auth" component={asyncAuth} />
            <Route path="/" component={BurgerBuilder}/>
            <Redirect to ="/"></Redirect>
       </Switch>)
    }

    return (
      <div>
        <Layout>
          {route}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {isAuthenticated: state.auth.token !== null}
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignUp: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));
