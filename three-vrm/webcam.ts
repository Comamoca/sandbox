import * as faceapi from "face-api.js";

window.onload = () => {
  console.log("onload!");
  // エントリーポイント
};

export function main() {
  const video = document.getElementById("video");
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: false,
    })
    // videoのコールバック
    .then((stream) => {
      read_stream(stream);
    })
    .catch((e) => {
      console.log(e);
    });

  function read_stream(stream) {
    video.srcObject = stream;
    // video.play();

    const canvas = document.getElementById("facecanvas");
    const videoEl = document.getElementById("video");
    const inputSize = 224;
    const scoreThreshold = 0.5;
    const options = new faceapi.TinyFaceDetectorOptions({
      inputSize,
      scoreThreshold,
    });

    const result = faceapi.detectSingleFace(stream, options)
      .withFaceLandmarks();

    if (result) {
      const dims = faceapi.matchDimensions(canvas, videoEl, true);
      const resizedResult = faceapi.resizeResults(result, dims);
      faceapi.draw.drawDetections(canvas, resizedResult);
      faceapi.draw.drawFaceLandmarks(canvas, resizedResult);
    }
  }

  Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri("./weights"),
    faceapi.nets.faceLandmark68TinyNet.loadFromUri("./weights"),
  ]);
}
