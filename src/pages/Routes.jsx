import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wallet from './Wallet';
import Login from './Login';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ Login } />
      </Switch>
    );
  }
}

export default Routes;
