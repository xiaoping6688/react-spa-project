/**
 * 未匹配 (404)
 */

import React from 'react'

const pageStyle = {
  fontSize: '28px'
}

const NoMatch = ({ location }) => (
  <div style={pageStyle}>
    <h3>Not Found <code>{location.pathname}</code></h3>
  </div>
)

export default NoMatch
