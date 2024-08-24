//for loops
const fruits = ['banana', 'apple', 'orange', 'pear', 'banana', 'apple', 'orange', 'pear']
console.log(fruits)
console.log(fruits[0])

/*for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i])
} */

/*for(const fruit of fruits) {
    console.log(fruit)
} */

const double = (nums) => {
    
//const nums = [1,2,3,4,5] 
    let result = []
    for(const n of nums) {
    result.push(n**2)
    
    } 
    return result 
}
//console.log(result)
console.log(double([1,2,3,4,5]))