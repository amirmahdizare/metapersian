'use client'

import React, { Suspense, useRef } from 'react'
import { Canvas , useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useFBX } from '@react-three/drei';

export const Sample3D = () => {

    const bugget = useFBX('../../../level1-citizen.fbx');

    const ref = useRef<any>();

    // flat linear

    const Box = () => {

        useFrame(() => (ref?.current?.rotation?.y ? ref.current.rotation.y += 0.001 : undefined));

        // Here, we can access the camera via the useThree hook
        useThree(({ camera }) => {
            console.log(camera)
            camera.position.y = 0;
            camera.lookAt(0, 1.8, 0);
        });

        return <primitive ref={ref} object={bugget} scale={2.5} />
    }

    return <Canvas className="cursor-pointer border border-gray-100 h-[100px]">
        <ambientLight />
        <OrbitControls enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2} 
            />
        <Suspense fallback={null}>
            <Box />
        </Suspense>
        <PerspectiveCamera
        // makeDefault
        // fov={10}


        // modelViewMatrix={}
        // far={10}
        // near={1}
        // position={[200, 200, 200]}
        position={[50, -100, 200]} 
        // position={[-200, 1500, 50]}
        // position={[100,100,100]} 
        // lookAt={() => (new Vector3(0, 0, 0))}
        // rotation={[-45, 0, 0]}
        />
    </Canvas>


    return (
        <Suspense fallback={<span className='text-white '>Loading...</span>}>

            <Canvas className="cursor-pointer border border-gray-100 " frameloop="demand"
                camera={{
                    // position: [-4, 3, 6],
                    // position: [300, 100, 0],
                    // // position: [-8, 16, 0],
                    // // position: [0, 0, 0],
                    // // fov: 45,
                    // fov: 30,
                    // near: 0.1,


                    // far: 200

                }}
                style={{ height: '100%', width: '100%' }}
            >
                <pointLight position={[10, 10, 10]} />
                <OrbitControls
                    // autoRotate
                    // target={[0,0,0]}
                    // enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    // minPolarAngle={0}
                    // maxPolarAngle={45}
                    // position={[0, 50, 30]}

                    enableRotate
                    enablePan={true}

                />
                <PerspectiveCamera
                    makeDefault
                    fov={10}


                    // modelViewMatrix={}
                    // far={10}
                    // near={1}
                    // position={[200, 200, 200]}
                    // position={[50, -100, 200]} 
                    position={[-200, 1500, 50]}
                // position={[100,100,100]} 
                // lookAt={() => (new Vector3(0, 0, 0))}
                // rotation={[-45, 0, 0]}
                />
                {/* <boxGeometry args={[-100, 50, 100]} /> */}
                <primitive ref={ref} object={bugget} scale={2.5} />
                <ambientLight intensity={1} />
            </Canvas >
        </Suspense>
    )
}
