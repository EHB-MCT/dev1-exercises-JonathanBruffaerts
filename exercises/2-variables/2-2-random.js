"use strict";



let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')

let width = context.canvas.width;
let height = context.canvas.height;


let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let color = "rgb(" + r + "," + g + "," + b +")";
let y1 = 50;
let y2 = 100;
let y3 = 200;

drawrect(100,y1);

function drawrect(y) {
    
    context.beginPath();
    context.fillStyle = color;
    context.fillRect(0,y,500,500);
    context.stroke();

    context.beginPath();
    context.fillStyle = color;
    context.fillRect(25,y+25,450,450);
    context.stroke();
}

