import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Layout from './hoc/Layout/Layout';
import RegionPicker from './containers/RegionPicker/RegionPicker';
import Comparison from './containers/Comparison/Comparison';
import Details from './containers/Details/Details';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/comparison' component={Comparison} />
            <Route path='/details' component={Details} />
            <Route path='/logout' exact component={Logout} />
            <Route path='/auth' component={Auth} />
            <Route path='/' component={RegionPicker} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default connect(null, mapDispatchToProps)(App);
