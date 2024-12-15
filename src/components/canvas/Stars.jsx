import { useState, Suspense, useRef } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, OrbitControls } from "@react-three/drei";
import * as random from 'maath/random/dist/maath-random.esm';

// Function to generate random stars
const Stars = (props) => {
  const points = random.inSphere(new Float32Array(5000), { radius: 1.2 }); // Generate random star positions in a sphere
  const ref = useRef(); // Create a ref for the group

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group ref={ref} rotation={[0, 0, Math.PI / 4]}>
      <Points positions={points} {...props}>
        <PointMaterial color="#f272c8" size={0.002} />
      </Points>
    </group>
  );
};

// StarsCanvas Component
const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 2] }}>
        {/* Render stars inside the Canvas */}
        <Suspense fallback={<div>Loading...</div>}>
          <Stars />
        </Suspense>

        {/* Add orbit controls to the scene */}
        <OrbitControls />

        {/* Preload the necessary resources */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
