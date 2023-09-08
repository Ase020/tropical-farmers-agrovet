/* eslint-disable react/prop-types */
import "./product-card.css";

const ProductCard = ({ product }) => {
  return (
    <div className="product_card">
      <div className="product_cover">
        <img src={product.img} alt="feeds" className="product_cover-img" />
      </div>

      <div className="product_info">
        <h1 className="product_header">{product.name}</h1>
        <button className="product_btn">View</button>
      </div>
    </div>
  );
};

export default ProductCard;
