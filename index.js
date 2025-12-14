// // document.getElementById("count_el").innerText = 5
// // let count = 5

// // console.log(count)

// // let myage = 26

// // console.log(myage)

// // let myAge = 26

// // let HumanDogRatio = 7

// // let MyDogAge = myAge * HumanDogRatio

// // console.log(MyDogAge)

// //function increment() {
//   //console.log(42)
// //}
// //increment()

// // let lap1 = 34
// // let lap2 = 33
// // let lap3 = 36


// // function laps() {
// //     console.log(lap + lap2 + lap3)
// // }
  
// // laps()
// // let lapscompleted = 0

// // function completedlaps() {

// //    lapscompleted = lapscompleted + 1

// // }

// // completedlaps()
// // completedlaps()
// // completedlaps()

// // console.log(lapscompleted)

let countEl = document.getElementById("count-el")
let SaveEl = document.getElementById("save_el")

let count = 0

function increment() {
  count += 1
  countEl.innerHTML = count
  console.log(count)

}

function save() {
   let CountStr = count + " - "
   SaveEl.textContent += CountStr
   countEl.innerHTML = 0
   count = 0
}



// let message = "you have three new notification"
// let username = "per"

// // console.log(username + "," + message + "!")

// let messageToUser = message + "," + username + "!"
// console.log(messageToUser)



// let name = "chris"
// let greetings = "hi, my name is"
// let myGreeting = greetings + " " + name

// console.log(myGreeting)

// document.getElementById("welcome-el")

// let welcomeEl = document.getElementById("welcome-el")

// let name = "chris "
// let greeting = "hi am a software engineer"

// welcomeEl.innerText = name + greeting
