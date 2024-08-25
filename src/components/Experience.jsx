"use client";

import { CameraControls, Environment, Gltf, Html  } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { degToRad } from "three/src/math/MathUtils";
import { BoardSettings } from "./BoardSettings"
import { MessagesList } from "./MessagesList";
import { Teacher } from './Teacher'
import { TypingBox } from './TypingBox'
import KeyboardCameraControls from './KeyboardCameraControls'


export const Experience = () =>{
return(
  <>
  <div className="z-10 md:justify-center fixed bottom-4 left-4 right-4 flex gap-3 flex-wrap justify-stretch">
    <TypingBox />
  </div>
  <Canvas camera={{
    position:[0, 0 , .0001]
  }}>
    <CameraManager/>
    <Environment preset='sunset'/>
    {/* <KeyboardCameraControls/> */}
    <Html position={[0.22, 0.192, -3]} transform distanceFactor={0.5}>
      <MessagesList/>
      <BoardSettings/>
    </Html>
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
