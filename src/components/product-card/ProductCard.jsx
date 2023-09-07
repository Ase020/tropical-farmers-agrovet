import "./product-card.css";

const ProductCard = () => {
  return (
    <div className="product_card">
      <div className="product_cover">
        <img
          src="/livestock_feeds.jpg"
          alt="feeds"
          className="product_cover-img"
        />
      </div>

      <div className="product_info">
        <h1 className="product_header">Animal Feeds</h1>
        <button className="product_btn">View</button>
      </div>
    </div>
  );
};

export default ProductCard;
