import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

const App = () => {
  return (
    <Canvas
      gl={{
        antialias: true,
      }}
      // camera={{
      //   fov: 45,
      //   near: 0.1,
      //   far: 100,
      //   // zoom: 120,
      //   position: [2, 2, 20],
      // }}
      onCreated={(state) => state.gl.setClearColor("grey", 0.5)}
    >
      {/* <axesHelper />
      <gridHelper /> */}
      <Scene />
      {/* <Particles /> */}
    </Canvas>
  );
};

export default App;
