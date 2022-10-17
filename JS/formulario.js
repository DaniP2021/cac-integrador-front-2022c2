function netoAPagar(evt) {

    let cantidad = parseInt(document.getElementById("cantidad").value);
    let porcentaje = document.getElementById("categoria").value;
    let totalAPagar = document.getElementById("totalAPagar");
    let estudiante = parseFloat(0.2);
    let trainee = parseFloat(0.5);
    let junior = parseFloat(0.85);
    let ticket = parseInt(200);
    let total;

    switch (porcentaje) {
        case "estudiante":
            total = ticket * cantidad * estudiante;
            break;
        case "trainee":
            total = ticket * cantidad * trainee;
            break;
        case "junior":
            total = ticket * cantidad * junior;
            break;
        default:
            total = ticket * cantidad;
    }

    totalAPagar.innerHTML = "Total a Pagar: $ " + total;
    console.log(total);
}

document.getElementById("resumen").onclick = netoAPagar;