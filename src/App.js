 import React from 'react';
import logo from './logo.svg';
import './App.css';


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript



/*
const greeting = `suck 
  my 
  \n dick`

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. penis
        </p>

        <p>
          wow please {greeting}
        </p>
        <p>
        Tokyo is the capital of Japan, the center of the Greater Tokyo Area,
and the most populous metropolitan area in the world.
It is the seat of the Japanese government and the Imperial Palace,
and the home of the Japanese Imperial Family.
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
*/
const App = () => {
  const user = {name: 'trums', age: 99};
  const users = [
    {name: "guh"},
    {name: "njeff"},
    {name: "lelw"}
  ];

  const showUsers = true;

  return(
    <div>
      <h1>{user.name} {user.age}</h1>
      {showUsers ? (
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>) : null}
    </div>
  );
}
 
export default App;