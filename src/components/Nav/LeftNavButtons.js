import React from 'react'
import PropTypes from 'prop-types'
import { NavStrings } from '../Strings/Strings'
import ButtonText from './ButtonText'

const { leftButtons } = NavStrings
export default function LeftNavButtons(props) {
  const { clickHandler } = props
  return (
    <div className="text-sm flex-grow">
      <ButtonText clickHandler={clickHandler} buttons={leftButtons} />
    </div>
  )
}

LeftNavButtons.defaultProps = {
  clickHandler: PropTypes.func,
}

LeftNavButtons.propTypes = {
  clickHandler: PropTypes.func,
}
