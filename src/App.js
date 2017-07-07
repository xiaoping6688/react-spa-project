/**
 * 主类
 */

import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { RouteTransition } from 'react-router-transition' // you also can use presets of react-router-transition
import { CSSTransitionGroup } from 'react-transition-group'

import asyncComponent from './components/common/asyncComponent'
import PrivateRoute from './components/common/PrivateRoute'
import Home from './views/Home'

// import NoMatch from './views/NoMatch'
const NoMatch = asyncComponent(() => import('./views/NoMatch'))

class App extends React.Component {
  render() {
    const transitionName = this.props.ui.get('transitionName')

    return (
      <Router>
        <Route render={({ location }) => (
          <CSSTransitionGroup
            transitionName={transitionName}
            transitionEnter={true}
            transitionLeave={true}
            transitionEnterTimeout={330}
            transitionLeaveTimeout={330}
          >
            <Switch key={location.key} location={location}>
              <PrivateRoute exact path="/" component={Home} />
              <Route component={NoMatch}/>
            </Switch>
          </CSSTransitionGroup>
        )} />
      </Router>
    )
  }
}

function mapStateToProps (state) {
  return {
    ui: state.get('ui')
  }
}

export default connect(mapStateToProps)(App)
