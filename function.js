// Tradiational way of declaring function

function square(num) {
    console.log(num * num)
}
square(5)

// Arrow function (ES6)
const multiplication = (num) => {
    console.log(num * 2)
}
multiplication(5)

const add = (a, b) => console.log(a + b)

add(5, 3)

const greeting = () => console.log("Hello")


// Parameters & Default Values
function createUser(name, dept) {
    // const user = {
    //     name,
    //     dept
    // }
    const user = {
        name,
        dept: dept || "CSE"
    }
    console.log(user)
}
createUser("Jawad")
createUser("Nusrat", "ECE")

function createTeacher(name = "Guest", sub = "ICT") {
    console.log({
        name,
        sub
    })
}
createTeacher()
createTeacher("Mazid", "Math", "BUET")

// Rest Parameters
function sum(...numbers) {
    console.log(numbers.reduce((total, num) => total + num, 0))
}

sum(1)
sum(1, 2, 3, 4, 5)

function newSum(total, ...numbers) {
    console.log(numbers.reduce((total, num) => total + num, total))
}

newSum(10)
newSum(10,20,30,40)