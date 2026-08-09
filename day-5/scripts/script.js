console.log("connected")
/*
Level 1 — খুব সহজ
1️⃣ map() — Price বের করো
const products = [
  { name: "Phone", price: 1200 },
  { name: "Laptop", price: 2500 },
  { name: "Watch", price: 500 }
];
*/
function getPrices (products) {
    const prices = products.map(product => product.price)
    return prices
}
console.log(getPrices([
  { name: "Phone", price: 1200 },
  { name: "Laptop", price: 2500 },
  { name: "Watch", price: 500 }
]))
/*
👉 শুধু price-গুলোর একটা নতুন array তৈরি করো।

Expected:

[1200, 2500, 500]
*/
/*
2️⃣ filter() — দামি Product

উপরের products array থেকে শুধু যেসব product-এর price 1000-এর বেশি, সেগুলো বের করো।

Expected:

[
  { name: "Phone", price: 1200 },
  { name: "Laptop", price: 2500 }
]
*/
/*

3️⃣ find() — Samsung খুঁজো
const phones = [
  { brand: "Samsung", price: 1200 },
  { brand: "Apple", price: 2000 },
  { brand: "Xiaomi", price: 900 }
];

👉 প্রথম Samsung phone-টা খুঁজে বের করো।
*/
/*

4️⃣ reduce() — Total
const prices = [100, 200, 300, 400];

👉 সব price যোগ করে total বের করো।

Expected:

1000
*/
/*

🟡 Level 2 — একটু চিন্তা করতে হবে
5️⃣ map() — Double Price
const prices = [100, 200, 300, 400];

👉 প্রতিটি price-এর দ্বিগুণ করে নতুন array তৈরি করো।

Expected:
[200, 400, 600, 800]
*/
/*

6️⃣ filter() — Even Numbers
const numbers = [10, 15, 20, 25, 30, 35];

👉 শুধু even numbers বের করো।

Expected:

[10, 20, 30]
*/
/*

7️⃣ find() — RAM 12
const phones = [
  { brand: "Samsung", ram: 8 },
  { brand: "Apple", ram: 6 },
  { brand: "Xiaomi", ram: 12 },
  { brand: "OnePlus", ram: 16 }
];

👉 প্রথম যে phone-এর RAM 12, সেটা খুঁজে বের করো।
*/
/*

8️⃣ reduce() — Highest Number
const numbers = [12, 45, 23, 67, 34];

👉 reduce() ব্যবহার করে সবচেয়ে বড় number বের করো।

⚠️ Math.max() ব্যবহার করা যাবে না।

🟠 Level 3 — Real-world Practice
*/
/*

9️⃣ filter() + map()
const phones = [
  { brand: "Samsung", price: 1200 },
  { brand: "Apple", price: 2000 },
  { brand: "Xiaomi", price: 900 },
  { brand: "OnePlus", price: 1500 }
];
👉 যেসব phone-এর price 1000-এর বেশি, তাদের brand name বের করো।
Expected:
["Samsung", "Apple", "OnePlus"]
*/
/*

🔟 filter() + reduce()
const products = [
  { name: "Phone", price: 1200, stock: true },
  { name: "Laptop", price: 2500, stock: false },
  { name: "Watch", price: 500, stock: true },
  { name: "Tablet", price: 1000, stock: true }
];
👉 শুধু যেসব product stock-এ আছে, তাদের total price বের করো।
Expected:
2700
*/
/*

1️⃣1️⃣ find() + Object
const students = [
  { name: "Rahim", marks: 70 },
  { name: "Karim", marks: 85 },
  { name: "Sakib", marks: 92 },
  { name: "Nadia", marks: 78 }
];

👉 যার marks 90-এর বেশি, সেই student-কে খুঁজে বের করো।

Expected:

{ name: "Sakib", marks: 92 }
*/
/*

1️⃣2️⃣ map() — Object থেকে নতুন Object
const users = [
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 30 },
  { name: "Nadia", age: 22 }
];

👉 প্রত্যেক user-এর জন্য এমন নতুন object তৈরি করো:

{
  name: "Rahim",
  isAdult: true
}

অর্থাৎ age >= 18 হলে isAdult: true হবে।
*/
/*

🔥 Challenge — সবগুলো একসাথে
const phones = [
  { brand: "Samsung", price: 1200, ram: 8 },
  { brand: "Apple", price: 2000, ram: 6 },
  { brand: "Xiaomi", price: 900, ram: 12 },
  { brand: "OnePlus", price: 1500, ram: 16 },
  { brand: "Realme", price: 700, ram: 8 }
];
*/