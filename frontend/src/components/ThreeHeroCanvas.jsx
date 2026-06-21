import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Html, Line, MeshDistortMaterial } from '@react-three/drei';
import { Suspense, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.js';

function StarField({ reduced, mobile }) {
  const points = useRef();
  const positions = useMemo(() => {
    const count = reduced ? 180 : mobile ? 380 : 850;
    const arr = new Float32Array(count * 3);
    let seed = 1729;
    const random = () => {
      seed = (seed * 16807) % 2147483647;
      return (seed - 1) / 2147483646;
    };
    for (let index = 0; index < count; index += 1) {
      arr[index * 3] = (random() - 0.5) * 18;
      arr[index * 3 + 1] = (random() - 0.5) * 12;
      arr[index * 3 + 2] = (random() - 0.5) * 18;
    }
    return arr;
  }, [mobile, reduced]);

  useFrame((_, delta) => {
    if (!points.current || reduced) return;
    points.current.rotation.y += delta * 0.022;
    points.current.rotation.x += delta * 0.006;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#FFE08A" size={mobile ? 0.022 : 0.017} sizeAttenuation transparent opacity={0.62} depthWrite={false} />
    </points>
  );
}

function CameraRig({ reduced, mobile }) {
  const { camera, pointer } = useThree();
  useFrame(() => {
    if (reduced) return;
    const factor = mobile ? 0.24 : 0.68;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * factor, 0.032);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * factor * 0.58, 0.032);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function SignalLine({ points, color = '#F5C542', reduced, delay = 0 }) {
  const line = useRef();
  useFrame((state, delta) => {
    if (reduced || !line.current?.material) return;
    line.current.material.dashOffset -= delta * (0.38 + delay * 0.04);
    line.current.material.opacity = 0.55 + Math.sin(state.clock.elapsedTime * 1.8 + delay) * 0.2;
  });

  return (
    <Line
      ref={line}
      points={points}
      color={color}
      lineWidth={1.15}
      dashed
      dashScale={12}
      dashSize={0.22}
      gapSize={0.13}
      transparent
      opacity={0.72}
    />
  );
}

function Led({ position, color, reduced, phase }) {
  const material = useRef();
  useFrame((state) => {
    if (reduced || !material.current) return;
    material.current.emissiveIntensity = 1.2 + Math.sin(state.clock.elapsedTime * 2.8 + phase) * 0.75;
  });
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.045, 12, 12]} />
      <meshStandardMaterial ref={material} color={color} emissive={color} emissiveIntensity={1.7} toneMapped={false} />
    </mesh>
  );
}

