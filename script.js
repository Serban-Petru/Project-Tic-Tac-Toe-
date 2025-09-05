let flag = true;

const playGroundMatrix = 
[
    ['','',''],
    ['','',''],
    ['','','']
];


function clearplayGroundMatrix(){
    for (let i = 0; i < playGroundMatrix.length; i++) {
        for (let j = 0; j < playGroundMatrix.length; j++) {
            playGroundMatrix[i][j] = [];
        }
    }
}

function gameLogic(){
    function verticalLineCheck(){
        for (let i = 0; i < playGroundMatrix.length; i++) {
            let flagCount_x = 0, flagCount_o = 0;
            for (let j = 0; j < playGroundMatrix.length; j++) {
                if(String(playGroundMatrix[j][i]) === 'x') flagCount_x++;
                if(String(playGroundMatrix[j][i]) === 'o') flagCount_o++; 
            }
            if(flagCount_x === 3){ 
                console.log(`pe linia  asta este x boss`); //daca castiga!!
                playerList[0].points++;
                flag = false;
                console.log("CASTIG!");
                return flag;
            }
            if(flagCount_o === 3){   
                console.log(`pe linia asta este o boss`); //daca castiga!!
                playerList[1].points++;
                flag = false;
                console.log("CASTIG!");
                return flag;
            }
            flagCount_x = 0; flagCount_o = 0;
        }
    }

    function horizontalLineCheck(){
        for (let i = 0; i < playGroundMatrix.length; i++) {
            let flagCount_x = 0, flagCount_o = 0;
            for (let j = 0; j < playGroundMatrix.length; j++) {
                if(String(playGroundMatrix[i][j]) === 'x') flagCount_x++;
                if(String(playGroundMatrix[i][j]) === 'o') flagCount_o++; 
            }
            if(flagCount_x === 3){ 
                console.log(`pe linia  asta este x boss`); //daca castiga!!
                playerList[0].points++;
                flag = false;
                console.log("CASTIG!");
                return flag;
            }
            if(flagCount_o === 3){   
                console.log(`pe linia asta este o boss`); //daca castiga!!
                playerList[1].points++;
                flag = false;
                console.log("CASTIG!");
                return flag;
            }
            flagCount_x = 0; flagCount_o = 0;
        }
    }

    function principalDiagonalLineCheck(){
        var flagCount_x = 0, flagCount_o = 0;
        for (let i = 0; i < playGroundMatrix.length; i++) {
            if(String(playGroundMatrix[i][i]) === 'x') flagCount_x++;
            if(String(playGroundMatrix[i][i]) === 'o') flagCount_o++; 
        }
            if(flagCount_x === 3){ 
                console.log(`pe linia asta este x boss`); //daca castiga!!
                playerList[0].points++;
                flag = false;
                console.log("CASTIG!");
                return flag;
            }
            if(flagCount_o === 3){   
                console.log(`pe linia asta este o boss`); //daca castiga!!
                playerList[1].points++;
                flag = false;
                console.log("CASTIG!");
                return flag;
            }
    }

    function seconderyDiagonalLineCheck(){
        var flagCount_x = 0, flagCount_o = 0;
        for (let i = 0; i < playGroundMatrix.length; i++) {
            for (let j = 0; j < playGroundMatrix.length; j++) {
                if ((i + j) === (playGroundMatrix.length - 1)){ 
                    if(String(playGroundMatrix[i][j]) === 'x') flagCount_x++;
                    if(String(playGroundMatrix[i][j]) === 'o') flagCount_o++;
                } 
            }
        }
        if(flagCount_x === 3){ 
            playerList[0].points++;
            flag = false;
            console.log("CASTIG!");
            return flag;
        }
        if(flagCount_o === 3){   
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

function playerChoise(marker){
    if(marker % 2 === 0){
        const poz_x = prompt(`${playerList[0].name} moves with ${playerList[0].marker}`).split("");
        if(playGroundMatrix[Number(poz_x[0])][Number(poz_x[1])] === ''){ 
            playGroundMatrix[Number(poz_x[0])][Number(poz_x[1])] = playerList[0].marker;
            return 1;
        }
        else
            return 0;
    }
    else{
        const poz_o = prompt(`${playerList[1].name} moves with ${playerList[1].marker}`).split("");
        if(playGroundMatrix[Number(poz_o[0])][Number(poz_o[1])] === ''){ 
            playGroundMatrix[Number(poz_o[0])][Number(poz_o[1])]=  playerList[1].marker;
            return 1;
        }
        else
            return 0;
    }
    // return;
}


function gameLoop(){
    let i = 0;
    let contor = 0;
    while(flag === true){   
        contor = playerChoise(i);
        gameLogic();
        console.table(playGroundMatrix);
        i = i + contor;
    }
}

register();
gameLoop();

