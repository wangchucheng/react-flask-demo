import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [message, setMessage] = useState();

  // some param you want to pass
  const name = "Chucheng"

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api?name=${encodeURIComponent(name)}`).then(res => res.json()).then(data => {
      setMessage(data.message)
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {message}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
