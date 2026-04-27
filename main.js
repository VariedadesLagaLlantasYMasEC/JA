import * as THREE from 'three';

// 1. Configuración de Escena y Cámara
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a1a); // Fondo oscuro elegante

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// Vista desde arriba y un poco de lado (isométrica)
camera.position.set(7, 8, 7); 
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container-3d').appendChild(renderer.domElement);

// 2. Luces
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 100);
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// 3. El Local (Mapa simplificado)
const floorGeo = new THREE.PlaneGeometry(10, 10);
const floorMat = new THREE.MeshStandardMaterial({ color: 0x333333 });
const floor = new THREE.Mesh(floorGeo, floorMat);
floor.rotation.x = -Math.PI / 2;
scene.add(floor);

// Agregar unas cajitas que simulan mostradores o paredes
function crearBloque(w, h, d, x, z, color) {
    const geo = new THREE.BoxGeometry(w, h, d);
    const mat = new THREE.MeshStandardMaterial({ color: color });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, h/2, z);
    scene.add(mesh);
}

// Dibujamos el esquema del local
crearBloque(0.5, 2, 10, -5, 0, 0x555555); // Pared izquierda
crearBloque(10, 2, 0.5, 0, -5, 0x555555); // Pared fondo
crearBloque(2, 0.8, 1, 2, 2, 0xffcc00);    // Mostrador central

// 4. Animación de rotación suave para que se vea vivo
function animate() {
    requestAnimationFrame(animate);
    scene.rotation.y += 0.002; // El mapa gira lento
    renderer.render(scene, camera);
}

// Ajuste si cambias el tamaño de ventana
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
