// console.log("day 3 Connected")
// /*
// map() – ১০টি Practice
// ধরো,
// const numbers = [5, 10, 15, 20, 25];
// প্রতিটি সংখ্যাকে 2 দিয়ে গুণ করো।
// */
// const numbers = [5, 10, 15, 20, 25];
// console.log("original array:", numbers)
// const double = numbers.map(number => number * 2)
// console.log(double)

// /*
// প্রতিটি সংখ্যার সাথে 10 যোগ করো।
// */
// const add10 = numbers.map(number => number + 10)
// console.log(add10)

// /*
// প্রতিটি সংখ্যার square বের করো।
// */
// const square = numbers.map(number => number * number)
// console.log(square)

// /*
// প্রতিটি সংখ্যাকে string-এ convert করো।
// */
// const convertToString = /*numbers.map(number => number.toString())*/
//     numbers.map(String)
// console.log(convertToString)

// /*
// প্রতিটি সংখ্যার আগে "Number: " যোগ করো।
// */
// const startWithNumber = numbers.map(number => "Number : " + number)
// console.log(startWithNumber)



// /*
// ধরো,
// const phones = [
//   { brand: "Samsung", price: 1200 },
//   { brand: "Apple", price: 2000 },
//   { brand: "Xiaomi", price: 900 }
// ];

// শুধু সব brand-এর নামের array বানাও।
// */
// const phones = [
//     { brand: "Samsung", price: 1200 },
//     { brand: "Apple", price: 2000 },
//     { brand: "Xiaomi", price: 900 }
// ];
// const brandsName = phones.map(phone => phone.brand)
// console.log(brandsName)


// /*
// শুধু সব price-এর array বানাও।
// */
// const priceArr = phones.map(phone => phone.price)
// console.log(priceArr)

// /*
// প্রতিটি phone-এর price-এ 100 যোগ করে নতুন object তৈরি করো।
// */
// const add100ToPrice = phones.map(phone => ({ ...phone, price: parseInt(phone.price) + 100}));
// console.log(add100ToPrice)

// /*
// প্রতিটি brand-কে uppercase করো।
// */
// const brandNamesToUpperCase = phones.map(phone => phone.brand.toUpperCase())
// console.log(brandNamesToUpperCase)

// /*
// "Samsung - 1200" এর মতো string-এর array বানাও।
// */

// const createStingArr = phones.map(phone => `${phone.brand} - ${phone.price}`)
// console.log(createStingArr)



/*
🔵 filter() – ১০টি Practice
const numbers = [5, 10, 15, 20, 25, 30];
15-এর বেশি সংখ্যা বের করো।
*/
// const numbers = [5, 10, 15, 20, 25, 30];
// const biggerThen15 = numbers.filter(number => number > 15);
// console.log(biggerThen15)
// /*
// শুধু even সংখ্যা বের করো।
// */
// const getEvenNumber = numbers.filter(number => number % 2 === 0);
// console.log(getEvenNumber)
// /*
// শুধু odd সংখ্যা বের করো।
// */
// const getOddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(getOddNumbers)
// /*
// 20-এর কম সংখ্যা বের করো।
// */
// const getLessThen20 = numbers.filter(number => number < 20);
// console.log(getLessThen20);
// /*
// 10 এবং 25-এর মাঝের সংখ্যা বের করো।
// */
// const getMidNumbers = numbers.filter(number => number > 10 && number < 25)
// console.log(getMidNumbers)
/*
const phones = [
  { brand: "Samsung", price: 1200, ram: 8 },
  { brand: "Apple", price: 2000, ram: 6 },
  { brand: "Xiaomi", price: 900, ram: 12 },
  { brand: "OnePlus", price: 1500, ram: 16 }
];
1500-এর কম দামের phone বের করো।
*/
// const phones = [
//     { brand: "Samsung", price: 1200, ram: 8 },
//     { brand: "Apple", price: 2000, ram: 6 },
//     { brand: "Xiaomi", price: 900, ram: 12 },
//     { brand: "OnePlus", price: 1500, ram: 16 }
// ];
// const findPhones = phones.filter(phone => parseInt(phone.price) < 1500);
// console.log(findPhones)


// /*
// 8GB বা তার বেশি RAM-এর phone বের করো।
// */
// const biggerThen8gbRam = phones.filter(phone => phone.ram >= 8)
// console.log(biggerThen8gbRam)
// /*
// শুধু Samsung phone বের করো।
// */
// const samsungPhones = phones.filter(phone => phone.brand === "Samsung")
// console.log(samsungPhones)

// /*
// যেসব phone-এর RAM 12GB-এর বেশি সেগুলো বের করো।
// */
// const biggerThen12gbRam = phones.filter(phone => parseInt(phone.ram) > 12);
// console.log(biggerThen12gbRam)

// /*
// যেসব phone-এর price 1000-এর বেশি সেগুলো বের করো।
// */
// const biggerThen1000 = phones.filter(phone => parseInt(phone.price) > 1000);
// console.log(biggerThen1000)
/*
🟠 find() – ১০টি Practice
const phones = [
  { brand: "Samsung", price: 1200, ram: 8 },
  { brand: "Apple", price: 2000, ram: 6 },
  { brand: "Xiaomi", price: 900, ram: 12 },
  { brand: "OnePlus", price: 1500, ram: 16 }
];
প্রথম Samsung phone খুঁজে বের করো।
*/
const findSamsung = (phones) => {
  let samsungPhone = phones.find(phone => phone.brand === "Samsung")
  return samsungPhone
}
console.log(findSamsung([
  { brand: "Samsung", price: 1200, ram: 8 },
  { brand: "Apple", price: 2000, ram: 6 },
  { brand: "Xiaomi", price: 900, ram: 12 },
  { brand: "OnePlus", price: 1500, ram: 16 }
]))

