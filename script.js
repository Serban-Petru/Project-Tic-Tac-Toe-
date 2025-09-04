const playerList = [];

const playGroundMatrix =
[
    [['#'],['#'],['x']],
    [['x'],['x'],['x']],
    [['o'],['o'],['o']]
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
            if(flagCount_x === 3)   console.log(`pe linia ${i} asta este x boss`); //daca castiga!!
            if(flagCount_o === 3)   console.log(`pe linia ${i} asta este o boss`); //daca castiga!!
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
            if(flagCount_x === 3)   console.log(`pe linia ${i} ORIZONTALA asta este x boss`); //daca castiga!!
            if(flagCount_o === 3)   console.log(`pe linia ${i} ORIZONTALA asta este o boss`); //daca castiga!!
            flagCount_x = 0; flagCount_o = 0;
        }
    }

    function principalDiagonalLineCheck(){
        var flagCount_x = 0, flagCount_o = 0;
        for (let i = 0; i < playGroundMatrix.length; i++) {
            if(String(playGroundMatrix[i][i]) === 'x') flagCount_x++;
            if(String(playGroundMatrix[i][i]) === 'o') flagCount_o++; 
        }
        if(flagCount_x === 3)   console.log(`pe diagonala asta este x boss`); //daca castiga!!
        if(flagCount_o === 3)   console.log(`pe diagonala asta este o boss`); //daca castiga!!
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
        if(flagCount_x === 3)   console.log(`pe diagonala SECUNDARA asta este x boss`); //daca castiga!!
        if(flagCount_o === 3)   console.log(`pe diagonala SECUNDARA asta este o boss`); //daca castiga!!
    }
    
    verticalLineCheck();
    horizontalLineCheck();
    principalDiagonalLineCheck();
    seconderyDiagonalLineCheck();
}


gameLogic();




// function Player(name, marker){
//     this.name = name;
//     this.marker = marker;
// }

// function makePlayer(name, marker){
//     const player = new Player(name,marker);
//     playerList.push(player);
// }

// makePlayer("ceva", "o");
// makePlayer("altceva", "x");