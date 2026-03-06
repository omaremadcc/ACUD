import Awards from "./Components/HeroPage/Awards";
import CapitalDistricts from "./Components/HeroPage/CapitalDistricts";
import Hero from "./Components/HeroPage/Hero";
import NewCapital from "./Components/HeroPage/NewCapital";
import Parteners from "./Components/HeroPage/Parteners";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Awards />
      <NewCapital />
      <CapitalDistricts />
      <Parteners />
    </div>
  );
}
