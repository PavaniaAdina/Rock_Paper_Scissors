console.log("hello, world");
console.log("Pavani")
greeting = "Hey, How are you?? Happy to see you here"
console.log(greeting)



//user input
const prompt = require("prompt-sync")()

/*fruit = prompt("What is your fav food?")
export{};
console.log(fruit)*/
foodcost = Number(prompt("how much was the food?"))
//console.log(typeOf(foodcost))
tipPercentage = prompt('tip% ?')/100
tipAmt = foodcost*tipPercentage
console.log(tipAmt)
total = foodcost + tipAmt
console.log(total)

