let day = 655
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid Day"
}

console.log(`Day ${day} is ${dayName}`)


// Switch with Multipe Cases
let grade = "ddD"
let message;

// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
switch (grade) {
    case "A":
    case "B":
    case "C":
        message = "You are Passed"
        break;
    case "D":
        message = "You are barely Passed"
        break;
    case "F":
        message = "You are Failed"
        break;
    default:
        message = "Invalid Grade"
}
console.log(message)