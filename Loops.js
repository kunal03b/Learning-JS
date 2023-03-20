// Loops

var names = [
    "John",
    "Sushi",
    "Momo",
    "Pant"
]

for(var i =0;i< names.length;i++){
    console.log(names[i]);
}

console.log();

// Forof loop
for(const name of names){
    console.log(name);
}
console.log();

console.log("forEach loop".toUpperCase());
// for_each loop
names.forEach(function(Username){
    console.log(Username);
})



// --------------While loop------------
console.log()
console.log("While Loop".toUpperCase());
index = 0;
while(index < names.length){
    console.log(names[index]);
    index = index+1;
}
console.log();



// ----------------DO While loop------
console.log("DO while loop".toUpperCase());
console.log();
// index = 1;
do{
    console.log(names);
}while(names.length < index );
console.log();
console.log();


// -----------Break and Continue --------------------------------
console.log("Break and Continue".toUpperCase());
for(var i = 0;i<names.length;i++){
    if(i <2){
        continue;
    }
    console.log(names[i]);
    // if(i ==2){
    //     break;
    // }
}
console.log(); 

// hoisting