const gridContainer = document.getElementById('grid-container');
const resetButton = document.getElementById('reset');

function createGrid(size) {

  gridContainer.innerHTML = '';
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    square.addEventListener('mouseover', () => {
      square.style.backgroundColor = 'lightblue'; 
    });
    gridContainer.appendChild(square);
  }
}


createGrid(16);


resetButton.addEventListener('click', () => {
  let newSize = prompt('Ingrese el tamaño de la cuadrícula (máximo 100):');
  newSize = parseInt(newSize);
  if (newSize > 0 && newSize <= 100) {
    createGrid(newSize);
  } else {
    alert('Por favor, ingrese un número válido entre 1 y 100.');
  }
});

square.addEventListener('mouseover', () => {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    square.style.backgroundColor = randomColor;
  });
  square.addEventListener('mouseover', () => {
    let currentOpacity = parseFloat(square.style.opacity) || 0;
    if (currentOpacity < 1) {
      square.style.opacity = currentOpacity + 0.1;
      square.style.backgroundColor = 'black';
    }
  });
  