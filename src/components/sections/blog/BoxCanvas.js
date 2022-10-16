import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
    OrbitControls,
    RoundedBox, Plane
} from "@react-three/drei";
import { a } from "@react-spring/three";

function Box(props) {

    // Create a reference to use in the mesh component
    const ref = useRef()

    // Rotate the mesh each frame
    useFrame(() => {
        if (ref.current) {
            ref.current.rotation.y += 0.005;
        }
    })

    return (
        // The <Suspense> component that lets you “wait” for code to load
        <>
        <Suspense fallback={null}>
            <mesh castShadow={true} receiveShadow={true} {...props} ref={ref}>
                <RoundedBox receiveShadow castShadow args={[3, 3, 3]} radius={0.3} rotation={[0, 1, 0]} position={[0, 0.7, 0]}>
                    <meshStandardMaterial attach="material" color="#4a1010" />
                </RoundedBox>

                <Plane
                    receiveShadow
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -2, 0]}
                    args={[1000, 1000]}
                >
                    <meshStandardMaterial attach="material" color="white" />
                </Plane>

            </mesh>
        </Suspense>
            </>
    );
}

export default function BoxCanvas() {
    return (
        <Canvas className={"canvasStep1"} shadowMap colorManagement shadows>
            <a.ambientLight intensity={1}></a.ambientLight>
            <directionalLight
                position={[1, 3, 2]}
                color="white"
                intensity={7}
                castShadow={true}
            />
            <Box position={[0, 0, 0]} />
            <OrbitControls enablePan={false} enableZoom={false}/>
        </Canvas>
    );
}