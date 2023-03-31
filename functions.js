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

// -----------------------------------------------------------------------------
// function expression
const myfunc = function(num1, num2){
    return num1 + num2;
}
console.log(myfunc);

const arrayFunc = function(array,target){
    for(let i=0; i<array.length; i++){
        if(array[i] === target){
            return "Element found in the array on index: " + i;
        }
    }
    return -1;
}

myarray = [1,2,3,4,5];
console.log(arrayFunc(myarray,1));