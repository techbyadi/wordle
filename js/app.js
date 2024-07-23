/*---------------- Constants ---------------*/
let words;

/*--------- Variables (state) ----------*/

let todaysWord = "PROST";
let index = 0;
let generatedWord;
let result = false;
let rowIndex = 1;

/*------- Cached Element References ------*/

const firstRowElements = document.querySelectorAll(".sqr1");
const secondRowElements = document.querySelectorAll(".sqr2");
const thirdRowElements = document.querySelectorAll(".sqr3");
const fourthRowElements = document.querySelectorAll(".sqr4");
const fifthRowElements = document.querySelectorAll(".sqr5");
const sixthRowElements = document.querySelectorAll(".sqr6");
const allElements = document.querySelectorAll("#row");
const keyboardElements = document.querySelectorAll(".keyboard");
const messageEl = document.getElementById("message");
const resetEl = document.getElementById("reset");

/*-------- Functions -----------------*/

init();

function init() {
  words = ["", "", "", "",""];
  generatedWord = "";
}

function handleKeyboardClick(event) {
  let selectedLetter = event.target.id;
  placeWord(selectedLetter);
  displayWord(selectedLetter);
  if (!words[4] == "") {
    compareWords();
    init();
  }
}

function compareWords() {
  if(rowIndex===1){
  for (let letter = 0; letter < todaysWord.length; letter++) {
    if (generatedWord[letter] === todaysWord[letter]) {
      firstRowElements[letter].style.backgroundColor = "green";
    } else if (todaysWord.includes(generatedWord[letter])) {
      firstRowElements[letter].style.backgroundColor = "yellow";
    } else {
      firstRowElements[letter].style.backgroundColor = "gray";
    }
  }}
  else if(rowIndex===2){
    for (let letter = 0; letter < todaysWord.length; letter++) {
      if (generatedWord[letter] === todaysWord[letter]) {
        secondRowElements[letter].style.backgroundColor = "green";
      } else if (todaysWord.includes(generatedWord[letter])) {
        secondRowElements[letter].style.backgroundColor = "yellow";
      } else {
        secondRowElements[letter].style.backgroundColor = "gray";
      }
    }
  }
  else if(rowIndex===3){
    for (let letter = 0; letter < todaysWord.length; letter++) {
      if (generatedWord[letter] === todaysWord[letter]) {
        thirdRowElements[letter].style.backgroundColor = "green";
      } else if (todaysWord.includes(generatedWord[letter])) {
        thirdRowElements[letter].style.backgroundColor = "yellow";
      } else {
        thirdRowElements[letter].style.backgroundColor = "gray";
      }
    }
  }
  else if(rowIndex ===4){
    for (let letter = 0; letter < todaysWord.length; letter++) {
      if (generatedWord[letter] === todaysWord[letter]) {
        fourthRowElements[letter].style.backgroundColor = "green";
      } else if (todaysWord.includes(generatedWord[letter])) {
        fourthRowElements[letter].style.backgroundColor = "yellow";
      } else {
        fourthRowElements[letter].style.backgroundColor = "gray";
      }
    }
  }
  else if(rowIndex===5){
    for (let letter = 0; letter < todaysWord.length; letter++) {
      if (generatedWord[letter] === todaysWord[letter]) {
        fifthRowElements[letter].style.backgroundColor = "green";
      } else if (todaysWord.includes(generatedWord[letter])) {
        fifthRowElements[letter].style.backgroundColor = "yellow";
      } else {
        fifthRowElements[letter].style.backgroundColor = "gray";
      }
    }
  }
  else if(rowIndex===6){
    for (let letter = 0; letter < todaysWord.length; letter++) {
      if (generatedWord[letter] === todaysWord[letter]) {
        sixthRowElements[letter].style.backgroundColor = "green";
      } else if (todaysWord.includes(generatedWord[letter])) {
        sixthRowElements[letter].style.backgroundColor = "yellow";
      } else {
        sixthRowElements[letter].style.backgroundColor = "gray";
      }
    }
  }
  rowIndex++;
}

function displayWord(selectedLetter) {
  if (index < 30) {
    allElements[index].textContent = selectedLetter;
    allElements[index].classList.add("animate__animated", "animate__fadeIn");
    index++;
  }
}

function placeWord(selectedLetter) {
  if (words[0] === "") {
    words[0] = selectedLetter;
  } else if (words[1] === "") {
    words[1] = selectedLetter;
  } else if (words[2] === "") {
    words[2] = selectedLetter;
  } else if (words[3] === "") {
    words[3] = selectedLetter;
  } else if (words[4] === "") {
    words[4] = selectedLetter;
  }
  generatedWord = `${generatedWord}${selectedLetter}`;
}

/*----------- Event Listeners ----------*/

keyboardElements.forEach((keyboardElement) => {
  keyboardElement.addEventListener("click", handleKeyboardClick);
});
