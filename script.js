document.getElementById('button').addEventListener('click', checkArea)
// this code is used when the buttons are clicked. It also connect the button to the check area function.

let area = 0
let userbase = 0;
let userarea = 0
let userarea = 0
let const = 0
// The let variables are where users enter the values to tell the program what to use in order to calculate the problem and find the result or answer.

function checkArea () {
  userarea = document.getElementById('userarea').value
  userarea = parseInt(userarea)

  area = userbase * userheight / 2 
 area = parseInt(area)

// this compares the userarea to the area to check to see if its correct. If its correct the if statement will be true and will run this loop displaying the "Correct" message. 
if(userarea >= area) {
  document.getElementById('answer').innerHTML = "Correct!"
} else if (userarea != area) {
  document.getElementById('answer').innerHTML = "Wrong"
// the else if function will only run if the first if statment is false,if the  user area does not equal to the area.
}
}
// The function result tells the code what equation to follow and gives us the result of our equation. The innerHTMl displays a message on the users screen.
