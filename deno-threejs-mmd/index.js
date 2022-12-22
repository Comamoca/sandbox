import { MMDLoader } from 'three/examples/jsm/loaders/MMDLoader.js';

import { WebGLRenderer } from "three/src/renderers/WebGLRenderer.js";
import { AmbientLight } from "three/src/lights/AmbientLight.js";
import { MMDAnimationHelper } from "three/examples/jsm/animation/MMDAnimationHelper.js";
import { Clock } from "three/src/core/Clock.js";
import { Scene } from "three/src/scenes/Scene.js";
import { PerspectiveCamera } from "three/src/cameras/PerspectiveCamera.js";
import { MMDPhysics } from "three/examples/jsm/animation/MMDPhysics.js"

const scene = new Scene();
const camera = new PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 1000 );
// const loader = new MMDLoader();
const renderer = new WebGLRenderer();
const ambient = new AmbientLight(0xeeeeee);
const helper = new MMDAnimationHelper();
const clock = new Clock();

scene.add(ambient);

const modelPath = "model/風真いろは220819/いろは220819羽織.pmx"
const moationPath = "moation/summertime/动作配布.vmd"

new MMDLoader().loadWithAnimation(
  modelPath,
  moationPath,

	(mmd) => {
		helper.add( mmd.mesh, {
      // TODO: 物理演算を追加する
      // MMDPhysicsを追加する
			animation: mmd.animation,
			physics: false
		} );

		scene.add(mmd.mesh);
	}
);


camera.position.set(0, 10, 60)
renderer.setPixelRatio(1);

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 描画
const animate = () => {
  requestAnimationFrame(animate);
  // console.log(clock.getDelta())
	helper.update(clock.getDelta());
	// helper.update();
  renderer.render(scene, camera);
}

animate();
