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
// Expect ➞ fals