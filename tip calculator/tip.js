/* 
APP : TIP CALCULATOR

there are 3 functions that should be made
calculateBill()
increasePeople()
decreasePeople()
These functions with names are already hard coded in HTML. So, you cant change their names only here.
The div ID'S you are gonna need access to-->
#1 ID 'billTotalInput' = user input for bill total
#2 ID 'tipInput' = User input for tip
#3 ID 'numberOfPeople = current number of people you're splitting the bill
#4 ID 'perPersonTotal' = Total dollar value owned per person
*/
//Get Global access to all inputs/divs here.
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')
/*
//get number of people from number of people div
'10'+'10' = 1010
Number(10+10) = 20 so,we should rememeber to use Number type casting
*/
let numberOfPeople = Number(numberOfPeopleDiv.innerText)
//**Calculate the total bill per person**
const calculateBill = () => {
    //get bill from user input & convert it into a number
    const bill = Number(billInput.value)
    
    //Get the tip from user & convert it into a percentage(divide by 100)
    const tipPercent = Number(tipInput.value) / 100
    
    //get total tip amount
    const tipAmount = bill * tipPercent

    //Calculate the total(tip amount+Bill)
    const total = bill + tipAmount
    
    //claculate the per person total (total divided by number of people)
    const perPersonTotal = total/numberOfPeople

    //update the perPersonTotal on DOM & showing it to user
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}

//**Splits the bill between more people **
const increasePeople = () => {

//increment the amount of people(to increment)
numberOfPeople += 1

//update the DOM with the new number of people (to show it on the screen)
numberOfPeopleDiv.innerText = numberOfPeople

//Calculate the bill based on the new number of people
calculateBill()
}
//**splits the bill between fewer people **
const decreasePeople= () => {
//Guard clause - (if amount is less than 1 simply return)
//a.k.a you cant decrease the number of people to 0 or negative 
if(numberOfPeople <= 1) {
    return
}
//decrement the amount of people
numberOfPeople -= 1
//update the dom with new number of people
numberOfPeopleDiv.innerText = numberOfPeople

//calculate the bill based on the new number of people
calculateBill()

} 
