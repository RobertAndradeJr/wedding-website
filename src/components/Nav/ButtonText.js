import React from 'react'

export default function buttonsComponent(props) {
  const { buttons } = props
  return buttons.map(article => (
    <a
      key={article}
      href="#responsive-header"
      className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
    >
      {article}
    </a>
  ))
}
