import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import {
  VRM,
  VRMExpressionPresetName,
  VRMExpressionPresetName,
  VRMSchema,
} from "@pixiv/three-vrm";

// import * as VRMSchema from "@pixiv/types-vrmc-vrm-1.0";

// レンダラーの設定
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

// カメラの設定
const camera = new THREE.PerspectiveCamera(
  35,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
camera.position.set(0, 1.1, 3);

// カメラコントーロールの設定
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.85, 0);
controls.screenSpacePanning = true;
controls.update();
// シーンの設定
const scene = new THREE.Scene();

// ライトの設定
const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// グリッドを表示
const gridHelper = new THREE.GridHelper(10, 10);
scene.add(gridHelper);
gridHelper.visible = true;

// 座標軸を表示
const axesHelper = new THREE.AxesHelper(0.5);
scene.add(axesHelper);

// VRMの読み込み
const loader = new GLTFLoader();
// loader.register((parser) => {
//   return new VRMLoaderPlugin(parser);
// });

loader.load(
  // URL of the VRM you want to load
  "./model/Alicia_VRM/Alicia/VRM/AliciaSolid.vrm",
  // called when the resource is loaded
  (gltf) => {
    // retrieve a VRM instance from gltf
    VRM.from(gltf).then((vrm) => {
      // シーンへの追加
      scene.add(vrm.scene);

      // const vrm = gltf.userData.vrm;
      // const head = vrm.humanoid.getBoneNode(VRMSchema.HumanoidBoneName.Head);
      // head.rotation.x = Math.PI / 6;

      // deal with vrm features
      console.log(vrm);

      const rerender = () => {
        renderer.render(scene, camera);

        requestAnimationFrame(rerender);
      };

      rerender();
    });
  },
  // called while loading is progressing
  (progress) =>
    console.log(
      "Loading model...",
      100.0 * (progress.loaded / progress.total),
      "%",
    ),
  // called when loading has errors
  (error) => console.error(error),
);

const update = () => {
  requestAnimationFrame(update);
  renderer.render(scene, camera);
};

update();
