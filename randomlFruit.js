/*fruits = ['banana','apple','straw','guava']
console.log(fruits[0])
*/

//create a random function called randomFruit
/*
const randomFruit = (items) => {
    const randomNum = Math.floor(Math.random()*items.length)
    console.log(randomNum)
    return items[randomNum]
    
}
items = ['banana','apple','straw','guava']
//console.log(items[0])
console.log(randomFruit(items))
*/

//if else if else using weather
//rainy(+1),sunny(-1),overCast(0)

const weatherScore = (weather) => {
    let score
    const randomNumber = Math.floor(Math.random()*weather.length)
    if(weather[randomNumber] == 'rainy' || weather[randomNumber] == 'overcast') {
        score = 2
    }
    else if(weather[randomNumber] == 'rainy') {
        score = 1
    } else if(weather[randomNumber] == 'sunny') {
        score = -1
    } else {
        score = 0
    }
    return score


}
weather = ['rainy','sunny','overcast']
console.log(weatherScore(weather))
