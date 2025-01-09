import { Canvas } from "@react-three/fiber";
import {Environment, OrbitControls, Sphere, useTexture} from "@react-three/drei";
import Earth from "@/globe/Earth"


// const Earth = () => {
//     // Load the texture for the Earth's surface
//     const earthTexture = useTexture("/assets/earth.jpeg");
//
//     return (
//         <Sphere args={[1, 100, 200]} scale={2.5}>
//             <meshStandardMaterial map={earthTexture} />
//         </Sphere>
//     );
// };


const GlobeComponent = () => {

    return (
        <div style={{ height: "100%", width: "100%" }}>
            <Canvas style={{height: "500px"}} camera={{ position: [0, 0, 5] }}>
                {/* OrbitControls for interaction */}
                <OrbitControls enableZoom={false} />

                {/* Lights */}
                <ambientLight intensity={1.5} />
                <directionalLight position={[2, 2, 1]} />

                {/* Sphere (Globe) */}
                <Earth />
                <Environment preset={'sunset'} />
            </Canvas>
        </div>
    );
};

export default GlobeComponent;
