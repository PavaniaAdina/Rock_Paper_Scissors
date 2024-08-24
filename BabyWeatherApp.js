//Baby Weather App
/* Numbers - Any kind of Number Including Decimals{1, 5, 6, 79}
string - Zero or more characters written inside quotes {'hello, "u9"}
arrays - []
objects - {}
boolean - true/false
*/
/* Math Operators - multiply,divide,modulo,add,subtract
Math methods - math.floor(), Math.ceil(),Math.random()
*/
/*a = Math.random()*8
console.log(a)
//when we want a simple integer to print when we use a random number rather than big decimal then:
c = Math.floor(a)
console.log(c)
*/

/*const = the value cannot be changed
let = the value can be changed
var = tha value can be changed (not recommended)
*/

var prompt = require('prompt-sync')();
let weather = prompt("how is today's weather? ")
//if raiins 'Grab your Umbrella'
//else 'wear sunGlasses
if(weather == 'rain') {
    console.log('Grab your Umbrella')
} else {
    console.log('wear your  sunGlasses')
}