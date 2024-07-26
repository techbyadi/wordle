import { checkWord, getWord, } from "./data.js";
/*---------------- Constants ---------------*/

let letters;
let validLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";

/*--------- Variables (state) ----------*/

let todaysWord = `${getWord().toUpperCase()}`;
let cursor = 0;
let generatedWord;
let result = false;
let rowIndex = 0;

/*------- Cached Element References ------*/

const rowElements = document.querySelectorAll(".row-elements");
const keyboardElements = document.querySelectorAll(".keyboard");
const messageEl = document.getElementById("message");
const resetEl = document.getElementById("reset");

/*-------- Functions -----------------*/

init();

function init() {
  console.log(`%cPsst... trying to cheat?`, `color: red; font-size: 25px; font-weight: bold;`);
  console.log(`%cThat's okay, we won't tell anyone. Here's the answer: ${todaysWord.toUpperCase()}`, `color: green; font-size: 16px; font-weight: bold;`);
  render();
}

function render(){
  letters = ["", "", "", "", ""];
  generatedWord = "";
  cursor = 0;
}

function compareLetters() {
  for (let letter = 0; letter < todaysWord.length; letter++) {
    if (checkWord(generatedWord.toLowerCase())) {
      if (generatedWord[letter] === todaysWord[letter]) {
        rowElements[rowIndex].children[letter].style.backgroundColor =
          "rgb(106, 170, 100)";
        document.getElementById(generatedWord[letter].toLowerCase()).style.backgroundColor =
          "rgb(106, 170, 100)";
        rowElements[rowIndex].children[letter].classList.add(
          "animate__animated",
          "animate__fadeInLeft"
        );
      } else if (todaysWord.includes(generatedWord[letter])) {
        rowElements[rowIndex].children[letter].style.backgroundColor =
          "rgb(201, 180, 88)";
        document.getElementById(generatedWord[letter].toLowerCase()).style.backgroundColor =
          "rgb(201, 180, 88)";
        rowElements[rowIndex].children[letter].classList.add(
          "animate__animated",
          "animate__fadeInLeft"
        );
      } else {
        rowElements[rowIndex].children[letter].style.backgroundColor = "gray";
        document.getElementById(generatedWord[letter].toLowerCase()).style.backgroundColor =
          "gray";
        rowElements[rowIndex].children[letter].classList.add(
          "animate__animated",
          "animate__fadeInLeft"
        );
      }
    } else {
      rowElements[rowIndex].children[letter].classList.remove(
        "animate__animated",
        "animate__fadeIn"
      );
      rowElements[rowIndex].children[letter].classList.add(
        "animate__animated",
        "animate__shakeX"
      );
    }
  }

  if (generatedWord === todaysWord) {
    result = true;
    confetti.start(1500);
  }
  if (checkWord(generatedWord.toLowerCase())) {

    rowIndex++;

    if(!result && rowIndex === 6){
      messageEl.classList.add("animate__animated","animate__zoomInDown");
      messageEl.textContent = ` 🧐 Nice effort! The word was: ${todaysWord}`;
    }
    
  }
}

function displayLetter(selectedLetter) {

   if (selectedLetter === "DEL") {
     deleteLetter();
   }
  if (selectedLetter === "ENT" && !result && cursor === 5 && rowIndex < 6) {
    compareLetters();
      if (checkWord(generatedWord.toLowerCase())) {
        render();
      }
  }

  if (!result) {
    if (validLetters.includes(selectedLetter)) {
      if (letters[0] === "") {
        letters[0] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (letters[1] === "") {
        letters[1] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (letters[2] === "") {
        letters[2] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (letters[3] === "") {
        letters[3] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (letters[4] === "") {
        letters[4] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      }
     
      if (generatedWord.length >= 0 && generatedWord.length < letters.length) {
        generatedWord = `${generatedWord}${selectedLetter}`;
        cursor++;
      }
  
    
    }
  }
}

function deleteLetter() {
  if (cursor >= 1) {
    rowElements[rowIndex].children[cursor - 1].textContent = "";
    letters[cursor - 1] = "";
    generatedWord = generatedWord.slice(0, generatedWord.length - 1);
    cursor--;
  }
}

function reset() {
  window.location.reload();
}

function handleKeys(evt){
  if (rowIndex < 6) {
    displayLetter(evt.key?.toUpperCase() || evt.target.id.toUpperCase());
  }

  if (evt.key === "Enter" && !result && cursor === 5 && rowIndex < 6) {
    compareLetters();
    if (checkWord(generatedWord.toLowerCase())) {
      render();
    }
  }

  if (evt.key === "Backspace" && cursor >= 0) {
    deleteLetter();
  }
}


/*----------- Event Listeners ----------*/

keyboardElements.forEach((keyboardElement) => {
  keyboardElement.addEventListener("click", handleKeys);
});

document.addEventListener("keydown", handleKeys);

resetEl.addEventListener("click", reset);
