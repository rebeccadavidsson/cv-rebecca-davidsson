// import React, { useRef, Suspense } from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import {
//     OrbitControls,
//     RoundedBox
// } from "@react-three/drei";
//
// function Box(props) {
//
//     // Create a reference to use in the mesh component
//     const ref = useRef();
//
//     // Rotate the mesh each frame
//     useFrame(() => {
//         if (ref.current) {
//             ref.current.rotation.y += 0.01;
//             ref.current.rotation.x += 0.005;
//         }
//     })
//
//     return (
//     <Suspense fallback={null}>
//         <mesh {...props} ref={ref} rotation={[0, 1, 0]}>
//             <RoundedBox args={[3, 3, 3]} radius={0.3}></RoundedBox>
//         </mesh>
//     </Suspense>
// )
// }
// export default function BoxCanvasWithoutLightning() {
//     return (
//         <Canvas>
//             <Box position={[0, 0, 0]}/>
//
//             {/* Add OrbitControls to enable dragging */}
//             <OrbitControls enablePan={false} enableZoom={true}/>
//         </Canvas>
//     );
// }
//
