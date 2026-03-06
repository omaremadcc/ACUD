export default function Testimonials() {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-10 mx-auto px-10 py-20">
      <div>
        <h2 className="text-5xl md:text-8xl">Partener Testimonials</h2>
        <p className="md:text-2xl text-muted-text">
          Hear from our world-class partners who are helping build Egypt's smart
          city of the future
        </p>
      </div>
      <div>
        <div
          className="h-15 md:h-20 aspect-5/1 bg-semi-muted-text mask mask-center mask-no-repeat mask-contain"
          style={{ maskImage: `url('/parteners/honeywell.png')` }}
        ></div>
        <h4 className="text-2xl md:text-4xl">Operation Director</h4>
        <h3 className="md:text-2xl text-muted-text">Waste Management</h3>
        <p className="text-semi-muted-text text-2xl md:text-4xl italic">
          <span className="text-primary">{'"'}</span>
          The New Capital represents the future of sustainable urban
          development. Our collaboration with ACUD has set new standards for
          integrated building management systems.
          <span className="text-primary">{'"'}</span>
        </p>
      </div>
    </div>
  );
}
