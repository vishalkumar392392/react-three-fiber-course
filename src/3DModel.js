import { useAnimations, useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import React, { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export const ThreeDModel = () => {
  const model = useLoader(GLTFLoader, "./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);
  useEffect(() => {
    animations.actions.Embarrassed.play();
  }, []);

  return <primitive object={model.scene} />;
};

useGLTF.preload("./model/dog.glb");
