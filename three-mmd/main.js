import { MMDLoader } from "three/examples/jsm/loaders/MMDLoader.js";
import { MMDAnimationHelper } from "three/examples/jsm/animation/MMDAnimationHelper.js";
import { AmbientLight } from "three/src/lights/AmbientLight.js"
import {
  Clock,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "three";

const width = 960;
const height = 540;

const scene = new Scene();
const clock = new Clock()

const renderer = new WebGLRenderer({
  canvas: document.querySelector("#target"),
});

// let there be light.
const light = new AmbientLight(0xeeeeee);
scene.add(light)

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(width, height);

const camera = new PerspectiveCamera(45, width / height);
camera.position.set(0, 14, 20);

const mmdModel = './model/KazamaIroha/KazamaIroha.pmx'
const animFile = './vmd/SOS/SOS_モーション.vmd'

const mmdloader = new MMDLoader()
const helper = new MMDAnimationHelper()

// load model and moation data
mmdloader.loadWithAnimation(
  mmdModel,
  animFile,
  function (mmd) {
    const mesh = mmd.mesh

    // set model position
    mesh.position.set(0, 0, 0);
    mesh.rotation.set(0, 0, 0);

    helper.add(mesh, {
     animation: mmd.animation,
     physics: false,
    }),

    scene.add(mesh)
  },
  function ( xhr ) {
    // show loading progress
    console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' )
  },
  function ( error ) {
    console.log(error)
  }
)

function render() {
  requestAnimationFrame(render);

  helper.update( clock.getDelta() );

  renderer.clear();
  renderer.render(scene, camera);
}

render()
