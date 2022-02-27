var canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
roverx=10;
rovery=10;
roverwidth=100;
roverheight=100;
var roverimage="rover.png";
var backgroundimage="mars.jpg";

function add(){
    backgroundimagetag=new Image();
    backgroundimagetag.onload=uploadbackground;
    backgroundimagetag.src=backgroundimage;

    roverimagetag=new Image();
    roverimagetag.onload=uploadrover;
    roverimagetag.src=roverimage;
}

function uploadbackground(){
    ctx.drawImage(backgroundimagetag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(roverimagetag,roverx,rovery,roverwidth,roverheight);
}

window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keypressed=e.keyCode;

    if(keypressed=="37"){
        console.log("left");
        left();
    }
    if(keypressed=="38"){
        console.log("up");
        up();
}
if(keypressed=="39"){
    console.log("right");
    right();
}
if(keypressed=="40"){
    console.log("down");
    down();
}
}
