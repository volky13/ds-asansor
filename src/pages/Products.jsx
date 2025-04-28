import { Link } from "react-router-dom";
import products from "../data/products";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link to={`/products/${product.id}`} className="detail-btn">
              Detaya Git
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;