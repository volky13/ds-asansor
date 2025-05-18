// src/components/ElevatorModel.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useGLTF } from '@react-three/drei';
import { DRACOLoader } from 'three-stdlib';
import * as THREE from 'three';

export default function ElevatorModel({ color, floorTexture, ceilingTexture }) {
  const { scene } = useGLTF('/models/elevator_cabin.gltf');
  const [modelLoaded, setModelLoaded] = useState(false);
  const textureLoader = useMemo(() => new THREE.TextureLoader(), []);
  const [loadedFloorTexture, setLoadedFloorTexture] = useState(null);
  const [loadedCeilingTexture, setLoadedCeilingTexture] = useState(null);

  const dracoLoader = useMemo(() => {
    const loader = new DRACOLoader();
    loader.setDecoderPath('https://www.gstatic.com/draco/v1/');
    loader.setDecoderConfig({ type: 'js' });
    return loader;
  }, []);

  // Model hazır olunca shadow ayarları
  useEffect(() => {
    if (scene) {
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      setModelLoaded(true);
    }
  }, [scene]);

  // Taban deseni yükle
  useEffect(() => {
    if (floorTexture) {
      textureLoader.load(floorTexture, setLoadedFloorTexture);
    } else {
      setLoadedFloorTexture(null);
    }
  }, [floorTexture, textureLoader]);

  // Tavan deseni yükle
  useEffect(() => {
    if (ceilingTexture) {
      textureLoader.load(ceilingTexture, setLoadedCeilingTexture);
    } else {
      setLoadedCeilingTexture(null);
    }
  }, [ceilingTexture, textureLoader]);

  // Materyal ayarları
  useEffect(() => {
    if (!modelLoaded) return;

    scene.traverse((child) => {
      if (!child.isMesh) return;

      let newMaterial;

      // Özel parçalar (isimle eşleşme)
      if (child.name.toLowerCase().includes('Parça 2')) {
        newMaterial = new THREE.MeshStandardMaterial({
          map: loadedFloorTexture,
          color,
          roughness: 0.8,
          metalness: 0.2,
          side: THREE.DoubleSide,
        });
      } else if (child.name.toLowerCase().includes('tavan')) {
        newMaterial = new THREE.MeshStandardMaterial({
          map: loadedCeilingTexture,
          color,
          roughness: 0.8,
          metalness: 0.2,
          side: THREE.DoubleSide,
        });
      } else {
        // Genel cam yüzeyler
        newMaterial = new THREE.MeshPhysicalMaterial({
          color: new THREE.Color(color || '#808080'),
          metalness: 0.2,
          roughness: 0.1,
          transparent: true,
          opacity: 0.3,
          side: THREE.DoubleSide,
          depthWrite: false,
          transmission: 0.9,
          thickness: 0.5,
        });
      }

      child.material = newMaterial;
    });
  }, [scene, color, modelLoaded, loadedFloorTexture, loadedCeilingTexture]);

  return modelLoaded ? <primitive object={scene} scale={1} /> : null;
}