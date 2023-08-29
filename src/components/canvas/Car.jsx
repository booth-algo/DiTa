import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Car = () => {
  const car = useGLTF("./toyota_supra/scene.gltf");

  return (
    <mesh>
    <spotLight
        position={[-20, 50, 5]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
    <primitive object={car.scene} scale={2.5} rotation={[-0.3, -0.5, -0.1]} />
    </mesh>
  );
};

const CarCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 60,
        near: 0.9,
        far: 200,
        position: [-4, 3, 10],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          // autoRotate
          enableZoom={false}
          // enableRotate={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        
        <Car />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default CarCanvas;
