import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import LeftNavButtons from './LeftNavButtons'
import RightNavButtons from './RightNavButtons'

export default function NavButtons(props) {
  const { clickHandler } = props
  return (
    <Fade top>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <LeftNavButtons onClick={clickHandler} />
        <RightNavButtons onClick={clickHandler} />
      </div>
    </Fade>
  )
}

NavButtons.defaultProps = {
  clickHandler: PropTypes.func,
}

NavButtons.propTypes = {
  clickHandler: PropTypes.func,
}
