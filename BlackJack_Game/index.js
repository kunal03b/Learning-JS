var firstCard = 11
var secondCard = prompt("Enter the 2nd card number");
let sum = firstCard + secondCard;
let hasBlackJack = false
let isAlive = true
let message = " "
let messageEl = document.getElementById("message-el")
console.log(messageEl)

function startGame(){
    if(sum < 21){
        message = "Do you want to draw a new card?"
        // hasBlackJack = false;
        // isAlive = true;
    }
    else if(sum === 21){
        message = "Congratulations! You've got BlackJack!"
        hasBlackJack = true;
        // isAlive = true;
    }
    else{
        message = "You are out of the game!"
        // hasBlackJack = false;
        isAlive = false;
    }
    messageEl.textContent = message
}