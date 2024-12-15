import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('../desktop_pc/scene.gltf');
  console.log(scene);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="#fff" />
      <pointLight intensity={0} />
      <spotLight
        position={[0, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        intensity={10000}
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={isMobile ? 0.40 : 0.6}
        position={isMobile ? [0, -2.25, -0.2] : [0, -3.25, -1.5]}
        rotation={[0, 0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery =
     window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Clean up the event listener on unmount
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []); // Empty dependency array to run once on mount

  return (
    <Canvas
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
