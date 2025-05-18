// src/components/ScreenshotHelper.jsx
import { useThree } from '@react-three/fiber';
import { useEffect } from 'react';

export default function ScreenshotHelper({ onCapture }) {
  const { gl } = useThree();

  useEffect(() => {
    const timeout = setTimeout(() => {
      const dataURL = gl.domElement.toDataURL('image/png');
      onCapture(dataURL);
    }, 500);

    return () => clearTimeout(timeout);
  }, [gl, onCapture]);

  return null;
}