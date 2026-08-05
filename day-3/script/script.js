console.log("day 3 Connected")
/*
map() – ১০টি Practice
ধরো,
const numbers = [5, 10, 15, 20, 25];
প্রতিটি সংখ্যাকে 2 দিয়ে গুণ করো।
*/
const numbers = [5, 10, 15, 20, 25];
console.log("original array:", numbers)
const double = numbers.map(number => number * 2)
console.log(double)

/*
প্রতিটি সংখ্যার সাথে 10 যোগ করো।
*/
const add10 = numbers.map(number => number + 10)
console.log(add10)

/*
প্রতিটি সংখ্যার square বের করো।
*/
const square = numbers.map(number => number * number)
console.log(square)

/*
প্রতিটি সংখ্যাকে string-এ convert করো।
*/
const convertToString = /*numbers.map(number => number.toString())*/
    numbers.map(String)
console.log(convertToString)

/*
প্রতিটি সংখ্যার আগে "Number: " যোগ করো।
*/
const startWithNumber = numbers.map(number => "Number : " + number)
console.log(startWithNumber)



/*
ধরো,
const phones = [
  { brand: "Samsung", price: 1200 },
  { brand: "Apple", price: 2000 },
  { brand: "Xiaomi", price: 900 }
];

শুধু সব brand-এর নামের array বানাও।
*/
const phones = [
    { brand: "Samsung", price: 1200 },
    { brand: "Apple", price: 2000 },
    { brand: "Xiaomi", price: 900 }
];
const brandsName = phones.map(phone => phone.brand)
console.log(brandsName)


/*
শুধু সব price-এর array বানাও।
*/
const priceArr = phones.map(phone => phone.price)
console.log(priceArr)

/*
প্রতিটি phone-এর price-এ 100 যোগ করে নতুন object তৈরি করো।
*/
const add100ToPrice = phones.map(phone => ({ ...phone, price: parseInt(phone.price) + 100}));
console.log(add100ToPrice)

/*
প্রতিটি brand-কে uppercase করো।
*/
const brandNamesToUpperCase = phones.map(phone => phone.brand.toUpperCase())
console.log(brandNamesToUpperCase)

/*
"Samsung - 1200" এর মতো string-এর array বানাও।
*/

const createStingArr = phones.map(phone => `${phone.brand} - ${phone.price}`)
console.log(createStingArr)



/*
🔵 filter() – ১০টি Practice
const numbers = [5, 10, 15, 20, 25, 30];
15-এর বেশি সংখ্যা বের করো।
শুধু even সংখ্যা বের করো।
শুধু odd সংখ্যা বের করো।
20-এর কম সংখ্যা বের করো।
10 এবং 25-এর মাঝের সংখ্যা বের করো।
const phones = [
  { brand: "Samsung", price: 1200, ram: 8 },
  { brand: "Apple", price: 2000, ram: 6 },
  { brand: "Xiaomi", price: 900, ram: 12 },
  { brand: "OnePlus", price: 1500, ram: 16 }
];
1500-এর কম দামের phone বের করো।
8GB বা তার বেশি RAM-এর phone বের করো।
শুধু Samsung phone বের করো।
যেসব phone-এর RAM 12GB-এর বেশি সেগুলো বের করো।
যেসব phone-এর price 1000-এর বেশি সেগুলো বের করো।
🟠 find() – ১০টি Practice
const phones = [
  { brand: "Samsung", price: 1200, ram: 8 },
  { brand: "Apple", price: 2000, ram: 6 },
  { brand: "Xiaomi", price: 900, ram: 12 },
  { brand: "OnePlus", price: 1500, ram: 16 }
];
প্রথম Samsung phone খুঁজে বের করো।
প্রথম phone যার RAM 12GB।
প্রথম phone যার price 1000-এর কম।
প্রথম phone যার price 1800-এর বেশি।
প্রথম phone যার brand "Apple"।
const numbers = [5, 12, 17, 20, 31, 40];
প্রথম even সংখ্যা খুঁজে বের করো।
প্রথম odd সংখ্যা খুঁজে বের করো।
প্রথম সংখ্যা যা 20-এর বেশি।
প্রথম সংখ্যা যা 50-এর বেশি (কি return হবে?)
প্রথম সংখ্যা যা 3 দিয়ে ভাগ যায়।
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