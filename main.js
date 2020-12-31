var canvas = document.getElementById("myCanvas");
function Normal(){
var cx ;
var cy ;
var lx  = 0 ;
var ly  = 0;
var ME ;
var widthOL = 5 ;
var Width = screen.width;
var newWidth ;
var newHeight;
ctx = canvas.getContext("2d");
var colour = "black";
if(Width < 992){
     newWidth = Width - 70;
     newHeight = screen.height - 300;
     document.getElementById("myCanvas").style.height = newHeight;
     document.getElementById("myCanvas").style.width = newWidth;
}
canvas.addEventListener("touchstart",my_TouchStart);
function my_TouchStart(e){
    colour = document.getElementById("Colour-Name").value;
    widthOL = document.getElementById("Width").value ;
    ME =    "MouseDown";
    lx = e.touches[0].clientX - canvas.offsetLeft;
    ly = e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove",my_TouchMove);
function my_TouchMove(e){
    cx = e.touches[0].clientX - canvas.offsetLeft ;
    cy = e.touches[0].clientY - canvas.offsetTop ;
    if(ME == "MouseDown"){
        colour = document.getElementById("Colour-Name").value;
        widthOL = document.getElementById("Width").value ;
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = widthOL;
        ctx.moveTo(lx,ly);
        ctx.lineTo(cx,cy);
        ctx.stroke();
    }
    lx = cx ;
    ly = cy ;
}
}
function Bonkos(){
    var cx ;
var cy ;
var lx  = 0 ;
var ly  = 0;
var ME ;
var widthOL = 5 ;
var canvas = document.getElementById("myCanvas");
var Width = screen.width;
var newWidth ;
var newHeight;
ctx = canvas.getContext("2d");
var colour = "black";
if(Width < 992){
    newWidth = screen.height - 27;
    newHeight = Width - 57;
    document.getElementById("myCanvas").style.height = newWidth;
    document.getElementById("myCanvas").style.width = newWidth + 12;
}
canvas.addEventListener("touschstart",my_TouchStart);
function my_TouchStart(e){
    lx = e.touches[0].clientX - canvas.offsetTop + canvas.offsetLeft;
    ly = e.touches[0].clientY - canvas.offsetLeft ;
    colour = document.getElementById("Colour-Name").value;
    widthOL = document.getElementById("Width").value ;
    ME =    "MouseDown";
}
canvas.addEventListener("touchmove",my_TouchMove);
function my_TouchMove(e){
    cx = e.clientX - canvas.offsetLeft + canvas.offsetLeft + canvas.offsetTop;
    cy = e.clientY - canvas.offsetTop ;
    if(ME == "MouseDown"){
        colour = document.getElementById("Colour-Name").value;
        widthOL = document.getElementById("Width").value ;
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.lineWidth = widthOL;
        ctx.moveTo(lx,ly);
        ctx.lineTo(cx,cy);
        ctx.stroke();
    }
    lx = e.clientX - canvas.offsetTop ;
    ly = e.clientY - canvas.offsetLeft ;
    
}

}
function Clear(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

