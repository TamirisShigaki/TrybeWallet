import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Login';
import Wallet from './Wallet';

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
