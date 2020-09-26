import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from "./Autocomplete";

var words_w = ["ᠠᠪᠤ", "ᠠᠭᠠᠭ", "ᠠᠭᠠᠭᠢᠮ᠎ᠠ"];
var words_l = ["abu", "agag", "agagim"];
var words_c = ["aав", "ааг", "аагим"];


/**
 * Resources
 * https://developer.chrome.com/extensions/overview
 * https://www.digitalocean.com/community/tutorials/react-react-autocomplete
 * https://github.com/moroshko/react-autosuggest#installation
 * 
 */

function handleChange(e) {
  console.log(e.target.value);
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <input type='text' onChange={handleChange}/> */}
        <Autocomplete
        words_w={words_w}
        words_l={words_l}
        words_c={words_c}
      />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
