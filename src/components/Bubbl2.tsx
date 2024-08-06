import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment, OrbitControls } from '@react-three/drei';
import { Mesh, MeshPhysicalMaterial, Color } from 'three';
import gsap from 'gsap';
interface GLTFModelProps {
  url: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

const GLTFModel: React.FC<GLTFModelProps> = ({ url, position = [0, 0, 0], rotation = [0, 0, 0], scale = [1, 1, 1] }) => {
  const { scene } = useGLTF(url);
  const mesh = useRef<Mesh>(null);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.01; // Example rotation animation
    }
  });
  useEffect(() => {
    if(mesh.current) {
      gsap.to(mesh.current.scale,{x: 6, y: 6,z: 6, duration:6, repeat:Infinity, yoyo: true, delay:1});
    }
  }, [])
  // Apply realistic bubble material settings to all materials
  scene.traverse((child) => {
    if ((child as Mesh).isMesh) {
      const material = new MeshPhysicalMaterial({
        color: new Color(0x4a90e2), // Light blue base color
        transparent: true,
        opacity: 0.3, // Adjust opacity for bubble effect
        roughness: 0.05, // Low roughness for reflectivity
        metalness: 0.1, // Adjust metalness
        reflectivity: 1.0, // High reflectivity for shiny surface
        clearcoat: 1.0, // High clearcoat for glossy finish
        clearcoatRoughness: 0.05, // Low clearcoat roughness
        transmission: 1, // Enable transmission for glass-like effect
        thickness: 0.5, // Thickness of the material
        envMapIntensity: 1, // Intensity of the environment map
        specularIntensity: 1, // Specular highlight intensity
        specularColor: new Color(0x000000), // Specular color for highlights
        ior: 1.45, // Index of refraction for realistic light bending
      });
      (child as Mesh).material = material;
    }
  });

  return (
    <primitive
      object={scene}
      ref={mesh}
      position={position}
      rotation={rotation}
      scale={scale}
    />
  );
};

useGLTF.preload('/bubble1.glb');

const Bubble1: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="sunset" />
      <OrbitControls enableZoom={false}/>
      <GLTFModel
        url="/bubble1.glb"
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
        scale={[1, 1, 1]}
      />
    </Canvas>
  );
};

export default Bubble1;
