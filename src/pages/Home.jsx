import { Link } from "react-router-dom";
import products from "../data/products";
import "./Home.css";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  return (
    <PageWrapper>
      <div className="home">
        <section className="hero">
          <div className="overlay"></div> {/* Karartma katmanı */}
          <div className="hero-content">
            <h1>DS Asansör</h1>
            <p>Güvenli, estetik ve modern asansör çözümleri</p>
            <Link to="/simulation" className="btn-1">
              🛠️ Kendi Kabinini Kendin Tasarla
            </Link>
            <Link to="/products" className="btn">
              Ürünlerimize Göz Atın
            </Link>
          </div>
        </section>
        <section className="featured-products">
          <h2>Öne Çıkan Ürünler</h2>
          <div className="product-preview-list">
            {products.slice(0, 3).map((product) => (
              <div className="product-preview-card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <Link to={`/products/${product.id}`} className="btn-small">
                  Detay
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

export default Home;
