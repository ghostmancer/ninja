var container;
var camera, scene, renderer;
var group;

init();
animate();

function init() {
	container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.OrthographicCamera(window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, - 500, 1000);
	camera.position.x = 200;
	camera.position.y = 100;
	camera.position.z = 200;

	scene = new THREE.Scene();
    group = new THREE.Group();
    scene.add(group);
/*
    var triangleShape = new THREE.Shape();
    triangleShape.moveTo( 80, 20);
    triangleShape.lineTo( 40, 80);
    triangleShape.lineTo(120, 80);

    drawFill(triangleShape, generateColor(), 0, 0, 0);
    drawOutline(triangleShape, generateColor(), 0, 0, 0);
    drawFill(triangleShape, generateColor(), 100, 0, 0);
    drawOutline(triangleShape, generateColor(), 100, 0, 0);*/

    var points = generatePoints(40);
    for(var i = 0; i < points.length; i++) {
        var sorted = getNearestPoints(points[i], points);
        var geometry = createGeometry(sorted.slice(0, 3));

        var color = generateColor();

        var fillMaterial = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.5, side: THREE.DoubleSide });
        var fillMesh = new THREE.Mesh(geometry, fillMaterial);
        fillMesh.position.set(0, 0, 0);
        group.add(fillMesh);

        var frameMaterial = new THREE.MeshBasicMaterial({ color: color, transparent: true, opacity: 0.8, wireframe: true, side: THREE.DoubleSide });
        var frameMesh = new THREE.Mesh(geometry, frameMaterial);
        frameMesh.position.set(0, 0, 0);
        group.add(frameMesh);
    }

	// Lights

	var ambientLight = new THREE.AmbientLight(Math.random() * 0x10);
	scene.add(ambientLight);

	var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
	directionalLight.position.x = Math.random() - 0.5;
	directionalLight.position.y = Math.random() - 0.5;
	directionalLight.position.z = Math.random() - 0.5;
	directionalLight.position.normalize();
	scene.add(directionalLight);

	var directionalLight = new THREE.DirectionalLight(Math.random() * 0xffffff);
	directionalLight.position.x = Math.random() - 0.5;
	directionalLight.position.y = Math.random() - 0.5;
	directionalLight.position.z = Math.random() - 0.5;
	directionalLight.position.normalize();
	scene.add(directionalLight);

	renderer = new THREE.CanvasRenderer();
	renderer.setClearColor(0xf0f0f0);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	window.addEventListener('resize', onWindowResize, false);
}

function onWindowResize() {
	camera.left = window.innerWidth / - 2;
	camera.right = window.innerWidth / 2;
	camera.top = window.innerHeight / 2;
	camera.bottom = window.innerHeight / - 2;

	camera.updateProjectionMatrix();

	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);

	render();
}

function render() {
	var timer = Date.now() * 0.0001;

	camera.position.x = Math.cos(timer) * 200;
	camera.position.z = Math.sin(timer) * 200;
	camera.lookAt(new THREE.Vector3(0, 0, 0));

	renderer.render(scene, camera);
}

// generations

function random(min, max) {
    // generate random integer
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generatePoints(num) {
    var points = [];

    for(var i = 0; i < num; i++) {
        points.push({
            x: random(-400, 400),
            y: random(-400, 400),
            z: random(-400, 400)
        });
    }

    return points;
}

function getNearestPoints(point, points) {
    var distances = [];
    var sortedArray = [];

    for(var i = 0; i < points.length; i++) {
        if(points[i] != point) {
            distances.push({
                point: points[i],
                distance: Math.sqrt(
                    Math.pow(point.x - points[i].x, 2) +
                    Math.pow(point.y - points[i].y, 2) +
                    Math.pow(point.z - points[i].z, 2)
                )
            });
        }
    }

    distances.sort(function(a, b) {
        return a.distance - b.distance;
    });

    for(var i = 0; i < distances.length; i++) {
        sortedArray.push(distances[i].point);
    }

    return sortedArray;
}

function createGeometry(points) {
    var geometry = new THREE.Geometry();

    for(var i = 0; i < 3; i++) {
        geometry.vertices.push(new THREE.Vector3(points[i].x, points[i].y, points[i].z));
    }
    geometry.faces.push(new THREE.Face3(0, 1, 2));
    geometry.computeBoundingSphere();

    return geometry;
}

function generateColor() {
    var color = new THREE.Color('rgb(' + random(0, 255) + ', ' + random(0, 255) + ', ' + random(0, 255) + ')');
    return color;
}