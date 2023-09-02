// An array is a data structure that we use to store a collection of related data/value

// - Birthday 
// - Vanilla 
// - Chocolate
// - Cat 
// - Chair

//We know how to create an array  
const arrCakes = ["Birthday", "Vanilla", "Chocolate", "RedBean", "Tuna"]

// access values in the array
// console.log(arrCakes[arrCakes.length - 2])
// console.log(arrCakes[5 - 1])

// console.log(arrCakes.length)
arrCakes[arrCakes.length - 1] = "Carrot"

console.log(arrCakes)

// Array methods 
// Adding elements to the end and returning new count
let newCount = arrCakes.push("IceCream", "Cheese")
// [...,"IceCream", "Cheese" ]
// console.log(arrCakes)
// console.log(newCount)
// console.log(arrCakes.length)
// Adding elements to the front and returning new count
newCount = arrCakes.unshift("Fig", "Apple")
// ["Fig",'Apple' ...]
// console.log(arrCakes)
// console.log(newCount)

// Remove
// removes the last element and returns the removed element
let removedElement = arrCakes.pop()
// console.log(removedElement)
// console.log(arrCakes)

// removes the first element and returns the removed element
removedElement = arrCakes.shift()
// console.log(removedElement)
// console.log(arrCakes)

// Splice
const test = arrCakes.splice(3, 0, "Red velvet", "Rocky Road")
console.log(arrCakes)

// console.log(test)//would return array if deleted elements

// Looping through an array 
// 3 statements
console.log('////////////////////=>>>>>>>>>>> for loop starts')
for(let i = 0; i<arrCakes.length; i++){
    // execution body 
    console.log(i)
    console.log(arrCakes[i])
    // console.log(arrCakes[3])
}

// for-in and for-of
console.log('////////////////////=>>>>>>>>>>> for in loop starts')

for (let feet in arrCakes) {
    console.log(feet)
    console.log(arrCakes[feet])
}   
console.log('////////////////////=>>>>>>>>>>> for of loop starts')
for (let key of arrCakes) {
    console.log(key) 
}

console.log('////////////////////=>>>>>>>>>>> while loop starts')
let i = 0;
while(i<arrCakes.length){
    console.log(arrCakes[i])
    i++
}