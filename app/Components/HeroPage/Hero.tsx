export default function Hero() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center md:items-start justify-center ">
      <div className="w-screen h-screen absolute inset-0 z-[-1] overflow-hidden">
        <video
          src={"/hero.webm"}
          autoPlay
          muted
          loop
          className="object-cover brightness-10 bg-white"
        />
      </div>
      <div className="px-10 text-center md:text-left">
        <h4 className="text-semi-muted-text text-lg md:text-2xl font-bold">
          Welcome to The Future of Egypt
        </h4>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-2 mb-5">
          Egypt’s Smart City
        </h1>
        <p className="text-base md:text-lg text-muted-text max-w-[80%] md:max-w-[60%] lg:max-w-[40%]">
          <span className="text-semi-muted-text">ACUD</span>, founded in{" "}
          <span className="text-semi-muted-text">2016</span>, leads the
          development of{" "}
          <span className="text-semi-muted-text">Egypt's New Capital</span>. A
          smart, sustainable city built on innovation, technology, and green
          design.
        </p>
      </div>
    </div>
  );
}
