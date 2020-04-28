var scene, camera, renderer;
var controls;
var geometry, material, mesh;
var raycaster, mouse;

function init() {
    container = document.getElementById( 'myCanvas' );
    renderer = new THREE.WebGLRenderer( { antialias: true, canvas: container } );
    renderer.setSize( container.clientWidth, container.clientHeight );

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 75, container.clientWidth / container.clientHeight, 0.1, 1000 );
    camera.position.z = 150;

    controls = new THREE.TrackballControls( camera, renderer.domElement );
    controls.rotateSpeed = 5.0;
    controls.panSpeed = 1.0;

    var axesHelper = new THREE.AxesHelper( 12 );
    scene.add( axesHelper );

    //interakcio();
    hatter();
    nap();
    merkur();
    venusz();
    fold();
    mars();
    jupiter();
    szaturnusz();
    szaturnuszGyuruje();
    uranusz();
    neptunusz();
}

var render = function () {
    requestAnimationFrame( render );
    controls.update();
    renderer.render(scene, camera);
};


/*function interakcio(){

    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    document.addEventListener('mousedown', onDocumentMouseDown, false);

    function onDocumentTouchStart(event){

        event.preventedDeafult();

        event.clientX = event.touches[0].clientX;
        event.clientY = event.touches[0].clientY;
        onDocumentMouseDown(event);

    }

    function onDocumentMouseDown(event){

        event.preventedDeafult();

        mouse.x = ( event.clientX /render.domElement.width ) * 2 - 1;
        mouse.y = - ( event.clientY / render.domElement.height ) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObjects(objects);
        var color = 0xff0000;

        if (intersects.legth > 0){

            intersects[0].objects.material.color.setHex(color);

            this.temp = intersects[0].objects.material.color.getHexString();
            this.name = intersects[0].object.name;

            alert(this.temp + "  "+ this.name);
        }


    }


}*/


function nap(){

    geometry = new THREE.SphereGeometry( 50, 50, 30);
    var texture = new THREE.TextureLoader().load( 'texture/sun.jpg' );
    material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.z = 0.2;
    mesh.position.set(0,0,0);
    scene.add( mesh );
    render();
}

function merkur(){

    geometry = new THREE.SphereGeometry( 2, 50, 30);
    var texture = new THREE.TextureLoader().load( 'texture/merkur.png' );
    material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.z = 0.2;
    mesh.position.set(60,0,0);
    scene.add( mesh );
    render();
}

function venusz(){

    geometry = new THREE.SphereGeometry( 2, 50, 30);
    var texture = new THREE.TextureLoader().load( 'texture/venusz.jpg' );
    material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.z = 0.2;
    mesh.position.set(70,0,0);
    scene.add( mesh );
    render();
}

function fold(){

    geometry = new THREE.SphereGeometry( 3, 50, 30);
    var texture = new THREE.TextureLoader().load( 'texture/fold.jpg' );
    material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.z = 0.2;
    mesh.position.set(80,0,0);
    scene.add( mesh );
    render();
}

function mars(){

    geometry = new THREE.SphereGeometry( 1, 50, 30);
    var texture = new THREE.TextureLoader().load( 'texture/mars.jpg' );
    material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.z = 0.2;
    mesh.position.set(90,0,0);
    scene.add( mesh );
    render();
}

function jupiter(){

    geometry = new THREE.SphereGeometry( 5, 50, 30);
    var texture = new THREE.TextureLoader().load( 'texture/jupiter.jpg' );
    material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.z = 0.2;
    mesh.position.set(100,0,0);
    scene.add( mesh );
    render();
}

function szaturnusz(){

    geometry = new THREE.SphereGeometry( 4, 50, 30);
    var texture = new THREE.TextureLoader().load( 'texture/szaturnusz.png' );
    material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.z = 0.2;
    mesh.position.set(120,0,0);
    scene.add( mesh );
    render();
}

function szaturnuszGyuruje(){
    geometry = new THREE.PlaneGeometry( 20, 20, 32 );
    texture = new THREE.TextureLoader().load( 'texture/gyuru.png' );
    material = new THREE.MeshBasicMaterial( { map: texture, side: THREE.DoubleSide } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.position.set(120,0,0);
    mesh.rotation.x = 1.57;
    scene.add( mesh );
}

function uranusz(){

    geometry = new THREE.SphereGeometry( 1, 50, 30);
    var texture = new THREE.TextureLoader().load( 'texture/uranusz.jpg' );
    material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.z = 0.2;
    mesh.position.set(140,0,0);
    scene.add( mesh );
    render();
}

function neptunusz(){

    geometry = new THREE.SphereGeometry( 1, 50, 30);
    var texture = new THREE.TextureLoader().load( 'texture/neptunusz.jpg' );
    material = new THREE.MeshBasicMaterial( { map: texture } );
    mesh = new THREE.Mesh( geometry, material );
    mesh.rotation.z = 0.2;
    mesh.position.set(150,0,0);
    scene.add( mesh );
    render();
}

function hatter(){
    const loader = new THREE.TextureLoader();
    const hatter = loader.load('texture/hatter.jpg');
    scene.background = hatter;
}



