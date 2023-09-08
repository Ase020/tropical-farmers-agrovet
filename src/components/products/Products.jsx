import ProductCard from "../product-card/ProductCard";
import "./products.css";

const Products = () => {
  const products = [
    { id: 1, name: "Animal Feeds", img: "/livestock_feeds.jpg" },
    { id: 2, name: "Vegetables Seeds", img: "/vegetable_seeds.jpeg" },
    { id: 3, name: "Farm Inputs", img: "/livestock_feeds.jpg" },
    { id: 4, name: "Veterinary Products", img: "/livestock_feeds.jpg" },
    { id: 5, name: "Foliar", img: "/livestock_feeds.jpg" },
    { id: 6, name: "Herbicides", img: "/livestock_feeds.jpg" },
    { id: 7, name: "Nutritional Supplements", img: "/livestock_feeds.jpg" },
    { id: 8, name: "Fertilizers", img: "/livestock_feeds.jpg" },
  ];
  return (
    <div className="products">
      <div className="products_container">
        <h2 className="products_header">Our Products Range</h2>
        <div className="products_card-wrapper">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
