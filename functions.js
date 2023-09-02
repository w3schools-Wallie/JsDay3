// take input returns output
// block of code that can be reused to run a set of task 
// block of code that can be reused to run a set of task that can take input and can return an output

// Function Declaration
function add(a, b, c, d){ //parameter
    // execution body/function body
    let sum = a + b + c + d
    console.log(sum)
    return sum
}

// Function Expression 
const sayHi2 = function(name){
    // console.log("hey my name is "+ name)
    return "hey my name is " + name
}

// Arrow Function Expression 
const sayBye = (name)=>{
    let message = 'bye ' + name
    return message
}

// Concise Arrow Function
const sayBye1 = name => 'bye ' + name
const sayBye2 = (name) => 'bye ' + name
const sayBye3 = () => console.log("bye")
const sayBye4 = (firstName, lastName) => console.log("bye "+firstName+" "+lastName)


// The 2 main differences are :
// Hoisting 

// addStrings("Hot", "Dog")

function addStrings(word1, word2){
    let newString = word1+word2
    console.log(newString)
    return newString
}


const addStrings2 = (word1, word2)=>console.log(word1+word2)

// addStrings2("ice", "cream")


// this
const person = {
    firstName:"Mike",
    lastName:"Moe",
    sayFullName:function(){
        console.log( this.firstName + " " + this.lastName)
        // console.log( person.firstName + " " + person.lastName)
    },
    sayFullName2:()=>{//wont work because this wont know what to point too!
        console.log( this.firstName + " " + this.lastName)
        // console.log( person.firstName + " " + person.lastName)
    }
}

// person.sayFullName()


function showMeObjects(obj){
    console.log(obj.pets)
}

const person2 = {
    name:"Sally",
    pets:["dog", "cat"]
}

// showMeObjects(person2)

function showMeArrays(arr){
    console.log(arr[0])
}


// When you wanna pass in a function like an argument into another Function this is called a Callback

function sayHi(){
    console.log("hi")
}

function addNums(num1, num2) {
    console.log(num1 + num2)
}

function runFunction(fn, num1, num2){
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        fn(num1, num2)
    }else{
        console.log("these arent numbers")
        fn(num1, num2)
    }
}


runFunction(addNums, 3, 3)

runFunction((a,b)=>console.log(a+b), "Why", "Hey")