function PLCPanel({ reduced, mobile }) {
  const group = useRef();
  const screen = useRef();
  const [hovered, setHovered] = useState(false);
  const leds = useMemo(() => Array.from({ length: 12 }, (_, index) => ({
    position: [-0.5 + (index % 4) * 0.16, 0.25 - Math.floor(index / 4) * 0.16, 0.231],
    color: index % 5 === 0 ? '#fbbf24' : index % 3 === 0 ? '#F7C948' : '#F5C542'
  })), []);
  const baseY = mobile ? -0.42 : -0.28;

  useFrame((state, delta) => {
    if (!group.current) return;
    const pointerInfluence = reduced ? 0 : state.pointer.x * 0.13;
    const targetY = (hovered ? 0.23 : -0.08) + pointerInfluence;
    const targetX = reduced ? -0.08 : -0.08 + state.pointer.y * 0.06;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.045);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.045);
    group.current.position.y = baseY + (reduced ? 0 : Math.sin(state.clock.elapsedTime * 0.9) * 0.035);
    if (screen.current && !reduced) screen.current.emissiveIntensity = 0.7 + Math.sin(state.clock.elapsedTime * 2.1) * 0.18;
  });

  const scale = mobile ? 0.68 : 0.82;
  return (
    <Float speed={reduced ? 0 : 1.15} rotationIntensity={0.1} floatIntensity={0.25}>
      <group
        ref={group}
        position={mobile ? [1.18, baseY, 0.15] : [1.55, baseY, 0.15]}
        scale={scale}
        onPointerOver={(event) => { event.stopPropagation(); setHovered(true); }}
        onPointerOut={() => setHovered(false)}
      >
        <mesh castShadow>
          <boxGeometry args={[1.55, 1.9, 0.42]} />
          <meshStandardMaterial color="#111111" metalness={0.72} roughness={0.24} emissive="#4A3500" emissiveIntensity={hovered ? 0.48 : 0.26} />
        </mesh>
        <mesh position={[0, 0, 0.22]}>
          <boxGeometry args={[1.38, 1.72, 0.035]} />
          <meshStandardMaterial color="#1B1B1B" metalness={0.45} roughness={0.34} />
        </mesh>
        <mesh position={[0.26, 0.48, 0.247]}>
          <boxGeometry args={[0.7, 0.48, 0.035]} />
          <meshStandardMaterial ref={screen} color="#080808" emissive="#F5C542" emissiveIntensity={0.75} toneMapped={false} />
        </mesh>
        {[0, 1, 2].map((bar) => (
          <mesh key={bar} position={[0.05 + bar * 0.2, 0.43 + bar * 0.045, 0.271]}>
            <boxGeometry args={[0.12, 0.028 + bar * 0.02, 0.012]} />
            <meshBasicMaterial color={bar === 1 ? '#FFE08A' : '#D99A00'} toneMapped={false} />
          </mesh>
        ))}
        <mesh position={[-0.43, 0.48, 0.245]}>
          <boxGeometry args={[0.3, 0.52, 0.04]} />
          <meshStandardMaterial color="#080808" emissive="#332600" emissiveIntensity={0.5} />
        </mesh>
        {leds.map((led, index) => <Led key={index} {...led} reduced={reduced} phase={index * 0.55} />)}
        {[-0.57, -0.29, -0.01, 0.27, 0.55].map((x) => (
          <group key={x} position={[x, -0.68, 0.24]}>
            <mesh><boxGeometry args={[0.14, 0.24, 0.06]} /><meshStandardMaterial color="#252525" metalness={0.5} roughness={0.36} /></mesh>
            <mesh position={[0, -0.02, 0.041]}><boxGeometry args={[0.05, 0.08, 0.015]} /><meshBasicMaterial color="#F5C542" toneMapped={false} /></mesh>
          </group>
        ))}

        <group position={[1.25, -0.15, -0.02]} rotation={[0, -0.12, 0]}>
          <mesh>
            <boxGeometry args={[1.05, 0.72, 0.2]} />
            <meshStandardMaterial color="#121212" metalness={0.6} roughness={0.22} emissive="#4A3500" emissiveIntensity={0.34} />
          </mesh>
          <mesh position={[0, 0, 0.111]}>
            <boxGeometry args={[0.84, 0.51, 0.025]} />
            <meshStandardMaterial color="#050505" emissive="#D99A00" emissiveIntensity={0.8} toneMapped={false} />
          </mesh>
          <Line points={[[-0.32, -0.08, 0.13], [-0.12, 0.08, 0.13], [0.05, -0.02, 0.13], [0.24, 0.13, 0.13], [0.34, 0.04, 0.13]]} color="#FFE08A" lineWidth={1.3} />
        </group>

        <SignalLine reduced={reduced} delay={0} points={[[0.7, 0.36, 0.1], [0.92, 0.46, 0.12], [1.05, 0.22, 0.08], [1.18, 0.1, 0.02]]} />
        <SignalLine reduced={reduced} delay={1} color="#F7C948" points={[[0.68, -0.32, 0.12], [0.86, -0.5, 0.04], [1.05, -0.42, -0.02], [1.2, -0.35, -0.02]]} />
        <Line points={[[0.62, -0.72, -0.05], [0.78, -0.96, -0.2], [1.12, -1.02, -0.18], [1.38, -0.52, -0.06]]} color="#B77900" lineWidth={2.3} transparent opacity={0.58} />
        <Line points={[[0.45, -0.76, -0.08], [0.58, -1.12, -0.1], [1.05, -1.18, -0.14], [1.28, -0.55, -0.03]]} color="#F5C542" lineWidth={1.25} transparent opacity={0.7} />

        <Html position={[-0.2, 1.18, 0]} center distanceFactor={7}>
          <span className="three-label three-label-primary">PLC CONTROL</span>
        </Html>
        <Html position={[1.26, 0.38, 0]} center distanceFactor={7}>
          <span className="three-label">HMI</span>
        </Html>
      </group>
    </Float>
  );
}

