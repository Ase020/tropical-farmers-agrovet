import {
  HeroSection,
  Excellence,
  About,
  Partner,
  Products,
} from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Products />
      <About />
      <Excellence />
      <Partner />
    </div>
  );
};

export default Home;
