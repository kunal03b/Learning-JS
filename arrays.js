// // Primitive vs reference data types
// // Privitive types
// let str1 = "Kunal"
// let str2 = str1
// console.log(str1)
// console.log(str2)

// str1 = "Sharma"
// console.log(str1)
// console.log(str2)

// // Reference Data types

// let arr1 = ["item1","item2"]
// let arr2 = arr1
// console.log(arr1)
// console.log(arr2)

// arr1.push("item3")
// console.log(arr1)
// console.log(arr2)



// // spread operator
// array1 = ["item1","item2","item3"]
// array2 = [...array1] //spread operator
// console.log(array1)
// console.log(array2)

// array1.push("item4")
// // to prevent copying the added element in the clone array
// console.log()
// console.log(array1===array2);
// console.log("After Applying === Operator: ")
// console.log(array1)
// console.log(array2)


// // anothe way to copy array elements into another array
// console.log()
// console.log("Clone Array using Slice: ")
// let ar1 = ["item1",]
// let ar2 = ar1.slice(0);
// console.log(ar1)
// console.log(ar2)


// // Addng more elements in the array
// let ar3 = array1.slice(0).concat(array2);
// console.log(ar3)

// let ar4 = array1.slice(0).concat(["itm3", "itm4"]);
// console.log(ar4)
// console.log()

// Array Destructuring
// console.log("Array Destructuring")
// let arr1 = ["item1", "item2", "item3", "item4","item5","item6"];
// // let newVar1 = arr1[0];
// // let newVar2 = arr1[1];
// // console.log(newVar1)
// // console.log(newVar2)
// let [newVar1,,newVar3,...newVar4] = arr1     //spread operator ...
// console.log(newVar1)
// console.log(newVar3)
// console.log(newVar4)

// Importtant array methods--------------------------------------------------------------
// forEach method----------------------------------
const users = [
    {firstName: "Kunal",age: 19},
    {firstName: "Aman", age: 21},
    {firstName: "Nitish",age:20},
]
// users.forEach(function(user){
//     console.log(user.firstName)
// })
users.forEach((user,index)=>{
    console.log(user.firstName,index);
})