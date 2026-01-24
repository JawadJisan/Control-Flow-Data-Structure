let fruits = ["Apple", "Banana", "Orange"]

// For Loop
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }

// For-of Loop (Modern)
for (let fruit of fruits) {
    // console.log(fruit)
}

// For Each Methods
fruits.forEach((fruit, index) => {
    console.log(index + ": " + fruit)
})

// Map Method
let numbers = [1, 2, 3, 4, 5, 6, 7]
numbers.map((n, i) => {
    console.log(n)
})

numbers.map((num, ind) => {
    console.log(num, "at index: " + ind)
})

// Filter Method
let scores = [85, 42, 90, 65, 80, 50]
// let passed = scores.filter((num) => num > 50)
let passed = scores.filter((num, indx) => {
    return num > 50
})
console.log(passed)

let newArr = [44, 55, 60, 60, 70]
console.log(newArr.filter(num => num == 60))
console.log(newArr.filter(num => num != 60))


// Reduce Method
let prices = [100, 200, 300]
// let total = prices.reduce((sum, price) => sum + price, 0)
let total = prices.reduce((sum, price) => sum + price, 0)
console.log(total)


// let obj = {}
// Find Methods
let users = [
    { id: 1, name: "Jhon" },
    { id: 2, name: "Sarah" },
    { id: 3, name: "Don" }
]
// let user = users.find(user=> user.name === "Jhon" )
let user = users.find(user=> user.name === "Don" )
console.log(user)