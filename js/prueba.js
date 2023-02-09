var n1 = parseFloat(prompt("Introduce el primer numero"));//el enunciado no especifica si los numeros deben ser enteros y en el caso de multiplos de 25, 5 tambien es multiplo pero el cociente sera decimal, de modo que utilizamos el tipo de variable float 
var n2 = parseFloat(prompt("Introduce el segundo numero"));
let imp1 = n1 % 2;
let imp2 = n2 % 2;
let mul1 = n1 % 25;
let mul2 = n1 % 25;

function comp1() {
    //NOTAS, al 
    if (imp1 != 0 && mul1 == 0) {
        var rp1 = "El primer numero es impar y multiplo de 25";
        console.log(rp1);
    } else {
        if (imp1 != 0 && mul1 != 0) {
            var rp1 = "El primer numero es impar pero no es multiplo de 25";
            console.log(rp1);
        } else {
            if (imp1 == 0 && mul1 == 0) {
                var rp1 = "El primer numero no es impar pero si multiplo de 25";
                console.log(rp1);
            } else {

            }
        }
    }
    return rp1;
}

function comp2() {
    if (imp2 != 0 && mul2 == 0) {
        var rp2 = "El segundo numero es impar y multiplo de 25";
        console.log(rp2);
    } else {
        if (imp2 != 0 && mul2 != 0) {
            var rp2 = "El segundo numero es impar pero no es multiplo de 25";
            console.log(rp2);
        } else {
            if (imp2 == 0 && mul2 != 0) {
                var rp2 = "El segundo numero no es impar y no es multiplo de 25";
                console.log(rp2);
            } else {
                var rp2 = "El segundo numero no es impar pero si multiplo de 25";
                console.log(rp2);
            }
        }
    }
    return rp2;
}
let rptotal = [];
rptotal.push(comp1());
rptotal.push(comp2());
console.log(rptotal);
alert(rptotal);