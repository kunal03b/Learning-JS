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
// const myfunc = function(num1, num2){
//     return num1 + num2;
// }
const myfunc =(num1, num2) => {
    return num1 + num2;
}
console.log(myfunc);

// program to find wheather any number is present in the array  and if present then what's the index 
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

// --------------------------------------------------------------------
// Lexical scope
// let and const are block scope.....var is function scope

// Default parameter
var myfunction = (a,b) => {
    if(typeof b=== 'undefined'){
        b = 1;
    }
    return a+b;
}
console.log(myfunction(1))

// another way to make parameter default
function sum(a,b=1){
    return a+b;
}
console.log(sum(3))
console.log()

// rest parameter---------------------------
const makeArray = (a,b,c,...d) =>{
    console.log("Inside a",a);
    console.log("Inside b",b);
    console.log("Inside c",c);
    console.log("Inside d",d);
}
makeArray(1,2,3,4,5,6,7);

// param destructuring
const persons = {
    firstName : "John",
    age: 19
}
function getDetails(firstName,age){
    console.log(firstName)
    console.log(age)
} 
getDetails(persons)

// callback functions---------------------------

function toCall(Num){
    console.log("Heyy there.. I am coming from called function...");
    console.log("The value is:",Num);
}
function giveCall(call){
    console.log("Hiii I am calling the function...");
    call(8);
}
giveCall(toCall);

// function calling function---------------------
// function func1(){
//     function func2(){
//         console.log("Hii");
//     }
//     console.log("Hlo")
// }
// const calling = func1();
// calling()

// const num = numbers.Map();
// console.log(number)