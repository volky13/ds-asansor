// src/components/OptionsPanel.jsx
import React from 'react';

const floorImages = ['floor1.png', 'floor2.png', 'floor3.png'];
const ceilingImages = ['ceiling1.png', 'ceiling2.png', 'ceiling3.png'];

export default function OptionsPanel({ selectedColor, setSelectedColor, setFloorTexture, setCeilingTexture }) {
  const colors = [
    { name: 'Gri', code: '#808080' },
    { name: 'Mavi', code: '#007BFF' },
    { name: 'Kırmızı', code: '#FF4136' },
  ];

  const handleSelectTexture = (fileName, type) => {
    const path = type === 'floor'
      ? `/textures/floors/${fileName}`
      : `/textures/ceilings/${fileName}`;
    type === 'floor' ? setFloorTexture(path) : setCeilingTexture(path);
  };

  return (
    <div style={{ overflowY: 'auto', maxHeight: '100vh' }}>
      <h3>Renk Seç</h3>
      <div style={{ display: 'flex', gap: '10px' }}>
        {colors.map((color, index) => (
          <button
            key={`color-${index}`}
            style={{
              backgroundColor: color.code,
              color: '#fff',
              padding: '10px',
              border: selectedColor === color.code ? '2px solid black' : '1px solid #ccc',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedColor(color.code)}
          >
            {color.name}
          </button>
        ))}
      </div>

      <h3 style={{ marginTop: '20px' }}>Taban Deseni</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {floorImages.map((img, index) => (
          <img
            key={`floor-${index}`}
            src={`/textures/floors/${img}`}
            alt={`Taban ${index}`}
            onClick={() => handleSelectTexture(img, 'floor')}
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'cover',
              cursor: 'pointer',
              border: '2px solid transparent'
            }}
          />
        ))}
      </div>

      <h3 style={{ marginTop: '20px' }}>Tavan Deseni</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {ceilingImages.map((img, index) => (
          <img
            key={`ceiling-${index}`}
            src={`/textures/ceilings/${img}`}
            alt={`Tavan ${index}`}
            onClick={() => handleSelectTexture(img, 'ceiling')}
            style={{
              width: '60px',
              height: '60px',
              objectFit: 'cover',
              cursor: 'pointer',
              border: '2px solid transparent'
            }}
          />
        ))}
      </div>
    </div>
  );
}