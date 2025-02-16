import React, { Component } from 'react';

export class Autocomplete extends Component {
  state = {
    activeOption: 0,
    filteredOptions: [],
    showOptions: false,
    userInput: ''
  };

  onChange = (e) => {
    console.log('onChanges');

    const { words_w, words_l, words_c } = this.props;
    const userInput = e.currentTarget.value;

    // const filteredOptions = options.filter(
    //   (optionName) =>
    //     optionName.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    // );
    let filteredOptions =[];
    // words_l.forEach(element => {
        
    // });
    if ((/[a-zA-Z]/).test(userInput.toLowerCase().charAt(0))) {
      for (let i=0; i<words_l.length; i++) {
        if (words_l[i].indexOf(userInput.toLowerCase()) === 0) {
            filteredOptions.push(words_w[i] + '(' + words_c[i] + ')');
        }
    }
    } else {
      for (let i=0; i<words_c.length; i++) {
          if (words_c[i].indexOf(userInput.toLowerCase()) === 0) {
              filteredOptions.push(words_w[i] + '(' + words_c[i] + ')');
          }
      }
    }
    filteredOptions.sort();
    filteredOptions = filteredOptions.slice(0,5);
    // console.log(words_w);

    this.setState({
      activeOption: 0,
      filteredOptions,
      showOptions: true,
      userInput: e.currentTarget.value
    });
  };

  // copyToClipboard = () => {
  //   var input = document.getElementById('search-input');
  //   input.select();
  //   input.setSelectionRange(0, 99999);
  //   document.execCommand("copy");
  // };


  onClick = (e) => {
    this.setState({
      activeOption: 0,
      filteredOptions: [],
      showOptions: false,
      userInput: e.currentTarget.innerText
    });
  };
  onKeyDown = (e) => {
    const { activeOption, filteredOptions } = this.state;

    if (e.keyCode === 13) {
      this.setState({
        activeOption: 0,
        showOptions: false,
        userInput: filteredOptions[activeOption]
      });
    } else if (e.keyCode === 38) {
      if (activeOption === 0) {
        return;
      }
      this.setState({ activeOption: activeOption - 1 });
    } else if (e.keyCode === 40) {
      if (activeOption === filteredOptions.length - 1) {
        console.log(activeOption);
        return;
      }
      this.setState({ activeOption: activeOption + 1 });
    }
  };

  render() {
    const {
      onChange,
      onClick,
      onKeyDown,

      state: { activeOption, filteredOptions, showOptions, userInput }
    } = this;
    let optionList;
    if (showOptions && userInput) {
      if (filteredOptions.length) {
        optionList = (
          <ul className="options">
            {filteredOptions.map((optionName, index) => {
              let className;
              if (index === activeOption) {
                className = 'option-active';
              }
              return (
                <li className={className} key={optionName} onClick={onClick}>
                  {optionName}
                </li>
              );
            })}
          </ul>
        );
      } else {
        optionList = (
          <div className="no-options">
            <em>No Option!</em>
          </div>
        );
      }
    }
    return (
      <React.Fragment>
        <div className="search">
          <input
            type="text"
            className="search-box"
            id="search-input"
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={userInput}
          />
          <input type="submit" value="" className="search-btn" />
        </div>
        {optionList}
      </React.Fragment>
    );
  }
}

export default Autocomplete;
