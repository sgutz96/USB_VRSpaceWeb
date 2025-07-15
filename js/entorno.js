var Entorno = function()
{

	this.contenedor = new THREE.Object3D();
///jugador
	var geometry = new THREE.SphereGeometry(400, 16, 12);
    var material = new THREE.MeshNormalMaterial();
     var cube2 = new THREE.Mesh( geometry, material );

    cube2.position.x=1000;
	cube2.position.y=400;
	cube2.position.z=-5000;


var luz;

luz = new THREE.PointLight(0x5A15E3, 0.8);
	luz.position.set(0, 3, 2);
	scene.add(luz);

	luz1 = new THREE.PointLight(0x970BB0);
	luz1.position.set(-2, 0, 0);

	scene.add(luz1 );


       
    scene.add(this.contenedor);
    this.contenedor.add(cube2);
    this.actualizar=function()
		{
			this.contenedor.rotation.y+=0.01;

		}

}