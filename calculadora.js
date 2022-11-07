var display = document.getElementById("display")

function limpar() {
    display.value = "";
}
function zero() {
    display.value = display.value + 0;
}
function um() {
    display.value = display.value + 1;
} 
function dois() {
    display.value = display.value + 2;
} 
function tres() {
    display.value = display.value + 3;
} 
function quatro() {
    display.value = display.value + 4;
} 
function cinco() {
    display.value = display.value + 5;
} 
function seis() {
    display.value = display.value + 6;
} 
function sete() {
    display.value = display.value + 7;
} 
function oito() {
    display.value = display.value + 8;
} 
function nove() {
    display.value = display.value + 9;
} 
function menos() {
    display.value = display.value + "-";
}
function mais() {
    display.value = display.value + "+";
}
function vezes() {
    display.value = display.value + "*";
}
function barra() {
    display.value = display.value + "/";
}
function ponto() {
    display.value = display.value + ".";
}
function igual() {
    display.value = eval (display.value)
}