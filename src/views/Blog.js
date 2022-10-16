import React from 'react';
import Title from "../components/sections/blog/Title";
import Code from "../components/sections/blog/Codeblock";
import Sphere from "../components/sections/blog/Sphere";
import BoxCanvas from "../components/sections/blog/BoxCanvas";
import PersonScene from "../components/sections/blog/PersonScene";

const Blog = () => {

    return (
        <>
            <div className={"center-content container-sm"}>
                <Title/>

                <Sphere/>
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
                        Step 1: <span className="text-color-primary">Getting started</span>
                    </h3>

                    <p className={'mt-12 md:mt-0 ta-l ta-c'}>
                        ThreeJS offers great documentation about using different geometries, see
                        <a
                            target={"_blank"}
                            rel={"noreferrer noopener"}
                            href={"https://threejs.org/docs/#api/en/geometries/CircleGeometry"}> threejs.org/docs/geometries</a>.

                        Let's start with a simple box! First of all, we need a component with a Canvas element
                    </p>

                    <BoxCanvas/>

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
                            "            <mesh {...props} ref={ref}>\n" +
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
                <section  className={"mt-32 reveal-from-bottom"} data-reveal-delay="200">
                    <div className={'mt-16 mb-16'}>
                        <h3 className="mt-0 mb-16" data-reveal-delay="200">
                            Step 2: <span className="text-color-primary">Light and shadows</span>
                        </h3>
                        <div className={"ta-l"}>
                            <p>
                                After adding this component anywhere on your page, the next step is to
                                add some lighting and shadows.
                                ThreeJS works with camera settings to see different kinds of light.
                                For now, we will add a simple environment and some coating to the object.
                            </p>
                            <p>
                                Create an AnimatedMaterial variable using the react-spring/three library.
                            </p>

                            <Code
                                longSnippet={"const AnimatedMaterial = a(MeshDistortMaterial)"
                                }/>
                            <p className={"mt-16"}>
                                We can use this as a 'coating' for the geometry that we just created.
                                By adding an AnimatedMaterial component, along with a preset Environment,
                                we can create a reflection effect on the box.
                            </p>


                            <Code
                                longSnippet={"" +
                                    "<RoundedBox args={[3, 3, 3]} radius={0.3}>\n" +
                                    "   <AnimatedMaterial envMapIntensity={0.5} clearcoat={0.4}/>\n" +
                                    "   <Environment preset={\"sunset\"}/>\n" +
                                    "</RoundedBox>"
                                }/>
                            <p className={"mt-16"}>
                                Now we can add some shadows.
                                As mentioned by the ThreeJS manual:
                                "The way a shadow map works is: for every light that casts shadows all objects marked
                                to cast shadows are rendered from the point of view of the light.
                                <strong> READ THAT AGAIN!</strong> and let it sink in."

                            </p>
                        </div>
                    </div>



                </section>
                <section>
                    <PersonScene />
                </section>
            </div>
        </>
    );
}

export default Blog;