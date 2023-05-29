import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';


window.scrollTo({
  top: -10,
  behavior: 'smooth' // Optional: Adds smooth scrolling animation
});

/**
 * Scene
 */
const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight , 0.1, 1000)
camera.position.z = 4
camera.position.y = 0.9
camera.position.x = -0.4
scene.add(camera)

const controls = new OrbitControls( camera, canvas );



/**
 * Loaders
 */
const loader = new GLTFLoader()
let model3d;
loader.load( '/modelli/body_male/scene.gltf', function (gltf){
  
  model3d = gltf.scene
  gltf.scene.scale.set(30, 30, 30)
  gltf.scene.position.set(0, -0.5, 1)
  scene.add(gltf.scene)
  desktopAnimation()
},
// called while loading is progressing
function ( xhr ) {

  
  if (xhr.loaded / xhr.total * 100 === 100){
    setTimeout(()=>{
      gsap.to(document.getElementById('loader-page'), {opacity: 0, duration:1})
      gsap.to(document.getElementById('loader-page'), {display: 'none', duration:1})
      gsap.to(document.querySelector('body'), {overflow: "scroll", duration:1})

    }, 2000)
  }

}
)



/**
 * Renderer
 */


const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  alpha: true
})
renderer.setSize(window.innerWidth, window.innerHeight)


window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})


/**
 * Luci
 */

const ambienLight = new THREE.AmbientLight('#ffffff',0.3)
const backPointLight = new THREE.PointLight('#ffffff',0.5)
const PointLight = new THREE.PointLight('#ffffff', 0.8)

backPointLight.position.set(0, 3, -2)
PointLight.position.set(0, 3, 2)


scene.add(backPointLight, PointLight, ambienLight)









/**
 * GSAP
 */

gsap.to(document.getElementById('fitness'), { left: -200 , duration: 2})


let section
function desktopAnimation(){
    
  gsap.registerPlugin(ScrollTrigger);

  section = 0

  const tl = new gsap.timeline({
    defaults:{
      duration: 1,
      ease: "power2.inOut",
    },
    scrollTrigger: {
      trigger: ".page",
      start: "top top",
      end: "bottom bottom",
      scrub: 0.01,
      //markers: true,

    }
  })

  
  tl.to(camera.position, {z:2, y:1 } , section)
  tl.to(model3d.rotation, {y: - Math.PI / 2}, section)
  tl.to(model3d.position, {x: 1}, section)
  tl.to(document.querySelector("body"), {background: '#ffffff', section})
  
  
  
  
  //Section2 Mente
  section+= 1
  
  tl.to(camera.position, {x:0.54, y:1.46, z:1.73} , section)
  tl.to(camera.rotation, {x:-0.63, y:0.63, z:0.41 } , section)
  tl.to(model3d.rotation ,{y: 6 }, section)
  tl.to(model3d.position ,{x: 0 }, section)
  

  //Section3 Corpo
  section+= 1

  //-1.65 0.44 2.44, -0.29 -1.05 -0.25

  tl.to(camera.position, {x:-1.65, y:0.44, z:2.44,}, section)
  tl.to(camera.rotation, {x:-0.29, y:-1.05, z:-0.25}, section)
  tl.to(document.querySelector('.three-body'), {backgroundSize: "100%", duration: 2}, section)

  //Section4 Alimentazione
  section += 1

  tl.to(camera.position, {x:-3.60, y:-0.03, z:5.89}, section)
  tl.to(camera.rotation, {x:-0.04, y:-0.31, z:-0.01}, section)
  tl.to(model3d.rotation, {y: Math.PI - 0.3}, section)
  
  //Section5 freeman
  section += 1
  tl.to(document.querySelector("body"), {background: '#bac4aa', section})
  tl.to(model3d.rotation, {y: 4* Math.PI - 0.3}, section)
  tl.to(camera.position, {x:-1.60, y:-0.03, z:5.89}, section)


}






/**
 * Trigger Animazioni
 */


function ifAnimator(){
  if (section === 0){
    console.log("lmao")
  }
}




/**
 * Animazione
 */

const animazione = () => 
{
  window.requestAnimationFrame(animazione)
  
  // console.log
  // (
  //   "P" ,
  //   (camera.position.x).toFixed(2) ,
  //   (camera.position.y).toFixed(2) ,
  //   (camera.position.z).toFixed(2),

  //   "Q" , 
  //   (camera.rotation.x).toFixed(2) ,
  //   (camera.rotation.y).toFixed(2) ,
  //   (camera.rotation.z).toFixed(2)

  // )

    

  renderer.render(scene,camera)
}

animazione()