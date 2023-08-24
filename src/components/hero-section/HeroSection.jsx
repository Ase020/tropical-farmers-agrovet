import { Link } from "react-router-dom";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <div className="heroSection">
      <h1 className="hero__title" data-aos="fade-down">
        Your Trusted Partner in
        <span className="hero__title-span span-agric"> Agriculture </span>
        <span className="hero__title-span span-sol">Solutions</span>
      </h1>

      {/* <h3 className="hero__subtitle">Nurturing Growth, Harvesting Success</h3> */}

      <p className="hero__desc" data-aos="fade-up-right">
        Welcome to{" "}
        <span className="span-agric" style={{ fontWeight: "bolder" }}>
          Tropical Farmers Agrovet
        </span>
        , where agriculture meets innovation. We are your dedicated partner in
        providing top-quality agricultural products and expertise to help you
        achieve bountiful harvests and thriving farms. With a passion for
        agriculture and a commitment to excellence, we bring you a comprehensive
        range of solutions tailored to your unique needs.
      </p>

      <Link to="/" className="hero__btn" data-aos="fade-up-left">
        Explore
      </Link>
    </div>
  );
};

export default HeroSection;
