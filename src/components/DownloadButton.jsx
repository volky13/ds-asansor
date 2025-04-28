import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function DownloadButton() {
  const handleDownload = async () => {
    const canvasContainer = document.querySelector('.canvas-section');
    if (!canvasContainer) return;

    const canvasImage = await html2canvas(canvasContainer, {
      backgroundColor: null, // transparan arka plan için
      useCORS: true
    });

    const imgData = canvasImage.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [canvasImage.width, canvasImage.height]
    });

    pdf.addImage(imgData, 'PNG', 0, 0, canvasImage.width, canvasImage.height);
    pdf.save('asansor_kabini.pdf');
  };

  return (
    <button className="download-button" onClick={handleDownload}>
      PDF Olarak Kaydet
    </button>
  );
}