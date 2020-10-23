canvas = new fabric.Canvas("canvas");

player_x = 10;
player_y = 10;

block_width = 30;
block_height = 30;

player_object = "";
block_object = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
        player_object = Img;
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object)
    })
}

function block_update(get_Image){
    fabric.Image.fromURL(get_Image, function(Img){
        block_object = Img;
        block_object.scaleToWidth(block_width)
        block_object.scaleToHeight(block_height)
        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object)
    })
}

//ADV-C86 complete

//ADV-C87 start

window.addEventListener("keydown", keydown_fun)

function keydown_fun(e){
    keypresed = e.keyCode;
    console.log(keypresed)
    if(e.shiftKey == true && keypresed == "80"){
        block_height = block_height + 10;
        block_width = block_width + 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if(e.shiftKey == true && keypresed == "77"){
        block_height = block_height - 10;
        block_width = block_width - 10;
        document.getElementById("current_height").innerHTML = block_height;
        document.getElementById("current_width").innerHTML = block_width;
    }

    if(keypresed == "38"){
        uup();       
    }

    if(keypresed == "40"){
        down();       
    }

    if(keypresed == "37"){
        left();       
    }

    if(keypresed == "39"){
        right();       
    }

    if(keypresed == "87"){
        block_update("wall.jpg")
        console.log("w")     
    }
    
    if(keypresed == "71"){
        block_update("ground.png")
        console.log("g")     
    }

    if(keypresed == "68"){
        block_update("dark_green.png")
        console.log("d")     
    }

    if(keypresed == "76"){
        block_update("light_green.png")
        console.log("l")     
    }

    if(keypresed == "84"){
        block_update("trunk.jpg")
        console.log("t")     
    }

    if(keypresed == "82"){
        block_update("roof.jpg")
        console.log("r")     
    }

    if(keypresed == "89"){
        block_update("yellow_wall.png")
        console.log("y")     
    }

    if(keypresed == "85"){
        block_update("unique.png")
        console.log("u")     
    }

    if(keypresed == "67"){
        block_update("cloud.jpg")
        console.log("c")     
    }

}

//ADV-C87-Student-Project

                                        

function uup(){
    if(player_y>=0){
        player_y = player_y - block_height;
        canvas.remove(player_object)
        player_update()
    }
}

function down(){
    if(player_y<=600){
        player_y = player_y + block_height;
        canvas.remove(player_object)
        player_update()
    }
}

function left(){
    if(player_x>=0){
        player_x = player_x - block_width;
        canvas.remove(player_object)
        player_update()
    }
}

function right(){
    if(player_x<=800){
        player_x = player_x + block_width;
        canvas.remove(player_object)
        player_update()
    }
}
