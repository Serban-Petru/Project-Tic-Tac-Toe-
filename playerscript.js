const playerList = [];
function Player(name, marker, points){
    this.name = name;
    this.marker = marker;
    this.points = points;
}

function makePlayer(name, marker){
    const player = new Player(name,marker);
    playerList.push(player);
}

function register(){
    const player_1 = prompt("Name player1", "Player1");
    const player_2 = prompt("Name player2", "Player2");
    console.log(`Hello ${player_1} and ${player_2}`);
    console.log(`${player_1} starts and they got x marker and ${player_2} o`);
    makePlayer(player_1,'x'); makePlayer(player_2,'o');
}
