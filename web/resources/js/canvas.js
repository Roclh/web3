let canvas = document.getElementById('area');
let context = canvas.getContext('2d');

drawCanvas(r);
drawPoints();

function drawPoints(){
    let points = getPoints();
    if(points===null)points=[];
    points.forEach(point => drawPoint(point.x, point.y, parseFloat(r), point.result));
}

function drawPoint(input_x,input_y,r,result){
    let x = input_x*25+150;
    let y = 150-input_y*25;
    if(result === "true") context.fillStyle = "green";
    if(result === "false") context.fillStyle = "red";
    context.beginPath();
    context.arc(x,y,2,0,Math.PI*2, false);
    context.fill();
    context.stroke();
}

function drawCanvas(r){
    //Задний фон
    context.fillStyle = "#656d44";
    context.fillRect(0, 0, canvas.width, canvas.height);


    //Прямоугольник
    context.fillStyle = "#edc021";
    context.fillRect(150, 150, r*25/2, -r*25);

    //Сектор
    context.beginPath();
    context.moveTo(150, 150);
    context.arc(150, 150, r*25, Math.PI, Math.PI*3/2);
    context.closePath();
    context.fill();

    //Треугольник
    context.beginPath();
    context.moveTo(150, 150);
    context.lineTo(150+r*25/2, 150);
    context.lineTo(150, 150+r*25);
    context.lineTo(150, 150);
    context.fill();
    context.closePath();

    //Линии
    context.fillStyle = "#000000";
    context.beginPath();
    context.moveTo(0, 150);
    context.lineTo(300, 150);
    context.moveTo(150, 0);
    context.lineTo(150, 300);
    context.moveTo(150, 0);
    context.lineTo(145, 15);
    context.moveTo(150, 0);
    context.lineTo(155, 15);
    context.moveTo(300, 150);
    context.lineTo(285, 145);
    context.moveTo(300, 150);
    context.lineTo(285, 155);
    context.moveTo(145, 25);
    context.lineTo(155, 25);
    context.moveTo(145, 50);
    context.lineTo(155, 50);
    context.moveTo(145, 75);
    context.lineTo(155, 75);
    context.moveTo(145, 100);
    context.lineTo(155, 100);
    context.moveTo(145, 125);
    context.lineTo(155, 125);
    context.moveTo(145, 175);
    context.lineTo(155, 175);
    context.moveTo(145, 200);
    context.lineTo(155, 200);
    context.moveTo(145, 225);
    context.lineTo(155, 225);
    context.moveTo(145, 250);
    context.lineTo(155, 250);
    context.moveTo(145, 275);
    context.lineTo(155, 275);

    context.moveTo(25, 145);
    context.lineTo(25, 155);
    context.moveTo(50, 145);
    context.lineTo(50, 155);
    context.moveTo(75, 145);
    context.lineTo(75, 155);
    context.moveTo(100, 145);
    context.lineTo(100, 155);
    context.moveTo(125, 145);
    context.lineTo(125, 155);
    context.moveTo(175, 145);
    context.lineTo(175, 155);
    context.moveTo(200, 145);
    context.lineTo(200, 155);
    context.moveTo(225, 145);
    context.lineTo(225, 155);
    context.moveTo(250, 145);
    context.lineTo(250, 155);
    context.moveTo(275, 145);
    context.lineTo(275, 155);
    context.stroke();
    context.font = "10pt Arial";
    context.fillText("Y", 160, 15);
    context.fillText(5, 160, 30);
    context.fillText(4, 160, 50);
    context.fillText(3, 160, 75);
    context.fillText(2, 160, 100);
    context.fillText(1, 160, 125);
    context.fillText(-1, 160, 175);
    context.fillText(-2, 160, 200);
    context.fillText(-3, 160, 225);
    context.fillText(-4, 160, 250);
    context.fillText(-5, 160, 275);

    context.fillText(-5, 30, 145);
    context.fillText(-4, 50, 145);
    context.fillText(-3, 75, 145);
    context.fillText(-2, 100, 145);
    context.fillText(-1, 125, 145);
    context.fillText(1, 175, 145);
    context.fillText(2, 200, 145);
    context.fillText(3, 225, 145);
    context.fillText(4, 250, 145);
    context.fillText(5, 275, 145);
}

canvas.onmousedown = function (e){
    if(!!r){
        let rect = canvas.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let cx = (x-150)/25 ;
        let cy = (150 - y)/25;
        //alert(x+" "+y+" "+" "+cx+" "+cy);

        if(cy>=-3 && cy<=5 && cx<=3 && cx>=-3){
            document.getElementById("tableForm:pointX").value = cx;
            document.getElementById("tableForm:pointY").value = cy;
            document.getElementById("tableForm:pointR").value = r;
            document.getElementById("tableForm:hiddenButton").click();
            drawCanvas(r);
            drawPoints();
        }else if(!(cy>=-3 &&cy<=5))
            alert("Ошибка валидации! Число должно быть от -3 до 5");
        else
            alert("Ошибка валидации! Число должно быть от -3 до 3");
    }else{
        alert("Выберите R");
    }
}