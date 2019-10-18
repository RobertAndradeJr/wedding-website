import React from 'react'
import PropTypes from 'prop-types'
import { NavStrings } from '../Strings/Strings'
import ButtonText from './ButtonText'

const { rightButtons } = NavStrings
export default function RightNavButtons(props) {
  const { clickHandler } = props
  return (
    <div className="text-sm lg:flex-grow">
      <ButtonText clickHandler={clickHandler} buttons={rightButtons} />
    </div>
  )
}

RightNavButtons.defaultProps = {
  clickHandler: PropTypes.func,
}

RightNavButtons.propTypes = {
  clickHandler: PropTypes.func,
}
