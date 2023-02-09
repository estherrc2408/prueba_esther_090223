/*
1.
Opcion 1: Se le debe pedir dos numeros al usuario e indicar si son impares y multiplos de 25 ambos, uno de ellos o ninguno.
Opcion 2: Se le debe pedir una palabra y comprobar si empieza o termina por s/S


*/
//Opcion 1

var opcion = prompt("introduce el numero 1 o 2 segun la opcion que quieras hacer");
if (opcion == "1") {
    var n1 = parseFloat(prompt("Introduce el primer numero"));//el enunciado no especifica si los numeros deben ser enteros y en el caso de multiplos de 25, 5 tambien es multiplo pero el cociente sera decimal, de modo que utilizamos el tipo de variable float 
    var n2 = parseFloat(prompt("Introduce el segundo numero"));
    let imp1 = n1 % 2;
    let imp2 = n2 % 2;
    let mul1 = n1 % 25;
    let mul2 = n1 % 25;

    function comp1() {
        if (imp1 != 0 && mul1 == 0) {
            var rp1 = "El primer numero es impar y multiplo de 25";
            console.log(rp1);
        } else {
            if (imp1 != 0 && mul1 != 0) {
                var rp1 = "El primer numero es impar pero no es multiplo de 25";
                console.log(rp1);
            } else {
                if (imp1 == 0 && mul1 != 0) {
                    var rp1 = "El primer numero no es impar y no es multiplo de 25";
                    console.log(rp1);
                } else {
                    var rp1 = "El primer numero no es impar pero si multiplo de 25";
                    console.log(rp1);
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
} else {
    if (opcion == "2") {
        var pal = prompt("Introduce una palabra y te indicare si empieza o acaba en 's' ");
        function comp1() {
            if (pal[0] == 's' || pal[0] == 'S') {
                var rp1 = "La palabra empieza con s";
                console.log(rp1);
            } else {
                var rep1 = "La palabra No empieza con s";
                console.log(rp1);
            }
            return rp1;
        }
        comp1();
        function comp2() {
            if (pal[pal.length - 1] == 's' || pal[pal.length - 1] == 'S') {
                var rp2 = "La palabra acaba con s";
                console.log(rp2);
            } else {
                var rp2 = "La palabra No acaba con s";
                console.log(rp2);
            }
            return rp2;
        }
        comp2();
        let rptotal = [];
        rptotal.push(comp1());
        rptotal.push(comp2());
        console.log(rptotal);
        alert(rptotal);
    }
    else {
        alert("no has introducido 1 o 2");
    }
}


