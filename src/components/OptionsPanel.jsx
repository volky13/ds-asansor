export default function OptionsPanel({ materialProps, setMaterialProps }) {
  return (
    <div>
      <label>Renk: </label>
      <input
        type="color"
        value={materialProps.color}
        onChange={(e) =>
          setMaterialProps({ ...materialProps, color: e.target.value })
        }
      />

      <label>Metaliklik: </label>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={materialProps.metalness}
        onChange={(e) =>
          setMaterialProps({
            ...materialProps,
            metalness: parseFloat(e.target.value),
          })
        }
      />

      <label>Pürüzlülük: </label>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={materialProps.roughness}
        onChange={(e) =>
          setMaterialProps({
            ...materialProps,
            roughness: parseFloat(e.target.value),
          })
        }
      />
    </div>
  );
}