const squere = document.querySelectorAll(".pos");

let flag = true;
let flag_pick = true;

const playGroundMatrix =
    [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];


function clearplayGroundMatrix() {
    for (let i = 0; i < playGroundMatrix.length; i++) {
        for (let j = 0; j < playGroundMatrix.length; j++) {
            playGroundMatrix[i][j] = [];
        }
    }
}

function gameLogic() {
    function verticalLineCheck() {
        for (let i = 0; i < playGroundMatrix.length; i++) {
            let flagCount_x = 0, flagCount_o = 0;
            for (let j = 0; j < playGroundMatrix.length; j++) {
                if (String(playGroundMatrix[j][i]) === 'x') flagCount_x++;
                if (String(playGroundMatrix[j][i]) === 'o') flagCount_o++;
            }
            if (flagCount_x === 3) {
                console.log(`pe linia  asta este x boss`); //daca castiga!!
                playerList[0].points++;
                flag = false;
                console.log("CASTIG!");
                return flag;
            }
            if (flagCount_o === 3) {
                console.log(`pe linia asta este o boss`); //daca castiga!!
                playerList[1].points++;
                flag = false;
                console.log("CASTIG!");
                return flag;
            }
            flagCount_x = 0; flagCount_o = 0;
        }
    }

    function horizontalLineCheck() {
        for (let i = 0; i < playGroundMatrix.length; i++) {
            let flagCount_x = 0, flagCount_o = 0;
            for (let j = 0; j < playGroundMatrix.length; j++) {
                if (String(playGroundMatrix[i][j]) === 'x') flagCount_x++;
                if (String(playGroundMatrix[i][j]) === 'o') flagCount_o++;
            }
            if (flagCount_x === 3) {
                console.log(`pe linia  asta este x boss`); //daca castiga!!
                playerList[0].points++;
                flag = false;
                console.log("CASTIG!");
                return flag;
            }
            if (flagCount_o === 3) {
                console.log(`pe linia asta este o boss`); //daca castiga!!
                playerList[1].points++;
                flag = false;
                console.log("CASTIG!");
                return flag;
            }
            flagCount_x = 0; flagCount_o = 0;
        }
    }

    function principalDiagonalLineCheck() {
        var flagCount_x = 0, flagCount_o = 0;
        for (let i = 0; i < playGroundMatrix.length; i++) {
            if (String(playGroundMatrix[i][i]) === 'x') flagCount_x++;
            if (String(playGroundMatrix[i][i]) === 'o') flagCount_o++;
        }
        if (flagCount_x === 3) {
            console.log(`pe linia asta este x boss`); //daca castiga!!
            playerList[0].points++;
            flag = false;
            console.log("CASTIG!");
            return flag;
        }
        if (flagCount_o === 3) {
            console.log(`pe linia asta este o boss`); //daca castiga!!
            playerList[1].points++;
            flag = false;
            console.log("CASTIG!");
            return flag;
        }
    }

    function seconderyDiagonalLineCheck() {
        var flagCount_x = 0, flagCount_o = 0;
        for (let i = 0; i < playGroundMatrix.length; i++) {
            for (let j = 0; j < playGroundMatrix.length; j++) {
                if ((i + j) === (playGroundMatrix.length - 1)) {
                    if (String(playGroundMatrix[i][j]) === 'x') flagCount_x++;
                    if (String(playGroundMatrix[i][j]) === 'o') flagCount_o++;
                }
            }
        }
        if (flagCount_x === 3) {
            playerList[0].points++;
            flag = false;
            console.log("CASTIG!");
            return flag;
        }
        if (flagCount_o === 3) {
            playerList[1].points++;
            flag = false;
            console.log("CASTIG!");
            return flag;
        }
    }

    verticalLineCheck();
    horizontalLineCheck();
    principalDiagonalLineCheck();
    seconderyDiagonalLineCheck();
}

function playerChoise(marker) {
    if (marker % 2 === 0) {
        // const poz_x = prompt(`${playerList[0].name} moves with ${playerList[0].marker}`).split("");

        let poz_x = getPos().split("");
        console.log(poz_x);

        if (playGroundMatrix[Number(poz_x[0])][Number(poz_x[1])] === '' && (poz_x =! undefined)) {
            playGroundMatrix[Number(poz_x[0])][Number(poz_x[1])] = playerList[0].marker;
            return 1;
        }
        else
            return 0;
    }
    else {
        // const poz_o = prompt(`${playerList[1].name} moves with ${playerList[1].marker}`).split("");
        while (flag_pick) {
            var poz_o = getPos().split("");
        }
        if (playGroundMatrix[Number(poz_o[0])][Number(poz_o[1])] === '') {
            playGroundMatrix[Number(poz_o[0])][Number(poz_o[1])] = playerList[1].marker;
            return 1;
        }
        else
            return 0;
    }
    // return;
}


function gameLoop() {
    let i = 0;
    let contor = 0;
    while (flag === true) {
        contor = playerChoise(i);
        gameLogic();
        console.table(playGroundMatrix);
        i = i + contor;
    }
}

register();
gameLoop();



function x() {
    squere.forEach((squere) => {
        squere.addEventListener("click", () => {
            squere.innerHTML = "<svg fill=\"#ffffff\" height=\"80%\" width=\"80%\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 460.775 460.775\" xml:space=\"preserve\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55 c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55 c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505 c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55 l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719 c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z\"></path> </g></svg>";
            flag_pick = false;
        });
    });
}



function circle() {
    squere.forEach((squere) => {
        squere.addEventListener("click", () => {
            squere.innerHTML = "<svg viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><g id=\"SVGRepo_bgCarrier\" stroke-width=\"0\"></g><g id=\"SVGRepo_tracerCarrier\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></g><g id=\"SVGRepo_iconCarrier\"> <path d=\"M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z\" stroke=\"white\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path> </g></svg>";
        });
    });
}







function getPos() {
    squere.forEach((squere) => {
        squere.addEventListener("click", () => {
            return squere.getAttribute("data-value"); 
        }); 
    }); 
}