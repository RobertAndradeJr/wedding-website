import React, { Component } from 'react'

export default function buttonsComponent(props) {
  const { buttons } = props
  const handleClick = article => document.querySelector(`#${article.replace(/\s/g, '')}`).scrollIntoView({ behavior: 'smooth' })

  return buttons.map(article => (
    <button
      type="button"
      key={article}
      // href={`#${article}`}
      onClick={() => handleClick(article)}
      className="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"
    >
      {article}
    </button>
  ))
}
