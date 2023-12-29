import React, { Suspense } from "react";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { ThreeDModel } from "./3DModel";
import { Bike } from "./Bike";
import { Perf } from "r3f-perf";

export const Scene = () => {
  return (
    <>
      <Perf />

      <OrbitControls />
      <ambientLight intensity={2} />
      <Suspense
        fallback={
          <mesh>
            <boxBufferGeometry />
            <meshBasicMaterial wireframe />
          </mesh>
        }
      >
        <ThreeDModel />
      </Suspense>
      {/* <Bike scale={0.85} position={[-0.5, 0.75, 0]} /> */}
    </>
  );
};
