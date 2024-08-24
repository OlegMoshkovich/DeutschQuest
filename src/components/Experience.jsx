"use client";

import { CameraControls, Environment, Gltf,  } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { degToRad } from "three/src/math/MathUtils";
import { Teacher } from './Teacher'
import KeyboardCameraControls from './KeyboardCameraControls'


export const Experience = () =>{
return(
  <>
  <Canvas camera={{
    position:[0, 0 , .0001]
  }}>
    {/* <CameraManager/> */}
    <Environment preset='sunset'/>
    <KeyboardCameraControls/>
    <ambientLight intensity={.8} />
    <Teacher teacher={'Nanami'} position={[-1,-1.7,-3]} scale={1.5} rotation-y={degToRad(20)}/>
    <Gltf src="/models/classroom_default.glb" position={[0.2, -1.7, -2]}/>
  </Canvas>
  </>
)
}

const CameraManager = () => {
  return(
    <CameraControls
      minZoom={1}
      maxZomm={3}
      polarRotateSpeed={-0.3}
      azimuthRotateSpeed={-0.3}
      ouseButtons={{
        left: 1,
        wheel: 10,
      }}
      touches={{
        one: 32,
        two: 512,
      }}
    />
  )
}
