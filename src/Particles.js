import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from "three";

export const Particles = () => {
  const particles = useRef();
  const texture = useLoader(THREE.TextureLoader, "./img/snow.jpg");
  const vertices = 2000;
  const pointsArray = new Float32Array(vertices * 3);
  for (let i = 0; i < vertices * 3; i++) {
    pointsArray[i] = (Math.random() - 0.5) * 10;
  }
  useFrame((_, delta) => {
    particles.current.rotation.y += delta * 0.1;
    particles.current.rotation.x += delta * 0.1;
  });
  return (
    <>
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={pointsArray.length / 3}
            itemSize={3}
            array={pointsArray}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          alphaMap={texture}
          transparent
          depthTest={false}
        />
      </points>
    </>
  );
};
