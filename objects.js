// An Object is data structure that we use to store related data, to store a collection of related data 

function sayHi() {
    console.log("Hey im " + "Wallie")
    // console.log("Hey im " + personObj.firstName)
}

const personArr = ["John", "Doe", 31, "Brooklyn", ["Ice Skating", "Cooking"], sayHi];
personArr[personArr.length-1]()

// console.log(personArr[0])


// personObj.sayHi()
// personObj.firstName

const personObj = {
    firstName: "John", // property of the object is a key value pair
    lastName: "Doe",
    age:31,
    homeTown:"Brooklyn",
    hobbies:["Ice Skating", "Cooking"],
    sayHi: function(){
        console.log("Hey im " + this.firstName)
        // console.log("Hey im " + personObj.firstName)
    }
};

personObj.sayHi();
// console.log(Object.keys(personObj)) will return all keys in an array

console.log(personObj.sayHi())
