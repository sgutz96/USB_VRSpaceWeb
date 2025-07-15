var Enemigo=function()
{
	this.contenedor=new THREE.Object3D();	
	var loader = new THREE.TextureLoader();
	var texture = loader.load("texturas/rock.jpg");	
	var geometry = new THREE.SphereGeometry( 1, 5, 1 );
	var material = new THREE.MeshToonMaterial({ color: 0xD1BE08 , map: texture, specularMap: texture});
	var cube = new THREE.Mesh( geometry, material );	
	this.contenedor.add( cube );	
	scene.add(this.contenedor)
	this.actualizar=function()
	{
		cube.rotation.x+=0.1		
	}
}