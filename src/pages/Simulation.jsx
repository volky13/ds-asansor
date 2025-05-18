import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ElevatorModel from '../components/ElevatorModel';
import OptionsPanel from '../components/OptionsPanel';
import jsPDF from 'jspdf';
import './Simulation.css'; 

export default function Simulation() {
  const [selectedColor, setSelectedColor] = useState('#808080');
  const [floorTexture, setFloorTexture] = useState('');
  const [ceilingTexture, setCeilingTexture] = useState('');
  const canvasRef = useRef(null);

  const handleSaveAsPDF = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dataUrl = canvas.toDataURL('image/png');
    const pdf = new jsPDF('portrait', 'pt', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const margin = 40;
    let currentY = margin;

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(20);
    pdf.text('DS Asansör', pageWidth / 2, currentY, { align: 'center' });

    currentY += 30;
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(12);

    const formatDate = new Date().toLocaleString();
    const renkKodu = selectedColor || 'Yok';
    const taban = floorTexture ? floorTexture.split('/').pop() : 'Yok';
    const tavan = ceilingTexture ? ceilingTexture.split('/').pop() : 'Yok';

    pdf.text(`Seçilen Renk: ${renkKodu}`, margin, currentY);
    pdf.setFillColor(renkKodu);
    pdf.rect(margin + 105, currentY - 12, 20, 12, 'F');
    currentY += 20;

    pdf.text(`Taban Deseni: ${taban}`, margin, currentY);
    currentY += 20;
    pdf.text(`Tavan Deseni: ${tavan}`, margin, currentY);
    currentY += 30;

    pdf.setDrawColor(200);
    pdf.line(margin, currentY, pageWidth - margin, currentY);
    currentY += 20;

    const imageWidth = pageWidth - margin * 2;
    const imageHeight = imageWidth * 0.75;
    pdf.addImage(dataUrl, 'PNG', margin, currentY, imageWidth, imageHeight);

    pdf.save('kabin-tasarimi-ds.pdf');
  };

  return (
    <div className="simulation-container">
      {/* Sol taraf: 3D Model */}
      <div className="canvas-section">
        <Canvas
          ref={canvasRef}
          camera={{ position: [3, 3, 3], fov: 50 }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          <ElevatorModel
            color={selectedColor}
            floorTexture={floorTexture}
            ceilingTexture={ceilingTexture}
          />
        </Canvas>
      </div>

      {/* Sağ taraf: Panel + PDF Butonu */}
      <div className="options-section">
        <OptionsPanel
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          setFloorTexture={setFloorTexture}
          setCeilingTexture={setCeilingTexture}
        />

        <button onClick={handleSaveAsPDF} className="pdf-button">
          PDF Olarak Kaydet
        </button>
      </div>
    </div>
  );
}