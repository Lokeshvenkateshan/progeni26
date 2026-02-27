import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls,Bounds } from "@react-three/drei";
import Model from "./Model";

export default function ThreeScene() {
  return (
    <Canvas camera={{ position: [2, 3, 10], fov: 50,near: 0.1,
    far: 1000  }}
     className="canva">
      <ambientLight intensity={1.5} />
      <directionalLight position={[5, 5, 5]} intensity={2} />

      {/*  <Bounds fit clip observe margin={2}>
        <Model/>
      </Bounds> */}
      <Model/>
      {/* Disable controls if animation handles camera */}
      <OrbitControls enableZoom={false} enablePan={false}/>
    </Canvas>
  );
}