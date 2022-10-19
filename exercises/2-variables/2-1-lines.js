"use strict";



let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')

let width = context.canvas.width;
let height = context.canvas.height;

let margin = 50;
let spacing = 50;


drawlines();

function drawlines() { 

    context.beginPath();
    context.moveTo(margin,spacing);
    context.lineTo(width-margin,spacing);
    context.lineTo(margin,2*spacing)
    context.moveTo(margin,2*spacing);
  

    context.stroke();

   
     }


