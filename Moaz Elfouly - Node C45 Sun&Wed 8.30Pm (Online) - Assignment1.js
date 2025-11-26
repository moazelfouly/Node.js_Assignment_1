//#region
// Assignment1
// 1
// A. Part 1: Coding Questions (7.5 Grade):
// 1. Convert the string "123" to a number and add 7. (0.5 Grade)
// • Output Example: 130

//Answer
// let stringToConvert = "123";
// let result = Number(stringToConvert) + 7;
// console.log(result);
//#endregion

//#region
// 2. Check if the given variable is falsy and return "Invalid" if it is. (0.5 Grade)
// • Input Example: 0
// • Output Example: "Invalid"

//Answer
// let varToCheck = 0;
// varToCheck == false ? console.log("invalid") : console.log("valid");
//#endregion

//#region
// 3. Use for loop to print all numbers between 1 and 10, skipping even numbers using continue (0.5 Grade)
// • Output Example:1, 3, 5, 7, 9

//Answer
// for(let i = 1; i <= 10; i++){

//     if(i % 2 == 0) continue;
//     console.log(i);
// }
//#endregion

//#region
// 4. Create an array of numbers and return only the even numbers using filter method. (0.5 Grade)
// • Input Example: [1, 2, 3, 4, 5]
// • Output Example: [2,4]

