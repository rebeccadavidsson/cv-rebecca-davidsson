import * as THREE from 'three'
import React, { Suspense, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, Environment, MeshDistortMaterial, ContactShadows } from '@react-three/drei'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

// React-spring animates native elements, in this case <mesh/> etc,
// but it can also handle 3rd–party objs, just wrap them in "a".
const AnimatedMaterial = a(MeshDistortMaterial)

export default function Scene( ) {
    const sphere = useRef()
    const light = useRef()
    const [mode, setMode] = useState(false)
    const [down, setDown] = useState(false)
    const [hovered, setHovered] = useState(false)


    // Make the bubble float and follow the mouse
    // This is frame-based animation, useFrame subscribes the component to the render-loop
    useFrame((state) => {
        light.current.position.x = state.mouse.x * 20
        light.current.position.y = state.mouse.y * 20
        if (sphere.current) {
            sphere.current.position.x = THREE.MathUtils.lerp(sphere.current.position.x, hovered ? state.mouse.x / 1.1 : 0, 0.1)
            sphere.current.position.y = THREE.MathUtils.lerp(
                sphere.current.position.y,
                Math.sin(state.clock.elapsedTime / 1.2) / 6 + (hovered ? state.mouse.y / 1.3 : 0),
                0.2
            )
        }
    })

    // Springs for color and overall looks, this is state-driven animation
    // React-spring is physics based and turns static props into animated values
    const [{ wobble, coat, color, ambient, env }] = useSpring(
        {
            wobble: down ? 1.08 : hovered ? 1.0 : 1,
            coat: mode && !hovered ? 1 : 1,
            ambient: mode && !hovered ? 0.2 : 0.4,
            env: mode && !hovered ? 0.4 : 1,
            color: hovered ? '#a52626' : mode ? 'rgba(138,47,47,0.11)' : 'white',
            config: (n) => n === 'wobble' && hovered && { mass: 2, tension: 1000, friction: 10 }
        },
        [mode, hovered, down]
    )

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 4]} fov={75}>
                <a.ambientLight intensity={ambient} />
                <a.pointLight ref={light} position-z={-15} intensity={env} color="#F8C069" />
            </PerspectiveCamera>
            <Suspense fallback={null}>
                <a.mesh
                    ref={sphere}
                    scale={wobble}
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                    onPointerDown={() => setDown(true)}
                    onPointerUp={() => {
                        setDown(false)
                        setMode(!mode)
                    }}>
                    <torusBufferGeometry args={[1, 0.6, 15, 150]} />
                    <AnimatedMaterial color={color} envMapIntensity={env} clearcoat={coat} clearcoatRoughness={0} metalness={0.1} />
                </a.mesh>
                <Environment preset="warehouse" />
                <ContactShadows
                    rotation={[Math.PI / 2, 0, 0]}
                    position={[0, -1.6, 0]}
                    opacity={0.8}
                    width={20}
                    height={16}
                    blur={2.6}
                    far={1.6}
                />
            </Suspense>
        </>
    )
}