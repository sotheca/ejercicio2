function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	
	//En este punto guardamos la configuración por defecto
	//En este caso se especificó al inicio
	//Pero usted puede especificarlos en cualquier punto
	lienzo.save();
	//Aplicamos la nueva transformación
	lienzo.translate(50,70);
	//Creamos nuestro primer objeto (en este caso un texto)
	lienzo.font="bold 20px verdana, sans-serif";
	lienzo.fillText("PDVSA1",0,30);
	//Restauramos las ultimas transformaciones
	lienzo.restore();
	//Esta vez, el objeto se crea bajo las ultimas condiciones
	//que se haya guardado
	lienzo.fillText("PDVSA2",0,30);

}
window.addEventListener("load", iniciar, false);