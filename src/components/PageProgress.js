/**
 * 页面进度组件
 */

import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// 内联样式，方便动态控制
const progressBarStyle = {
  position: 'fixed',
  zIndex: 100001,
  top: 0,
  left: 0,
  backgroundColor: '#58B7FF',
  width: '0%',
  height: '2px',
  transition: 'width .5s ease'
}

class PageProgress extends React.Component {
  shouldComponentUpdate (nextProps, nextState) {
    if (this.props.progress !== nextProps.progress) {
      return true
    }

    return false
  }

  render() {
    const { progress } = this.props

    if (progress > 0) {
      progressBarStyle.width = progress + '%'
      return <div style={progressBarStyle}></div>
    } else {
      return null
    }
  }
}

PageProgress.propTypes = {
  progress: PropTypes.number
}

PageProgress.defaultProps = {
  progress: 0
}

function mapStateToProps (state) {
  return {
    progress: state.pageProgress
  }
}

export default connect(mapStateToProps)(PageProgress)
