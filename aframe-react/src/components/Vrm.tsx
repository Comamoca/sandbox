import React from 'react';
import 'aframe';

import {
  Entity,
} from '@belivvr/aframe-react';

function Vrm(props: {path: string, anim: string, rotation: any}) {
  return (
    <Entity vrm={props.path} vrm-anim={props.anim} rotation={props.rotation} />
  )
}

export default Vrm
