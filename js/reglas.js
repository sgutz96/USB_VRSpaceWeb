var Reglas=function()
{	
	var puntaje=0;

	this.puntaje=function()
	{
		puntaje+=100;
		jugador1.vidas--
		console.log(puntaje)
		console.log(jugador1.vidas)
	}
	this.actualizar=function()
	{
		for(var i=0;i<enemigos.length;i++)
			{	

				var dx=enemigos[i].contenedor.position.x-jugador1.contenedor.position.x
				var dy=enemigos[i].contenedor.position.y-jugador1.contenedor.position.y
				var dz=enemigos[i].contenedor.position.z-jugador1.contenedor.position.z
				var d=Math.sqrt(dx*dx+dy*dy+dz*dz)
				if(d<2)
				{
					console.log("me  mori")
					console.log(jugador1.contenedor.position.x)

					enemigos[i].contenedor.position.y=100;
				}
				enemigos[i].actualizar();
			}
					
	}	
}