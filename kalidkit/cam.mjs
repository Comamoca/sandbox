import { Camera } from "@mediapipe/camera_utils";
import { drawConnectors } from "@mediapipe/drawing_utils";
import {
  FaceMesh,
  FACEMESH_FACE_OVAL,
  FACEMESH_LEFT_EYE,
  FACEMESH_LEFT_EYEBROW,
  FACEMESH_LEFT_IRIS,
  FACEMESH_LIPS,
  FACEMESH_RIGHT_EYE,
  FACEMESH_RIGHT_EYEBROW,
  FACEMESH_RIGHT_IRIS,
  FACEMESH_TESSELATION,
  ResultsListener,
} from "@mediapipe/face_mesh";
import "./style.css";

const width = 400;
const height = 400;

const videoElement = document.getElementById("input_video") as HTMLVideoElement;
const canvasElement = document.getElementById(
  "output_canvas",
) as HTMLCanvasElement;
const canvasCtx = canvasElement.getContext("2d")!;
canvasElement.width = width;
canvasElement.height = height;

const onResults: ResultsListener = (results) => {
  // console.log(results);
  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
  // 検出したランドマークを描画
  if (results.multiFaceLandmarks) {
    for (const landmarks of results.multiFaceLandmarks) {
      drawConnectors(canvasCtx, landmarks, FACEMESH_TESSELATION, {
        color: "#C0C0C070",
        lineWidth: 1,
      });
      drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYE, {
        color: "#FF3030",
      });
      drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_EYEBROW, {
        color: "#FF3030",
      });
      drawConnectors(canvasCtx, landmarks, FACEMESH_RIGHT_IRIS, {
        color: "#FF3030",
      });
      drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYE, {
        color: "#30FF30",
      });
      drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_EYEBROW, {
        color: "#30FF30",
      });
      drawConnectors(canvasCtx, landmarks, FACEMESH_LEFT_IRIS, {
        color: "#30FF30",
      });
      drawConnectors(canvasCtx, landmarks, FACEMESH_FACE_OVAL, {
        color: "#E0E0E0",
      });
      drawConnectors(canvasCtx, landmarks, FACEMESH_LIPS, { color: "#E0E0E0" });
    }
  }
  canvasCtx.restore();
};

// create media pipe faceMesh instance
const facemesh = new FaceMesh({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
  },
});

// set facemesh config
// see https://google.github.io/mediapipe/solutions/face_mesh#configuration-options
facemesh.setOptions({
  maxNumFaces: 1,
  refineLandmarks: true,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5,
});

// pass facemesh callback function
facemesh.onResults(onResults);

const camera = new Camera(videoElement, {
  onFrame: async () => {
    await facemesh.send({ image: videoElement });
  }, // カメラのフレームが利用できるようになったときに呼び出されるコールバック関数
  facingMode: "user", // 内カメラを指定, 'environment'で外カメラを指定できる
  width: width,
  height: height,
});

camera.start();
