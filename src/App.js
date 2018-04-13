import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';
import Layout from './hoc/Layout/Layout';
import RegionPicker from './containers/RegionPicker/RegionPicker';
import Comparison from './containers/Comparison/Comparison';
import Details from './containers/Details/Details';
import Auth from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout/Logout';
import Admin from './containers/Admin/Admin';
import * as actions from './store/actions';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {

    let routes = (
      <Switch>
        <Route path='/comparison' exact component={Comparison} />
        <Route path='/details' exact component={Details} />
        <Route path='/auth' exact component={Auth} />
        <Route path='/' exact component={RegionPicker} />
        <Redirect to='/' />
      </Switch>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/comparison' component={Comparison} />
          <Route path='/details' component={Details} />
          <Route path='/logout' exact component={Logout} />
          <Route path='/admin' exact component={Admin} />
          <Route path='/auth' component={Auth} />
          <Route path='/' component={RegionPicker} />
        </Switch>
      );
    }

    return (
      <div className="App">
        <Layout>
          {routes}
        </Layout>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
