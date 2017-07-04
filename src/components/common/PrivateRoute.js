/**
 * 认证路由组件
 * Usage:
 * <PrivateRoute path="/protected" component={ProtectedComponet}/>
 */

import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

class PrivateRoute extends React.Component {
  render () {
    const { component: Component, isAuthenticated, ...rest } = this.props

    return (
      <Route {...rest} render={props => (
        isAuthenticated ? (
          <Component {...props}/>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }}/>
        )
      )} />
    )
  }
}

function mapStateToProps (state) {
  return {
    isAuthenticated: state.get('auth').get('isAuthenticated')
  }
}

export default connect(mapStateToProps)(PrivateRoute)
