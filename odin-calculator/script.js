// create the digits function
// create a variable that store the first number entered
// for every press, update the display

// store the operator for later
let operator
let firstNum
let secondNum

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


const operandButton = document.querySelectorAll('.operand')
operandButton.forEach(button => {
  button.addEventListener('click', (e) => {
    display.classList.add('flicker');
    setTimeout(() => {
      display.classList.remove('flicker');
    }, 500);
    firstNum = display.innerText
    operator = e.target.innerText

    display.innerText = 0
  })
})


const equalsButton = document.querySelector('.equals')
equalsButton.addEventListener('click', () => {

  secondNum = display.innerText
  display.classList.add('flicker');
  setTimeout(() => {
    display.classList.remove('flicker');
  }, 500);

  if (operator === '+') {
    firstNum = Number(firstNum) + Number(secondNum)
    display.innerText = firstNum

  }
  if (operator === '-') {
    firstNum = Number(firstNum) - Number(secondNum)
    display.innerText = firstNum

  }
  if (operator === 'x') {
    firstNum = Number(firstNum) * Number(secondNum)
    display.innerText = firstNum

  }
  if (operator === '/') {
    if (secondNum == 0) {
      display.innerText = 'You cannot divide by zero.'
    } else {
      firstNum = Number(firstNum) / Number(secondNum)
      display.innerText = firstNum

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





