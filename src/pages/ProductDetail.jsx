import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  const [selectedColor, setSelectedColor] = useState(null);

  if (!product) return <p>Ürün bulunamadı.</p>;

  return (
    <section className="product-detail">
      <div className="product-image" style={{ backgroundColor: selectedColor || "#fff" }}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h2>{product.name}</h2>
        <p>{product.description}</p>

        <h4>Renk Seçenekleri:</h4>
        <div className="color-options">
          {product.colors.map((color) => (
            <span
              key={color}
              className={`color-circle ${selectedColor === color ? "selected" : ""}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;