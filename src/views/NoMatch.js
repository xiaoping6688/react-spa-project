/**
 * 未匹配 (404)
 */

import React from 'react'
import styled from 'styled-components'

// css in js
const PageWrapper = styled.div`
  font-size: 28px;
`

class NoMatch extends React.Component {
  componentDidMount () {
    setTimeout(() => this.props.history.push('/'), 2500)
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

export default NoMatch
