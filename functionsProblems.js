// write a javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two number is 100.

var firstNo = 20
var secondNo = 100

const myFunc = function(a, b) {
    if(a ==100 || b == 100 || a + b ==100 ){
        return true
    }
    else{
        return false;
    }
}
console.log(myFunc(firstNo, secondNo))

// ----------------------------------------------------------------------------------
// WAP to get the extension of a filename.
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));


// -----------------------------------------------------------------------------------
// WAP to create a new string from a given string the first 3 character and the last 3 characters of a string and adding them together. The string length should be greater than 3, if not then return the original string.
const makeString = (str) =>
    str.length<3 ? str : str.slice(0,3) + str.slice(-3);

console.log(makeString('ABC'));
console.log(makeString('ABCDEFGH'));
console.log(makeString('Ab'));

// ------------------------------------------------------------------------------------
// WAP to extract the first half of a string of even length.
function ExtractHalf(str){
    if(str.length%2 ===0){
        return str.slice(0,str.length/2);
    }
    else{
        return "String cannot be split as it is of odd length";
    }
}
console.log(ExtractHalf("ABCD"));