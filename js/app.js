/*---------------- Constants ---------------*/
let words;


/*--------- Variables (state) ----------*/

words = ['', '', '', ''];
let todaysWord = 'BEST';
let index;

/*------- Cached Element References ------*/

const rowElements = document.querySelectorAll('.sqr');
const keyboardElements = document.querySelectorAll('.keyboard');
const messageEl = document.getElementById('message');

/*-------- Functions -----------------*/

function handleKeyboardClick(event){
  let selectedWord = event.target.id;
  placeWord(selectedWord);
  displayWord();
  console.log(`Words Array is: ${words}`);
}

function displayWord(){
    words.forEach((cell, idx) => {
        rowElements[idx].textContent = cell;
    })
}

function placeWord(word){
    if(words[0]===''){
      words[0] = word;
    }
    else if(words[1]===''){
      words[1] = word;
    }
    else if(words[2]===''){
      words[2] = word;
    }
    else if(words[3]===''){
      words[3] = word;
    }

  index = words.indexOf(word);  
  return index;     
}

/*----------- Event Listeners ----------*/

keyboardElements.forEach((keyboardElement)=> {
  keyboardElement.addEventListener('click', handleKeyboardClick);
})