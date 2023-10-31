let squaresPerSide

const rainbowPen = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

const canvasNode = document.querySelector('#canvas')
let tool = rainbowPen()
const generateCanvas = () => {
  for (let lengthCounter = 0; lengthCounter < squaresPerSide; lengthCounter++) {
    const lengthNode = document.createElement('div');
    lengthNode.style.display = 'flex';

    for (let widthCounter = 0; widthCounter < squaresPerSide; widthCounter++) {
      const singleSquare = document.createElement('div');
      singleSquare.style.width = 960 / squaresPerSide + 'px';
      singleSquare.style.height = 960 / squaresPerSide + 'px';
      singleSquare.style.filter = `brightness(100%)`;

      singleSquare.addEventListener('mouseover', (e) => {
        singleSquare.style.backgroundColor = 'red';
        let currentBrightness = parseFloat(singleSquare.style.filter.replace('brightness(', '').replace('%)', ''));
        currentBrightness -= 10;
        singleSquare.style.filter = `brightness(${currentBrightness}%)`;
      });



      lengthNode.appendChild(singleSquare);
    }

    canvasNode.appendChild(lengthNode);
  }
}

const resetCanvasBtn = document.querySelector('#reset')

resetCanvasBtn.addEventListener('click', (e) => {
  canvasNode.innerHTML = ''
  canvasNode.style.border = '1px black solid'
  squaresPerSide = Number(window.prompt("Enter number of squares:"))
  if (squaresPerSide <= 1) {
    alert('Minimum number of squares is 2. Generating 2 squares per side.')
    squaresPerSide = 2
  }
  if (squaresPerSide > 100) {
    alert('Maximum number of squares is 100. Generating 100 squares per side. ')
    squaresPerSide = 100

  }

  generateCanvas()
})


