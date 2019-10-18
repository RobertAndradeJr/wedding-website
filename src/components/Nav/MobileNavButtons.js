import React from 'react'
import PropTypes from 'prop-types'
import { NavStrings } from '../Strings/Strings'


const { mobileTitle } = NavStrings
export default function MobileNavButtons(props) {
  const { clickHandler } = props
  return (
    <div className="block lg:hidden">
      <button
        className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white focus:outline-none"
        type="button"
        onClick={clickHandler}
      >
        <svg
          className="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{mobileTitle}</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
  )
}

MobileNavButtons.defaultProps = {
  clickHandler: PropTypes.func,
}

MobileNavButtons.propTypes = {
  clickHandler: PropTypes.func,
}
