import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders';

class App extends Component {
  render () {
    return (
      <div>
        <Switch>
          <Layout>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/orders" component={Orders}></Route>
            <Route path="/" exact component={BurgerBuilder}/>
          </Layout>
        </Switch>
      </div>
    );
  }
}

export default App;
