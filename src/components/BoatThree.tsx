import React, { useRef } from 'react';
import { Environment, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const BoatModel = () => {
  const { scene } = useGLTF('/boat.glb');
  const mesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (mesh.current) {
      const time = clock.getElapsedTime();
      mesh.current.position.y = -2 + Math.sin(time * 1.5) * 2;
    }
  });

  return <primitive ref={mesh} object={scene} position={[0,-2,0]} scale={[2,2,2]} rotation={[0,1.5,0]} />;
};

const ThreeBoat = () => {
  return (
    <Canvas key={1}>
      <ambientLight intensity={0.5} />
      <directionalLight intensity={5} position={[5, 5, 5]} />
      <BoatModel />
      <Environment preset='sunset'/>
    </Canvas>
  );
};

export default ThreeBoat;
