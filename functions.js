// functions
const prompt = require("prompt-sync")();

function func(num1, num2){
    addition = num1 + num2;
    return addition;
}
num1 = parseInt(prompt("ENter 1st number"));
num2 = parseInt(prompt("ENter 2nd number"));
var result1  = func(num1,num2)

console.log(result1)

var person = {
    name : "Kunal"
}
console.log(Object.values(person));
console.log(Object.keys(person));

console.log("Sharma".toUpperCase());