/*
প্রথম phone যার RAM 12GB।
*/
const first12GbPhone = (phones) => {
  let first12Gb = phones.find(phone => phone.ram === 12)
  return first12Gb
}
console.log(first12GbPhone([
  { brand: "Samsung", price: 1200, ram: 8 },
  { brand: "Apple", price: 2000, ram: 6 },
  { brand: "Xiaomi", price: 900, ram: 12 },
  { brand: "OnePlus", price: 1500, ram: 16 }
]))
/*
প্রথম phone যার price 1000-এর কম।
*/
const firstUnder1000Price = (phones) => {
  const firstUnder1000Phone = phones.find(phone => phone.price < 1000)
  return firstUnder1000Phone
}
console.log(firstUnder1000Price([
  { brand: "Samsung", price: 1200, ram: 8 },
  { brand: "Apple", price: 2000, ram: 6 },
  { brand: "Xiaomi", price: 900, ram: 12 },
  { brand: "OnePlus", price: 1500, ram: 16 }
]))
/*
প্রথম phone যার price 1800-এর বেশি।
*/
const firstUpper1800PricePhone = (phones) => {
  const firstUpper1800Phone = phones.find(phone => phone.price > 1800)
  return firstUpper1800Phone
}
console.log(firstUpper1800PricePhone([
  { brand: "Samsung", price: 1200, ram: 8 },
  { brand: "Apple", price: 2000, ram: 6 },
  { brand: "Xiaomi", price: 900, ram: 12 },
  { brand: "OnePlus", price: 1500, ram: 16 }
]))
/*
প্রথম phone যার brand "Apple"।
*/
const firstApplePhone = (phones) => {
  const applePhone = phones.find(phone => phone.brand === "Apple")
  return applePhone
}
console.log(firstApplePhone([
  { brand: "Samsung", price: 1200, ram: 8 },
  { brand: "Apple", price: 2000, ram: 6 },
  { brand: "Xiaomi", price: 900, ram: 12 },
  { brand: "OnePlus", price: 1500, ram: 16 }
]))
/*
const numbers = [5, 12, 17, 20, 31, 40];
প্রথম even সংখ্যা খুঁজে বের করো।
*/
const firstEvenNumber = (numbers) => {
  const evenNumber = numbers.find(number => number % 2 === 0)
  return evenNumber
}
console.log(firstEvenNumber([5, 12, 17, 20, 31, 40]))
/*
প্রথম odd সংখ্যা খুঁজে বের করো।
*/
const firstOddNumber = (numbers) => {
  const oddNumber = numbers.find(number => number % 2 !== 0)
  return oddNumber
}
console.log(firstOddNumber([5, 12, 17, 20, 31, 40]))
/*
প্রথম সংখ্যা যা 20-এর বেশি।
*/
const firstBiggerThen20 = (numbers) => {
  const biggerThen20 = numbers.find(number => number > 20);
  return biggerThen20
}
console.log(firstBiggerThen20([5, 12, 17, 20, 31, 40]))
/*
প্রথম সংখ্যা যা 50-এর বেশি (কি return হবে?)
*/
const firstBiggerThen50 = (numbers) => {
  const biggerThen50 = numbers.find(number => number > 50);
  return 
}
console.log(firstBiggerThen50([5, 12, 17, 20, 31, 40]))
/*
প্রথম সংখ্যা যা 3 দিয়ে ভাগ যায়।
*/
const firstDividedBy3 = (numbers) => {
  const dividedBy3 = numbers.find(number => number % 3 === 0)
  return dividedBy3
}
console.log(firstDividedBy3([5, 12, 17, 20, 31, 40]))
/*
🔴 reduce() – ১০টি Practice
const numbers = [10, 20, 30, 40, 50];
সব সংখ্যার যোগফল বের করো।
সব সংখ্যার গুণফল বের করো।
সবচেয়ে বড় সংখ্যা বের করো।
সবচেয়ে ছোট সংখ্যা বের করো।
সব সংখ্যার average বের করো।
const phones = [
  { brand: "Samsung", price: 1200, ram: 8 },
  { brand: "Apple", price: 2000, ram: 6 },
  { brand: "Xiaomi", price: 900, ram: 12 },
  { brand: "OnePlus", price: 1500, ram: 16 }
];
সবচেয়ে দামি phone বের করো।
সবচেয়ে কম দামের phone বের করো।
সবচেয়ে বেশি RAM-এর phone বের করো।
সব phone-এর মোট price বের করো।
সব phone-এর মোট RAM বের করো।
🎯 Bonus Challenge (Interview Level)
const students = [
  { name: "Ali", marks: 80 },
  { name: "Sara", marks: 95 },
  { name: "John", marks: 60 },
  { name: "Rafi", marks: 45 },
  { name: "Mina", marks: 75 }
];

চেষ্টা করো—

map() দিয়ে শুধু নামের array বানাও।
filter() দিয়ে 70 বা তার বেশি নম্বর পাওয়া students বের করো।
find() দিয়ে প্রথম student যার marks 90-এর বেশি তাকে বের করো।
reduce() দিয়ে পুরো class-এর average marks বের করো।
📌 Challenge Rule
❌ for, for...of, while ব্যবহার করা যাবে না।
✅ শুধু map(), filter(), find(), reduce() ব্যবহার করবে।
❌ AI থেকে সরাসরি solution দেখবে না।
⏱️ প্রতিটি problem ৫ মিনিটের মধ্যে শেষ করার চেষ্টা করবে।

এই ৪০টি practice শেষ করতে পারলে array methods নিয়ে তোমার আত্মবিশ্বাস অনেক বেড়ে যাবে।
*/