const canvas = document.getElementById("renderCanvas");

var engine = null;
var scene = null;
var sceneToRender = null;
const createDefaultEngine = function () {
  return new BABYLON.Engine(canvas, true, {
    preserveDrawingBuffer: true,
    stencil: true,
    disableWebGL2Support: false,
  });
};

const startRenderLoop = function (engine, canvas) {
  engine.runRenderLoop(function () {
    if (sceneToRender && sceneToRender.activeCamera) {
      sceneToRender.render();
    }
  });
};

var youtubeFocused = false;
var CSSobject = null;
var plane = null;

var createScene = function () {
  var scene = new BABYLON.Scene(engine);

  // Needs to be transparent for Youtube video to be seen
  scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

  var camera = new BABYLON.FreeCamera(
    "camera1",
    new BABYLON.Vector3(0, 5, -10),
    scene,
  );
  camera.setTarget(BABYLON.Vector3.Zero());
  camera.attachControl(canvas, true);

  var light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene,
  );
  light.intensity = 0.7;

  // The CSS object will follow this mesh
  plane = BABYLON.MeshBuilder.CreatePlane(
    "youtube",
    { width: 1, height: 1 },
    scene,
  );
  plane.rotation = new BABYLON.Vector3(0, 0, 0);
  plane.rotationQuaternion = null;
  plane.scaling.x = 6;
  plane.scaling.y = 4;
  plane.checkCollisions = true;

  // Setup the CSS renderer and Youtube object
  let existingRenderer = document.getElementById("css-container");
  if (existingRenderer) existingRenderer.remove();
  let renderer = setupRenderer();

  // Enter Yootube URL
  const getID = (url) => {
    const extract = /[/?=]([-\w]{11})/.exec(url);

    if (extract) {
      const id = extract[1];
      return id;
    }
  };

  const id = getID(
    "https://www.youtube.com/watch?v=m10mNB8L9Kw&feature=youtu.be",
  );

  createCSSobject(plane, scene, id, renderer);
  createMaskingScreen(plane, scene, renderer);

  // New bit that toggles on/off pointer events to body
  var listener = function (evt) {
    let pick = scene.pick(Math.round(evt.offsetX), Math.round(evt.offsetY));
    if (pick.hit) {
      if (pick.pickedMesh.name === "youtube") {
        if (!youtubeFocused) {
          youtubeFocused = true;
          console.log("YOUTUBE");
          document.getElementsByTagName("body")[0].style.pointerEvents = "none";
        }
      }
    }
  };

  window.addEventListener("pointermove", listener);
  window.addEventListener("pointerdown", listener);
  window.addEventListener("pointerup", listener);

  buildGUI(plane);
  return scene;
};

var setupRenderer = function () {
  let container = document.createElement("div");
  container.id = "css-container";
  container.style.position = "absolute";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.zIndex = "-1";

  let canvasZone = document.getElementById("canvasZone");
  canvasZone.insertBefore(container, canvasZone.firstChild);

  let renderer = new CSS3DRenderer();
  container.appendChild(renderer.domElement);
  renderer.setSize(canvasZone.offsetWidth, canvasZone.offsetHeight);

  window.addEventListener("resize", (e) => {
    renderer.setSize(canvasZone.offsetWidth, canvasZone.offsetHeight);
  });
  return renderer;
};

function refreshPosition() {
  CSSobject.position.copyFrom(plane.getAbsolutePosition());
  CSSobject.scaling.copyFrom(plane.scaling);
  refreshRotation();
}

function refreshRotation() {
  CSSobject.rotation.y = -plane.rotation.y;
  CSSobject.rotation.x = -plane.rotation.x;
  CSSobject.rotation.z = plane.rotation.z;
  console.log(CSSobject.rotation);
}

var createCSSobject = function (mesh, scene, videoID, renderer) {
  let width = 480;
  let height = 360;
  scene.onBeforeRenderObservable.add(() => {
    renderer.render(scene, scene.activeCamera);
  });
  var div = document.createElement("div");
  div.style.width = width + "px";
  div.style.height = height + "px";
  div.style.backgroundColor = "#000";
  div.style.zIndex = "1";
  CSSobject = new CSS3DObject(div, scene);
  refreshPosition();

  var iframe = document.createElement("iframe");
  iframe.id = "video-" + videoID;
  iframe.style.width = width + "px";
  iframe.style.height = height + "px";
  iframe.style.border = "0px";
  iframe.allow = "autoplay";
  iframe.src = [
    "https://www.youtube.com/embed/",
    videoID,
    "?rel=0&enablejsapi=1&disablekb=1&autoplay=1&controls=0&fs=0&modestbranding=1",
  ].join("");
  div.appendChild(iframe);

  // Another new bit that toggles on/off pointer events to body
  div.addEventListener("mouseout", () => {
    youtubeFocused = false;
    console.log("CANVAS");
    document.getElementsByTagName("body")[0].style.pointerEvents = "auto";
  });
};

