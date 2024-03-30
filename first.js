//  my all variables

// this variable is for accessing tha all buttons of html
let gameBtns = document.querySelectorAll(".game-smbl-btn");

// this variable is for accessing tha rock button of html
let rockBtn =  document.querySelector("#rock");

// this variable is for accessing tha paper button of html
let paperBtn =  document.querySelector("#paper");

// this variable is for accessing tha scissor button of html
let scissorBtn =  document.querySelector("#scissor");

// this variable is for accessing tha user's count on winnig game
let userWinCount =  document.querySelector("#user-win-count");

// this variable is for accessing tha computer's count on winnig game
let compWinCount =  document.querySelector("#comp-win-count");

// this variable is for accessing to show a message after winning the game
let winnerMsg =  document.querySelector("#winner-msg");

// i used these 2 varaibles for increasing user and computer score in a function after winning the game
let userScore = 0;
let compScore = 0;




// my all functions for different usage

// this function is for generating a random choice for computer to paly this game
let generateCompChoice = () => {

    // this line of code is for creating an array and store that array into a variable called "choices"
    let choices = ["Rock" , "Paper" , "Scissor"];

    /* this line of code is for generating a random number between 0 and 2 for array which is stored
    in choices variable. one thing is that why i generated a random number b/w 0 and 2 let me tell you that 
    i have 3 strings in my array so basically i have 3 indices in my array which is equal to 0 ,1 and 2
    and i want to connect that random number which i created, with the index of my array so that's why i 
    genrated a random number b/w 0and 2*/
    let randomIdx = Math.floor(Math.random() * 3);

    //  at this point i returned that random number into my array as an index of my array
    return choices[randomIdx];
};

// this function is for showing that game is draw
let gameDraw = () => {

    // this line of code is for updating the msg that game is draw, according to the winner of the game
    winnerMsg.innerHTML = `<h5 class="bg-dark text-light p-4 d-inline" id="winner-msg">Game is Draw! Play Again</h5>`;
};

// this function is for increasing the user score after winning the game
let increaseUserScore = () => {

    // at this point i updated the "user win count" variable by increament of user score varaible. user score bvariable is at the top
    userWinCount.innerText = ++userScore;
};

// this function is for increasing the computer score after winning the game
let increaseCompScore = () => {
    
    // at this point i updated the "comp win count" variable by increament of computer score varaible. comp score bvariable is at the top
    compWinCount.innerText = ++compScore;
};

// this function is for showing the winner

/* this line of code is for creating a variable and store in a function. and i passed 3 variables 
"userWin" , "userchoice" , "compchoice". because these variables are the part of an other function 
and i want that these 3 variables should also bbe read by this computer so that's why i passsed them into
that function */
let showWinner = (userWin , userChoice , compChoice) => {

    // this line of code is for checking that userwin is true or not
    if (userWin) {

        // if the user win is true then the innerHTML of "winner msg tag" would be updated by this value
        winnerMsg.innerHTML = `<h5 class="bg-success text-light p-4 d-inline" id="winner-msg">You Win! Your ${userChoice} win against ${compChoice}</h5>`;

        // this line of code is for removing a claas when "user win" updated
        winnerMsg.classList.remove("bg-dark");

        // this is a function which increases the count varaile of user when he has won the game
        increaseUserScore();
    } else {

        // if the user win is'nt true then the innerHTML of "winner msg tag" would be updated by this value
        winnerMsg.innerHTML = `<h5 class="bg-danger text-light p-4 d-inline" id="winner-msg">You lost! ${compChoice} win against Your ${userChoice}</h5>`;

        // this line of code is for removing a claas when "comp win" updated
        winnerMsg.classList.remove("bg-dark");

        // this is a function which increases the count varaile of computer when he has won the game
        increaseCompScore();
    }
};

// this function is for checking the winner
let checkWinner = (userChoice , compChoice , userWin) => {
    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            userWin = compChoice === "Paper" ? false : true;
        }

        else if (userChoice === "Paper") {
            userWin = compChoice === "Scissor" ? false : true;
        }

        else {
            userWin = compChoice === "Rock" ? false : true;
        }

        showWinner(userWin , userChoice , compChoice);
    };
};

// this loop is for adding event listner click on each button
gameBtns.forEach((gameBtn) => {

    // then a function starts running
    gameBtn.addEventListener("click" ,() => {

        /* this line of code is for creating a variable for store user's choice into a variable. and
        i access the choice of user by getting the value of a attribute named "id"*/
        let userChoice = gameBtn.getAttribute("id");

        // this line of code is for generating a computer choice with help of generate coputer choice function
        let compChoice = generateCompChoice();

        // this line of code is for checking the winner
        checkWinner(userChoice , compChoice);
    });
});