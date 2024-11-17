'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import * as THREE from 'three';
import { Canvas, ThreeEvent, useFrame, useThree } from '@react-three/fiber';
import {
  animate,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  ValueAnimationTransition,
} from 'motion/react';
import { createNoise2D } from 'simplex-noise';

import fragmentShader from '@/feature/gradient/fragmentShader.glsl';
import vertexShader from '@/feature/gradient/vertexShader.glsl';

import { lerp } from '@/util/three.util';

const noise2D = createNoise2D();

const GradientPlane = () => {
  const three = useThree();
  const materialRef = useRef<THREE.ShaderMaterial>(new THREE.ShaderMaterial());

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0.0 },
      uMouse: { value: [0, 0] },
      uMouseOpacity: { value: 0 },
    }),
    [],
  );

  const [mousePosition, setMousePosition] = useState([-1, -1]);
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (event: ThreeEvent<PointerEvent>) => {
    const relX = event.x - three.viewport.left;
    const relY = event.y - three.viewport.top;

    const x = (relX / three.size.width - 0.5) * 2;
    const y = -(relY / three.size.height - 0.5) * 2;

    setMousePosition([x, y]);
  };

  const handleMouseEnter = () => setHovering(true);
  const handleMouseLeave = () => setHovering(false);

  useFrame((state, delta) => {
    if (!materialRef.current) return;

    const position = new THREE.Vector2(mousePosition[0], mousePosition[1]);
    three.raycaster.setFromCamera(position, three.camera);
    const intersect = three.raycaster.intersectObjects(three.scene.children);

    const currentTime = materialRef.current.uniforms.uTime.value;
    const elapsedTime = state.clock.elapsedTime / 5;
    const noise = (noise2D(elapsedTime, elapsedTime) + 1) / 2;
    materialRef.current.uniforms.uTime.value = currentTime + delta * noise * 4;

    const currentMouseOpacity = materialRef.current.uniforms.uMouseOpacity.value;
    materialRef.current.uniforms.uMouseOpacity.value = lerp(currentMouseOpacity, hovering ? 1 : 0, 0.1);

    const currentPoint = materialRef.current.uniforms.uMouse.value;
    const uMouse = intersect[0]?.point ?? [0, 0];

    if (!(currentPoint instanceof THREE.Vector3)) materialRef.current.uniforms.uMouse.value = uMouse;
    else materialRef.current.uniforms.uMouse.value = currentPoint.lerp(uMouse, 0.07);
  });

  return (
    <mesh onPointerMove={handleMouseMove} onPointerEnter={handleMouseEnter} onPointerLeave={handleMouseLeave}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial transparent={true} ref={materialRef} {...{ fragmentShader, vertexShader, uniforms }} />
    </mesh>
  );
};

const AnimatedGradient = () => {
  const polygon1Ref = useRef<SVGPolygonElement>(null);
  const polygon2Ref = useRef<SVGPolygonElement>(null);

  const y1 = useMotionValue(0);
  const y2 = useMotionValue(1);

  const polygon1 = useMotionTemplate`0,${y1} .15,${y1} .15,1 0,1`;
  const polygon2 = useMotionTemplate`.2,0 1,0 1,${y2} .2,${y2}`;

  useMotionValueEvent(polygon1, 'change', (value) => {
    if (!polygon1Ref.current) return;
    polygon1Ref.current.setAttribute('points', value);
  });

  useMotionValueEvent(polygon2, 'change', (value) => {
    if (!polygon2Ref.current) return;
    polygon2Ref.current.setAttribute('points', value);
  });

  useEffect(() => {
    const options: ValueAnimationTransition = {
      duration: 2,
      ease: 'circInOut',
      delay: 2,
    };

    const animation1 = animate(y1, [1, 0], options);
    const animation2 = animate(y2, [0, 1], options);

    return () => {
      animation1.stop();
      animation2.stop();
    };
  }, []);

  return (
    <div className="row-span-3 overflow-hidden rounded" style={{ clipPath: 'url(#myClip)' }}>
      <svg viewBox="0 0 100 100" width="0" height="0">
        <clipPath viewBox="0 0 100 100" id="myClip" clipPathUnits="objectBoundingBox">
          <polygon ref={polygon1Ref} />
          <polygon ref={polygon2Ref} />
        </clipPath>
      </svg>

      <Canvas camera={{ position: [0, 0, 1.1] }} style={{ background: 'transparent' }}>
        <GradientPlane />
      </Canvas>
    </div>
  );
};

export default AnimatedGradient;
