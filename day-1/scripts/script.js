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
const student = {
  name: "Saber",
  age: 30,
  country: "Bangladesh"
};
const key = "name";
console.log(student.key)


// 

