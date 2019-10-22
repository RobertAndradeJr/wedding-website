import React from 'react'
import PropTypes from 'prop-types'
import Fade from 'react-reveal/Fade'
import { NavStrings } from '../Strings/Strings'

const { buttonLabels } = NavStrings

const navButtonsStyles = [
  'group',
  'text-sm',
  'text-white',
  'flex flex-col',
  'justify-center',
  'items-center',
  'content-center',
  'w-full',
  'md:w-auto',
  'md:flex-row',
  'md:flex-grow',
  'md:justify-end',
  'hover:text-gray-200',
]

const navButtonStyles = [
  'block',
  'mt-4',
  'lg:inline-block',
  'lg:mt-0',
  'hover:text-gray-600',
  'mr-4',
  'focus:outline-none',
  'focus:text-black',
]

const NavButtons = ({ clickHandler }) => (
  <Fade top>
    <div className={navButtonsStyles.join(' ')}>
      {
        buttonLabels.map((article) => {
          const HREF = `#${article.replace(/\s/g, '')}`
          return (
            <a href={HREF} key={article} className="focus:outline-none">
              <button
                type="button"
                onClick={() => clickHandler()}
                className={navButtonStyles.join(' ')}
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

NavButtons.defaultProps = {
  clickHandler: PropTypes.func,
}

NavButtons.propTypes = {
  clickHandler: PropTypes.func,
}

export default NavButtons
