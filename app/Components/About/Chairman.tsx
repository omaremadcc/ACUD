export default function Chairman() {
  return (
    <div className="responsive-container flex flex-col md:flex-row items-center md:items-start justify-center gap-10">
      <img src="/about/chairman.webp" className="max-w-1/3" />
      <div className="space-y-2 text-center md:text-left">
        <h1 className="font-semibold text-6xl">Chairman’s Message</h1>
        <p className="text-2xl italic text-muted-text">
          <span className="text-primary">{'"'}</span>The New Capital is more
          than just a city. It is Egypt's bold leap into the future where
          innovation sits right at its core and sustainability forms the
          foundation. We are building a smart, green, and sustainable urban
          model that reflects our nation's ambition and inspires generations to
          come.
          <span className="text-primary">{'"'}</span>
        </p>
        <h5 className="text-3xl font-medium text-semi-muted-text">
          - Eng. Khaled Abbas
        </h5>
      </div>
    </div>
  );
}
