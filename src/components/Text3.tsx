import { Environment, useGLTF } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Mesh, Vector3 } from 'three'
import gsap from 'gsap'
useGLTF.preload('/blogwave4.glb');
const GLTF = ({inView}:{inView:boolean})=>{
    const {scene}= useGLTF('/blogwave4.glb')
    const text = useRef<Mesh>();
   
    useEffect(() => {
      if(text.current) {    
          
          if(inView){
              gsap.to(text.current.scale, { x: 4, y:4, z:4, duration: 4, ease:'power1.in'})
              gsap.to(text.current.rotation, { x: 0, y:25.12, z:0, duration:4, ease:'power1.out'});
            }
            else{
                gsap.to(text.current.scale, { x: 1, y:1, z: 1, duration: 2, ease:'power1.in'});
                gsap.set(text.current.rotation, { x: 0, y:0, z:0, duration:2, ease:'power1.in'});
            }
        }
      }, [inView]);
      const initialY = useRef(0);
      useFrame(({ clock }) => {
        if (text.current) {
          const time = clock.getElapsedTime();
          const amplitude = 0.3;
          const frequency = 1;
          text.current.position.y = initialY.current + Math.sin(time * frequency) * amplitude;
        }
      });
    return(
        <primitive
        ref={text}
        object={scene}
        scale={[1, 1,1]}
        position={[0,-2,0]}
        rotation={[0,0,0]}
        />
    )
}
const Text3 = ({inView}:{inView:boolean}) => {
  const boxref = useRef<HTMLCanvasElement>(null);
  return (
        <Canvas ref={boxref} style={{transformStyle:'preserve-3d',
          perspective: '1000px'}}>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-3,1,-10]} intensity={60}/>
            <Suspense fallback={null}>

            <GLTF inView={inView}/>
            </Suspense>
        </Canvas>
  )
}

export default Text3