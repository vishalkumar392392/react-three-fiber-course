import { useFrame, extend, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { CustomMesh } from "./CustomMesh";
// import { OrbitControls } from "@react-three/drei";
extend({ OrbitControls: OrbitControls });

export const Scene = () => {
  const cubeRef = useRef();
  const planeRef = useRef();
  const { camera, gl } = useThree();

  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
    // planeRef.current.rotation.y += delta;
    // state.camera.position.x = Math.sin(state.clock.elapsedTime);
    // camera.position.x = Math.sin(state.clock.elapsedTime);
  });
  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      {/* <OrbitControls /> */}
      <CustomMesh />
      <mesh ref={planeRef} position-x={-2}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial color={"orange"} side={THREE.DoubleSide} />
      </mesh>
      <mesh position-x={2} ref={cubeRef}>
        <boxGeometry />
        <meshBasicMaterial color={"blue"} />
      </mesh>
    </>
  );
};