//Answer
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = arr.filter((arr)=> {
//     return arr % 2 == 0;
// })
// console.log(result);
//#endregion

//#region
// 5. Use the spread operator to merge two arrays, then return the merged array. (0.5 Grade)
// • Input Example: [1, 2, 3], [4, 5, 6]
// • Output Example: [1, 2, 3, 4, 5, 6]

//Answer
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log(arr3);
//#endregion

//#region
// 6. Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday). (0.5 Grade)
// • Input Example: 2
// • Output Example: “Monday”

//Answer
// let day = 2;
// switch(day){
//     case 1:
//         console.log("Sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//         console.log("Tuesday");
//         break;
//     case 4:
//         console.log("Wednesday");
//         break;
//     case 5:
//         console.log("Thursday");
//         break;
//     case 6:
//         console.log("Friday");
//         break;
//     case 7:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Not a day");
// }
//#endregion

//#region
// 7. Create an array of strings and return their lengths using map method (0.5 Grade)
// • Input: ["a", "ab", "abc"]
// • Output Example: [1, 2, 3]

//Answer
// let arrOfStrings = ["Moaz", "Trainee", "Route"];
// let result = arrOfStrings.map((arrOfStrings) => {
//     return arrOfStrings.length;
// })
// console.log(result);
//#endregion

//#region
// 8. Write a function that checks if a number is divisible by 3 and 5. (0.5 Grade)
// • Input Example: 15
// • Output Example: “Divisible by both”

//Answer
// let num = 73;
// function divBy3And5(num){
//     num % 5 == 0 && num % 3 == 0 ? console.log("Divisble by both.") :
//     console.log("NOT divisible by both.");
// }

// divBy3And5(num);
//#endregion

//#region
// 9. Write a function using arrow syntax to return the square of a number (0.5 Grade)
// • Input Example: 5
// • Output Example: 25

//Answer
// let num = 5;
// const sqaureNum = num => num * num;
// console.log(sqaureNum(num));
//#endregion

//#region
// 10.Write a function that destructures an object to extract values and returns a formatted string. (0.5 Grade)
// • Input Example: const person = {name: 'John', age: 25}
// • Output Example: 'John is 25 years old'

//Answer
// const person = {name: 'John', age: 25}

// function formattedString(obj){
//     const {name, age} = obj;
//     return `${name} is ${age} years old.`;
// }
// console.log(formattedString(person));
//#endregion

//#region
// 11.Write a function that accepts multiple parameters (two or more) and returns their sum. (0.5 Grade)
// • Input Example: 1, 2, 3, 4, 5
// • Output Example: 15

//Answer
// function sum(...data){  
//     let sum = 0;
//     for(let i = 0; i < data.length; i++){
//         sum += data[i];
//     }
//     return sum;
// }
// console.log(sum(1, 2, 3, 4, 5));
//#endregion

//#region
// 12. Write a function that returns a promise which resolves after 3 seconds with a 'Success' message. (0.5 Grade)
// • Output Example: “Success”

//Answer
// function success(value){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(value == true){
//                 resolve("Success")
//             } else{
//                 reject("Fail");
//             }
//         }, 3000)
//     })
// }
// success(true).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// })
//#endregion

//#region
// 13. Write a function to find the largest number in an array. (0.5 Grade)
// • Input Example: [1, 3, 7, 2, 4]
// • Output Example: 7

//Answer
// let maxNum = -Infinity;
// function largestNumber(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > maxNum) maxNum = arr[i];
//     }
//     return maxNum;
// }
// let arr = [1, 3, 7, 2, 4];
// console.log(largestNumber(arr));
//#endregion

//#region
// 14. Write a function that takes an object and returns an array containing only its keys. (0.5 Grade)
// • Input Example: name: "John", age: 30}
// • Output Example: ["name", "age"]

//Answer
// function objKeys(obj){
//     return Object.keys(obj);
// }

// let person = {
//     name: "Moaz",
//     age: 25,
//     grade: 3.7
// }
// console.log(objKeys(person));
//#endregion

//#region
// 15. Write a function that splits a string into an array of words based on spaces. (0.5 Grade)
// • Input: "The quick brown fox"
// • Output: ["The", "quick", "brown", "fox"]

//Answer
// const splitString = sentence => sentence.split(" ");
// let phrase = "The quick brown fox";
// console.log(splitString(phrase));
//#endregion

//#region
// B. Part 2: Essay Questions (2.5 Grade):
// 1. What is the difference between forEach and for...of? When would you use each? (0.5 Grade)

//Answer
//1) Foreach: it is a method that can be used with arrays. It takes a callback function
// and each element of the array is sent to the callback. We cannot use break/continue inside foreach.
//The loop should continue till the end.

//2) For ... of: It is a new loop statement appeared with ES6. It works with any iterable such as
// arrays, strings and maps. We can use break/continue inside it. It is more readable and It is
//faster than foreach.
//#endregion

//#region
// 2. What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples. (0.5 Grade)

//Answer
//Hoisting means the raising of the declaration of a variable/function/...etc to the beginning of the
//scope we use inside. for instance:
// console.log(x);
// var x = 5;
//This will result in undefined as the declaration (var x;) was raised to the beginning
//of the scope before the access and was given an initialized value (undefined).
//On the other hand, TDZ is the space between the access of the variable and the initialization of the
//variable declared by let or const. This results in an error (cannot access before initialization).
// console.log(x);
// let x = 5;
//#endregion

//#region
// 3. What are the main differences between == and ===? (0.5 Grade)

//Answer
//The loose equality operator(==) compares just the value between the two operands,
//but the strict equality operator(===) compares the value and the datatypes of the two operands.
//#endregion

//#region
//4. Explain how try-catch works and why it is important in async operations. (0.5 Grade)

//Answer
//1) try - catch: We put the code between the try brackets and get the error in catch. It catches
//both sync and asyn code and it is a part of the language.
//2) catch: It comes in 2 cases:
// a) with promises: The catch here follows the promise chain. It catches the errors happen in the (then())
// or the promise itself.
// b) It also comes with async/await and follows the promise.
//#endregion

//#region
//5. What’s the difference between type conversion and coercion? Provide examples of each. (0.5 Grade)
//Answer
//1) Conversion: It means that we make the conversion deliberately. We mean the casting and
//we previously intend to do it. For example:
//let x = "5";
//x = Number(x);
//console.log(typeof(x)); //Number

//2) Coercion: It happens implicitly. We don't do it intentionally. For example:
//If we try to subtract 5(string) from 10(Number), The compiler will cast the 5(string) to Number implicitly.
//console.log(10 - "5"); //5
//#endregion