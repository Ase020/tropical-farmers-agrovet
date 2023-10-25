import {
  HeroSection,
  Excellence,
  About,
  Partner,
  Products,
  Contact,
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
      <Contact />
    </div>
  );
};

export default Home;
