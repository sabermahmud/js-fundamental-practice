console.log('day 2 is started')
/*Day 02 — Arrays Fundamentals
📖 আজকের Documentation
আজ practice শুরুর আগে MDN-এ এগুলো পড়বে (১০–১৫ মিনিট):
Array
length
Array indexing (0-based indexing)
*/
/*Problem 1 — Create & Access
const fruits = ["Apple", "Banana", "Mango", "Orange"];
কাজ:
প্রথম element print করো।
শেষ element print করো।
Array-এর length print করো।
*/

// const fruits = ["Apple", "Banana", "Mango", "Orange"];
// // get first element
// console.log(fruits[0]);
// // get last element
// console.log(fruits.at(-1))
// console.log(fruits[fruits.length-1])
// // get length of array
// console.log(fruits.length);




/*
Problem 2 — Update Element
const colors = ["Red", "Green", "Blue"];
কাজ:
"Green"-এর জায়গায় "Yellow" বসাও।
Updated array print করো।
*/
// const colors = ["Red", "Green", "Blue"];
// colors[1] = "Yellow"
// console.log(colors)




/*
Problem 3 — Add Elements
const numbers = [10, 20, 30];
কাজ:
শেষে 40 যোগ করো।
শুরুতে 0 যোগ করো।
Array print করো।
⚠️ Hint: Documentation পড়ে method খুঁজে বের করবে।
*/
// const numbers = [10, 20, 30];
// numbers.push(40)
// numbers.unshift(0)
// console.log(numbers);




/*
Problem 4 — Remove Elements
const cities = ["Dhaka", "Riyadh", "Madinah", "Jeddah"];
কাজ:
প্রথম element remove করো।
শেষ element remove করো।
Updated array print করো।
*/
// const cities = ["Dhaka", "Riyadh", "Madinah", "Jeddah"];

// cities.shift();
// cities.pop();
// console.log(cities)



/*
Problem 5 — Loop & Sum
const marks = [70, 85, 90, 60, 95];
Loop ব্যবহার করে:
সব marks-এর যোগফল বের করো।
Expected Output:
Total Marks: 400
*/
// let totalMark = 0;

// const marks = [70, 85, 90, 60, 95];

// for (let mark of marks){
//     totalMark += mark
// }

// console.log(totalMark);



/*
🌟 Bonus Challenge
const temperatures = [32, 35, 30, 28, 36, 31];
Loop ব্যবহার করে বের করো:
Highest temperature
Lowest temperature
⚠️ Math.max() বা Math.min() ব্যবহার করবে না।
*/

// const temperatures = [32, 35, 30, 28, 36, 31];

// let highestTemperature = temperatures[0];
// let lowestTemperature = temperatures[0];

// for (const temperature of temperatures){

//     if(temperature > highestTemperature){
//         highestTemperature = temperature
//     }

//     if(temperature < lowestTemperature){
//         lowestTemperature = temperature
//     }
// }

// console.log(highestTemperature, lowestTemperature)




// p6 **********************************************
/*
Problem 6 — Even Numbers
const numbers = [12, 7, 9, 20, 15, 18];
Loop ব্যবহার করে শুধু even number-গুলো print করো।
Expected Output:
12
20
18
⚠️ filter() ব্যবহার করবে না।
*/
// const numbers = [12, 7, 9, 20, 15, 18];

// for(const number of numbers){
//     if(number % 2 === 0){
//         console.log(number)
//     }
// }



// p7 **********************************************
/*
Problem 7 — Count Even Numbers
একই array ব্যবহার করো।
Loop ব্যবহার করে even number কয়টি আছে বের করো।
Expected Output:
Total Even Numbers: 3
*/
// const numbers = [12, 7, 9, 20, 15, 18];
// let count = 0;
// for( const number of numbers ){
//     if(number % 2 === 0){
//         count ++
//     }
// }

// console.log(count);





// p8 **********************************************
/*
Problem 8 — Average Marks
const marks = [70, 85, 90, 60, 95];
Loop ব্যবহার করে average বের করো।
Expected Output:
Average Marks: 80
*/
// const marks = [70, 85, 90, 60, 95];
// let totalMark = 0;
// for(const mark of marks){
//     totalMark += mark;
// }
// const averageMarks = totalMark / marks.length;
// console.log(averageMarks)


// p9 **********************************************
/*
Problem 9 — Find a Name
const students = ["Saber", "Ali", "Omar", "Hasan"];
Loop ব্যবহার করে check করো "Omar" আছে কি না।
Output: Found   অথবা Not Found
⚠️ includes() ব্যবহার করবে না।
*/
// const students = ["Saber", "Ali", "Omar", "Hasan"];

// let isFound = false

// for (const student of students) {

//     if (student === "Omar") {
//         isFound = true
//         break
//     }

// }

// if (isFound) {
//     console.log("Found")
// }
// else {
//     console.log("Not Found")
// }





// bonus-2 ********************************************
/*
🌟 Bonus Challenge
const numbers = [2, 4, 6, 8];
Loop ব্যবহার করে সব সংখ্যার গুণফল বের করো।
Expected Output: 384:
*/

const numbers = [2, 4, 6, 8];

let result = 1;

for (const number of numbers){
    result = result * number
}
console.log(result)