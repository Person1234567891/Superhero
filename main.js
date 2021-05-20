var canvas = new fabric.Canvas("myCanvas");
var block_width = 30;
var block_height = 30;
var x = 10;
var y = 10;
var player_Object, block_Object;
function player_update(){
    fabric.Image.fromURL("player.png", function(img){
        player_Object = img;
        player_Object.scaleToWidth(150);
        player_Object.scaleToHeight(150);
        player_Object.set({
            top: y, 
            left: x
        })
        canvas.add(player_Object)
    })
}
function block_update(image){
    fabric.Image.fromURL(image, function(img){
        block_Object = img;
        block_Object.scaleToWidth(block_width);
        block_Object.scaleToHeight(block_height);
        block_Object.set({
            top: y, 
            left: x
        })
        canvas.add(block_Object)
    })
}
window.addEventListener("keydown", myKeyDown)
 function myKeyDown(e){
     keyDown1 = e.keyCode;
     console.log(keyDown1);
     if(keyDown1 == '87'){
         console.log("W is pressed");
         block_update("superhero.jpg");
     }
     if(keyDown1 == 77 && e.shiftKey == true){
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        

    }
    if(keyDown1 == 80 && e.shiftKey == true){
        console.log("Shift P is pressed");
        block_width = block_width + 10;
        block_height = block_height + 10;
        document.getElementById("current_width").innerHTML = block_width;
        document.getElementById("current_height").innerHTML = block_height;
        

    }
    }
    