// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { ContactShadows, OrbitControls } from '@react-three/drei';
// import { Model } from "./Model";
//
// export default function PersonScene() {
//     return (
//         <Canvas
//             camera={{ position: [2, 3, 12.25], fov: 9 }}
//             style={{
//                 backgroundColor: 'white',
//                 width: '90%',
//                 height: '700px',
//                 margin: '0 auto'
//             }}
//         >
//             <ambientLight intensity={1} castShadow={true} />
//             <directionalLight intensity={0.4} castShadow={true} position={[1, 4, 10]} color={'#d49a6a'}/>
//             <pointLight intensity={1.5} castShadow={true} position={[0.5, 4, 1]} color={'pink'} />
//             <Suspense fallback={null}>
//                 <Model position={[0, -0.9, 0]}/>
//                 <ContactShadows
//                     frames={1}
//                     position={[0, -0.9, 0]}
//                     width={20}
//                     height={20}
//                     blur={0.4}
//                     far={1}
//                 />
//             </Suspense>
//             <OrbitControls enableZoom={false} />
//         </Canvas>
//     );
// }
