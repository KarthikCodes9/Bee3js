import * as THREE from 'three';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three-gltf-loader@1.111.0/index.min.js';

const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1, //How close the cam can see
    1000
);
camera.position.z = 13;

const scene = new THREE.Scene();
let bee;
const loader = new GLTFLoader();
loader.load('/beee.glb' ,
    function(gltf){
        bee = gltf.scene;
        scene.add(bee);

    },
    function(xhr){},
    function(error){}
);
const renderer = new THREE.WebGLRenderer({alpha:true });
renderer.setSize(window.innerWidth ,window.innerHeight);
document.getElementById('Container3D').appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff ,  1.3 ); 
scene.add(light);
const topLight = new THREE.DiectionalLight(0xffffff ,1);
scene.add(topLight);
const reRender = () =>{
    requestAnimationFrame();
    renderer.render(scene, camera);

};
reRender();

