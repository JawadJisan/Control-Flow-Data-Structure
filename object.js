// Basic Object
// let person = {
//     firstName: "John"
// }

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    address: {
        street: "123 Dhanmondi",
        city: "Dhaka",
        country: "Bangladesh"
    },
    hobbies: ["reading", "coding", "gaming"]
}

// accessing object properties(key, value)
// console.log(person)
// Dot Notation
console.log(person.firstName)
console.log(person.lastName)
console.log(person.address)
console.log(person.address.city)
console.log(person.hobbies[2])

// Bracket Notation
console.log(person["age"])
console.log(person["hobbies"][0])



let institute = {
    name: "IST",
    dept: ["CSE", "ECE", "BBA"],
    'principle name': "Mazid Sir",
    eceDeptHead: "Rakib Sir",
    footballWinner: "ECE",
    totalDept: 4
}

console.log(institute["principle name"])

console.log(institute)

institute.eceDeptHead = "Mahfuza Ferdusi"

console.log(institute)

institute["footballWinner"] = "CSE"

console.log(institute)
delete institute.totalDept

console.log(institute)


// looping through and object
// For In Loop (object)
// For Of Loop (array)
for (let key in institute) {
    // console.log(`${key}: ${institute[key]} `)
    // console.log(institute[key])

}

// Get Keys, Values, entries
console.log(Object.keys(institute))
console.log(Object.values(institute))
console.log(Object.entries(institute))


// Methods

let cat = {
    name: "Hitler",
    age: 5,
    food: "Jani Na Ki Khai",

    // Method (function in object)
    bark: function () {
        return `This cat tell Mew Mew`
    },

    // catName: function () {
    //     return `This cat name is: ${this.name}`
    // }

    catName() {
        return `This cat name is: ${this.name}`
    }


}

console.log(cat.bark())
console.log(cat.catName())
