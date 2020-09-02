class Game {

constructor() {

}

getState() {
var GR = dataBase.ref("GameState");
GR.on("value",function(data){
    gamestate = data.val();
})

}

update(state) {
    dataBase.ref('/').update({
        GameState:state
    })
}

start() {
    if(gamestate === 0) {
       form = new Form(); 
       form.display();
       player = new Player();
       player.getCount();
    }
}

}