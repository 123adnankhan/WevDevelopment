const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer ;
let gameGrid ;

const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
// initial case
// let's create a function to initialize the game 
function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","",""];
    // UI par bhi empty karna padega
    boxes.forEach((box,index)=>{
        box.innerText="";
        boxes[index].style.pointerEvents = "all";
        // one more thing is missing or green color ko remove karna hai 
        // initialize boxes with css property again 
        box.classList = `box box${index+1}`;
    });
    newGameBtn.classList.remove("active");// hiding new button initially
    gameInfo.innerText=`Current Player -${currentPlayer}`;
}

initGame();
function checkGameOver(){
    let ans ="";
    winningPositions.forEach((position)=>{
        //all 3 boxes should be non empty and have same value
        if((gameGrid[position[0]] !="" || gameGrid[position[1]] !="" || gameGrid[position[2]] !="") &&
        (gameGrid[position[0]] === gameGrid[position[1]] && gameGrid[position[1]]=== gameGrid[position[2]])){

            // check if winner is x
            if(gameGrid[position[0]]==="X"){
                ans="X";
            } else{
                ans = "0";
            }
            // disable pointer event
            boxes.forEach((box)=>{
                box.style.pointerEvents="none";
            });
            // now we know either X/0 is winner
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
        }
        // when there is no winner or let's check if there is a tie 
        let fillCnt = 0 ;
        gameGrid.forEach((box)=>{
            if(box !==""){
                fillCnt++ ;
            }
        });
        // board is filled and game is tie 
        if(fillCnt === 9){
            gameInfo.innerText = `Game Tied:`;
            newGameBtn.classList.add("active");
        }
    });
    // it means we have a winner
    if(ans !== ""){
        gameInfo.innerText=`Winner Player - ${ans}`;
        newGameBtn.classList.add("active");
        return ;
    }
}
function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer="0";
    } else{
        currentPlayer="X";
    }
    // UI Update 
    gameInfo.innerText =`Current Player - ${currentPlayer}`;
}
function handleClick(index){
    if(gameGrid[index] === ""){
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer ;
        boxes[index].style.pointerEvents="none";
        //swap karo turn karo
        swapTurn();
        checkGameOver();
    }
}
boxes.forEach((box,index)=>{
    box.addEventListener('click',()=>{
        handleClick(index);
    })
});
newGameBtn.addEventListener("click",initGame);