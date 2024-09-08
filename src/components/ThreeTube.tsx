import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const Tube1Model = () => {
  const { scene } = useGLTF('/tube.glb');
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const time = clock.getElapsedTime()+1;
      mesh.current.position.y = 0 + Math.sin(time * 1) * 0.2;
    }
  });

  return <primitive ref={mesh} object={scene} size={[5,5,5]} />;
};

const Tube1 = () => {
  return (
    <Canvas key={1}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={5} position={[5, 5, 5]} />
      <Tube1Model />
    </Canvas>
  );
};

export default Tube1;
