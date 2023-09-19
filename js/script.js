const main = document.querySelector('.game_wrapper');
const playBtn = document.querySelector('#play')

let numberSquare = 100;



playBtn.addEventListener('click', play);

// ----- Function ----- //

function play(){
  reset();
  generatePlayGrid();
}

function generatePlayGrid(){
  const grid = document.createElement('div');
  grid.classList.add('grid')

  for(let i = 0; i < numberSquare; i++) {
    const square = createSquare(i);
    grid.append(square)
  }

  main.append(grid)
}

function createSquare(index){
  const square =  document.createElement('div');
  square.classList.add('square', 'square100');
  square._squareID = index;

  return square;
}

function reset(){
  main.innerHTML = ''; 
}