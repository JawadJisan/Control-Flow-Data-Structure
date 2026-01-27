// Find Even Number from an Array
let numbers = [1, 2, 4, 6, 8, 9, 11, 24, 66, 77]
let sum = 0

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        // if (numbers[i] % 2 != 0) {
        console.log(numbers[i])
        sum = sum + numbers[i]
    }
}
console.log(sum)


// Count Vowels in a String
let text = "javascript"
let count = 0

for (let i = 0; i < text.length; i++) {
    if ("aeiou".includes(text[i])) {
        count++
    }
}
console.log("Vowels =", count)


// [1,2,3,4,5] (2)
// [3,4,5,1,2]

// Rotate Array Elements by N Position
function leftRotate(arr, n) {
    for (let i = 0; i < n; i++) {
        let first = arr.shift()
        arr.push(first)
    }
    return arr
}

let arr1 = [1, 2, 3, 4, 5]
// console.log(leftRotate(arr1, 2))
console.log(leftRotate(arr1, 3))



// Reverse a String
let newText = "MEW"
// console.log(newText.split.reverse())
function reverseString(str) {
    let result = ""
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    return result
}

console.log(reverseString(newText))

// Find factorial of a Number

const factorial = (n) => {
    let fact = 1;

    for (let i = 1; i <= n; i++) {
        fact *= i
    }
    return fact
}

console.log(factorial(50))


// Student Result System
let student = {
    name : "Nusrat",
    marks:[30,60,79]
}
// find avg from this students?
let students = [
    {name:"A", marks:70},
    {name:"A", marks:70},
    {name:"A", marks:70},
    {name:"A", marks:70}
]
// Find Higest Marks amount the students