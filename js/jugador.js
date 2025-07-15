var Jugador=function()
{
	this.vidas=2;
	this.contenedor=new THREE.Object3D();		
	var geometry = new THREE.BoxGeometry( 1, 1, 1 );
	var material = new THREE.MeshNormalMaterial();
	var cube = new THREE.Mesh( geometry, material );	
	//this.contenedor.add( cube );
	this.contenedor.add( camera );	
	scene.add(this.contenedor)
	this.actualizar=function()
	{
		cube.rotation.x+=0.1		
	}

 //obj nave
        var object;
        // manager
        function loadModel() {
            object.traverse( function ( child ) {
            if ( child.isMesh ) child.material.map = texture;
            } );
            object.position.y = 0;
            object.scale.y = 2;
            object.scale.x = 2;
            object.scale.z = 2;
            object.position.z=5;
            //object.position.x=-0.2;
            object.position.y=-2

            object.rotation.y=-Math.PI/2
            //object.rotation.x=Math.PI
           // object.name= "medelo";
            //this.contenedor.add( object );
            camera.add( object );

        }
        var manager = new THREE.LoadingManager( loadModel );
        manager.onProgress = function ( item, loaded, total ) {
            console.log( item, loaded, total );
        };
        
        // texture
        var textureLoader = new THREE.TextureLoader( manager );
        var texture = textureLoader.load( 'textura/avion.jpg' );
        // model
        function onProgress( xhr ) {
        if ( xhr.lengthComputable ) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );
            }
        }
        
        function onError() {}
        var loader = new THREE.OBJLoader( manager );
        loader.load( 'modelado/avion.obj', function ( obj ) {
            object = obj;
        }, onProgress, onError );






        // create an AudioListener and add it to the camera
var listener = new THREE.AudioListener();
camera.add( listener );

// create a global audio source
var sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
var audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sounds/tono.mpeg', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop( true );
    sound.setVolume( 0.5 );
    sound.play();
});


	this.actualizar=function()
		{

		}
}