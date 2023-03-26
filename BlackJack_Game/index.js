var firstCard = 2
var secondCard = 19
let hasBlackJack = false
let isAlive = true

let sum = firstCard + secondCard;

if(sum < 21){
    console.log("Do you want to draw a new card?");
    // hasBlackJack = false;
    // isAlive = true;
}
else if(sum === 21){
    console.log("Congratulations! You've got BlackJack!");
    hasBlackJack = true;
    // isAlive = true;
}
else{
    console.log("You are out of the game!");
    // hasBlackJack = false;
    isAlive = false;
}

console.log(isAlive)
console.log(hasBlackJack)