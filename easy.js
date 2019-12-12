// Add up the Numbers from a Single Number
function addUp(num) {
    let x = 0
    for (let i=0;i<=num;i++){
        x+=i
    }
    return x
}

console.log(addUp(4))
// Expect ➞ 10
console.log(addUp(13))
// Expect ➞ 91
console.log(addUp(600))
// Expect ➞ 180300

// Matchstick Houses
matchHouses = (step) => {
	return step >= 1 ? ((step * 5) + 1) : 0
}

console.log(matchHouses(1))
// Expect ➞ 6
console.log(matchHouses(4))
// Expect ➞ 21
console.log(matchHouses(87)) 
// Expect ➞ 436

// Which Function Returns the Larger Number?
function whichIsLarger(f, g) {
    if(f() > g()){
        return "f"
    } else if(f() < g()){
        return "g"
    } else {
        return "neither"
    }

}
console.log(whichIsLarger(() => 5, () => 10))
// Expect ➞ "g"
console.log(whichIsLarger(() => 25,  () => 25))
// Expect ➞ "neither"
console.log(whichIsLarger(() => 505050, () => 5050))
// Expect ➞ "f"

// Find the Smallest and Biggest Numbers
function minMax(arr) {
	let min = Math.min(...arr)
    let max = Math.max(...arr)
    return [min,max]
}
console.log(minMax([1, 2, 3, 4, 5]))
// Expect ➞ [1, 5]
console.log(minMax([2334454, 5]))
// Expect ➞ [5, 2334454]
console.log(minMax([1]))
// Expect ➞ [1, 1]

// Check if One Array can be Nested in Another
canNest = (arr1, arr2) => {
	return Math.min(...arr2) < Math.min(...arr1) && Math.max(...arr2) > Math.max(...arr1) ? true : false
}
console.log(canNest([1, 2, 3, 4], [0, 6]))
// Expect ➞ true
console.log(canNest([3, 1], [4, 0]))
// Expect ➞ true
console.log(canNest([9, 9, 8], [8, 9]))
// Expect ➞ false
console.log(canNest([1, 2, 3, 4], [2, 3]))
// Expect ➞ false

// Recursion: Factorials
function factorial(n) { 
    return n===0 || n===1 ? 1 : n * factorial(n-1)
}

console.log(factorial(5))
// Expect ➞ 120
console.log(factorial(3))
// Expect ➞ 6
console.log(factorial(1))
// Expect ➞ 1
console.log(factorial(0))
// Expect ➞ 1

// Largest Swap
largestSwap = (num) => {
    let arr = num.toString().split('')
    return arr[0] >= arr[1] ? true : false
}

console.log(largestSwap(14))
// Expect ➞ false
console.log(largestSwap(53))
// Expect ➞ true
console.log(largestSwap(99))
// Expect ➞ true


// Factorial of a Positive Integer
function factorial(z) {
    let x = 1
    for (let i=1;i<=z;i++){
        x *= i
    }
    return x
}

console.log(factorial(4))
// Expect ➞ 24
console.log(factorial(0))
// Expect ➞ 1
console.log(factorial(9))
// Expect ➞ 362880

// Count Instances of a Character in a String
function charCount(myChar, str) {
    let arr=str.split('')
    let x = 0
    for (let i=0;i<arr.length;i++){
        if(arr[i] === myChar){
            x += 1
        }
    }
    return x
}

console.log(charCount("a", "edabit"))
// Expect ➞ 1
console.log(charCount("c", "Chamber of secrets"))
// Expect ➞ 1
console.log(charCount("b", "big fat bubble"))
// Expect ➞ 4

// Is it Time for Milk and Cookies?
timeForMilkAndCookies = (date) => {
    return (date.getMonth() === 11) && (date.getDate() === 24) ? true : false
	
}

console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))
// Expect ➞ true
console.log(timeForMilkAndCookies(new Date(2013, 0, 23)))
// Expect➞ false
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)))
// Expect ➞ true

// Return the Index of the First Vowel
function firstVowel(str) {
    // let arr = str.split('')
    // let newArr = []
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i] === 'a' || arr[i] === 'A' ||
    //        arr[i] === 'e' || arr[i] === 'E' ||
    //        arr[i] === 'i' || arr[i] === 'I' || 
    //        arr[i] === 'o' || arr[i] === 'O' || 
    //        arr[i] === 'u' || arr[i] === 'U'){
    //         newArr.push(i)
    //     }
    // }
    // return newArr[0]

    return str.search(/a|e|i|o|u/i)
}

