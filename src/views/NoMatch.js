/**
 * 未匹配 (404)
 */

import React from 'react'

const NoMatch = ({ location }) => (
  <div>
    <h3>Not Found <code>{location.pathname}</code></h3>
  </div>
)

export default NoMatch
