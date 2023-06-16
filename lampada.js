const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lamp = document.getElementById ('lamp');

function isLampBroken (){
    return lamp.src.indexOf ('quebrada') > -1 //indexOf é um método que pergunta se a lampada está quebrada
}

function lampOn (){
    if (!isLampBroken ()) {
        lamp.src='./img/ligada.jpg';
    }
}

function lampOff (){
    if (!isLampBroken ()) {
        lamp.src='./img/desligada.jpg';
    }
}

function lampBroken (){
    lamp.src ='./img/quebrada.jpg';
}
//momento dos eventos. chamamos o botão adicionamos o evento "eventlistener"
turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener ('click', lampOff);
lamp.addEventListener ('mouseover', lampOn); //função mouseover
lamp.addEventListener ('mouseleave', lampOff);
lamp.addEventListener ('dblclick', lampBroken); 
