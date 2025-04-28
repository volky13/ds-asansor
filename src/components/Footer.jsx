import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h4>DS Asansör</h4>
          <p>Yüksek kalite ve güvenli asansör çözümleri.</p>
        </div>
        <div className="footer-right">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram /> Instagram
          </a>
          <a href="https://wa.me/905555555555" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp /> WhatsApp
          </a>
          <a href="https://goo.gl/maps/..." target="_blank" rel="noopener noreferrer">
            <FaMapMarkerAlt /> Yol Tarifi
          </a>
          <a href="tel:+905555555555">
            <FaPhoneAlt /> +90 555 555 55 55
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;