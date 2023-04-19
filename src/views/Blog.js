import React from 'react';
import Title from "../components/sections/blog/Title";
import Code from "../components/sections/blog/Codeblock";
import Sphere from "../components/sections/blog/Sphere";
import BoxCanvasWithoutLightning from "../components/sections/blog/BoxCanvasWithoutLightning";
import PersonScene from "../components/sections/blog/PersonScene";
import BoxCanvasWithLightning from "../components/sections/blog/BoxCanvasWithLightning";

const Blog = () => {

    return (
        <>
            <div className={"container-sm"}>
                <Title/>

                <div className={"hover-pointer"}>
                    {/*<Sphere/>*/}
                    <PersonScene />
                </div>

                <section>
                    <Code
                        longSnippet={"npm install three @react-three/fiber\n" +
                            "npm install @react-three/drei\n" +
                            "npm install react-spring @react-spring/web"
                        } innerHtml={
                        <p className={'mt-12 md:mt-0 ta-l'}>
                            The React-Three-Fiber library is a React renderer for three.js.
                            To get started in an existing react project, install the required modules.
                        </p>}/>

                    <p className={"text-xs"}>Tip: it can be quite tricky to install the correct versions, check this
                        <code className={"innerCode"}><a
                            target={"_blank"}
                            rel={"noreferrer noopener"}
                            href={"https://github.com/rebeccadavidsson/cv-rebecca-davidsson/blob/master/package.json"}> package.json </a></code>
                        file for working versions.</p>
                </section>

                <section>
                    <h3 className="mt-0 mb-16">
                        <span className="text-color-primary">Step 1: </span>Getting started
                    </h3>

                    <p className={'mt-12 md:mt-0 ta-l'}>
                        ThreeJS offers great documentation about using different geometries, see
                        <a
                            target={"_blank"}
                            rel={"noreferrer noopener"}
                            href={"https://threejs.org/docs/#api/en/geometries/CircleGeometry"}> threejs.org/docs/geometries</a>.

                        Let's start with a simple box! First of all, we need a component with a Canvas element
                    </p>

                    <Code
                        longSnippet={"" +
                            "import { useRef, Suspense } from 'react'\n" +
                            "import { Canvas } from '@react-three/fiber'\n" +
                            "import { OrbitControls , RoundedBox } from \"@react-three/drei\"; \n" +
                            "\n" +
                            "function Box(props) {\n" +
                            "\n" +
                            "     // Create a reference to use in the mesh component \n" +
                            "    const ref = useRef()\n" +
                            "\n" +
                            "    return (\n" +
                            "\n" +
                            "         {/* The <Suspense> component that lets you “wait” for code to load */} \n" +
                            "        <Suspense fallback={null}>\n" +
                            "            <mesh {...props} ref={ref} rotation={[0, 1, 0]}>\n" +
                            "                <RoundedBox args={[3, 3, 3]} radius={0.3}></RoundedBox>\n" +
                            "            </mesh>\n" +
                            "        </Suspense>\n" +
                            "    )\n" +
                            "}" +
                            "\n" +
                            "export default function App() {\n" +
                            "    return (\n" +
                            "        <Canvas>\n" +
                            "            <Box position={[0, 0, 0]}/>\n" +
                            "\n" +
                            "             {/* Add OrbitControls to enable dragging */} \n" +
                            "            <OrbitControls enablePan={false} enableZoom={true}/>\n" +
                            "        </Canvas>\n" +
                            "    );\n" +
                            "}\n"
                        }/>
                </section>

                <section className={"mt-8"}>
                    <Code
                        longSnippet={"// Rotate the mesh each frame\n" +
                            "useFrame(() => {\n" +
                            "   if (ref.current) {\n" +
                            "       ref.current.rotation.y += 0.01;\n" +
                            "       ref.current.rotation.x += 0.005;\n" +
                            "   }\n" +
                            "})"
                        } innerHtml={
                        <p className={'mt-12 md:mt-0 ta-l'}>
                            In the Box component, add the useFrame hook to rotate the box. The useFrame hook
                            calls back every frame, so it can be used perfectly to run effects.
                        </p>}/>
                </section>

                <section>
                    <p>
                        Tada! A simple rounded box. By adding <code
                        className={"code dark-code"}>OrbitControls</code> the box is interactive.
                        Now it's time to add shadows and lightning.
                    </p>
                </section>

                <divc className={"hover-pointer"}>
                    <BoxCanvasWithoutLightning/>
                </divc>

                <section className={"pt-32 reveal-from-bottom"} data-reveal-delay="200">
                    <div className={'pt-32 mb-16'}>
                        <h3 className="mt-0 mb-16" data-reveal-delay="200">
                            <span className="text-color-primary">Step 2: </span>Light and shadows
                        </h3>
                        <div className={"ta-l"}>
                            <p>
                                After adding this component anywhere on your page, the next step is to
                                add some lighting and shadows.
                                ThreeJS works with camera settings to see different kinds of light.
                            </p>
                            <p>
                                As mentioned by the ThreeJS manual:
                                "The way a shadow map works is: for every light that casts shadows all objects marked
                                to cast shadows are rendered from the point of view of the light.
                                READ THAT AGAIN and let it sink in."
                            </p>
                        </div>
                    </div>
                </section>

                <BoxCanvasWithLightning/>

                <section className={"mb-8"}>
                    <Code
                        longSnippet={"" +
                            "<Suspense fallback={null}>\n" +
                            "   <mesh {...props} ref={ref}>\n" +
                            "\n" +
                            "       {/* Use a buffer geometry to include colors and lightning */}\n" +
                            "       <boxBufferGeometry args={[3, 3, 3]}/>\n" +
                            "\n" +
                            "       {/* Add a metal look to the box */}\n" +
                            "       <MeshDistortMaterial\n" +
                            "           color={\"#751b1b\"}\n" +
                            "           clearcoat={1}\n" +
                            "           metalness={0.1}\n" +
                            "       />\n" +
                            "   </mesh>\n" +
                            "\n" +
                            "   {/* The reflected environment */}\n" +
                            "   <Environment preset=\"sunset\"/>\n" +
                            "   <ContactShadows\n" +
                            "       position={[0, -2, 0]}\n" +
                            "       width={60}\n" +
                            "       height={60}\n" +
                            "       blur={0.8}\n" +
                            "       ar={2}\n" +
                            "   />\n" +
                            "</Suspense>"
                        }/>
                    <div className={"mt-12"}>
                        The buffer geometry is able to receive shadows, making it possible to show colors and lightning.
                        By adding metalness to the MeshDistortMaterial, the box gets a metal look. Other shader
                        materials that can be used are MeshWobbleMaterial, MeshReflectorMaterial and shaderMaterial.
                    </div>
                </section>

                <section>
                    <div className={'pt-32 mb-16'}>
                        <h3 className="mt-0 mb-16" data-reveal-delay="200">
                            <span className="text-color-primary">Step 3:</span> useFrame for small animations
                        </h3>
                        <div className={"ta-l"}>
                            <p>
                                Lala
                            </p>
                        </div>
                    </div>
                </section>


                <section>
                    <Sphere />
                </section>
            </div>
        </>
    );
}

export default Blog;