/**
 * 未匹配 (404)
 */

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { setPageTransition } from '../stores/actions'

// css in js
const PageWrapper = styled.div`
  font-size: 28px;
`

class NoMatch extends React.Component {
  componentDidMount () {
    setTimeout(() => {
      this.props.dispatch(setPageTransition('slide-right'))
      this.props.history.push('/')
    }, 2000)
  }

  render () {
    const { location } = this.props
    return (
      <PageWrapper>
        <h3>Not Found <code>{location.pathname}</code></h3>
      </PageWrapper>
    )
  }
}

export default connect()(NoMatch)
