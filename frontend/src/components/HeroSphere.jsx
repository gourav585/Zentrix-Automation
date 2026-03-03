import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { Canvas, useFrame } from '@react-three/fiber'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function NeonSphere() {
  const sphereRef = useRef(null)
  const materialRef = useRef(null)
  const geometryRef = useRef(null)
  const basePositionsRef = useRef(null)
  const baseNormalsRef = useRef(null)
  const phasesRef = useRef(null)
  const hoverTargetRef = useRef(0)
  const hoverAmountRef = useRef(0)
  const pointerRef = useRef({ x: 0, y: 0 })
  const normalFrameRef = useRef(0)

  useEffect(() => {
    if (!geometryRef.current) return

    const positionAttr = geometryRef.current.attributes.position
    const normalAttr = geometryRef.current.attributes.normal
    const count = positionAttr.count

    basePositionsRef.current = positionAttr.array.slice()
    baseNormalsRef.current = normalAttr.array.slice()

    const phases = new Float32Array(count)
    for (let i = 0; i < count; i += 1) {
      phases[i] = Math.random() * Math.PI * 2
    }
    phasesRef.current = phases
  }, [])

  useEffect(() => {
    return () => {
      document.body.style.cursor = 'default'
    }
  }, [])

  useFrame((state, delta) => {
    if (!sphereRef.current) return
    sphereRef.current.rotation.y += delta * 0.35
    sphereRef.current.rotation.x += delta * 0.12
    hoverAmountRef.current += (hoverTargetRef.current - hoverAmountRef.current) * Math.min(1, delta * 7)

    const geometry = geometryRef.current
    const material = materialRef.current
    const basePositions = basePositionsRef.current
    const baseNormals = baseNormalsRef.current
    const phases = phasesRef.current
    if (!geometry || !basePositions || !baseNormals || !phases) return

    const positionAttr = geometry.attributes.position
    const target = positionAttr.array
    const time = state.clock.getElapsedTime()

    for (let i = 0; i < positionAttr.count; i += 1) {
      const idx = i * 3
      const phase = phases[i]

      const waveA = Math.sin(time * 2.2 + phase * 3.4) * 0.055
      const waveB = Math.sin(time * 3.4 + phase * 5.1) * 0.02
      const hoverWave =
        Math.sin(time * 8 + phase * 10 + pointerRef.current.x * 6 + pointerRef.current.y * 6) *
        0.09 *
        hoverAmountRef.current
      const displacement = waveA + waveB + hoverWave

      target[idx] = basePositions[idx] + baseNormals[idx] * displacement
      target[idx + 1] = basePositions[idx + 1] + baseNormals[idx + 1] * displacement
      target[idx + 2] = basePositions[idx + 2] + baseNormals[idx + 2] * displacement
    }

    positionAttr.needsUpdate = true
    normalFrameRef.current = (normalFrameRef.current + 1) % 3
    if (normalFrameRef.current === 0) {
      geometry.computeVertexNormals()
    }

    const pulse = 1 + Math.sin(time * 1.8) * 0.015 + hoverAmountRef.current * 0.045
    sphereRef.current.scale.set(pulse, pulse, pulse)
    sphereRef.current.position.y = Math.sin(time * 1.35) * 0.08

    if (material) {
      material.emissiveIntensity = 1.25 + hoverAmountRef.current * 0.9
      material.clearcoat = 1 + hoverAmountRef.current * 0.2
    }
  })

  return (
    <mesh
      ref={sphereRef}
      onPointerOver={() => {
        hoverTargetRef.current = 1
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        hoverTargetRef.current = 0
        document.body.style.cursor = 'default'
      }}
      onPointerMove={(event) => {
        pointerRef.current.x = event.uv?.x ?? 0
        pointerRef.current.y = event.uv?.y ?? 0
      }}
    >
      <sphereGeometry ref={geometryRef} args={[1, 72, 72]} />
      <meshPhysicalMaterial
        ref={materialRef}
        color='#5ee8ff'
        emissive='#8b5cf6'
        emissiveIntensity={1.25}
        roughness={0.16}
        metalness={0.8}
        clearcoat={1}
        clearcoatRoughness={0.05}
      />
    </mesh>
  )
}

