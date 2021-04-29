function crear_Archivo () {
    var subir_Archivo = document.getElementById('subir_Archivo');
    var archivoRuta = subir_Archivo.value;

    if (subir_Archivo.files && subir_Archivo.files[0]) {
        //FINISH: generar new archivo
        var visor = new FileReader ();

        //FINISH: onload - Cargar archivo
        visor.onload = function(e) {

            //FINISH: insertar video en pantalla
            document.getElementById('visualizar_Archivo').innerHTML= '<video controls id= "boton_video" src="'+e.target.result+'" width="519" </video>';
        }
        visor.readAsDataURL(subir_Archivo.files[0]);
    }
    
    //FINISH: avisos usuario que tiene que seleccionar un archivo y que tiene que aguardar la descarga
    if (!archivoRuta) {
        alert('Seleccionar un VIDEO');
        subir_Archivo.value = '';
        return false;
    } else {
        alert('Aguarde la descarga del video para reproducirlo')
    }
}

//FINISH: poner el nombre del archivo en el input text
var inputFile = document.querySelector('#subir_Archivo');
inputFile.addEventListener('change', function () {
    var text = this.value;
    text = text.replace(/^.*\\/, "");
    document.getElementById("nombre_Archivo").value = text;
});

//FINISH: play en el video seleccionado
function reproducir() {
    document.getElementById('boton_video').play();
}

//FINISH: stop en el video seleccionado
function pausar() {
    document.getElementById("boton_video").pause();
}

//FINISH: subir volume en el video seleccionado
function subirVolumen() {
    document.getElementById("boton_video").volume +=0.1;
}

//FINISH: bajar volume en el video seleccionado
function bajarVolumen() {
    document.getElementById("boton_video").volume -=0.1;
}