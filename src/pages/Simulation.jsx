import React, { useState,useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import ElevatorModel from '../components/ElevatorModel';
import OptionsPanel from '../components/OptionsPanel';
import Controls from '../components/Controls';
import './Simulation.css'
import jsPDF from 'jspdf';

const Simulation = () => {
  const [materialProps, setMaterialProps] = useState({
    color: '#808080',
    metalness: 0.2,
    roughness: 0.1,
  });
  const canvasRef = useRef(null);
  // PDF kaydetme işlevi
  const saveAsPDF = () => {
    if (!canvasRef.current) return;

    const canvasElement = canvasRef.current; // Canvas öğesini alıyoruz

    // Canvas'ın görselini alıyoruz
    const image = canvasElement.toDataURL('image/png');

    // PDF oluşturuyoruz
    const pdf = new jsPDF();

    // Görseli PDF'ye ekliyoruz
    pdf.addImage(image, 'PNG', 0, 0, 210, 297); // A4 boyutunda ekliyoruz

    // PDF olarak kaydediyoruz
    pdf.save('elevator_cabin_design.pdf');
  };
  return (
    
    <div className="simulation-container">
      
      <div className="canvas-section" id="canvas-section">
        <Canvas camera={{ position: [8, 5, 8], fov: 50 }} ref={canvasRef}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[0, 10, 0]} intensity={1} />
          <ElevatorModel materialProps={materialProps} />
          <Controls />
        </Canvas>
      </div>
      <div className="options-section">
        <OptionsPanel materialProps={materialProps} setMaterialProps={setMaterialProps} />
      </div>
      
      <button onClick={saveAsPDF}>PDF Olarak Kaydet</button>
    </div>
  );
};

export default Simulation;