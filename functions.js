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
console.log()

// ----------------------------------------------------------------------------
// arrow functions
const isEven = (number) => {
    return number%2 ===0;
}
takeNumber = prompt("Enter number to check: ")
console.log(isEven(takeNumber)); 

// ---------------------------------------------------------------------
// function inside function
const func1 = () => {
    console.log("Coming from func1");
    const func12 = () => {
        console.log("Coming from function 12");
        const func121 = () => {
            console.log("Coming from func121");
            // func121()
        }
        func121()
    }
    func12();
}
func1()