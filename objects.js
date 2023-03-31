// const key = "email"
// const person = {
//     name: "John",
//     rollNo: "1",
//     age: "22",
//     favFood: ["Chowmin", "Burger","Pizza"]
// }
// // console.log(person)
// // person.gender = "male";
// // console.log(person)
// // console.log(person.name)
// // console.log(person["gender"])
// person[key] = "john@email.com";
// console.log(person)
// console.log();

// // // Iterate through objects
// // // for in loop
// // for(let keys in person) {
// //     console.log(person[keys]);
// // }
// // for(let keys in person) {
// //     console.log(`${key}:${person[keys]}`);
// // }

// // for of loop
// for(let data of Object.keys(person)){
//     console.log(person[data]);
// }


// // Computed Properties
// const key1 = "Name"
// const key2 = "Age"
// const key3 = "Gender"

// const val1 = "John"
// const val2 = "19"
// const val3 = "Male"

// const obj = {
//     [key1] : val1,
//     [key2] : val2,
//     [key3] : val3
// }
// console.log(obj)
// // another way to create an object with the same way
// const obj2 = {};
// obj2[key1] = val1;
// obj2[key2] = val2;
// obj2[key3] = val3;
// console.log(obj2)
// console.log()

// // Spread operator in Object
// const obj1 = {
//     key1: "value1",
//     key2: "value2",
// };
// const obj2 = {
//     key1: "newValue",
//     key3: "value3",
//     key4: "value4",
// };

// const newObj = {...obj1,...obj2}
// // const newObj = {...obj2,...obj1}
// console.log(newObj)

// // Object Destructuring 
// const personData = {
//     name: "John",
//     age : "19",
//     rollNumber : "1",
//     phoneNo: "830729***",
//     Address: "Haryana"
// }
// let{name:studentName,age:studentAge,rollNumber:studentRollNo,...AdditionalData} = personData;
// console.log(studentName,studentAge,studentRollNo)
// console.log(AdditionalData)

// object inside array
const StudentData = [
    {name:"Kunal",age:19,ROllNo:2534},
    {name:"Nitish",age:19,RollNo:2520},
    {name:"Aman",age:20,RollNo:2528}
]
// console.log(StudentData) 
for(let Student of StudentData){
    // console.log(Student)
    console.log(Student.name)
} 

// Nested Destructuring
const[{name: FirstName},user2 , {RollNo:number}] = StudentData
console.log(FirstName)
console.log(user2)
console.log(number)
