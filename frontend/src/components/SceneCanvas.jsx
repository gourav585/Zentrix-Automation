import { Canvas } from '@react-three/fiber'

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 3]} intensity={1.1} />
      <mesh rotation={[0.45, 0.45, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color='#22d3ee' emissive='#a855f7' emissiveIntensity={0.25} />
      </mesh>
    </>
  )
}

function SceneCanvas() {
  return (
    <div className='h-[360px] w-full overflow-hidden rounded-xl border border-zen-neonBlue/30 shadow-neon'>
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <SceneContent />
      </Canvas>
    </div>
  )
}

export default SceneCanvas