function FloatingLabels({ reduced, mobile }) {
  const labels = [
    ['SCADA', [-0.15, 1.7, -0.2]],
    ['DCS', [2.55, 1.05, -0.4]],
    ['ESP32', [2.75, -1.35, -0.5]],
    ['Raspberry Pi', [-0.15, -1.85, -0.3]],
    ['Sensors', [-2.55, 1.2, -0.6]]
  ];
  const visibleLabels = mobile ? labels.slice(0, 4) : labels;
  return visibleLabels.map(([label, position], index) => (
    <Float key={label} speed={reduced ? 0 : 0.75 + index * 0.08} floatIntensity={0.18} rotationIntensity={0}>
      <Html position={position} center distanceFactor={9}>
        <span className="three-label">{label}</span>
      </Html>
    </Float>
  ));
}

function Scene({ reduced, mobile }) {
  const knot = useRef();
  const ico = useRef();

  useFrame((_, delta) => {
    if (reduced) return;
    if (knot.current) {
      knot.current.rotation.x += delta * 0.17;
      knot.current.rotation.y += delta * 0.23;
    }
    if (ico.current) {
      ico.current.rotation.x -= delta * 0.1;
      ico.current.rotation.z += delta * 0.15;
    }
  });

  return (
    <>
      <CameraRig reduced={reduced} mobile={mobile} />
      <ambientLight intensity={0.45} />
      <pointLight position={[4, 5, 4]} intensity={2.7} color="#FFE08A" />
      <pointLight position={[-5, -2, -3]} intensity={1.8} color="#D99A00" />
      <StarField reduced={reduced} mobile={mobile} />

      <Float speed={reduced ? 0 : 1.25} rotationIntensity={0.3} floatIntensity={0.45}>
        <mesh ref={knot} position={mobile ? [2.1, 1.25, -1.2] : [2.55, 1.32, -1.35]} scale={mobile ? 0.52 : 0.68}>
          <torusKnotGeometry args={[0.78, 0.18, mobile ? 100 : 150, 16]} />
          <meshStandardMaterial color="#F5C542" metalness={0.68} roughness={0.18} emissive="#D99A00" emissiveIntensity={0.45} />
        </mesh>
      </Float>

      <Float speed={reduced ? 0 : 0.95} rotationIntensity={0.16} floatIntensity={0.35}>
        <mesh position={mobile ? [-1.7, -0.1, -1.1] : [-2.15, -0.05, -1.1]} scale={mobile ? 0.58 : 0.76}>
          <sphereGeometry args={[1, mobile ? 32 : 48, mobile ? 32 : 48]} />
          <MeshDistortMaterial color="#161616" roughness={0.2} metalness={0.45} distort={reduced ? 0.04 : 0.28} speed={1.45} emissive="#B77900" emissiveIntensity={0.28} />
        </mesh>
      </Float>

      <mesh ref={ico} position={mobile ? [-0.6, -1.28, -1.3] : [-0.7, -1.35, -1.3]} scale={mobile ? 0.82 : 1.04}>
        <icosahedronGeometry args={[0.98, 1]} />
        <meshBasicMaterial color="#F8F8F5" wireframe transparent opacity={0.28} />
      </mesh>

      <PLCPanel reduced={reduced} mobile={mobile} />
      <FloatingLabels reduced={reduced} mobile={mobile} />
    </>
  );
}

export default function ThreeHeroCanvas() {
  const reduced = usePrefersReducedMotion();
  const mobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

  return (
    <div className="hero-canvas absolute inset-0 h-full w-full opacity-90" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, mobile ? 5.8 : 5.3], fov: mobile ? 60 : 55 }}
        dpr={mobile ? [1, 1.25] : [1, 1.5]}
        frameloop={reduced ? 'demand' : 'always'}
        gl={{ antialias: !mobile, alpha: true, powerPreference: 'high-performance' }}
      >
        <Suspense fallback={null}>
          <Scene reduced={reduced} mobile={mobile} />
        </Suspense>
      </Canvas>
    </div>
  );
}
