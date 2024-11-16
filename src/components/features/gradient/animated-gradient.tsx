'use client';

import { useMemo, useRef } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';

import fragmentShader from '@/feature/gradient/fragmentShader.glsl';
import vertexShader from '@/feature/gradient/vertexShader.glsl';

const GradientMaterial = () => {
  const materialRef = useRef<THREE.ShaderMaterial>();

  const shaderMaterial = useMemo(
    () => ({
      uniforms: { uTime: { value: 0 } },
      vertexShader,
      fragmentShader,
    }),
    [],
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  return useMemo(() => {
    return new THREE.ShaderMaterial({
      ...shaderMaterial,
      uniforms: { ...shaderMaterial.uniforms },
    });
  }, [shaderMaterial]);
};

const GradientPlane = () => {
  const gradientMaterial = GradientMaterial();
  const materialRef = useRef(gradientMaterial);

  useFrame((state) => {
    if (materialRef.current) materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <primitive object={materialRef.current} attach="material" />
    </mesh>
  );
};

const AnimatedGradient = () => {
  return (
    <div className="row-span-3 overflow-hidden rounded">
      <Canvas camera={{ position: [0, 0, 1.1] }} style={{ background: 'transparent' }}>
        <GradientPlane />
      </Canvas>
    </div>
  );
};

export default AnimatedGradient;
