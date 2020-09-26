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
  mongolian_dict.dict.map((word) => {
    if (word.cyrillic && word.written && word.latin_direct && !cyrillic_keys.has(word.cyrillic)) { 
      words_c.push(word.cyrillic);
      words_w.push(word.written);
      words_l.push(word.latin_direct);
      cyrillic_keys.add(word.cyrillic);
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
          Кирилл эсвэл латинаар бичвэл монгол бичгийн үгнүүд гарч ирэх болно.
        </p>
      </header>
      <body>
        <a href="https://www.mongolbichig.info/%D0%BC%D0%BE%D0%BD%D0%B3%D0%BE%D0%BB">Бусад монгол бичгийн материал, хэрэгслүүд.</a>
        <footer>
          <p>
            Developed by Ants Community.<br/>
            <a href="https://github.com/batchunag/mongolian-script-helper">
               Check out the source code and contribute to this Chrome Extension.
            </a>
          </p>
          <p>
            Толь бичгийн үгсийг toli.query.mn сангаас авсан болно.
          </p>
        </footer>
        </body>
    </div>
  );
}

export default App;
