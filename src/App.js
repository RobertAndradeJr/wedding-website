import React, { useState } from 'react';
import './App.css';
import { Home } from './Home';

function Form(props) {
  const { onChange } = props;
  const { handleSubmit } = props;
  return (
    <form>
      <label>
        Password:
        <input type="text" onChange={onChange} />
        <input type="submit" onClick={handleSubmit} />
      </label>
    </form>
  );
}

function App() {
  const correctPassword = 'wedding';
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === correctPassword) {
      setPassword(true);
    } else {
      setMessage('Sorry! Only COOL people can come to our wedding');
      setInput('');
    }
  };
  const onChange = e => setInput(e.target.value);

  return (
    <div className="App">
      {password ? <Home /> : (
        <div>
          <h1>{message}</h1>
          <Form handleSubmit={handleSubmit} onChange={onChange} />
        </div>
      )}
    </div>
  );
}

export default App;
