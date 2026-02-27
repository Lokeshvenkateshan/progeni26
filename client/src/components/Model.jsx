import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Model(props) {
  const modelRef = useRef();     // GLB node
  const wrapperRef = useRef();   // Rotation wrapper

  const { scene, animations } = useGLTF("robot_playground.glb");
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    /* scene.position.set(0, 0, 0);
    scene.rotation.set(0, 0, 0);
    scene.scale.set(1, 1, 1);  */
    Object.values(actions).forEach((action) => {
      const name = action.getClip().name.toLowerCase();

      // Skip camera animations if present
      if (!name.includes("camera")) {
        action.reset().play();
      }
    });
  }, [actions]);

  return (
    <group ref={wrapperRef} {...props} scale={1.7}>
      <primitive ref={modelRef} object={scene} />
    </group>
  );
}