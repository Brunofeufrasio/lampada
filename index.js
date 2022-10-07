
function on () {
    document.getElementById("lamp").src="imagen/ligada.jpg";
    

}

function off () {
    document.getElementById("lamp").src="imagen/desligada.jpg";

}
/*function quebra () {
    document.getElementById("lamp").src="imagen/quebrada.jpg";
   

}
*/

function pisca () {
    var intervalo = 0;
    var contador = 0;
    while(contador < 30) {
        intervalo += 200;
        setTimeout("document.getElementById('lamp').src='imagen/ligada.jpg';",intervalo);

        intervalo += 200;
        setTimeout("document.getElementById('lamp').src='imagen/desligada.jpg';",intervalo);
        contador++;
    }
}

