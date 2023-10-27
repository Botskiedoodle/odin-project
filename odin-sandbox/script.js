// Manipulating the DOM using Javascript

const container = document.querySelector('#container')

const redParagraph = document.createElement('p')
redParagraph.setAttribute('style', 'color: red')
redParagraph.textContent = 'Hey, I am red!';
container.appendChild(redParagraph);

const blueH3 = document.createElement('h3')
blueH3.setAttribute('style', 'color: blue')
blueH3.textContent = `I'm blue h3`
container.appendChild(blueH3)


const anotherContainer = document.createElement('div')
anotherContainer.style.backgroundColor = 'pink'
anotherContainer.style.border = '2px solid black'


const myH1 = document.createElement('h1')
myH1.textContent = `I'm in a div!`
anotherContainer.appendChild(myH1)

const myParagraph = document.createElement('p')
myParagraph.textContent = 'ME TOO!'
anotherContainer.appendChild(myParagraph)

container.append(anotherContainer)

// Method 2
const btn = document.querySelector('#btn')
btn.onclick = () => alert('Hello World from external JS onclick method.')

// Method 3
const newBTN = document.querySelector('#newBTN')
newBTN.addEventListener('click', (e) => {
  console.log(e.target)
})

let shoppingList = document.querySelector('#shopping-list')
let shoppingItem

const addBtn = document.querySelector('#addBtn')
addBtn.addEventListener('click', (e) => {

  shoppingItem = document.querySelector('#shoppingInput').value
  if (shoppingItem == '') {
    alert('Please input something')
  } else {

    const item = document.createElement('li')
    item.textContent = shoppingItem
    const removeBtn = document.createElement('button')
    removeBtn.textContent = 'Delete'
    removeBtn.addEventListener('click', (e) => {
      shoppingList.removeChild(item)
    })
    item.appendChild(removeBtn)
    document.querySelector('#shoppingInput').value = ''

    shoppingList.appendChild(item)
  }

})

