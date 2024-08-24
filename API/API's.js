//API - Application Programming Interface
//It lets your app communicate with other services to fetch the required data you need.


//dog api
// https://dog.ceo/api/breeds/image/random
console.log("hello Doggie")

// .then - Promises
//Asynchronous Programming 

const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')

//Whenever we are using fetch function we shpuld remember that when executed it gives as 'Promise{}' then we hsve to add '.then()' to fetch method
const getNewDog = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        //console.log("2nd line", json)
        console.log(json.message)
        dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
    })
}

dogButton.onclick = () => getNewDog()

//console.log(fetch('https://dog.ceo/api/breeds/image/random'))
console.log("3rd line")
//when i run upto above code we can observe that '3rd line' runs before 'ftech(2nd line)' runs. 
//This is the asynchronous pogrammming. when one line takes time to execute then next line will continue to execute before it.
