import { OrbitControls } from '@react-three/drei';

export default function Controls() {
  return <OrbitControls makeDefault enableZoom={true} enableRotate={true} />;
}