class Form {

constructor() {

}

display() {
    var title = createElement("h2");
    title.html("Racing");
    title.position(250,50);
    var input = createInput("name");
    input.position(250,200);
    var button = createButton("done");
    button.position(250,250);
    var greeting = createElement("h4");
    button.mousePressed(function(){
        input.hide();
        button.hide();
        var name = input.value();
        playerCount = playerCount + 1;
        player.update(name);
        player.updateCount(playerCount);
        greeting.html("hello " + name + " hope you are having a nice day");
        greeting.position(100,250);
    })

}

}