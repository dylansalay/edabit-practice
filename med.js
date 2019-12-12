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

// Compound Interest
function compoundInterest(p, t, r, n) {
    return (p*(Math.pow((1+(r/n)),n*t))).toFixed(2)
}

console.log(compoundInterest(100, 1, 0.05, 1))
// Expect ➞ 105.0
console.log(compoundInterest(3500, 15, 0.1, 4))
// Expect ➞ 15399.26
console.log(compoundInterest(100000, 20, 0.15, 365))
// Expect ➞ 2007316.26


// Something in the Box?
inBox = (arr) => {
    let newArr = []
	arr.map(el => {
        el.indexOf('*') > 0 && el.indexOf('*') < el.length-1 ? newArr.push(true) : newArr.push(false)
    })
    return newArr.includes(true)
}

console.log(inBox([ "###", "#*#", "###"]))
// Expect ➞ true
console.log(inBox([ "####", "#* #", "#  #", "####"]))
// Expect ➞ true
console.log(inBox([ "*####", "# #", "#  #*", "####"]))
// Expect ➞ false 
console.log(inBox([ "#####", "#   #", "#   #", "#   #", "#####"]))
// Expect ➞ false

// Fix the Error: Value vs. Reference Types

// Fix this broken code!
function checkEquals(arr1, arr2) {
    let newArr = []
    for(let i=0;i<arr1.length;i++){
        arr1[i] === arr2[i] ? newArr.push(true) : newArr.push(false)
    }
    return newArr.includes(false) ? false : true
}

console.log(checkEquals([1, 2], [1, 3]))
// Expect ➞ false
console.log(checkEquals([1, 2], [1, 2]))
// Expect ➞ true
console.log(checkEquals([4, 5, 6], [4, 5, 6]))
// Expect ➞ true
console.log(checkEquals([4, 7, 6], [4, 5, 6]))
// Expect ➞ false

// Basic Calculator
function calculator(num1, operator, num2) {
    if(operator === "+"){
        return (num1 + num2)
    } else if(operator === "-"){
        return (num1 - num2)
    } else if (operator === "*"){
        return (num1 * num2)
    } else if (operator === "/" && num2 !== 0){
        return (num1 / num2)
    } else {
        return ("Can't divide by 0!")
    }
}

console.log(calculator(2, "+", 2))
// Expect ➞ 4
console.log(calculator(2, "*", 2))
// Expect ➞ 4
console.log(calculator(4, "/", 2))
// Expect ➞ 2

// Hitting the Jackpot
function testJackpot(result) {
    let newArr = []
    for (let i=0;i<result.length;i++){
        result[i] === result[0] ? newArr.push(true) : newArr.push(false)
    }
    return newArr.includes(false) ? false : true

}

console.log(testJackpot(["@", "@", "@", "@"]))
// Expect ➞ true
console.log(testJackpot(["abc", "abc", "abc", "abc"]))
// Expect ➞ true
console.log(testJackpot(["SS", "SS", "SS", "SS"]))
// Expect ➞ true
console.log(testJackpot(["&&", "&", "&&&", "&&&&"]))
// Expect ➞ false
console.log(testJackpot(["SS", "SS", "SS", "Ss"]))
// Expect ➞ false


// Algebra Sequence — Boxes
boxSeq = (step) => {
    return step + (step%2 * 2)
}


console.log(boxSeq(0))
// Expect ➞ 0
console.log(boxSeq(1))
// Expect ➞ 3
console.log(boxSeq(2))
// Expect ➞ 2


// Index Multiplier
function indexMultiplier(arr) {
    let x = 0 
    for (let i=0;i<arr.length;i++){
        x += (arr[i] * i)
    }
    return x

}
console.log(indexMultiplier([1, 2, 3, 4, 5]))
// Expect ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
console.log(indexMultiplier([-3, 0, 8, -6]))
// Expect ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)


// Reverse the Number
rev = (n) => {
	return Math.abs(n).toString().split('').reverse().join('')
}

console.log(rev(5121))
// Expect ➞ "1215"
console.log(rev(69))
// Expect ➞ "96"
console.log(rev(-122157))
// Expect ➞ "751221"