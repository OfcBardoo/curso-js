function validar() {
    var valor = document.getElementById("numero").value;    

    if(valor.length > 2) {
        alert("vc é burro! XD")
        return false;
    } else {
        alert("vc não é burro! XD")
        return true;
    }
}