import { useGLTF } from '@react-three/drei';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { useMemo } from 'react';
import * as THREE from 'three';

export default function ElevatorModel({ materialProps = {} }) {
  const draco = useMemo(() => {
    const loader = new DRACOLoader();
    loader.setDecoderPath('/draco/');
    return loader;
  }, []);

  const { scene } = useGLTF('/models/elevator_cabin.gltf', true, draco);

  useMemo(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(materialProps.color || '#808080'),
          metalness: materialProps.metalness ?? 0.2,
          roughness: materialProps.roughness ?? 0.1,
          transparent: true,
          opacity: 0.3,
          side: THREE.DoubleSide,
          depthWrite: false,
          transmission: 0.9,
          thickness: 0.5,
        });

        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene, materialProps]);

  return <primitive object={scene} scale={1} />;
}