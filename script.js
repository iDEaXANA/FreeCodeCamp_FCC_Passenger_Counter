'use strict'
// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}


let saveEl = document.getElementById("save-el")

function save() {
    let countStr = count + "-"
    saveEl.textContent += countStr // Got stuck on this for 15 minutes. .innertext =/= .innerText...
    count = 0
    countEl.textContent = count
}



// let username = "Bilal"
// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + "!"

// console.log(messageToUser)

// let name = "Bilal"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name 

// console.log(myGreeting)


// let welcomeEl = document.getElementById("welcome-el")
// let name = "Bilal"
// let greeting = "Hi, my name is "

// welcomeEl.innerText = greeting + name
// welcomeEl.innerText += "👋"


