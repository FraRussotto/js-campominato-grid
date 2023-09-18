//1 Generare i quadrati che andranno ad inserirsi all'interno del container tramite un ciclo, richiamando innanzitutto il contenitore.

  //1.1 Creare e richiamare la funzione 'reset' per svuotare il container da elementi derivanti dall'html.

//2 Creazione dei quadrati tramite il ciclo for che conterrà una funzione.
  
  //2.1 All'interno dello square, inseriamo anche EventListener per rendere attivo lo specifico quadrato nel momento del click da parte dell'utente attraverso l'utilizzo di 'this'.
  
  //2.2 Tramite elemento.(qualsiasi testo) possiamo aggiungere un attributo custom, che di conseguenza possiamo far leggere attraverso 'console.log(this)'.
  
  //2.3 Aggiungiamo uno square nel container ad ogni ciclo attraverso append.
  
//3 Inseriamo all'interno di una funzione separata, l'intero codice della costruzione dei quadrati.

//4 Creare un bottone che avvi la generazione del container con i quadrati al suo interno.

//5 Trasformo la creazione del bottone in una funzione.

//6 Inserisco la funzione che genera i quadrati all'interno del click del bottone, resettando il messaggio iniziale e creando l'area di gioco.


//1 
const container = document.querySelector('.container_fr')
const playBtn = document.querySelector('.play_btn')

//2
// reset();


//3
// for(let i = 1; i <= 100; i++){
  // const square = addSquare(i);
  // square.addEventListener('click', function(){
    // this.classList.toggle('clicked');
    // square._indexSquare = (i)
    // console.log(this._indexSquare)
    // });
    
    // container.append(square);
    // }
    
//4
  // const btn = document.createElement('button');
  // btn.innerHTML = 'Play';
  // btn.addEventListener('click', function(){
  //   container.innerHTML = '';
  //   generateSquare()
  // })
  // playBtn.append(btn);
      
  
  // Bonus: Inseriamo nell'html un selector con le 3 opzioni di difficoltà che determineranno attraverso il loro value, il numero degli square. Tramite il value creiamo uno switch con 3 case.
  
  const level = document.querySelector('level').value;
  let numSquare
  
  if(level == 0){
    numSquare = 100;
  }else if(level == 1){
    numSquare = 81;
    square.classList.add('level_medium');
  }else if(level == 2){
    numSquare = 49;
    square.classList.add('level_hard')
  }
  
  playBtn.append(generatePlayBtn(10))


// ------------ Function ------------ //

function reset(){
  container.innerHTML = '';
}

function addSquare(index){
  const newSquare = document.createElement('div');
  newSquare.className = 'square';
  newSquare.innerHTML = `<span>${index}</span>`;
  return newSquare;
}

//3 
function generateSquare(numSquare){
  for(let i = 1; i <= numSquare; i++){
    const square = addSquare(i);

    square.addEventListener('click', function(){
    this.classList.toggle('clicked');
    square._indexSquare = (i)
    console.log(this._indexSquare)
    })
    container.append(square);
  }
}

//5
function generatePlayBtn(numSquare){

  const btn = document.createElement('button');
  btn.classList.add('btn', 'btn-secondary')
  btn.innerHTML = 'PLAY';
  
  //6

  btn.addEventListener('click', function(){
    reset();
    generateSquare(numSquare)
  })

  return btn;
};