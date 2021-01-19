let r=document.getElementById("tableForm:pointR").value, responce = '';

function setR(value){
    r = value;
    drawCanvas(r);
}

function reset(){
    responce='';
    HTMLFormElement.reset()
}

function check(){
    if(!!r){
        document.getElementById("tableForm:pointX").value = document.getElementById("form:x").value;
        document.getElementById("tableForm:pointY").value = document.getElementById("form:y").value;
        document.getElementById("tableForm:pointR").value = r;
        document.getElementById("tableForm:hiddenButton").click();
        drawCanvas(r);
    }else alert("Что-то пошло не так!");
}

// function show_coords(event) {
//     let validationError = 'Y Value must be a number between -3 and 3';
//     let rect = event.currentTarget.getBoundingClientRect();
//     let x = event.clientX - rect.left;
//     let y = event.clientY - rect.top;
//     let basis = 100 / r;
//     let cx = ((x - 150) / basis);
//     let cy = ((150 - y) / basis);
//
//     // console.log("X coords: " + x + ", Y coords: " + y + ",R: " + basis);
//     // console.log("X coords: " + cx + ", Y coords: " + cy);
//     // $('#form\\:x').val(cx);
//     // $('#form\\:y').val(cy);
//     // send();
//
//     if (cy>=-3 && cy<=3) {
//         document.getElementById("tableForm:pointX").value = cx;
//         document.getElementById("tableForm:pointY").value = cy;
//         document.getElementById("tableForm:pointR").value = r;
//         document.getElementById("tableForm:hiddenButton").click();
//
//         drawPlate(r);
//         draw(r);
//         drawPoint(cx, cy, r, check(cx,cy,parseFloat(r)) )
//     } else alert(validationError);
//
// }

