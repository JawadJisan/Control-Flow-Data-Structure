// HOC -> Higher Order Function

// Function that Return Function

function multipleBy(factor) {
    return function (number) {
        return number * factor
    }
}

const double = multipleBy(2)
const triple = multipleBy(3)

console.log(double(5))
console.log(triple(5))



// Function that Accept Function
function customFilter(arr, testFnc) {
    const result = []
    for (let item of arr) {
        if (testFnc(item)) {
            result.push(item)
        }
    }
    console.log(result)
}

const number = [1, 2, 3, 4, 5]
const evens = customFilter(number, num => num % 2 === 0)