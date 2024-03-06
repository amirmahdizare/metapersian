'use client'

import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useFBX } from '@react-three/drei';
// import threeDmodel from '../../../public/'

export const Sample3D = () => {

    const bugget = useFBX('../../../level1-citizen.fbx');

    console.log(bugget)
    // flat linear
    return (
        <Suspense fallback={<span className='text-white'>Loading...</span>}>

            <Canvas className="cursor-pointer  " frameloop="demand" 
            // camera={{
            //     position: [-4, 3, 6],
            //     // position: [-8, 16, 0],
            //     // position: [0, 0, 0],
            //     // fov: 45,
            //     fov: 30,
            //     near: 1,


            //     far: 200

            // }}
            // style={{ height: '700px', width: '500px' }}
            >
                <pointLight position={[10, 10, 10]} />
                <OrbitControls
                    // autoRotate
                    enableZoom={true}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                    // minPolarAngle={0}
                    // maxPolarAngle={45}
                    enableRotate
                    enablePan={true}
                />
                <PerspectiveCamera
                    makeDefault
                    fov={30}
                    position={[-10, -50, -20]}
                    // rotation={[0, 0, 0]}
                />
                {/* <boxGeometry args={[1, 1, 1]} /> */}
                <primitive object={bugget} scale={0.2} />
                <ambientLight intensity={1} />
            </Canvas >
        </Suspense>
    )
}
