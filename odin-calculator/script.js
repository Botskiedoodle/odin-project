// create the digits function
// create a variable that store the first number entered
// for every press, update the display

const display = document.querySelector('.display')
display.innerText = '0'

const digitButton = document.querySelectorAll('.digit')
digitButton.forEach(button => {
  button.addEventListener('click', (e) => {
    // console.log(e.target.innerText)
    if (display.innerText === '0') {
      display.innerText = e.target.innerText;
    } else {
      display.innerText += e.target.innerText;
    }
  })
})

const resetButton = document.querySelector('.reset')
resetButton.addEventListener('click', () => {
  display.innerText = '0'
})

const deleteButton = document.querySelector('.delete')
deleteButton.addEventListener('click', () => {
  const currentText = display.innerText;
  // handles single digit negative number
  if ((currentText.length === 2 && currentText < 0) || currentText.length === 1) {
    display.innerText = 0
  } else {
    display.innerText = currentText.slice(0, -1);
  }
})

// store the operator for later
let operator
let firstNum
let secondNum

const operandButton = document.querySelectorAll('.operand')
operandButton.forEach(button => {
  button.addEventListener('click', (e) => {
    firstNum = display.innerText
    display.innerText = 0
    operator = e.target.innerText
  })
})


const equalsButton = document.querySelector('.equals')
equalsButton.addEventListener('click', () => {
  secondNum = display.innerText
  if (operator === '+') {
    display.innerText = Number(firstNum) + Number(secondNum)
  }
  if (operator === '-') {
    display.innerText = Number(firstNum) - Number(secondNum)
  }
  if (operator === 'x') {
    display.innerText = Number(firstNum) * Number(secondNum)
  }
  if (operator === '/') {
    if (secondNum == 0) {
      display.innerText = 'You cannot divide by zero.'
    } else {
      display.innerText = Number(firstNum) / Number(secondNum)
    }
  }
})

const decimalBtn = document.querySelector('.decimal')
decimalBtn.addEventListener('click', () => {
  const currentText = display.innerText;
  if (!currentText.includes('.')) {
    display.innerText += '.';
  }
})





