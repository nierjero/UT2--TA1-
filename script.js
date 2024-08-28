
let texto = "hola"; 
let texto2 = "a todos";
let repeticiones = 5;

function repeatString(texto,repeticiones) {
    for(let i = 0;  i < repeticiones; i++) {
        console.log(texto);
        console.log(texto2);
    }
}

repeatString(texto, repeticiones);