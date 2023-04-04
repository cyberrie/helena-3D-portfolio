import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import { extend } from '@react-three/fiber'
// extend({ OrbitControls })


import CanvasLoader from "../Loader";

const Computers = React.memo(({ isMobile }) => {
  const computer = useGLTF("./retro_computer/scene.gltf");

  return (
    <group>
    <hemisphereLight intensity={0.65} groundColor="black" />
    <spotLight
      position={[-20, 50, 10]}
      angle={0.19}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}/>
    <pointLight intensity={1.5} />
    <group // create a new group to hold the custom object
      scale={isMobile ? 0.72 : 0.82}
      position={isMobile ? [-0.2, -3, -2.2] : [0.7, -3.25, -1.5]} // array of x y and z axes
      rotation={[0.1, -Math.PI / 18, 0]}>
      <primitive object={computer.scene} />
    </group>
  </group>
  )
});

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}/>
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
