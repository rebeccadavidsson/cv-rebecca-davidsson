// import React, { useRef, Suspense } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import {
//     OrbitControls, ContactShadows, Environment, MeshDistortMaterial
// } from "@react-three/drei";
//
// function Box(props) {
//
//     // Create a reference to use in the mesh component
//     const ref = useRef()
//
//     // Rotate the mesh each frame
//     useFrame(() => {
//         if (ref.current) {
//             ref.current.rotation.y += 0.005;
//             ref.current.rotation.x += Math.random() * 0.025;
//         }
//     })
//
//     return (
//         // The <Suspense> component that lets you “wait” for code to load
//         <>
//             <Suspense fallback={null}>
//                 <mesh {...props} ref={ref}>
//
//                     {/*Use a buffer geometry to include colors and lightning */}
//                     <boxBufferGeometry args={[3, 3, 3]}/>
//
//                     {/* Add a metal look to the box */}
//                     <MeshDistortMaterial
//                         distort={0}
//                         color={"#751b1b"}
//                         clearcoat={1}
//                         metalness={0.1}
//                     />
//                 </mesh>
//
//                 <Environment preset="sunset"/>
//                 <ContactShadows
//                     position={[0, -2, 0]}
//                     width={60}
//                     height={60}
//                     blur={0.8}
//                     far={2}
//                 />
//             </Suspense>
//         </>
//     );
// }
//
//
// export default function App() {
//     return (
//         <>
//             <Canvas className={"canvasStep1"}>
//                 <Box/>
//                 <OrbitControls enablePan={false} enableZoom={true}/>
//             </Canvas>
//         </>
//     );
// }
