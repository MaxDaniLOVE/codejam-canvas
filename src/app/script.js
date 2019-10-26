import {fourOnFourMatrix as fourOnFourMatrix} from './4x4'
import {thirtyTwoOnThirtyTwoMatrix as thirtyTwoOnThirtyTwoMatrix} from './32x32'

let fourBtn = document.querySelector('.four'),
    thirtyTwoBtn = document.querySelector('.thirty'),
    imageBtn = document.querySelector('.image');

fourBtn.addEventListener('click',function(){drawMatrix(fourOnFourMatrix, 4)});
thirtyTwoBtn.addEventListener('click', function(){drawMatrix(thirtyTwoOnThirtyTwoMatrix, 32)});
imageBtn.addEventListener('click', drawImage);

function drawMatrix(colorMatrix, numOfCells){
    let canvas = document.querySelector('.canvas'),
    context  = canvas.getContext('2d'),
    width = canvas.width,
    height = canvas.height;

    for(let i = 0; i <= width - width/numOfCells; i += width/numOfCells)
    for(let j = 0; j <= height - height/numOfCells; j += height/numOfCells)
    {   
        let color = colorMatrix[i/(width/numOfCells)][j/(width/numOfCells)]
        context.beginPath();
        context.rect(j, i, width/numOfCells, width/numOfCells);
        switch (numOfCells) {
            case 4:
                context.fillStyle = `#${color}`;
                break;
            case 32:
                context.fillStyle = `rgba(${color[0]},${color[1]},${color[2]},${Math.ceil(color[3]/255)})`;
                break;
        }
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