/*global chrome*/

import TraditionalKeyboard from 'written-mongol-keyboard';
const keyboard = new TraditionalKeyboard();
keyboard.switch = false;

// import { WrittenMongolForContentEditable } from 'written-mongol-keyboard';
// const editor = new WrittenMongolForContentEditable('._5rpu');

keyboard.onSwitch((isOn) => {
    //Send message to popup.
    chrome.storage.sync.set({toggle : isOn});
});

chrome.storage.onChanged.addListener(
    (changes) =>  {
        if (changes['toggle']) {
            const newValue = changes['toggle'].newValue;
            //Switched in popup.
            if (newValue !== keyboard.switch) {
                keyboard.switch = newValue;
                // editor.switch = changes['content'].newValue;
            }
        }
    }
);