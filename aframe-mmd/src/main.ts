import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

const aframeDemo = () => {
  return `
    <a-scene>
      <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    </a-scene>
  `
}

const mmd = () => {
  return `
    <a-entity position="0 10 20">
      <a-camera></a-camera>
    </a-entity>

    <a-entity mmd=""><!-- 今回は音楽使用しないのでmmd属性の値はなし -->
    <a-entity rotation="0 90 0" position="-10 0 0" scale="0.5 0.5 0.5"
                mmd-model="./assets/Alicia/MMD/Alicia_solid.pmx;vmd:./assets/Alicia/MMD Motion/2分ループステップ1.vmd; physics:false; blink:true;"></a-entity>
    </a-entity>
  `
}

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
${mmd()}
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
