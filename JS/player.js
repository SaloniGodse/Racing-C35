class Player {
    constructor() {

    }

    getCount() {
        var C = dataBase.ref("PlayerCount")
        C.on("value", function(data){
        playerCount = data.val();
        })
    }

    updateCount(count) {
        dataBase.ref('/').update({
            PlayerCount:count
        })
    }

    update(name) {
        var PlayerIndex = "Player" + playerCount;
        dataBase.ref(PlayerIndex).set({
            name:name
        })
    }

}