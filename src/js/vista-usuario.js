function aparecer(){
    
        //obtengo informaciòn del input de mensaje
        var inputSegundo= document.getElementById("mvtexto");
        var letras= inputSegundo.value;
        //caja del html donde se va agregar todo al final
        var cajaHtml= document.getElementById("mvmensaje");
        //creo al div contenedor del js
        var cajaJs= document.createElement("div");
        cajaJs.setAttribute("class" , "contenedorJs");
      
        cajaJs.appendChild(letras);
        
        cajaHtml.appendChild(cajaJs);
}
aparecer();