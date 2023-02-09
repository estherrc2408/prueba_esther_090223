/*
2. Solicita una frase al usuario y contando los espacios que tiene, indica de cuántas palabras consta (debes presuponer que la frase tiene un unico espacio entre palabras)
*/
var frase = prompt("introduce una frase ");
var numletras = frase.length;
console.log(numletras);
var contesp = 1;
for (let i = 0; i < numletras; i++) {
    console.log(frase[i]);
    if(frase[i] == " ") {
        contesp++;
    }
}
alert("la frase tiene " + contesp + " palabras");