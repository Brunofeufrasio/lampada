const on = document.getElementById ('on')
const off = document.getElementById ('off')
const lamp = document.getElementById ('lamp')


function lampOn () {
    lamp.src = 'imagen/ligada.jpg';
}

function lampOff () {

    lamp.src = 'imagen/desligada.jpg';
}

/*function lampQuebra () {

    lamp.src = 'imagen/quebrada.jpg';
}
*/

on.addEventListener('click', lampOn);
off.addEventListener('click', lampOff);

lamp.addEventListener('dblclick', lampOn,)
lamp.addEventListener('click', lampOff,)

