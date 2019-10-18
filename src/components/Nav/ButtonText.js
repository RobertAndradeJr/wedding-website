import React from 'react'

export default function buttonsComponent(props) {
  const { buttons, clickHandler } = props

  const ButtonsList = buttons.map((article) => {
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
  return ButtonsList
}