function createMaskingScreen(maskMesh, scene) {
  let depthMask = new BABYLON.StandardMaterial("matDepthMask", scene);
  depthMask.backFaceCulling = false;

  maskMesh.material = depthMask;
  maskMesh.onBeforeRenderObservable.add(() => engine.setColorWrite(false));
  maskMesh.onAfterRenderObservable.add(() => engine.setColorWrite(true));

  // swap meshes to put mask first
  var mask_index = scene.meshes.indexOf(maskMesh);
  scene.meshes[mask_index] = scene.meshes[0];
  scene.meshes[0] = maskMesh;
}

class CSS3DObject extends BABYLON.Mesh {
  constructor(element, scene) {
    super();
    this.element = element;
    this.element.style.position = "absolute";
    this.element.style.pointerEvents = "auto";
  }
}

class CSS3DRenderer {
  constructor() {
    var matrix = new BABYLON.Matrix();

    this.cache = {
      camera: { fov: 0, style: "" },
      objects: new WeakMap(),
    };

    var domElement = document.createElement("div");
    domElement.style.overflow = "hidden";

    this.domElement = domElement;
    this.cameraElement = document.createElement("div");
    this.isIE = !!document["documentMode"] ||
      /Edge/.test(navigator.userAgent) || /Edg/.test(navigator.userAgent);

    if (!this.isIE) {
      this.cameraElement.style.webkitTransformStyle = "preserve-3d";
      this.cameraElement.style.transformStyle = "preserve-3d";
    }
    this.cameraElement.style.pointerEvents = "none";

    domElement.appendChild(this.cameraElement);
  }

  getSize() {
    return {
      width: this.width,
      height: this.height,
    };
  }

  setSize(width, height) {
    this.width = width;
    this.height = height;
    this.widthHalf = this.width / 2;
    this.heightHalf = this.height / 2;

    this.domElement.style.width = width + "px";
    this.domElement.style.height = height + "px";

    this.cameraElement.style.width = width + "px";
    this.cameraElement.style.height = height + "px";
  }

  epsilon(value) {
    return Math.abs(value) < 1e-10 ? 0 : value;
  }

  getCameraCSSMatrix(matrix) {
    var elements = matrix.m;

    return "matrix3d(" +
      this.epsilon(elements[0]) + "," +
      this.epsilon(-elements[1]) + "," +
      this.epsilon(elements[2]) + "," +
      this.epsilon(elements[3]) + "," +
      this.epsilon(elements[4]) + "," +
      this.epsilon(-elements[5]) + "," +
      this.epsilon(elements[6]) + "," +
      this.epsilon(elements[7]) + "," +
      this.epsilon(elements[8]) + "," +
      this.epsilon(-elements[9]) + "," +
      this.epsilon(elements[10]) + "," +
      this.epsilon(elements[11]) + "," +
      this.epsilon(elements[12]) + "," +
      this.epsilon(-elements[13]) + "," +
      this.epsilon(elements[14]) + "," +
      this.epsilon(elements[15]) +
      ")";
  }

  getObjectCSSMatrix(matrix, cameraCSSMatrix) {
    var elements = matrix.m;
    var matrix3d = "matrix3d(" +
      this.epsilon(elements[0]) + "," +
      this.epsilon(elements[1]) + "," +
      this.epsilon(elements[2]) + "," +
      this.epsilon(elements[3]) + "," +
      this.epsilon(-elements[4]) + "," +
      this.epsilon(-elements[5]) + "," +
      this.epsilon(-elements[6]) + "," +
      this.epsilon(-elements[7]) + "," +
      this.epsilon(elements[8]) + "," +
      this.epsilon(elements[9]) + "," +
      this.epsilon(elements[10]) + "," +
      this.epsilon(elements[11]) + "," +
      this.epsilon(elements[12]) + "," +
      this.epsilon(elements[13]) + "," +
      this.epsilon(elements[14]) + "," +
      this.epsilon(elements[15]) +
      ")";

    if (this.isIE) {
      return "translate(-50%,-50%)" +
        "translate(" + this.widthHalf + "px," + this.heightHalf + "px)" +
        cameraCSSMatrix +
        matrix3d;
    }
    return "translate(-50%,-50%)" + matrix3d;
  }

