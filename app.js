// Estructuras de control
// condicionales y ciclos 
// while , do while, for while

    //    indice,condicional, incremento, decremento

    function limpiar() {

        document. getElementById("miFormulario").reset();
    }
    function sumar(){
        var x = parseFloat (document.getElementById("valor1").value);
        var y = parseFloat (document.getElementById("valor2").value);
        let resultado = x+y;
        document .getElementById("el-resultado").textContent = resultado;


    }
    function restar(){
        var x = parseFloat (document.getElementById("valor1").value);
        var y = parseFloat (document.getElementById("valor2").value);
        let resultado =x-y;
        document .getElementById("el-resultado").textContent = resultado;
    }
    function multiplicar(){
        var x = parseFloat (document.getElementById("valor1").value);
        var y = parseFloat (document.getElementById("valor2").value);
        let resultado =x*y;
        
        document .getElementById("el-resultado").textContent = resultado;
    }
    function dividir(){
        
        var x = parseFloat (document.getElementById("valor1").value);
        var y = parseFloat (document.getElementById("valor2").value);
        let resultado =x/y;
        document .getElementById("el-resultado").textContent = resultado;
    }
        
        



// funciones
// function Suma(a,b,...c) {
//     return console.log ("a,b,c");
    

//     }

//     const numero =[5,6,7]
    

//     let resultadodefuncion=suma(3,4,...numero).
//     console.log (resultadodefuncion);

//     function (a,) {

        
    // }
    // let hola =function () { 
    //     console.log ("hola mundo");
        
    // }

    // hola();

    // function resta(a,b,function () {console.log ("hola mundo"); console.log
    

    // function callback 
    // arrow function(params) {
        
    // }

    //     function suma(x,y) {
    
    //         return resultado=x+y;
    //     }
        
    
    // suma(5,6);
    

    // console.log ("La suma es: " + suma);