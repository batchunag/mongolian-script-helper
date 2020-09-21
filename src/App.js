import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from "./Autocomplete";

var words_w = ["ᠠᠪᠤ", "ᠠᠭᠠᠭ", "ᠠᠭᠠᠭᠢᠮ᠎ᠠ"];
var words_l = ["abu", "agag", "agagim"];
var words_c = ["aав", "ааг", "аагим"];


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
        // options={[
        //   "Papaya",
        //   "Persimmon",
        //   "Paw Paw",
        //   "Prickly Pear",
        //   "Peach",
        //   "Pomegranate",
        //   "Pineapple"
        // ]}
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