  renderObject(object, scene, camera, cameraCSSMatrix) {
    if (object instanceof CSS3DObject) {
      var style;
      var objectMatrixWorld = object.getWorldMatrix().clone();
      var camMatrix = camera.getWorldMatrix();
      var innerMatrix = objectMatrixWorld.m;

      // Set scaling
      const youtubeVideoWidth = 4.8;
      const youtubeVideoHeight = 3.6;

      innerMatrix[0] *= 0.01 / youtubeVideoWidth;
      innerMatrix[2] *= 0.01 / youtubeVideoWidth;
      innerMatrix[5] *= 0.01 / youtubeVideoHeight;
      innerMatrix[1] *= 0.01 / youtubeVideoWidth;
      innerMatrix[6] *= 0.01 / youtubeVideoHeight;
      innerMatrix[4] *= 0.01 / youtubeVideoHeight;

      // Set position from camera
      innerMatrix[12] = -camMatrix.m[12] + object.position.x;
      innerMatrix[13] = -camMatrix.m[13] + object.position.y;
      innerMatrix[14] = camMatrix.m[14] - object.position.z;
      innerMatrix[15] = camMatrix.m[15] * 0.00001;

      objectMatrixWorld = BABYLON.Matrix.FromArray(innerMatrix);
      objectMatrixWorld = objectMatrixWorld.scale(100);
      style = this.getObjectCSSMatrix(objectMatrixWorld, cameraCSSMatrix);
      var element = object.element;
      var cachedObject = this.cache.objects.get(object);

      if (cachedObject === undefined || cachedObject.style !== style) {
        element.style.webkitTransform = style;
        element.style.transform = style;

        var objectData = { style: style };

        this.cache.objects.set(object, objectData);
      }
      if (element.parentNode !== this.cameraElement) {
        this.cameraElement.appendChild(element);
      }
    } else if (object instanceof BABYLON.Scene) {
      for (var i = 0, l = object.meshes.length; i < l; i++) {
        this.renderObject(object.meshes[i], scene, camera, cameraCSSMatrix);
      }
    }
  }

  render(scene, camera) {
    var projectionMatrix = camera.getProjectionMatrix();
    var fov = projectionMatrix.m[5] * this.heightHalf;

    if (this.cache.camera.fov !== fov) {
      if (camera.mode == BABYLON.Camera.PERSPECTIVE_CAMERA) {
        this.domElement.style.webkitPerspective = fov + "px";
        this.domElement.style.perspective = fov + "px";
      } else {
        this.domElement.style.webkitPerspective = "";
        this.domElement.style.perspective = "";
      }
      this.cache.camera.fov = fov;
    }

    if (camera.parent === null) camera.computeWorldMatrix();

    var matrixWorld = camera.getWorldMatrix().clone();
    var rotation = matrixWorld.clone().getRotationMatrix().transpose();
    var innerMatrix = matrixWorld.m;

    innerMatrix[1] = rotation.m[1];
    innerMatrix[2] = -rotation.m[2];
    innerMatrix[4] = -rotation.m[4];
    innerMatrix[6] = -rotation.m[6];
    innerMatrix[8] = -rotation.m[8];
    innerMatrix[9] = -rotation.m[9];

    matrixWorld = BABYLON.Matrix.FromArray(innerMatrix);

    var cameraCSSMatrix = "translateZ(" + fov + "px)" +
      this.getCameraCSSMatrix(matrixWorld);

    var style = cameraCSSMatrix + "translate(" + this.widthHalf + "px," +
      this.heightHalf + "px)";

    if (this.cache.camera.style !== style && !this.isIE) {
      this.cameraElement.style.webkitTransform = style;
      this.cameraElement.style.transform = style;
      this.cache.camera.style = style;
    }

    this.renderObject(scene, scene, camera, cameraCSSMatrix);
  }
}

