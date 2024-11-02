// huma number enter karna hai jaisa hii submit karo ga vo number evaluate hoga
// we have to also check kii number sahi hai ya nhi hai
// hum array bana rhe hai or user na jo bhi previous gueses diya hai unko store kar ta jaaye ga
// har ek click pa guess ka number lower down kar na hai yaani kii huma bata na ha kii user ka pass or kitna aatempts bache hua hai

let randomNumber=(parseInt(Math.random()*100+1));
// *100= do number jump karwa diya decimal ka baad ; +1 means = kii kabi zero naa aaye

const submit=document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p =document.createElement('p')

let prevGuess=[]
let numGuess=1

let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
// value 1 and 100 ka beech mai hai
if(isNaN(guess)){
    alert('Please enter a valid number')
}else if(guess<1){
    alert('Please enter a  number more than 1')

}else if(guess>100){
    alert('Please enter a  number less than 100')

}else{
   prevGuess.push(guess) 
   if(numGuess === 11){
    displayGuess(guess)
    displayMessage(`Game over, random number was ${randomNumber}`)
    endGame();
} else {
    displayGuess(guess);
    checkGuess(guess);
  }
}
 
 
}

function checkGuess(guess){
// kahi jo value hai vo random number ka equal toh nhi hai
if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess){
    // apki values ko clean kare ga 
    userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
//   guess ki value ko push kar ta jaa rha hai
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
    userInput.value = '';
    // hum values ko clean kar rhe hai
  userInput.setAttribute('disabled', '');
  // user aur values enter nhi kar payeyword for disable
  // disabled ke
  p.classList.add('button');
  // button ki taraha behave kare
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;

  startOver.appendChild(p);
  playGame = false;
  newGame();
    
}


function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
}

