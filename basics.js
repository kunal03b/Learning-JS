var firstname = "Kunal";
var age = 19;
var isMale = true;
var balance = 11.12
var dob = new Date(2003,11,11);
var person = {}
var empty = undefined

console.log(firstname);
console.log(typeof firstname);
console.log(firstname.toUpperCase());
console.log(age);
console.log(typeof age);
console.log(isMale);
console.log(typeof isMale);
console.log(balance);
console.log(typeof balance);
console.log(dob);
console.log(typeof dob);
console.log(person);
console.log(typeof person);
console.log(empty);
console.log(typeof empty);

// ----------------
a = "King";
b = "Lion";
console.log(`${a}   ${b.toUpperCase()}`);



// -------------Objects --------------------
var Person = {
    firstName : "Kunal Sharma",
    age : 19,
    isMale : true,
    balance : 11.12,
    dob : new Date(2003,11,12).toJSON(),
    address: {
        city: "Kaithal",
        postCode: "136027",
    }
};
console.log(Person);
console.log(Person.address.city);
console.log(Object.values(Person));
console.log(JSON.stringify(Person));




// ------------Boolean --------------------
var isAdult = true;
var isChildren = false;
console.log(isAdult);

if(!isAdult) {       //! is used to reverse the boolean value
console.log("is not adult")
}else{
    console.log(`${firstname} is Adult`)
}



// ------------Arrays--------------
var names = ["Sahil","Sushant","Vishal"]
console.log(`${names}`);
console.log(names);
console.log("Index 0 : " + names[0]);
console.log("Index 4 : " + names[4]);
console.log("size of array: " + names.length);