import { HeroSection, Excellence, About, Partner } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Excellence />
      <About />
      <Partner />
    </div>
  );
};

export default Home;