function buildGUI(mesh) { //{{{
  const angle = 0.1;
  var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI(
    "UI",
  );
  var panelMain = new BABYLON.GUI.StackPanel();
  panelMain.verticalAlignment = 0;
  panelMain.horizontalAlignment = 0;
  advancedTexture.addControl(panelMain);
  var panel1 = new BABYLON.GUI.StackPanel();
  panel1.verticalAlignment = 0;
  panel1.horizontalAlignment = 0;
  panel1.isVertical = false;
  panel1.widthInPixels = 400;
  panel1.heightInPixels = 60;
  panelMain.addControl(panel1);
  var button1 = BABYLON.GUI.Button.CreateSimpleButton("xMinus", "X -");
  button1.width = 0.1;
  button1.height = "40px";
  button1.color = "white";
  button1.background = "green";
  button1.widthInPixels = 80;
  button1.heightInPixels = 40;
  button1.onPointerClickObservable.add(() => {
    mesh.rotation.x -= angle;
    refreshPosition();
  });
  panel1.addControl(button1);
  var button2 = BABYLON.GUI.Button.CreateSimpleButton("xMinus", "X +");
  button2.width = 0.1;
  button2.height = "40px";
  button2.color = "white";
  button2.background = "green";
  button2.widthInPixels = 80;
  button2.heightInPixels = 40;
  button2.onPointerClickObservable.add(() => {
    mesh.rotation.x += angle;
    refreshPosition();
  });
  panel1.addControl(button2);
  var panel2 = new BABYLON.GUI.StackPanel();
  panel2.verticalAlignment = 0;
  panel2.horizontalAlignment = 0;
  panel2.isVertical = false;
  panel2.widthInPixels = 400;
  panel2.heightInPixels = 60;
  panelMain.addControl(panel2);
  var button3 = BABYLON.GUI.Button.CreateSimpleButton("yMinus", "Y -");
  button3.width = 0.1;
  button3.height = "40px";
  button3.color = "white";
  button3.background = "green";
  button3.widthInPixels = 80;
  button3.heightInPixels = 40;
  button3.onPointerClickObservable.add(() => {
    mesh.rotation.y -= angle;
    refreshPosition();
  });
  panel2.addControl(button3);
  var button4 = BABYLON.GUI.Button.CreateSimpleButton("yPlus", "Y +");
  button4.width = 0.1;
  button4.height = "40px";
  button4.color = "white";
  button4.background = "green";
  button4.widthInPixels = 80;
  button4.heightInPixels = 40;
  button4.onPointerClickObservable.add(() => {
    mesh.rotation.y += angle;
    refreshPosition();
  });
  panel2.addControl(button4);
  var panel3 = new BABYLON.GUI.StackPanel();
  panel3.verticalAlignment = 0;
  panel3.horizontalAlignment = 0;
  panel3.isVertical = false;
  panel3.widthInPixels = 400;
  panel3.heightInPixels = 60;
  panelMain.addControl(panel3);
  var button5 = BABYLON.GUI.Button.CreateSimpleButton("zMinus", "Z -");
  button5.width = 0.1;
  button5.height = "40px";
  button5.color = "white";
  button5.background = "green";
  button5.widthInPixels = 80;
  button5.heightInPixels = 40;
  button5.onPointerClickObservable.add(() => {
    mesh.rotation.z -= angle;
    refreshPosition();
  });
  panel3.addControl(button5);
  var button6 = BABYLON.GUI.Button.CreateSimpleButton("zPlus", "Z +");
  button6.width = 0.1;
  button6.height = "40px";
  button6.color = "white";
  button6.background = "green";
  button6.widthInPixels = 80;
  button6.heightInPixels = 40;
  button6.onPointerClickObservable.add(() => {
    mesh.rotation.z += angle;
    refreshPosition();
  });
  panel3.addControl(button6);
} //}}}

window.initFunction = async function () {
  var asyncEngineCreation = async function () {
    try {
      return createDefaultEngine();
    } catch (e) {
      console.log(
        "the available createEngine function failed. Creating the default engine instead",
      );
      return createDefaultEngine();
    }
  };

  window.engine = await asyncEngineCreation();
  if (!engine) throw "engine should not be null.";
  startRenderLoop(engine, canvas);
  window.scene = createScene();
};

initFunction().then(() => {
  sceneToRender = scene;
});

// Resize
window.addEventListener("resize", function () {
  engine.resize();
});
