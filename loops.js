// // for Loop
// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
// // }

// for (let i = 10; i >= 1; i--) {
//     console.log("Count: " + i)
// }

// for (let i = 2; i <= 50; i += 2) {
//     console.log("Even: " + i)
// }


// // Nested Loops
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`${i} + ${j} = ${i + j}`)
//     }
// }

// // Break Statement
// for (let i = 2; i <= 50; i += 2) {
//     console.log("Even: " + i)
//     if (i === 20) {
//         console.log("Stopped at even: 20")
//         break
//     }
// }

// let evenCount = 0;
// let oddCount = 0;
// // Find Even and Odd using for Loop
// for (let i = 1; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(`This ${i} number is an Even Number`)
//         evenCount += 1;
//     } else {
//         console.log(`This ${i} number is an Odd Number `)
//         oddCount += 1;
//     }
// }
// console.log("Total Even Number:", evenCount)
// console.log("Total Odd Number:", oddCount)
// console.log("Total Odd & Even Number:", evenCount + oddCount)

// // Continue Statement
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         continue; // skip even number
//     }
//     console.log("Odd: ", i)
// }


    let value = prompt("Enter a value:");
      console.log(value);