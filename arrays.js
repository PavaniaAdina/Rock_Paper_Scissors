/*const letterCount = (phrase) => { //aRROW FUNCTION
     

    let result = 0;
    for (const letter in phrase) {
        console.log(Number(letter)+1)
        result = Number(letter)+1
        //of - gives all the values in the phrase
        //in - gives the index values of given phrase
    }
    return {result:phrase.length}
}
//const phrase = 'Hey, Would you like to come with me to the market?'
const prompt = require("prompt-sync")()
const phrase = prompt('Write your phrase')
console.log(letterCount(phrase))
*/


/*const sumArray = (nums) =>{
    let result = 0;
    //for loop
    for(const  i of nums) {
        console.log(i)
        result += i
    }
    return {result}
}
const nums = [1,2,3,3,4]
console.log(sumArray(nums)) */
/*maximum number in an array
const maxi = (nums) => {
    let result = 0;
    //for loop
    for(const i of nums) {
        if(result < i) {
            result = i;
        }
    }
    return {result}
}
const nums = [1,5,4,3,6,8,16]
console.log(maxi(nums)) */


//Letter Frequency
const letterfreq = (phrase) => {
    //console.log(phrase)
    //make a  freq object that stores key value pairs as letter and its frequency
    let freq = {}
    for(const letter of phrase) {
        //check if the letter exists in freq
        if(letter in freq) 
        {
            //incremennt the value by 1
            freq[letter] = freq[letter]+1
        } else {
            //if letter exists only one time
            freq[letter] = 1
        }
    }
    return freq 
}
//console.log(letterfreq('hahacallagaincall')) */

//word frequency
/*
const wordFreq = (phrase) => {
    let freq = {}
    words = phrase.split(' ')
    console.log(words)
    for(const word of words) {
        console.log(word)
        //we have to write both if and else.so that key value pairs will be given for all values like if 
        //only one word is there then also it should get a value as 1
        if(word in freq) {
            freq[word] += 1
        } else {
            freq[word] = 1
        }    
    }
    return freq
}
console.log(wordFreq('hey hi hey hi hey nice')) */


const wordFreq = (phrase) => {
    const words = phrase.split(' ')
    return letterfreq(words)
}
const prompt = require("prompt-sync")()
const userInput = prompt('give your sentence') 
console.log(wordFreq(userInput))