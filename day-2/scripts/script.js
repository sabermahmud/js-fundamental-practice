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

const temperatures = [32, 35, 30, 28, 36, 31];

let highestTemperature = temperatures[0];
let lowestTemperature = temperatures[0];

for (const temperature of temperatures){

    if(temperature > highestTemperature){
        highestTemperature = temperature
    }

    if(temperature < lowestTemperature){
        lowestTemperature = temperature
    }
}

console.log(highestTemperature, lowestTemperature)
