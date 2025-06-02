let boxes = document.querySelectorAll(".btn");
let resetButton = document.querySelector("#reset");
let result = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");
let newGame = document.querySelector("#new-game");
let container = document.querySelector(".container");

let turnO = true;
let count = 0;

const winPatterns = [
    [0,1,2] ,
    [0,3,6] ,
    [0,4,8] ,
    [1,4,7] ,
    [2,5,8] ,
    [2,4,6] ,
    [3,4,5] ,
    [6,7,8] 
]

boxes.forEach((btn) => {
    btn.addEventListener("click" ,() => {
    if(turnO){
        btn.innerText = "O";
        turnO = false;

    }else{
        btn.innerText = "X";
        turnO = true;
    }
    btn.disabled = true;
    count++;
    checkWinner();
});
});

const disableBoxes = () =>{
    boxes.forEach((box) =>{
        box.disabled = true;
    });
};

const showWinner = (winner) =>{
    result.innerText = `Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    newGame.innerText = "Replay";
    resetButton.classList.add("hide");
    disableBoxes();

};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                container.classList.add("hide");
                showWinner(pos1Val);

            }
        }

    }
      if (count === 9) {
        container.classList.add("hide");
        result.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
        newGame.innerText = "Replay";
        resetButton.classList.add("hide");
        disableBoxes();
    }
};


const resetGame = () =>{
    turnO = true;
    msgContainer.classList.add("hide");
    enableBoxes();
    container.classList.remove("hide");
    resetButton.classList.remove("hide");
    count = 0;

};

const enableBoxes = () =>{
    boxes.forEach((box) =>{
        box.disabled = false;
        box.innerText = "";
    });
};


newGame.addEventListener("click" ,resetGame);
resetButton.addEventListener("click" , resetGame);