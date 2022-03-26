const board = document.querySelector('#board')
const SQUARES_NUMBER = 500
const colors = ['780b28', '#E8CA79', '#16FABD', '#B65ED6', '#3D569C', '#1261E0', '#B1E028', '#E09D12', '#F830FF']

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)

  board.append(square)
}

function setColor(event) {
  const e = event.target
  const color = getRandomColor()
  e.style.backgroundColor = color;
  e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
  const e = event.target
  e.style.backgroundColor = '#1d1d1d'
  e.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}