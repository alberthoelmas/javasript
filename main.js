//una pagina web de viajes y trabajo
alert("bienvenidos a TREVJOS");
const nombre = prompt("como te llamas?");
let edad = parseInt(prompt("hola "+nombre+" cuantos años tienes?"));

if(edad>=18){
    alert(nombre + ", este sitio web te muestra muchos lugares turísticos a nivel mundial y puede ayudarte a encontrar trabajo.");

    let eleccion;

    while (true) {
        eleccion = prompt("¿Qué perfil profesional te interesa? (Escribe el número)\n1. Desarrollador\n2. Diseñador\n3. Administrador\n4. Otro\n5. Salir");
        
        switch (eleccion) {
            case "1":
                alert("Elegiste Desarrollador");
                break;
            case "2":
                alert("Elegiste Diseñador");
                break;
            case "3":
                alert("Elegiste Administrador");
                break;
            case "4":
                alert("Elegiste Otro");
                break;
            case "5":
                alert("Gracias por visitar TREVJOS. ¡Hasta luego!");
                break;
            default:
                alert(" elige una opción válida (1-5).");
                continue;
        }

        if (eleccion === "5") {
            break;
        }
        continues();////////////////////////////////////////////////////////
        break;
    }
} else {
    
    alert(nombre + ", eres menor de edad, pero puedes explorar lugares turísticos.");

    let opcion;

    while (true) {
        opcion = prompt("¿Qué país te gustaría explorar? (Escribe el número)\n1. argentina\n2. uruguay\n3. chile\n4. brasil\n5. alemania\n6. Salir");
        if (opcion === null) {////////////////////////////////
            alert("gracias por visitarnos");
            break;
        }
        switch (opcion) {
            case "1":
                alert("argentina");
                break;
            case "2":
                alert("uruguay");
                break;
            case "3":
                alert("chile");
                break;
            case "4":
                alert("brasil");
                break;
            case "5":
                alert("alemania");
                break;
            case "6":
                alert("Gracias por explorar con TREVJOS");
                break;
            default:
                alert("Por favor, elige una opción válida (1-6).");
                continue;
        }

        if (opcion === "6") {
            break;
        }
    }
}

function continues(){
    //confirm("desea continuar y ver lugares");
    if (!confirm("Hola "+nombre+", ¿Deseas continuar y ver lugares?")) {
        alert("gracias por visitarnos, "+nombre+" Hasta la próxima!");
        return;
    }

    let opcion;

    while (true) {
        opcion = prompt("¿Qué país te gustaría explorar? (Escribe el número)\n1. argentina\n2. uruguay\n3. chile\n4. brasil\n5. alemania\n6. Salir");
        if (opcion === null) {
            alert("gracias por visitarnos");
            break;
        }

        switch (opcion) {
            case "1":
                alert("argentina");
                break;
            case "2":
                alert("uruguay");
                break;
            case "3":
                alert("chile");
                break;
            case "4":
                alert("brasil");
                break;
            case "5":
                alert("alemania");
                break;
            case "6":
                alert("Gracias por explorar con TREVJOS");
                break;
            default:
                alert("Por favor, elige una opción válida (1-6).");
                continue;
        }
        if (opcion === "6") {
            break;
        }
    }
}

