import { checkWord, getWord, } from "./data.js";
/*---------------- Constants ---------------*/

let words;
let validLetters = "QWERTYUIOPASDFGHJKLZXCVBNM";

/*--------- Variables (state) ----------*/

let todaysWord = `${getWord(1).toUpperCase()}`;
let cursor = 0;
let generatedWord;
let result = false;
let rowIndex = 0;

/*------- Cached Element References ------*/

const rowElements = document.querySelectorAll(".row.elements");
const allElements = document.querySelectorAll(".sqr");
const keyboardEls = document.querySelectorAll(".rowKeys");
const keyboardElements = document.querySelectorAll(".keyboard");
const messageEl = document.getElementById("message");
const resetEl = document.getElementById("reset");

/*-------- Functions -----------------*/

init();

function init() {
  setInitialValues();
}

function setInitialValues(){
  words = ["", "", "", "", ""];
  generatedWord = "";
  cursor = 0;
  console.log(`Today's word is: ${todaysWord.toUpperCase()}`);
}

/* function handleKeyboardClick(event) {
  let enteredLetter = event.target.id;
  console.log(`Entered letter: ${enteredLetter}`);
  if (enteredLetter === "del") {
    deleteLetter();
  }
  else{
  console.log(`Cursor's value in handleKeyBoard function is: ${cursor}`);
  displayWord(enteredLetter);
  }
} */


function compareWords() {
  for (let letter = 0; letter < todaysWord.length; letter++) {
    if (checkWord(generatedWord.toLowerCase())) {
      if (generatedWord[letter] === todaysWord[letter]) {
        rowElements[rowIndex].children[letter].style.backgroundColor =
          "rgb(106, 170, 100)";
        document.getElementById(generatedWord[letter]).style.backgroundColor =
          "rgb(106, 170, 100)";
        rowElements[rowIndex].children[letter].classList.add(
          "animate__animated",
          "animate__fadeInLeft"
        );
        setTimeout(2000);
      } else if (todaysWord.includes(generatedWord[letter])) {
        rowElements[rowIndex].children[letter].style.backgroundColor =
          "rgb(201, 180, 88)";
        document.getElementById(generatedWord[letter]).style.backgroundColor =
          "rgb(201, 180, 88)";
        rowElements[rowIndex].children[letter].classList.add(
          "animate__animated",
          "animate__fadeInLeft"
        );
        setTimeout(2000);
      } else {
        rowElements[rowIndex].children[letter].style.backgroundColor = "gray";
        document.getElementById(generatedWord[letter]).style.backgroundColor =
          "gray";
        rowElements[rowIndex].children[letter].classList.add(
          "animate__animated",
          "animate__fadeInLeft"
        );
        setTimeout(2000);
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
      messageEl.textContent = `I got you! The WORDLE was: ${todaysWord}`;
    }
    
  }
}

function displayWord(selectedLetter) {

   if (selectedLetter === "DEL") {
     deleteLetter();
   }
  if (selectedLetter === "ENT" && !result && cursor === 5 && rowIndex < 6) {
    compareWords();
      console.log(`${checkWord(generatedWord.toLowerCase())}`);
      if (checkWord(generatedWord.toLowerCase())) {
        setInitialValues();
      }
  }

  if (!result) {
    if (validLetters.includes(selectedLetter)) {
      if (words[0] === "") {
        words[0] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (words[1] === "") {
        words[1] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (words[2] === "") {
        words[2] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (words[3] === "") {
        words[3] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      } else if (words[4] === "") {
        words[4] = selectedLetter;
        rowElements[rowIndex].children[cursor].textContent = selectedLetter;
        rowElements[rowIndex].children[cursor].classList.add(
          "animate__animated",
          "animate__fadeIn"
        );
      }
     
      if (generatedWord.length >= 0 && generatedWord.length < words.length) {
        generatedWord = `${generatedWord}${selectedLetter}`;
        cursor++;
      }
  
    
    }
    console.log(`Generated word is: ${generatedWord}`);
  }
}

function deleteLetter() {
  if (cursor >= 1) {
    rowElements[rowIndex].children[cursor - 1].textContent = "";
    words[cursor - 1] = "";
    generatedWord = generatedWord.slice(0, generatedWord.length - 1);
    cursor--;
  }
}

function reset() {
  window.location.reload();
}

function handleKeys(evt){
  if (rowIndex < 6) {
    displayWord(evt.key?.toUpperCase() || evt.target.id.toUpperCase());
  }

  if (evt.key === "Enter" && !result && cursor === 5 && rowIndex < 6) {
    compareWords();
    console.log(`${checkWord(generatedWord.toLowerCase())}`);
    if (checkWord(generatedWord.toLowerCase())) {
      setInitialValues();
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