console.log(firstVowel("apple"))
// Expect ➞ 0
console.log(firstVowel("hello"))
// Expect ➞ 1
console.log(firstVowel("STRAWBERRY"))
// Expect ➞ 3
console.log(firstVowel("pInEaPPLe"))
// Expect ➞ 1

// Filter out Strings from an Array

filterArray = (arr) => {
    let newArr = []
	arr.map(el => {
        if(typeof el === 'number'){
            newArr.push(el)
        }  
    })
    return newArr
}

console.log(filterArray([1, 2, "a", "b"]))
// Edabit ➞ [1, 2]
console.log(filterArray([1, "a", "b", 0, 15]))
// Edabit ➞ [1, 0, 15]
console.log(filterArray([1, 2, "aasf", "1", "123", 123]))
// Edabit ➞ [1, 2, 123]

// Sum of Cubes
function sumOfCubes(nums) {
    let x = 0
    for(let i=0;i<nums.length;i++){
        x += (Math.pow(nums[i],3))
    }
    return x
}

console.log(sumOfCubes([1, 5, 9]))
// Edabit ➞ 855
console.log(sumOfCubes([3, 4, 5]))
// Edabit ➞ 216
console.log(sumOfCubes([2]))
// Edabit ➞ 8
console.log(sumOfCubes([]))
// Edabit ➞ 0

// Hashes and Pluses
hashPlusCount = (str) => {
    let arr = str.split('')
    let h = 0
    let p = 0
    for(let i=0;i<arr.length;i++){
        if(arr[i] === '#'){
            h += 1
        } else if(arr[i] === '+'){
            p +=1
        }
    }
    return [h, p]
}

console.log(hashPlusCount("###+"))
// Expect ➞ [3, 1]
console.log(hashPlusCount("##+++#"))
// Expect ➞ [3, 3]
console.log(hashPlusCount("#+++#+#++#"))
// Expect ➞ [4, 6]
console.log(hashPlusCount(""))
// Expect ➞ [0, 0]

// Repeating Letters
doubleChar = (str) => {
    let arr = str.split('')
    let newArr = []
    for (let i=0;i<arr.length;i++){
        newArr.push(arr[i], arr[i])
    }
    return newArr.join('')
}

console.log(doubleChar("String"))
// Expect ➞ "SSttrriinngg"
console.log(doubleChar("Hello World!"))
// Expect ➞ "HHeelllloo  WWoorrlldd!!"
console.log(doubleChar("1234!_ "))
// Expect ➞ "11223344!!__  "


// Secret Society

function societyName(friends) {
    let newArr = []
    friends.map(el => {
        newArr.push(el[0])
    })
    return newArr.sort().join('')
}

console.log(societyName(["Adam", "Sarah", "Malcolm"]))
// Expect ➞ "AMS"
console.log(societyName(["Harry", "Newt", "Luna", "Cho"]))
// Expect ➞ "CHLN"
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]))
// Expect ➞ "CJMPRR"

// Amplify the Multiples of Four
function amplify(num) {
    let arr = []
    for(let i=1;i<=num;i++){
        arr.push(i%4===0 ? i*10: i)
    }
    return arr
}

console.log(amplify(4))
// Expect ➞ [1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40

console.log(amplify(3))
// Expect ➞ [1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4

console.log(amplify(25))
// Expect ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.


// Scrabble Hand
maximumScore = (tileHand) => {
    let x = 0
	for (let i=0;i<tileHand.length;i++){
        x += tileHand[i].score
    }
    return x
}

console.log(maximumScore([{ tile: "N", score: 1 },{ tile: "K", score: 5 },{ tile: "Z", score: 10 },{ tile: "X", score: 8 },{ tile: "D", score: 2 },{ tile: "A", score: 1 },{ tile: "E", score: 1 }]))
// Expect➞ 28
console.log(maximumScore([{ tile: "B", score: 2 },{ tile: "V", score: 4 },{ tile: "F", score: 4 },{ tile: "U", score: 1 },{ tile: "D", score: 2 },{tile: "O", score: 1 },{ tile: "U", score: 1 }])) 
// Expect ➞ 15

// Omnipresent Value
function isOmnipresent(arr, val) {
    // let newArr = []
	// for(let i=0;i<arr.length;i++){
    //     arr[i].includes(val) ? newArr.push(true) : newArr.push(false)
    // }

    // return newArr.includes(false) ? false : true
    return arr.every(el => el.includes(val))
}


console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
// Expect ➞ true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6))
// Expect ➞ false
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5))
// Expect ➞ true
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6))
// Expect ➞ false