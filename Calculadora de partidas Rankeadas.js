// Exercício representando uma calculadora de partidas rankeadas de algum game.
function saldoDeVitoria (vitoria, derrota){
    return (vitoria - derrota)
}
let resultado = saldoDeVitoria (80, 57)
let nivel = ""

if (resultado < 10){
    nivel = "ferro"
}else if (resultado > 10 && resultado <= 20){
    nivel = "bronze"
}else if (resultado >= 21 && resultado <= 50){
    nivel = "prata"
}else if (resultado >= 51 && resultado <= 80){
    nivel = "ouro"
}else if (resultado >= 81 && resultado <= 90){
    nivel = "diamante"
}else if (resultado >= 91 && resultado <= 100){
    nivel = "lendario"
}else{
    nivel = "imortal"
}

console.log ("O herói tem saldo de " + resultado + " e esta no nivel " + nivel)
