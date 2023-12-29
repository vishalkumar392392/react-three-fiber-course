import { useLoader } from "@react-three/fiber";
import React from "react";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Particles } from "./Particles";
// extend({ OrbitControls: OrbitControls });

export const Scene = () => {
  const texture = useLoader(THREE.TextureLoader, "./img/1.png");
  return (
    <>
      {/* <OrbitControls /> */}
      {/* <mesh>
        <circleGeometry args={[3, 128]} />
        <meshBasicMaterial side={THREE.DoubleSide} map={texture} />
      </mesh> */}
      <Particles />
    </>
  );
};
