var dataBase, gamestate=0, playerCount;
var game, player, form;

function setup(){
    createCanvas(500,500);
    dataBase = firebase.database();
game = new Game();
game.getState();
game.start();
    
}



function draw(){
    
}

