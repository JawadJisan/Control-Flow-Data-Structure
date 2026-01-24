let fruits = ["Apple", "Banana"]
console.log(fruits)
// fruits[2] = "Test"
// console.log(fruits)

// Adding Elements
fruits.push("Orange")
fruits.push("Mango")

let test = "Strawberry"

fruits.unshift(test)
console.log(fruits)

// Remove Elements
fruits.pop()
fruits.shift()
console.log(fruits)

// Finding Elements
let colors = ["Red", "Green", "Blue"]
console.log(colors.indexOf("Red"))
console.log(colors.indexOf("Violate"))

// Slice & Splice
let numbers = [1, 2, 3, 4, 5, 6]
let slice1 = numbers.slice(1, 3)
let slice3 = numbers.slice(2)
console.log(slice1)
console.log(slice3)

console.log(numbers.splice(2, 1))
console.log(numbers.splice(2, 2))
console.log(numbers.splice(2, 3))



// Array Concatenating
let arr1 = [1, 2]
let arr2 = [2, 3]
let combined = arr1.concat(arr2)
console.log(combined)

// Reverse & Sort
let letter = ["C","A","B"]

console.log(letter.sort())
console.log(letter.reverse())

