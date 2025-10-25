import About from "../components/About";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center gap-6 w-full">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
