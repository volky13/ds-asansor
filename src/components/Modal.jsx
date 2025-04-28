import { useState, useEffect } from 'react';


export default function Modal() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 15000); // 15 saniye sonra otomatik kapansın
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Hoş Geldiniz!</h2>
        <p>
          Bu simülasyon sayesinde 3D asansör kabin tasarımınızı anlık olarak özelleştirebilir, renk ve desen seçenekleriyle görünümünü kişiselleştirebilirsiniz.
          Tasarımınızı adlandırmayı unutmayın! 😊
        </p>
        <button onClick={() => setVisible(false)}>Tamam</button>
      </div>
    </div>
  );
}