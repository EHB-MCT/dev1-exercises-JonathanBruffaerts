"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')

drawname();

function drawname() {

    //J
    context.beginPath();
    context.strokeStyle = "blue";
    context.lineWidth = 5;
    context.beginPath();
    context.moveTo(200, 50);
    context.lineTo(200, 250);
    context.lineTo(150, 275);
    context.lineTo(100,250);
    context.stroke();


//O
context.beginPath();
context.strokeStyle = "red";
context.lineWidth = 5;
context.moveTo(250, 50);
context.lineTo(250, 275);
context.lineTo(300, 275);
context.lineTo(300, 50);
context.lineTo(247,50);
context.stroke();

//N
context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 5;
context.moveTo(350, 50);
context.lineTo(350, 50);
context.lineTo(350,275);
context.moveTo(350, 50);
context.lineTo(400, 275);
context.moveTo(400,275);
context.lineTo(400,50);
context.stroke();

//A
context.beginPath();
context.lineWidth = 5;
context.moveTo(450, 275);
context.lineTo(475,50);
context.moveTo(475,50);
context.lineTo(500,275);
context.moveTo(453,225);
context.lineTo(497,225);
context.stroke();

//T
context.beginPath();
context.lineWidth = 5;
context.moveTo(520,50);
context.lineTo(580,50);
context.moveTo(550,50);
context.lineTo(550,275);
context.stroke();

//H
context.beginPath();
context.lineWidth = 5;
context.moveTo(600,50);
context.lineTo(600,275);
context.moveTo(650,50);
context.lineTo(650,275);
context.moveTo(600,162);
context.lineTo(650,162);
context.stroke();

//A
context.beginPath();
context.lineWidth = 5;
context.moveTo(700, 275);
context.lineTo(725,50);
context.moveTo(725,50);
context.lineTo(750,275);
context.moveTo(703,225);
context.lineTo(747,225);
context.stroke();

//N
//N
context.beginPath();
context.strokeStyle = "black";
context.lineWidth = 5;
context.moveTo(800, 50);
context.lineTo(800, 50);
context.lineTo(800,275);
context.moveTo(800, 50);
context.lineTo(850, 275);
context.moveTo(850,275);
context.lineTo(850,50);
context.stroke();



}