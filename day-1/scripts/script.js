/*
Problem 1 — Property Access
নিচের object থেকে name, price, এবং brand console-এ print করো।
const laptop = {
    name: "Modern 14",
    brand: "MSI",
    price: 3200
}*/

const laptop = {
    name: "Modern 14",
    brand: "MSI",
    price: 3200
}
// const { name, brand, price } = laptop;
// console.log(`
//     Model: ${name}
//     Brand: ${brand}
//     Price: ${price}
//     `)
// p2 ************************************
/*
Problem 2 — Update Property
price-কে 3500 করো।
তারপর নতুন একটি property যোগ করো:
*/
// laptop.price = 3500;
// console.log(laptop)

// p3************************************
/*
Problem 3 — Delete Property
Object থেকে brand property delete করো।
*/
// delete laptop.brand;
// console.log(laptop)


// p4************************************
/*Problem 4 — Dynamic Property Access
const student = {
  name: "Saber",
  age: 30,
  country: "Bangladesh"
};
একটি variable তৈরি করো:
const key = "country";
এখন variable ব্যবহার করে value print করো।
*/
// const student = {
//   name: "Saber",
//   age: 30,
//   country: "Bangladesh"
// };
// const key = "name";
// console.log(student.key)

// p5 ***************************************
/*
Problem 5 — Object Iteration
নিচের object-এর সব key এবং value print করো।
const product = {
  name: "Mouse",
  price: 500,
  stock: 12
};
*/
// const product = {
//   name: "Mouse",
//   price: 500,
//   stock: 12
// };

// for( let prop in product ){
//     console.log(`${prop}: ${product[prop]}`)
// }


//p6 ******************************************
/*
Problem 6 — Employee Object
একটি object তৈরি করো।
name
position
salary
department
isActive
তারপর—
    1. Salary update করো। 
    2. নতুন property experience যোগ করো। 
    3. department delete করো। 
    4. for...in দিয়ে সব key ও value print করো। 
*/
// const employee = {
//     name: "Md Saber Mahmud",
//     position: "Junior Developer",
//     salary: 3000,
//     department: "Frontend",
//     isActive: true
// }
// employee.salary = 3500;
// employee.experience = "3 years";
// delete employee.department;
// console.log(employee);

// for(const key in employee){
//     console.log(`${key}: ${employee[key]}`)
// }

//p7 *******************************************
/*
Problem 7 — Book Inventory
const book = {
  title: "Eloquent JavaScript",
  author: "Marijn Haverbeke",
  price: 45,
  stock: 8
};
করতে হবে:
    • Price 50 করো। 
    • publisher যোগ করো। 
    • Dynamic property access ব্যবহার করে author print করো। 
    • সব key-value print করো। 
⚠️ book.author ব্যবহার করবে না।
*/

// const book = {
//   title: "Eloquent JavaScript",
//   author: "Marijn Haverbeke",
//   price: 45,
//   stock: 8
// };

// book.price = 50;
// book.publisher = "Tech Publisher"

// const key = "author";


// for(const property in book){
//     console.log(`${property}: ${book[property]}`)
// }

// p8 *************************************************
/*
Problem 8 — Shopping Cart
const cart = {
  phone: 2,
  mouse: 3,
  keyboard: 1,
  monitor: 2
};
Challenge:
Loop ব্যবহার করে মোট product quantity বের করো।
Expected Output:
Total Quantity: 8
*/
// let totalQuantity = 0;
// const cart = {
//   phone: 2,
//   mouse: 3,
//   keyboard: 1,
//   monitor: 2
// };
// for(const product in cart){
//     totalQuantity += cart[product]
// }
// console.log(totalQuantity)


// p9 ****************************************
/*
Problem 9 — User Profile
const user = {
  firstName: "Saber",
  lastName: "Mahmud",
  age: 30
};
Function লিখো:
getFullName(user)
Expected Output:
Saber Mahmud
*/
// const user = {
//   firstName: "Saber",
//   lastName: "Mahmud",
//   age: 30
// };
// const getFullName = ({firstName, lastName})=>`${firstName} ${lastName}` 

// const userName = getFullName(user);
// console.log(userName);


// p10 **********************************************
/*
Problem 10 — Thinking Challenge
Output কী হবে?
const product = {
  name: "Mouse"
};

const key = "name";

console.log(product.key);
console.log(product[key]);
console.log(product["key"]);
console.log(product["name"]);
Run করার আগে output predict করবে।
*/

const product = {
  name: "Mouse"
};

const key = "name";

console.log(product.key);
console.log(product[key]);
console.log(product["key"]);
console.log(product["name"]);