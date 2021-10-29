canvas = new fabric.Canvas("mycanvas");
var birthdayaudio = document.getElementById("sound");

function displayimg(){
    fabric.Image.fromURL("cake.gif", function(Img){

        Birthdayimg=Img;
        Birthdayimg.scaleToWidth(800);
        Birthdayimg.scaleToHeight(600);
        Birthdayimg.set({
top:0,
left:0
        });
        canvas.add(Birthdayimg);
    });
}

function playSound(){
    birthdayaudio.play();
}
