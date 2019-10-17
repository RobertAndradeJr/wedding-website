import React, { useState } from 'react'
import Home from './components/Home'

const formTitle = 'Password:'

function App() {
  const correctPassword = 'wedding'
  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState(false)
  const checkLocalHost = () => {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return true
    }
    return false
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input === correctPassword) {
      setPassword(true)
    } else {
      setMessage('Sorry! Only COOL people can come to our wedding')
      setInput('')
    }
  }
  const onChange = (e) => setInput(e.target.value)

  return (
    <div className="h-screen">
      { (checkLocalHost() || password) ? <Home /> : (
        <div>
          <h1>{message}</h1>
          <form>
            {formTitle}
            <input className="text-black" type="text" onChange={onChange} />
            <input className="text-black" type="submit" onClick={handleSubmit} />
          </form>
        </div>
      )}
    </div>
  )
}

export default App
