import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from 'services/auth'
import Profile from 'pages/Profile'
import List from 'pages/PrivateList'
import Login from 'pages/Login'

/* eslint-disable */
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (<Redirect to={{ pathname: '/', state: { from: props.location } }} />)}
  />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/lista' component={List} />
            <PrivateRoute path='/new' component={Profile} />
            <Route path='*' component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes