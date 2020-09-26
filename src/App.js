import React from 'react';
import logo from './logo.svg';
import './App.css';
import Autocomplete from "./Autocomplete";
import mongolian_dict from "./dict_files/mongolian_dict.json";

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
  var words_w = [];// = ["ᠠᠪᠤ", "ᠠᠭᠠᠭ", "ᠠᠭᠠᠭᠢᠮ᠎ᠠ"];
  var words_l = [];// = ["abu", "agag", "agagim"];
  var words_c = [];// = ["aав", "ааг", "аагим"];

  var cyrillic_keys = new Set();
  mongolian_dict.Dict.map((word) => {
    if (word.Cyrillic && word.Written && !cyrillic_keys.has(word.Cyrillic)) { 
      words_c.push(word.Cyrillic);
      words_w.push(word.Written);
      cyrillic_keys.add(word.Cyrillic);
    }
  });

  return (
    <div className="App">
      <header className="App-header">
        {/* <input type='text' onChange={handleChange}/> */}
        <Autocomplete
        words_w={words_w}
        words_l={words_l}
        words_c={words_c}
      />
        <p>
          Кириллээр бичвэл монгол бичгийн үгнүүд гарч ирэх болно.
        </p>
      </header>
    </div>
  );
}

export default App;
