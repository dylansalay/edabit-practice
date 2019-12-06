// A Redundant Function
function redundant(str) {
	return () => {return str}
}
console.log(redundant("apple"))
// Expect f1() ➞ "apple"
console.log(redundant("pear"))
// Expect f2() ➞ "pear"
console.log(redundant(""))
// Expect f3() ➞ ""

// Array of Multiples
arrayOfMultiples = (num, length) => {
    let arr =[]
	for(let i=num;i<=num*length;i++){
        if(i%num ===0){
            arr.push(i)
        }
    }
    return arr
}
console.log(arrayOfMultiples(7, 5))
// Expect ➞ [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10))
// Expect ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6))
// Expect ➞ [17, 34, 51, 68, 85, 102]

// Converting Objects to Arrays

function toArray(obj) {
    let arr = []
    for(let key in obj){
        arr.push([key, obj[key]])
    }
    return arr
}

console.log(toArray({ a: 1, b: 2 }))
// Expect ➞ [["a", 1], ["b", 2]]
console.log(toArray({ shrimp: 15, tots: 12 }))
// Expect ➞ [["shrimp", 15], ["tots", 12]]
console.log(toArray({}))
// Expect ➞ []

// Solving Exponential Equations With Logarithms
solveForExp = (a, b) => {
    for(let i=0;i<100;i++){
        if(Math.pow(a,i) === b){
            x = i
        }
    }
    return x
}

console.log(solveForExp(4, 1024))
// Expect ➞ 5
console.log(solveForExp(2, 1024))
// Expect ➞ 10
console.log(solveForExp(9, 3486784401))
// Expect ➞ 10

// Convenience Store

function changeEnough(change, amountDue) {
	return ((change[0] * .25) + (change[1] * .10) + (change[2] * .05) + (change[3] * .01)) >= amountDue ? true : false
}

console.log(changeEnough([2, 100, 0, 0], 14.11))
// Expect ➞ false
console.log(changeEnough([0, 0, 20, 5], 0.75))
// Expect ➞ true
console.log(changeEnough([30, 40, 20, 5], 12.55))
// Expect ➞ true
console.log(changeEnough([10, 0, 0, 50], 3.85))
// Expect ➞ false
console.log(changeEnough([1, 0, 5, 219], 19.99))
// Expect ➞ false

// Convert Key, Values in an Object to Array
objectToArray = (obj) => {
    let arr = []
	for(let key in obj){
        arr.push([key, obj[key]])
    }
    return arr
}

console.log(objectToArray({D: 1, B: 2, C: 3}))
// Expect ➞ [["D", 1], ["B", 2], ["C", 3]]
console.log(objectToArray({likes: 2, dislikes: 3, followers: 10}))
// Expect ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]