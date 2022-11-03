
const TICKET = 200;


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let categoria = document.getElementById("categoria");
let total = document.getElementById("total");
let cantidad = document.getElementById("cantidad");


let estudiante = document.getElementById("estudiante");
let trainee = document.getElementById("trainee");
let junior = document.getElementById("junior");

function clickCategoria(cat){
    categoria.value = cat;

    switch(cat){
        case "estudiante":
            estudiante.style.backgroundColor = "#b6d3ff";
            trainee.style.backgroundColor = "";
            junior.style.backgroundColor = "";
            break;
        case "trainee":
            trainee.style.backgroundColor = "#c8f8e2";
            estudiante.style.backgroundColor = "";
            junior.style.backgroundColor = "";
            break;
        case "junior":
            estudiante.style.backgroundColor = ""
            trainee.style.backgroundColor = "";
            junior.style.backgroundColor = "#ffe28a";
            break;
    }
}

function categoriaSeleccionBgC(){
    switch(categoria.value){
        case "estudiante":
            estudiante.style.backgroundColor = "#b6d3ff";
            trainee.style.backgroundColor = "";
            junior.style.backgroundColor = "";
            break;
        case "trainee":
            trainee.style.backgroundColor = "#c8f8e2";
            estudiante.style.backgroundColor = "";
            junior.style.backgroundColor = "";
            break;
        case "junior":
            estudiante.style.backgroundColor = ""
            trainee.style.backgroundColor = "";
            junior.style.backgroundColor = "#ffe28a";
            break;
        default:
            estudiante.style.backgroundColor = ""
            trainee.style.backgroundColor = "";
            junior.style.backgroundColor = "";
            break;
    }
}

function cantidadTicket(){
    cantidad.value = parseInt(cantidad.value);
}

function borrarCampos(){
    nombre.value = "";
    apellido.value = "";
    email.value = "";
    cantidad.value = "";
    categoria.value = "Escoge una opción";
    total.innerHTML = "0";
}

function calcularCosto(){
    switch (categoria.value) {
        case "estudiante":
            if (validar() == false){
                return total.innerHTML = "Error";
                break; 
            }
            return total.innerHTML = +(TICKET * cantidad.value) * 0.2;
            break;
            
        case "trainee":
            if (validar() == false){
                return total.innerHTML = "Error";
                break; 
            } 
            return total.innerHTML = +(TICKET * cantidad.value) * 0.5;
            break; 
           
        case "junior":
            if (validar() == false){
                return total.innerHTML = "Error";
                break; 
            }
            return total.innerHTML = +(TICKET * cantidad.value) * 0.85;
            break; 
            
        default:
            return total.innerHTML = "Error";
            
    }
}

function validar(){
    if ((nombre.value == "") || (apellido.value == "") || (email.value == "") || cantidad.value == ""){
        return false;
    }
}