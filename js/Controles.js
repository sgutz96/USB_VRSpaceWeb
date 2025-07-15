var Controles=function()
{
	var raycaster = new THREE.Raycaster();
	var mouse = new THREE.Vector2();


	document.addEventListener('click', function() 
	{		
		console.log("sss")
		raycaster.setFromCamera( mouse, camera );
		var intersects = raycaster.intersectObjects( scene.children,true );
		if(intersects.length>0) 
		{
			intersects[ 0 ].object.position.x=1000
			reglas1.puntaje()
		}
	}, false);
	
	this.actualizar=function()
	{		
		jugador1.contenedor.position.z-=0.1	
	}
}