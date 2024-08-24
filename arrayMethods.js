//Higher Order Functions - map(),filter(),reduce()
//map - loops and returns an array
/*
let result = [1,2,3,4].map(number => number*2)
console.log(result)
*/
//Another method to double
/*
const doubleMap = (number) => {
    return number.map(number => number*2)
}
console.log(doubleMap([1,2,3,4]))
*/

//filter ==> ([1,2,3,4,5,6],3) ->[4,5,6]
/*
const filter = (number,greaterThan) => {
    let result = []
    for(const num of number) {
        if(num > greaterThan) {
            result.push(num)
        }
    }
    return result
}
console.log(filter([1,2,3,4,5,6],1))
*/
//simple method
/*
const nums = [1,2,3,4,5,6]
console.log(nums.filter(num => num>3 && num <6))
*/

const actors = [
    {name: 'johny', networth:200},
    {name: 'amber', networth:10},
    {name: 'leo', networth:100}    
]
let result = actors.filter(actor => actor.networth>=10)
let re = actors.reduce((a,b) => a+b.networth,0)
console.log(result)
let names = result.map(actor => actor.name)
console.log(names) 
console.log(re)


//REDUCE - 
//sum - Think reduce
//reduce takes in a function as an argument 
//reduce loops and gives you back the accumulator

/*const nums = [1,2,3,4] 
const result=nums.reduce(function(prev,curr) {
    return prev+curr
})
console.log(result)

const num = [1,2,3,4] 
const results = num.reduce((a,b) => a+b)
console.log(results) */

/*function multiply(a,b) {
    return a*b
}

const num = [2,3,5] 
//const result = num.reduce((prev,curr)=>prev*curr)
const result =num.reduce(multiply)
console.log(result)
*/