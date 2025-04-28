import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <h2>Hakkımızda</h2>
        <p>
          DS Asansör olarak, sektördeki 15 yılı aşkın tecrübemizle güvenli,
          estetik ve modern asansör sistemleri sunuyoruz. Kaliteli ürün
          anlayışımızla, müşteri memnuniyetini her zaman ön planda tutuyoruz.
        </p>

        <h3>Misyonumuz</h3>
        <p>
          İstekleriniz doğrultusunda istediğiniz kabini kusursuz imal sürecinden
          sonra teslim etmek
        </p>

        <h3>Vizyonumuz</h3>
        <p>
          Türkiye genelinde lider bir asansör firması olarak tanınmak ve dünya
          standartlarında hizmet sunmak.
        </p>

        <h3>Değerlerimiz</h3>
        <ul>
          <li>Güvenlik</li>
          <li>Kalite</li>
          <li>Müşteri Memnuniyeti</li>
          <li>Sürdürülebilirlik</li>
        </ul>
      </div>
      <div className="map-container">
        <iframe className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102110.52645506017!2d30.482768053745314!3d36.891449852150906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c393dc6b19efdd%3A0xaa092b09ed73fa9a!2sDS%20ASANS%C3%96R!5e0!3m2!1str!2str!4v1745180712510!5m2!1str!2str"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default About;
