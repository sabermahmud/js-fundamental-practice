console.log("connected")
/*
Level 1 — খুব সহজ
1️⃣ map() — Price বের করো
const products = [
  { name: "Phone", price: 1200 },
  { name: "Laptop", price: 2500 },
  { name: "Watch", price: 500 }
];

👉 শুধু price-গুলোর একটা নতুন array তৈরি করো।

Expected:

[1200, 2500, 500]
*/
function getPrices(products) {
  const prices = products.map(product => product.price)
  return prices
}
console.log(getPrices([
  { name: "Phone", price: 1200 },
  { name: "Laptop", price: 2500 },
  { name: "Watch", price: 500 }
]))
/*
2️⃣ filter() — দামি Product

উপরের products array থেকে শুধু যেসব product-এর price 1000-এর বেশি, সেগুলো বের করো।

Expected:

[
  { name: "Phone", price: 1200 },
  { name: "Laptop", price: 2500 }
]
*/
const getCostlyProducts = (products) => {

  const costlyProducts = products.filter(product => product.price > 1000)
  return costlyProducts
}
console.log(getCostlyProducts([
  { name: "Phone", price: 1200 },
  { name: "Laptop", price: 2500 },
  { name: "Watch", price: 500 }
]))

/*

3️⃣ find() — Samsung খুঁজো
const phones = [
  { brand: "Samsung", price: 1200 },
  { brand: "Apple", price: 2000 },
  { brand: "Xiaomi", price: 900 }
];

👉 প্রথম Samsung phone-টা খুঁজে বের করো।
*/
const getSamsung = (phones) => {
  const samsungPhone = phones.find(product => product.brand === "Samsung")
  return samsungPhone
}
console.log(getSamsung([
  { brand: "Samsung", price: 1200 },
  { brand: "Apple", price: 2000 },
  { brand: "Xiaomi", price: 900 }
]))
/*

4️⃣ reduce() — Total
const prices = [100, 200, 300, 400];

👉 সব price যোগ করে total বের করো।

Expected:

1000
*/
const getTotal = (prices) => {
  const total = prices.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)
  return total
}
console.log(getTotal([100, 200, 300, 400]))
/*

🟡 Level 2 — একটু চিন্তা করতে হবে
5️⃣ map() — Double Price
const prices = [100, 200, 300, 400];

👉 প্রতিটি price-এর দ্বিগুণ করে নতুন array তৈরি করো।

Expected:
[200, 400, 600, 800]
*/
const doubleAllPrices = (prices) => {
  const doublePrices = prices.map(price => price * 2)
  return doublePrices;
}
console.log(doubleAllPrices([100, 200, 300, 400]))
/*

6️⃣  — Even Numbers
const numbers = [10, 15, 20, 25, 30, 35];
👉 শুধু even numbers বের করো।
Expected:
[10, 20, 30]
*/
const getEvenNumbers = (numbers) => {
  const evenNumbers = numbers.filter(number => number % 2 === 0)
  return evenNumbers
}
console.log(getEvenNumbers([10, 15, 20, 25, 30, 35]))
/*

7️⃣ — RAM 12
const phones = [
  { brand: "Samsung", ram: 8 },
  { brand: "Apple", ram: 6 },
  { brand: "Xiaomi", ram: 12 },
  { brand: "OnePlus", ram: 16 }
];
👉 প্রথম যে phone-এর RAM 12, সেটা খুঁজে বের করো।
*/
const getRam12Phone = (phones) => {
  const ram12Phone = phones.find(phone => phone.ram === 12)
  return ram12Phone
}
console.log(getRam12Phone([
  { brand: "Samsung", ram: 8 },
  { brand: "Apple", ram: 6 },
  { brand: "Xiaomi", ram: 12 },
  { brand: "OnePlus", ram: 16 }
]))
/*

8️⃣  — Highest Number
const numbers = [12, 45, 23, 67, 34];
👉 reduce() ব্যবহার করে সবচেয়ে বড় number বের করো।
⚠️ Math.max() ব্যবহার করা যাবে না।
*/
const getLargestNumber = (numbers) => {
  const largestNumber = numbers.reduce((accumulator, currentValue) => {
    return accumulator > currentValue ? accumulator : currentValue;
  }, 0)
  return largestNumber;
}
console.log(getLargestNumber([12, 45, 23, 67, 34]))
/*

🟠 Level 3 — Real-world Practice
9️⃣  
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
const getBiggerThen1000 = (phones) => {
  const biggerThen1000 = phones.filter(phone => phone.price > 1000)

  const biggerBrands = biggerThen1000.map(x => x.brand)

  return biggerBrands;
}
console.log(getBiggerThen1000([
  { brand: "Samsung", price: 1200 },
  { brand: "Apple", price: 2000 },
  { brand: "Xiaomi", price: 900 },
  { brand: "OnePlus", price: 1500 }
]))
/*

🔟 
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
const getStockInProducts = (products) => {
  const stockedProducts = products.filter(product => product.stock === true)

  const inStockProductsTotalPrice = stockedProducts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
  }, 0)
  return inStockProductsTotalPrice
}
console.log(getStockInProducts([
  { name: "Phone", price: 1200, stock: true },
  { name: "Laptop", price: 2500, stock: false },
  { name: "Watch", price: 500, stock: true },
  { name: "Tablet", price: 1000, stock: true }
]))
/*

1️⃣1️⃣  + Object
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
const findTarget = (students) => {
  const targetedStudent = students.find(student => student.marks > 90)
  return targetedStudent
}
console.log(findTarget([
  { name: "Rahim", marks: 70 },
  { name: "Karim", marks: 85 },
  { name: "Sakib", marks: 92 },
  { name: "Nadia", marks: 78 }
]))
/*

1️⃣2️⃣  — Object থেকে নতুন Object
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
const getAdultStudents = (students) => {
  const adultStudent = students.map(student => {

    const adults = {
      name: student.name,
      isAdult: student.age >= 18 ? true : false
    }
    return adults
  }
  )
  return adultStudent
}
console.log(getAdultStudents([
  { name: "Rahim", age: 25 },
  { name: "Karim", age: 30 },
  { name: "Nadia", age: 19 }
]))
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