function HeroSphere() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const sceneY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const sceneX = useTransform(scrollYProgress, [0, 1], [-14, 16])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -24])
  const gridY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={sectionRef} className='relative w-full overflow-hidden bg-zen-bg text-zen-text'>
      <motion.div
        className='pointer-events-none absolute inset-0 bg-futuristic-grid bg-grid opacity-80'
        style={{ y: gridY }}
      />
      <div className='pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-zen-neonBlue/15 blur-3xl' />
      <div className='pointer-events-none absolute -right-24 top-14 h-72 w-72 rounded-full bg-zen-neonPurple/15 blur-3xl' />
      <div className='pointer-events-none absolute bottom-0 left-1/2 h-64 w-[30rem] -translate-x-1/2 rounded-full bg-zen-neonMint/10 blur-3xl' />

      <div className='mx-auto grid min-h-[82vh] w-full max-w-screen-2xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-14 md:gap-12 md:px-10 lg:min-h-[86vh] lg:grid-cols-2 lg:px-12'>
        <motion.div
          className='space-y-6 md:space-y-7'
          style={{ y: textY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
        >
          <p className='font-display text-[11px] uppercase tracking-[0.24em] text-zen-neonPurple sm:text-xs sm:tracking-[0.3em]'>
            AI Automation Studio
          </p>
          <h1 className='font-display max-w-[14ch] text-3xl font-semibold leading-[1.08] text-zen-text sm:text-4xl md:text-5xl xl:text-6xl'>
            <span className='bg-gradient-to-r from-zen-neonBlue to-zen-neonPurple bg-clip-text text-transparent'>AI Automation</span>{' '}
            That Converts Every Lead
          </h1>
          <p className='max-w-xl text-sm leading-relaxed text-zen-text/78 sm:text-base sm:leading-relaxed md:text-lg'>
            Intelligent AI systems qualify inbound traffic, reply instantly in the customer&apos;s language, and move
            prospects to booked calls without manual follow-up.
          </p>

          <div className='flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
            <Link
              to='/contact'
              className='rounded-xl border border-zen-neonMint/65 bg-gradient-to-r from-zen-neonBlue/35 via-zen-neonPurple/35 to-zen-neonMint/35 px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-zen-neonMint shadow-neon-mint transition hover:animate-glow-pulse sm:w-auto sm:px-5 sm:text-xs sm:tracking-[0.16em]'
            >
              Book Free AI Demo
            </Link>
            <Link
              to='/services'
              className='rounded-xl border border-zen-neonBlue/55 bg-transparent px-4 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-zen-neonBlue transition hover:border-zen-neonPurple/55 hover:text-zen-neonPurple sm:w-auto sm:px-5 sm:text-xs sm:tracking-[0.16em]'
            >
              Explore Services
            </Link>
          </div>

          <div className='grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3'>
            {[
              { value: '24/7', label: 'AI Workflows' },
              { value: '3D', label: 'Interactive UX' },
              { value: '99%', label: 'Lead Response Speed' },
            ].map((item) => (
              <div key={item.label} className='rounded-xl border border-zen-neonBlue/25 bg-zen-panel/40 p-3 sm:p-4 shadow-glass'>
                <p className='font-display text-lg font-semibold text-zen-neonBlue sm:text-xl'>{item.value}</p>
                <p className='text-[11px] uppercase tracking-[0.12em] text-zen-text/70 sm:text-xs'>{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className='relative h-[300px] w-full overflow-hidden rounded-2xl border border-zen-neonBlue/30 bg-zen-panel/35 shadow-neon sm:h-[360px] md:h-[420px] lg:h-[460px] xl:h-[500px] 2xl:h-[540px]'
          style={{ y: sceneY, x: sceneX }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} dpr={[1, 1.5]} gl={{ powerPreference: 'high-performance' }}>
            <color attach='background' args={['#050816']} />
            <ambientLight intensity={0.34} color='#8ab4ff' />
            <pointLight position={[2.2, 2.4, 2.2]} intensity={28} color='#67e8f9' distance={9} />
            <pointLight position={[-2.4, -1.3, 1.6]} intensity={14} color='#c084fc' distance={8} />

            <NeonSphere />

            <EffectComposer>
              <Bloom mipmapBlur intensity={1.5} luminanceThreshold={0.18} luminanceSmoothing={0.8} />
            </EffectComposer>
          </Canvas>
          <motion.div
            className='pointer-events-none absolute bottom-3 left-3 rounded-lg border border-zen-neonPurple/45 bg-zen-panel/70 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.14em] text-zen-neonPurple shadow-glass sm:bottom-4 sm:left-4 sm:px-3 sm:py-2 sm:text-[11px] sm:tracking-[0.18em]'
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          >
            AI Core Engine
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSphere
