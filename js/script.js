//1 Generare i quadrati che andranno ad inserirsi all'interno del container tramite un ciclo, richiamando innanzitutto il contenitore.

const container = document.querySelector('.container_fr')

//1.1 Creare e richiamare la funzione 'reset' per svuotare il container da elementi derivanti dall'html.
reset();

//2 Creazione dei quadrati tramite il ciclo for che conterrà una funzione.

//3 Inseriamo all'interno di una funzione separata, l'intero codice della costruzione dei quadrati.
generateSquare(100)
// for(let i = 1; i <= 100; i++){
//   const square = addSquare(i);

  //2.1 All'interno dello square, inseriamo anche EventListener per rendere attivo lo specifico quadrato nel momento del click da parte dell'utente attraverso l'utilizzo di 'this'.

  // square.addEventListener('click', function(){
    // this.classList.toggle('clicked');

  //2.2 Tramite elemento.(qualsiasi testo) possiamo aggiungere un attributo custom, che di conseguenza possiamo far leggere attraverso 'console.log(this)'.
    // square._indexSquare = (i)
    // console.log(this._indexSquare)
  // })

  //2.3 Aggiungiamo uno square nel container ad ogni ciclo attraverso append.
  // container.append(square);
// }

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
  for(let i = 1; i <= 100; i++){
    const square = addSquare(i);

    square.addEventListener('click', function(){
    this.classList.toggle('clicked');
    square._indexSquare = (i)
    console.log(this._indexSquare)
    })
    container.append(square);
  }
}