import ProductCard from "../product-card/ProductCard";
import "./products.css";

const Products = () => {
  return (
    <div className="products">
      <div className="products_container">
        <h2 className="products_header">Our Products Range</h2>
        <div className="products_card-wrapper">
          {Array.from({ length: 8 }, (_, i) => (
            <ProductCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
