import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Controls = () => {
    const { camera, gl } = useThree();
    const controlsRef = useRef();

    useFrame(() => {
        if (controlsRef.current) {
            controlsRef.current.update();
        }
    });

    return <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

export default Controls;
