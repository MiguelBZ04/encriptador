function encriptar(){
    var entrada = document.getElementById("textoentrada").value.toLowerCase();
        var textoentrada = entrada.replace(/e/img,"enter");
        var textoentrada = textoentrada.replace(/i/img,"imes");
        var textoentrada = textoentrada.replace(/a/img,"ai");
        var textoentrada = textoentrada.replace(/o/img,"ober");
        var textoentrada = textoentrada.replace(/u/img,"ufat");

        document.getElementById("texSalida").innerHTML = textoentrada;
        document.getElementById("btncopiar").style.display="show";
        document.getElementById("btncopiar").style.display="inherit";
        document.getElementById("texSalida").style.display="show";
        document.getElementById("texSalida").style.display="inherit";
        document.getElementsByClassName("encriptado")[0].style.visibility="hidden";
    var btn = document.querySelector("#btnEncriptar");
    btn.onclick = encriptar;
    
    
}


function desencriptar(){
    var entrada = document.getElementById("textoentrada").value.toLowerCase();
        var textoentrada = entrada.replace(/enter/img,"e");
        var textoentrada = textoentrada.replace(/imes/img,"i");
        var textoentrada = textoentrada.replace(/ai/img,"a");
        var textoentrada = textoentrada.replace(/ober/img,"o");
        var textoentrada = textoentrada.replace(/ufat/img,"u");

    document.getElementById("texSalida").innerHTML = textoentrada;
    document.getElementById("btncopiar").style.display="show";
    document.getElementById("btncopiar").style.display="inherit";
    document.getElementById("texSalida").style.display="show";
    document.getElementById("texSalida").style.display="inherit";
    document.getElementsByClassName("encriptado")[0].style.visibility="hidden";
    var btnd = document.querySelector("#btnDesencriptar");
    btnd.onclick = desencriptar;

   

}





function copiar(){
    var contenido = document.querySelector("#texSalida");
    contenido.select();
    document.execCommand("copy");
    var btncopy = document.querySelector("#btncopiar");
    btncopy.onclick = copiar;

}
