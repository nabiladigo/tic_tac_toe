// html  elements:
const statusUpdate = document.querySelector(".status");

const restart = document.querySelector(".restart");

const cells = document.querySelectorAll(".game-cell");

// console.log(statusUpdate);
// console.log(restart);
// console.log(cells);

 //  game const
 const playerOne = 'x';
 const playerTwo = 'o';


// game variables:
 
 let gameOn = true;   
            // if somebody won or its a draw we will have to set it to false manually.
 let xIsNext = true;


 //  function

 const currentPlayer = (player) => player === 'x' ? playerOne : playerTwo;
// //  winning

 const handleWin = (player) => {
     gameOn =false;
    
     if (player ==='x'){
         statusUpdate.innerHTML = `${currentPlayer(player)} has won!`;
     }else{
         statusUpdate.innerHTML = `<span>${currentPlayer(player)} has won!</span>`;
     }
    
 }

  const checkGameStatus= () =>{
    //   console.log(e);
 // apdate the status of the game

  const a= cells[0].classList[2];
   const b= cells[1].classList[2];
   const c= cells[2].classList[2];
   const d= cells[3].classList[2];
   const f= cells[4].classList[2];
   const g= cells[5].classList[2];
   const h= cells[6].classList[2];
   const j= cells[7].classList[2]; 
   const k= cells[8].classList[2];
    // console.log(a, b, c, d, f, g, h, j, k);

  // check for winner

      if(a && a=== b && a===c){
         handleWin(a);
      } else if ( d && d=== f && d===g){
          handleWin(d);

      }else if (h && h === j && h === k){
          handleWin(h);
        
      }else if ( a && a=== d && a === h){
          handleWin(a);
            
      }else if ( b && b === f && b === j){
          handleWin(b);

      }else if (c && c === g && c === k){
          handleWin(c);

      }else if(a && a === f && a === k){
          handleWin(a);

      }else if (c && c === f && c === h){
          handleWin(c);

     }else if (a && b && c && d && f && g && h && j && k){
        gameOn = false;
         statusUpdate.innerHTML =' Game is a tie!';
     }else{ 
         xIsNext = !xIsNext;
        if (xIsNext){
             statusUpdate.innerHTML = `${playerOne} is next`;
        }else{
             statusUpdate.innerHTML =`<span> ${playerTwo} is next</span>`
        }
      }

}; 


 // event handler

 
const handleRestart=(e) => {
    // console.log(e);
     xIsNext = true;
    statusUpdate.innerHTML = `${playerOne} is next`;

    gameOn = true;
}

 const handleCellClick = (e) => {

     const classList = e.target.classList;
    // console.log(classList);
    const location = classList[1];
    // console.log("location", location);
     // this is how we know wich cell we r working with
     // check if cell have x or o
    if(!gameOn || classList[2]==='x'|| classList[2]==='o'){
         return;
    }
    if(xIsNext === true){ 
       classList.add('x')
      checkGameStatus();      
    }else{
         classList.add('o');
        checkGameStatus();
       
     }
   
 }


 // event listener 

 restart.addEventListener('click', handleRestart);

 // adding event listener to each cell

 for (let cell of cells){
      cell.addEventListener('click', handleCellClick)
 }
