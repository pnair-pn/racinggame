class Form{
    constructor(){

    }
    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(375,10);
        var input = createInput("Name");
        var button = createButton("Play");
        var greeting = createElement('h3');
        input.position(450,150);
        button.position(550,200);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount +=1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("Hello " + name);
            greeting.position(450,150);
        })
    }
}