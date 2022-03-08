/* Operador AND && */
const currentHour = 23;
let message = "0";
if (currentHour >= 22) {
    message = "Não deveriámos comer nada, é hora de dormir";
}
else if (currentHour >= 18 && currentHour < 22) {
    message = ("Rango da noite, vamos jandar :D");
}
else if (currentHour >= 14 && currentHour < 18) {
    message = ("Vamos fazer um bolo pro café da tarde?");
}
else if (currentHour >= 11 && currentHour < 14) {
    message = ("Hora do almoço!!!");
}
else if (currentHour >= 4 && currentHour < 11) {
    message = ("Hmmm, cheiro de café recém passado.");
}
else {
    message = ("Estou dormindo, por isso não vou comer :)");
}
