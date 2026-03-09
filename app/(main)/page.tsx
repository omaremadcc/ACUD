import Awards from "../Components/HeroPage/Awards";
import CapitalDistricts from "../Components/HeroPage/CapitalDistricts";
import Hero from "../Components/HeroPage/Hero";
import NewCapital from "../Components/HeroPage/NewCapital";
import Parteners from "../Components/HeroPage/Parteners";
import Testimonials from "../Components/HeroPage/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Awards />
      <NewCapital />
      {/*<CapitalDistricts />*/}
      <Parteners />
      <Testimonials />
    </div>
  );
}
