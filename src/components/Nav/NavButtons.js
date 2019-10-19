import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import { NavStrings } from '../Strings/Strings'

const { buttonLabels } = NavStrings

export default function NavButtons(props) {
  const { clickHandler } = props
  return (
    <Fade top>
      <div className="text-sm md:flex-grow flex flex-col justify-center items-center content-center w-full md:w-auto md:flex-row md:justify-center">
        {
          buttonLabels.map((article) => {
            const HREF = `#${article.replace(/\s/g, '')}`
            return (
              <a href={HREF} key={article} className="focus:outline-none">
                <button
                  type="button"
                  onClick={() => clickHandler()}
                  className="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-black mr-4 focus:outline-none focus:text-black"
                >
                  {article}
                </button>
              </a>
            )
          })
        }
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
