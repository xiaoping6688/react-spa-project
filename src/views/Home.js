/**
 * 首页
 */

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ViewComponent from '../components/common/ViewComponent'
import { setPageTransition } from '../stores/actions'

import logo from '../assets/images/logo.svg'
import '../assets/styles/Home.css'

class Home extends ViewComponent {
  constructor (props) {
    super(props)
    this.setTransition = this.setTransition.bind(this)
  }

  setTransition (event) {
    this.props.setPageTransition('slide-left')
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome To React</h2>
        </div>
        <p className="Home-intro">
          To get started, edit <code>src/*.js</code> and save to reload...
          <Link to="/404" onClick={this.setTransition}>404</Link>
        </p>
      </div>
    )
  }
}

export default connect(null, dispatch => bindActionCreators({setPageTransition}, dispatch))(Home)
