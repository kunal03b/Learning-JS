const key = "email"
const person = {
    name: "John",
    rollNo: "1",
    age: "22",
    favFood: ["Chowmin", "Burger","Pizza"]
}
// console.log(person)
// person.gender = "male";
// console.log(person)
// console.log(person.name)
// console.log(person["gender"])
person[key] = "john@email.com";
console.log(person)
console.log();

// // Iterate through objects
// // for in loop
// for(let keys in person) {
//     console.log(person[keys]);
// }
// for(let keys in person) {
//     console.log(`${key}:${person[keys]}`);
// }

// for of loop
for(let data of Object.keys(person)){
    console.log(person[data]);
}
 