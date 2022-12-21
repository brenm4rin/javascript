let nombre
let dia
let mes
let resultado

function datos() {
    dia = parseInt(prompt('Ingrese su día de nacimiento'));
    mes = parseInt(prompt('Ingrese su mes de nacimiento'));
}

datos();


function calcularSignoZodiacal(dia, mes) {

    if (mes == 1) {
        if (dia >= 21) {
            alert('Tu signo es Acuario')
            return "acuario";
        } else {
            alert('Tu signo es Capricornio')
            return "capricornio";
        }
    }
    if (mes == 2) {
        if (dia >= 19) {
            alert('Tu signo es Piscis')
            return "piscis";
        } else {
            alert('Tu signo es Acuario')
            return "acuario";
        }
    }
    if (mes == 3) {
        if (dia >= 20) {
            alert('Tu signo es Aries')
            return "aries";
        } else {
            alert('Tu signo es Piscis')
            return "piscis";
        }
    }
    if (mes == 4) {
        if (dia >= 20) {
            alert('Tu signo es Tauro')
            return "tauro";
        } else {
            alert('Tu signo es Aries')
            return "Aries";
        }
    }
    if (mes == 5) {
        if (dia >= 21) {
            alert('Tu signo es Géminis')
            return "geminis";
        } else {
            alert('Tu signo es Tauro')
            return "tauro";
        }
    }
    if (mes == 6) {
        if (dia >= 20) {
            alert('Tu signo es Cáncer')
            return "cancer";
        } else {
            alert('Tu signo es Géminis')
            return "geminis";
        }
    }
    if (mes == 7) {
        if (dia >= 22) {
            alert('Tu signo es Leo')
            return "leo";
        } else {
            alert('Tu signo es Cáncer')
            return "cancer";
        }
    }
    if (mes == 8) {
        if (dia >= 21) {
            alert('Tu signo es Virgo')
            return "virgo";
        } else {
            alert('Tu signo es Leo')
            return "leo";
        }
    }
    if (mes == 9) {
        if (dia >= 22) {
            alert('Tu signo es Libra')
            return "libra";
        } else {
            alert('Tu signo es Virgo')
            return "virgo";
        }
    }
    if (mes == 10) {
        if (dia >= 22) {
            alert('Tu signo es Escorpio')
            return "escorpio";
        } else {
            alert('Tu signo es Libra')
            return "libra";
        }
    }
    if (mes == 11) {
        if (dia >= 21) {
            alert('Tu signo es Sagitario')
            return "sagitario";
        } else {
            alert('Tu signo es Escorpio')
            return "escorpio";
        }
    }
    if (mes == 12) {
        if (dia >= 21) {
            alert('Tu signo es Capricornio')
            return "capricornio";
        } else {
            alert('Tu signo es Sagitario')
            return "sagitario";
        }
    }
    return "Fecha no válida";
}

calcularSignoZodiacal(dia, mes);



// ------------------------------------------- //


class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = 10 * 2;
    }



    sumarStock(cantidad) {
        this.cantidad = this.cantidad + cantidad;
    }
}

const cursoTarot = new Producto("Curso de Tarot", 90);
const cursoFeng = new Producto("Curso de Feng-Shui", 100);
const cursoNumerologia = new Producto("Curso de Numerología", 80);
const cursoAstrologia = new Producto("Curso de Astrología", 110);



const carrito = [];
carrito.push(cursoTarot);
carrito.push(cursoFeng);
carrito.push(cursoNumerologia);
carrito.push(cursoAstrologia);


console.log(carrito);

