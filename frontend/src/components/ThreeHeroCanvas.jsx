import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useMemo, useRef } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

function StarField({ reduced }) {
  const points = useRef();
  const positions = useMemo(() => {
    const count = reduced ? 450 : 1200;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return arr;
  }, [reduced]);

  useFrame((_, delta) => {
    if (!points.current || reduced) return;
    points.current.rotation.y += delta * 0.028;
    points.current.rotation.x += delta * 0.008;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#67e8f9" size={0.018} sizeAttenuation transparent opacity={0.72} />
    </points>
  );
}

function CameraRig({ reduced }) {
  const { camera, pointer } = useThree();
  useFrame(() => {
    if (reduced) return;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 0.8, 0.035);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.45, 0.035);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Scene({ reduced }) {
  const knot = useRef();
  const ico = useRef();

  useFrame((_, delta) => {
    if (reduced) return;
    if (knot.current) {
      knot.current.rotation.x += delta * 0.28;
      knot.current.rotation.y += delta * 0.36;
    }
    if (ico.current) {
      ico.current.rotation.x -= delta * 0.18;
      ico.current.rotation.z += delta * 0.24;
    }
  });

  return (
    <>
      <CameraRig reduced={reduced} />
      <ambientLight intensity={0.55} />
      <pointLight position={[4, 5, 4]} intensity={3.2} color="#67e8f9" />
      <pointLight position={[-5, -2, -3]} intensity={2.1} color="#2563eb" />
      <StarField reduced={reduced} />

      <Float speed={reduced ? 0 : 1.6} rotationIntensity={0.45} floatIntensity={0.7}>
        <mesh ref={knot} position={[1.35, 0.22, 0]} scale={0.82}>
          <torusKnotGeometry args={[0.78, 0.19, 180, 18]} />
          <meshStandardMaterial color="#22d3ee" metalness={0.68} roughness={0.18} emissive="#0e7490" emissiveIntensity={0.5} />
        </mesh>
      </Float>

      <Float speed={reduced ? 0 : 1.15} rotationIntensity={0.25} floatIntensity={0.5}>
        <mesh position={[-1.55, -0.05, -0.2]} scale={0.82}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial color="#0f172a" roughness={0.2} metalness={0.45} distort={reduced ? 0.05 : 0.34} speed={1.8} emissive="#1d4ed8" emissiveIntensity={0.34} />
        </mesh>
      </Float>

      <mesh ref={ico} position={[0.05, -1.08, -0.9]} scale={1.28}>
        <icosahedronGeometry args={[0.98, 1]} />
        <meshBasicMaterial color="#93c5fd" wireframe transparent opacity={0.42} />
      </mesh>
    </>
  );
}

export default function ThreeHeroCanvas() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="absolute inset-0 h-full w-full opacity-90" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 55 }} dpr={[1, 1.6]} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
        <Suspense fallback={null}>
          <Scene reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
}
