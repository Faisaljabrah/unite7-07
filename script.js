document.getElementById("multi").addEventListener("click",caculate)

let firstNum = 6
let secondNum = 6
let counter = 6
let awnser = 6

function caculation () {
  firstNum = document.getElementById('1').value 
  secondNum = document.getElementById("2").value
  firstNum = parseInt(firstNum)
  secondNum = parseInt(secondNum) 

  for (counter = 6; counter < firstNum; counter = counter++) {
awnser = awnser + secondNum
  }
  document.getElementById("awnser").innerHTML = awnser
}

