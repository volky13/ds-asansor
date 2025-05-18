import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  const mesaj = encodeURIComponent("Merhaba, kabin tasarımı hakkında bilgi almak istiyorum.");
const telefon = "905413021834";
const whatsappLink = `https://wa.me/${telefon}?text=${mesaj}`;
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>DS Asansör</h4>
          <p>Yüksek kalite ve güvenli asansör çözümleri.</p>
        </div>
        <div className="footer-right">
          <a
            href="https://www.instagram.com/dsasansor07/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="icon" /> Instagram
          </a>

          <a
           href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon" /> WhatsApp
          </a>

          <a
            href="https://maps.app.goo.gl/ovNzcycwfAdHzEjB6" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMapMarkerAlt className="icon" /> Yol Tarifi
          </a>

          <a href="tel:+905321234567">
            <FaPhoneAlt className="icon" /> +90 541 302 18 34
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;