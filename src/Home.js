import React from 'react'
import Template from './Template'
import './App.css'
import Navbar from './components/Nav/Navbar'
import Countdown from './components/Countdown/Countdown'
import {
  buttonText,
  detail,
  heroImage,
  title,
} from './components/Strings/HomeStrings'

export function Home() {
  return (
    <>
      <Navbar />
      <header className="App-header" />
      <div className="App-header--text">
        <h1>{title}</h1>
        <img src={heroImage} className="App-logo" alt="logo" />
        <p>{detail}</p>
        <button
          className="App-link"
          href="https://www.instagram.com/me_hoy_minoyyy/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          type="submit"
        >
          {buttonText}
        </button>
      </div>
      <div>
        <h1 className="info" id="demo">{detail}</h1>
        <Countdown />
      </div>
      <>
        <Template />
      </>
    </>
  )
}

export default Home
