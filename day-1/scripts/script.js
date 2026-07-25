/*নিচের object থেকে name, price, এবং brand console-এ print করো।
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
const { name, brand, price } = laptop;
console.log(`
    Model: ${name}
    Brand: ${brand}
    Price: ${price}
    `)