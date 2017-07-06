/**
 * 未匹配 (404)
 */

import React from 'react'
import styled from 'styled-components'

// css in js
const PageWrapper = styled.div`
  font-size: 28px;
`

const NoMatch = ({ location }) => (
  <PageWrapper>
    <h3>Not Found <code>{location.pathname}</code></h3>
  </PageWrapper>
)

export default NoMatch
