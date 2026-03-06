import Awards from "./Components/HeroPage/Awards";
import Hero from "./Components/HeroPage/Hero";
import NewCapital from "./Components/HeroPage/NewCapital";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Awards />
      <NewCapital />
    </div>
  );
}
