import About from "../Components/About/About";
import Milestones from "../Components/About/Milestones";

export default function Page() {
  return (
    <div>
      <div className="w-screen h-screen flex justify-start items-end px-3 py-2">
        <div>
          <h4 className="text-muted-text text-4xl">
            Build Egypt's New Capital
          </h4>
          <h1 className="text-[112px] font-extrabold leading-none">
            ABOUT ACUD
          </h1>
        </div>
      </div>
      <div className="flex gap-10 justify-center items-start flex-col-reverse md:flex-row py-20 responsive-container">
        <div className="">
          <span className="text-lg md:text-2xl text-semi-muted-text font-semibold">
            Our Story
          </span>
          <h2 className="font-semibold text-3xl md:text-5xl">
            Leading Egypt's Urban Transformation
          </h2>
          <p className="text-muted-text md:text-lg">
            ACUD, founded in 2016, is the driving force behind Egypt's most
            ambitious urban development project - the New Capital. Our mission
            is to create a world-class, sustainable city that serves as the new
            political and administrative hub of Egypt.
          </p>
          <p className="text-muted-text md:text-lg mt-5">
            We are committed to excellence, innovation, and sustainable
            development, working with global partners to build a city that meets
            the highest international standards.
          </p>
        </div>
        <img
          src="/about/1.webp"
          alt="New Capital"
          className=" max-w-[40%] h-auto"
        />
      </div>
      <About />
      <Milestones />
    </div>
  );
}
