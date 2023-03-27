var firstCard = prompt("Enter 1st card number: ")
var secondCard = prompt("Enter 2nd card number: ")

let sum = parseInt(firstCard) + parseInt(secondCard)
let hasBlackJack = false
let isAlive = true
let message = " "
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard + " "
    sumEl.textContent = "Sum: " + sum
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

function newCard(){
    console.log("Drawing a new card from the deck...")
    let card = parseInt(prompt("Enter the new Card Number"))
    sum += card
    startGame()
}