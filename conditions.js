// Basic Condition Syntax
// if(condition){
//     // do the things
// }


// if(condition){
//     // do this
// }else{
//     // do somethings else
// }

// if (condition) {
//     // do this
// } else if (other condition) {
//     // do other things 
// }else {
//     // do somethings else
// }


let age = 15

if (age >= 18) {
    console.log("You can vote")
} else {
    console.log("You Connot Vote. ")
}


// if else condition with multiple conditions
let marks = 1
if(marks>=90){
    console.log("Grade: A")
}else if(marks >=80){
    console.log("Grade: B")
}else if(marks >=70){
    console.log("Grade: C")
}else if(marks >=60){
    console.log("Grade: D")
}else{
    console.log("Grade: F")
}


// Nested if statement
let isLoggedIn = false
let isPremium = true

if(isLoggedIn){
    if(isPremium){
        console.log("Welcome Premium User")
    }else{
        console.log("Welcome Free User")
    }
}else{
    console.log("Please Login First")
}