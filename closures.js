// function createCounter() {
//     let count = 0
//     return function () {
//         count++
//         return count
//     }
// }
// const counter = createCounter()
// console.log(counter)
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())


function mazidSir() {
    let count = 0
    let Dept = "CSE"
    
    return function () {
        count++
        return count
    }
}
const counter = mazidSir()
console.log(counter)
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())