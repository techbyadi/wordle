/*---------------- Constants ---------------*/
let words;


/*--------- Variables (state) ----------*/


let todaysWord = 'CARS';
let index=0;
let generatedWord;

/*------- Cached Element References ------*/

const rowElements = document.querySelectorAll('.sqr');
const keyboardElements = document.querySelectorAll('.keyboard');
const messageEl = document.getElementById('message');
const resetEl = document.getElementById('reset');

/*-------- Functions -----------------*/

init();

function init(){
  words = ['', '', '', ''];
  generatedWord = '';
}

function handleKeyboardClick(event){
  let selectedLetter = event.target.id;
  placeWord(selectedLetter);
  displayWord(selectedLetter);
  if(!words[3]==''){
    compareWords();
    init();
  }
}

function compareWords(){
  if(generatedWord === todaysWord){
    console.log('Woahhhhh!!');
  }
}


function displayWord(selectedLetter) {
  if(index<20){
  rowElements[index].textContent = selectedLetter;
  rowElements[index].classList.add('animate__animated','animate__fadeIn')
  if(todaysWord[index]===selectedLetter){
    rowElements[index].style.backgroundColor = 'green'
  }
  console.log(index);
  index++;
  }
}

function placeWord(selectedLetter){
    if(words[0]===''){
      words[0] = selectedLetter;
    }
    else if(words[1]===''){
      words[1] = selectedLetter;
    }
    else if(words[2]===''){
      words[2] = selectedLetter;
    }
    else if(words[3]===''){
      words[3] = selectedLetter;
    } 
    generatedWord = `${generatedWord}${selectedLetter}`;
    console.log(generatedWord);      
}


/*----------- Event Listeners ----------*/

keyboardElements.forEach((keyboardElement)=> {
  keyboardElement.addEventListener('click', handleKeyboardClick);
})
