// Global Scope
// Function Scope
// Block Scope

const globalVar = "I am global"  // Global Scope

// testScope() Hoisting

function testScope() {
    const functionScope = "i am in function"
    console.log(functionScope)
    console.log(globalVar)
}


// testScope()

console.log(globalVar)

// console.log(functionScope) (error)


if (true) {
    let blockVar = "i am in block"
    console.log(blockVar)
}
// console.log(blockVar)
