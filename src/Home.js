import React from 'react'
import Template from './Template';

const title = 'Robert & Mandi are getting married!'
const detail = 'Let\'s have a great wedding!'
const buttonText = 'RSVP'
const heroImage = 'https://instagram.ffcm1-2.fna.fbcdn.net/vp/16a383f1d9b3a06d6972085e6cf7ae1d/5DFDB388/t51.2885-15/e35/41203721_691517357888913_5430100155676178400_n.jpg?_nc_ht=instagram.ffcm1-2.fna.fbcdn.net'

export function Home() {
  console.log(heroImage) // eslint-disable-line no-console
  return (
    <>
    <header className="App-header" />
      <div className="App-header--text">
        <h1>{title}</h1>
        <img src={heroImage} className="App-logo" alt="logo" />
        <p>
          {detail}
        </p>
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
      <>
        <Template />
      </>
    </>

  )
}

export default Home
