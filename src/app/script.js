import {fourOnFourMatrix as fourOnFourMatrix} from './4x4'
import {thirtyTwoOnThirtyTwoMatrix as thirtyTwoOnThirtyTwoMatrix} from './32x32'
console.log(fourOnFourMatrix);
console.log(thirtyTwoOnThirtyTwoMatrix);

let fourBtn = document.querySelector('.four'),
    thirtyTwoBtn = document.querySelector('.thirty'),
    imageBtn = document.querySelector('.image');
fourBtn.addEventListener('click', fourOnFour)
thirtyTwoBtn.addEventListener('click', thirtyTwoOnThirtyTwo)
imageBtn.addEventListener('click', drawImage)
async function fourOnFour(){
    const response = await fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
    const myJson = await response.json();
    let canvas = document.querySelector('.canvas'),
        context  = canvas.getContext('2d'),
        width = canvas.width,
        height = canvas.height;

    for(let i = 0; i <= width - width/4; i += width/4)
    for(let j = 0; j <= height - height/4; j += height/4)
    {   
        let color = myJson[i/(width/4)][j/(width/4)]
        context.beginPath();
        context.rect(j, i, width/4, width/4);
        context.fillStyle = `#${color}`;
        context.fill();
        context.closePath();
    }
}

async function thirtyTwoOnThirtyTwo(){
    const response = await fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/32x32.json')
    const myJson = await response.json();
    let canvas = document.querySelector('.canvas'),
        context  = canvas.getContext('2d'),
        width = canvas.width,
        height = canvas.height;

    for(let i = 0; i <= width - width/32; i += width/32)
    for(let j = 0; j <= height - height/32; j += height/32)
    {   
        let color = myJson[i/(width/32)][j/(width/32)]
        context.beginPath();
        context.rect(j, i, width/32, width/32);
        context.fillStyle = `rgba(${color[0]},${color[1]},${color[2]},${Math.ceil(color[3]/255)})`;
        context.fill();
        context.closePath();
    }
}

function drawImage() {
    var c = document.querySelector('.canvas');
    var ctx = c.getContext("2d"),
        width = c.width,
        height = c.height;
    var img = new Image;
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,c.width,c.height);
    img.src = "../public/images/image.png"
    img.onload = function () {
        ctx.drawImage(img, 0, 0, width, height);
    }
}