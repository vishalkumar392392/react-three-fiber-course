/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 model.gltf 
*/

import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Bike(props) {
  const { nodes, materials } = useGLTF("./model/model.gltf");
  const firstRef = useRef();
  const secondRef = useRef();
  useFrame((_, delta) => {
    firstRef.current.rotation.y += delta;
    secondRef.current.rotation.z += delta;
  });
  useEffect(() => {
    // firstRef.current.position.x += 1;
  }, []);
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Bike.geometry} material={materials.Quadro}>
        <group position={[-1.053, -1.178, 0.005]}>
          <mesh
            geometry={nodes.Cylinder002_1.geometry}
            material={materials.Eixo}
          />
          <mesh
            geometry={nodes.Cylinder002_2.geometry}
            material={materials.Roda}
          />
        </group>
        <group
          position={[-1.047, -1.181, 0.005]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.792, 0.546, 0.792]}
        >
          <mesh
            ref={firstRef}
            geometry={nodes.Torus003.geometry}
            material={materials.Pneu}
          />
          <mesh
            geometry={nodes.Torus003_1.geometry}
            material={materials.Roda}
          />
          <mesh
            geometry={nodes.Torus003_2.geometry}
            material={materials.Faixa}
          />
        </group>
        <mesh
          ref={secondRef}
          geometry={nodes.B_Raios.geometry}
          material={materials.Raio}
          position={[-1.053, -1.178, 0.005]}
        />
        <group
          position={[-0.428, -0.32, 0.011]}
          rotation={[1.571, -1.414, 3.142]}
          scale={[1, 3.023, 1]}
        >
          <mesh
            geometry={nodes.Cylinder006.geometry}
            material={materials.Roda}
          />
          <mesh
            geometry={nodes.Cylinder006_1.geometry}
            material={materials.Pneu}
          />
        </group>
        <group
          position={[1.73, -0.423, 0.134]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[1, 3.023, 1]}
        >
          <mesh
            geometry={nodes.Cylinder004.geometry}
            material={materials.Roda}
          />
          <mesh
            geometry={nodes.Cylinder004_1.geometry}
            material={materials.Pneu}
            ref={firstRef}
          />
        </group>
        <mesh
          geometry={nodes.CaboFreioFrente.geometry}
          material={materials.Pneu}
          position={[1.676, -0.253, -0.146]}
        />
        <mesh
          geometry={nodes.Cube.geometry}
          material={materials.Pneu}
          position={[-0.061, 0.319, 0]}
          scale={0.091}
        />
        <group position={[0.272, -1.172, 0.013]}>
          <mesh
            geometry={nodes.Cylinder005.geometry}
            material={materials.PedalInterno}
          />
          <mesh
            geometry={nodes.Cylinder005_1.geometry}
            material={materials.PedalExterno}
          />
        </group>
        <mesh
          geometry={nodes.Cylinder001.geometry}
          material={materials.PedalInterno}
          position={[-1.029, -1.179, 0.165]}
          scale={0.501}
        />
        <group
          position={[0.286, -0.975, 0.155]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.207, 0.127, 0.207]}
        >
          <mesh
            geometry={nodes.Cylinder010.geometry}
            material={materials.Raio}
          />
          <mesh
            geometry={nodes.Cylinder010_1.geometry}
            material={materials.Pneu}
          />
        </group>
        <group
          position={[1.308, 0.35, 0.012]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.371}
        >
          <mesh
            geometry={nodes.Cylinder011.geometry}
            material={materials.Raio}
          />
          <mesh
            geometry={nodes.Cylinder011_1.geometry}
            material={materials.Pneu}
          />
        </group>
        <group position={[1.899, -1.178, 0.005]}>
          <mesh
            geometry={nodes.Cylinder_1.geometry}
            material={materials.Eixo}
          />
          <mesh
            geometry={nodes.Cylinder_2.geometry}
            material={materials.Roda}
          />
        </group>
        <group
          position={[1.905, -1.181, 0.005]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={[0.792, 0.546, 0.792]}
        >
          <mesh geometry={nodes.Torus002.geometry} material={materials.Pneu} />
          <mesh
            geometry={nodes.Torus002_1.geometry}
            material={materials.Roda}
          />
          <mesh
            geometry={nodes.Torus002_2.geometry}
            material={materials.Faixa}
          />
        </group>
        <mesh
          geometry={nodes.F_Raios.geometry}
          material={materials.Raio}
          position={[1.899, -1.178, 0.005]}
        />
        <mesh
          geometry={nodes.NurbsCurve.geometry}
          material={materials.Pneu}
          position={[0.43, -0.796, 0.092]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group position={[0.272, -1.527, -0.49]} scale={[3.421, 3.276, 10.4]}>
          <mesh
            geometry={nodes.Cylinder007.geometry}
            material={materials.Pneu}
          />
          <mesh
            geometry={nodes.Cylinder007_1.geometry}
            material={materials.Quadro}
          />
        </group>
        <group position={[0.272, -0.814, 0.522]} scale={[3.421, 3.276, 10.4]}>
          <mesh
            geometry={nodes.Cylinder008.geometry}
            material={materials.Pneu}
          />
          <mesh
            geometry={nodes.Cylinder008_1.geometry}
            material={materials.Quadro}
          />
        </group>
        <mesh
          geometry={nodes.Sphere.geometry}
          material={materials.Roda}
          position={[-0.381, -0.26, 0.18]}
          scale={0.009}
        />
        <mesh
          geometry={nodes.Sphere002.geometry}
          material={materials.Raio}
          position={[1.676, -0.251, -0.192]}
          scale={0.01}
        />
      </mesh>
    </group>
  );
}

useGLTF.preload("./model/model.gltf");
