async function getData(){
    const response = await fetch('https://raw.githubusercontent.com/rolling-scopes-school/tasks/master/tasks/stage-2/codejam-canvas/data/4x4.json')
    const myJson = await response.json();
    console.log(myJson[0][0]);
 
    let canvas = document.querySelector('.canvas'),
        context  = canvas.getContext('2d'),
        width = canvas.width,
        height = canvas.height;

    for(i = 0; i <= width - width/4; i += width/4)
    for(j = 0; j <= height - height/4; j += height/4)
    {   
        let color = myJson[i/(width/4)][j/(width/4)]
        console.log(i/(width/4), j/(width/4));
        context.beginPath();
        context.rect(j, i, width/4, width/4);
        context.fillStyle = `#${color}`;
        context.fill();
        context.closePath();
    }
}

getData()