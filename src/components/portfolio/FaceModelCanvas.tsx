import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Center,
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from '@react-three/drei'
import type { Group } from 'three'

const MODEL_PATH = '/images/face_model.glb'

useGLTF.preload(MODEL_PATH)

function FaceMesh() {
  const groupRef = useRef<Group>(null)
  const { scene } = useGLTF(MODEL_PATH)

  useFrame((state) => {
    if (!groupRef.current) return
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.04
  })

  return (
    <group ref={groupRef}>
      <Center>
        <primitive object={scene} scale={1.35} />
      </Center>
    </group>
  )
}

function FaceScene() {
  return (
    <>
      <ambientLight intensity={0.55} />
      <directionalLight position={[4, 6, 3]} intensity={1.15} />
      <directionalLight position={[-3, 2, -2]} intensity={0.35} />
      <Suspense fallback={null}>
        <FaceMesh />
        <Environment preset="city" />
        <ContactShadows
          position={[0, -1.15, 0]}
          opacity={0.35}
          scale={8}
          blur={2.4}
          far={3}
        />
      </Suspense>
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.55}
        autoRotate
        autoRotateSpeed={0.6}
        target={[0, 0.1, 0]}
      />
    </>
  )
}

export default function FaceModelCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0.15, 2.6], fov: 38 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      className="face-model-canvas"
    >
      <FaceScene />
    </Canvas>
  )
}
