		var scene = new THREE.Scene();
		var aspect = window.innerWidth / window.innerHeight;
		var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
		var renderer = new THREE.WebGLRenderer();
		renderer.setSize( window.innerWidth, window.innerHeight );
		document.body.appendChild( renderer.domElement );
		////Skybox
                scene.background = new THREE.CubeTextureLoader()
                .setPath( 'texturas/skybox/' )
                .load( [ 'px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg' ] );

		var effect = new THREE.StereoEffect( renderer );
		effect.setSize( window.innerWidth, window.innerHeight );		
		camera.position.z = 5;
		
		//////////////////////////////////////////		
		var jugador1=new Jugador();
		var entorno1=new Entorno();
		//jugador1.contenedor.position.y=-20
		var enemigos=[];



		var i=0;

		var i2=0;

		
		
		//////////////////////////////////////////////////
		
		 
		var reglas1=new Reglas()
		var cont=new Controles();
	///////////////////////////////////
		
		var render = function () 
		{
			requestAnimationFrame( render );

		if(i == 150){

			var enemigo1=new Enemigo();
			enemigo1.contenedor.position.x=Math.random()*10-5;
			enemigo1.contenedor.position.y=Math.random()*4-2;
			enemigo1.contenedor.position.z=jugador1.contenedor.position.z -20;
			enemigos.push(enemigo1);
			
			i=0;
		}else
		{
			i++;
			
		}

		if(i2 == 100){

			var enemigo1=new Enemigo();
			enemigo1.contenedor.position.x=Math.random()*0//10-5;
			enemigo1.contenedor.position.y=Math.random()*4-2;
			enemigo1.contenedor.position.z=jugador1.contenedor.position.z -20;
			enemigos.push(enemigo1);
			
			i2=0;
		}else
		{
			i2++;
			
		}




			entorno1.actualizar();
			reglas1.actualizar();
			jugador1.actualizar()
			cont.actualizar();		
			effect.render( scene, camera );
			//renderer.render( scene, camera );
		};

		render();
		
		
		
		