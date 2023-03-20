// write a javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two number is 100.

var firstNo = 50
var secondNo = 50

const myFunc = function(a, b) {
    if(a ==100 || b == 100 || a + b ==100 ){
        return true
    }
    else{
        return false;
    }
}

console.log(myFunc(firstNo, secondNo))