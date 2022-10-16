import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { a } from '@react-spring/web'
import Scene from './Scene'

export default function Sphere() {
    return (
        <div>
            <a.main>
                <Canvas className="canvas" dpr={[1, 2]}>
                    <Scene />
                    <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
                </Canvas>
            </a.main>
        </div>
    )
}