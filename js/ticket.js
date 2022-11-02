
const TICKET = 200;


let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let email = document.getElementById("email");
let categoria = document.getElementById("categoria");
let total = document.getElementById("total");
let cantidad = document.getElementById("cantidad");


function clickCategoria(cat){
    categoria.value = cat;
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
            return total.innerHTML = +(TICKET * cantidad.value) * 0.8;
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
            return total.innerHTML = +(TICKET * cantidad.value) * 0.15;
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