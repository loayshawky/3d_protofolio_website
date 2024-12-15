import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
 
const Earth = () => {
  // Correct path for the GLTF model, assuming it's in the public folder
  const { scene } = useGLTF('/planet/scene.gltf'); // Make sure it's correct relative to the public folder

  return (
    <primitive
      object={scene}
      scale={3}
      position-y={0}
      rotation-y={0}
    />
  );
};

const EarthCanvas = () => {
  return (
      <Canvas
        shadows
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [-5, 3, 6], near: 0.1, fov: 75 }} // Adjusted fov for better viewing
      >
        <Suspense fallback={<CanvasLoader />}>
          {/* Adding lights back for better visibility */}
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 5, 2]} />
          <OrbitControls
            autoRotate= {true}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Earth />
          <Preload all />
        </Suspense>
      </Canvas>
  );
};

export default EarthCanvas;
