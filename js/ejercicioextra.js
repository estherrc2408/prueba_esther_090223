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