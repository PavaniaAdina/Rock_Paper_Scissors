/*
  Rock Paper Scissors game
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const totalScore = {computerScore:0,playerScore:0}

// ** getComputerChoice randomly selects between 'rock,paper,scissors' and returns that string**
//getComputerChoice() => rock or scissor or paper
//this function has no arguments inside
function getComputerChoice() {
  const rpsChoice = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random()*3)
  return rpsChoice[randomNumber]
  //so this function gives us the computer choice like by taking random() function so it will give either of 3
  //to correctly understand this function open randomFruit.js 
    
}

//**  getResult compares playerChoice & computerChoice and return sthe score accordingly **
// human wins - getResult('Rock', 'scissors') --> 1
// human loses - getResult('scissors', 'Rock') --> -1
// human draws - getResult('Rock', 'Rock') --> 0
function getResult(playerChoice, computerChoice) {
  //*This function will return the score on if you won,draw, or lose *
  let score;
  //All situations whre human draws , set score to 0
  if(playerChoice == computerChoice) {
    score = 0
    //All situations whre human wins , set score to 1
  } else if(playerChoice == 'Rock' && computerChoice == 'Scissors') {
    score = 1
  } else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
    score = 1
  } else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
    score = 1
    //All situations whre human loses , set score to -1
  } else {
    score = -1
  }
  //return score
  return score

}
// ** showResult udates the DOM to 'You win!' or 'You lose!' or 'its draw!' based on the score. Also shows playerChoice vs computerChoice**
//Function showResult() will be heavy on DOM manipulation
function showResult(score, playerChoice, computerChoice) {

// Hint : on a score of -1
//You should do result.innerText = "You Lose!"
//Don't forget to grab the div with result 'id'
  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')
  if(score == -1) {
    //These give texts in display as you won,you lose,tie
    resultDiv.innerText = 'You Lose!!'    
  } else if(score == 0) {
    resultDiv.innerText = "It's a tie!!"
  } else {
    resultDiv.innerText = "You Won!!"
  }

  //this hands div is used to display the choices like {rock vs paper, scissors vs paper ....}
  handsDiv.innerText = `👱${playerChoice} vs 🤖${computerChoice}`

  //this playScoreDiv displays the count of scores that changes for evry click 
  playerScoreDiv.innerText =`Score : ${totalScore['playerScore']}`

}
// ** Calculate who won and show it on the screen **
//OnClickRPS() should call upon getResult() and showResult() functions when the user clicks 
function onClickRPS(playerChoice) {

  const computerChoice = getComputerChoice()
  const score = getResult(playerChoice, computerChoice)
  totalScore['playerScore'] += score
  showResult(score,playerChoice,computerChoice)

}
// **Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  //use querySelector tp select all RPS Buttons
  const rpsButtons = document.querySelectorAll('.rpsButton')


  //* Adds an on click event listener to eacj RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked*
  
  //1.loop through the buttons using a for each loop
  //2. add a 'onclick' event listener to each button
  //3.call the onClickRPS button function every time someone clicks
  //4.make sure to pass the curently selected rps bbutton as argument
  rpsButtons.forEach(rpsButton => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value)
  })

  //Red Button - Used to reset all score i.e,,to start a new game or stop existing game
  //Add a click listener to the end game button that runs the endGame() function on click

  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame()

}
// **endGame function clears all the text on the DOM**
function endGame(totalScor) {
  totalScore['playerScore'] = 0
  totalScore['computerScore'] = 0

  const resultDiv = document.getElementById('result')
  const handsDiv = document.getElementById('hands')
  const playerScoreDiv = document.getElementById('player-score')

  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}
playGame()


//Hint - Event LIsteners like onClick() wait for an event to occur. An example is a user clicking the mouse or pressing a key on the keyboard
//challenge - add playerScore and computerScore on our own