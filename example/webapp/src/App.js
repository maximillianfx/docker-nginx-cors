import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const URL_CORS = "http://localhost:3535/hello"
  const URL_NO_CORS  = "http://localhost:4545/hello"

  const [world, setWorld] = useState("")

  useEffect(() => {
    fetch(URL_NO_CORS, { method: "GET" }).then((res) => res.json().then((data) => setWorld(data['message'])))
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {world}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
