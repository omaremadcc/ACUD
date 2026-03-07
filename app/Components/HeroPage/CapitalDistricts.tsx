export default function CapitalDistricts() {
  return (
    <div>
      <div className="h-fit flex flex-col md:flex-row items-center justify-center md:h-[80vh] relative group/parent">
        <District
          img="/districts/BCD.jpg"
          heading="Central Business District"
          paragraph="The Central Business District (CBD) is the economic heart of Egypt's New Administrative Capital. It contains more than 20 modern skyscrapers designed for offices, hotels, residences, and commercial spaces. At its center rises the Iconic Tower, the tallest building in Africa, symbolizing the district's role as a hub for business, finance, and global investment."
        />
        <District
          img="/districts/GCD.jpg"
          heading="Government District"
          paragraph="The Central Government District is the administrative core of the New Administrative Capital, designed to house Egypt's main government institutions in one modern complex. It includes the Presidential Palace, the Parliament, the Cabinet headquarters, and dozens of ministry buildings, bringing key branches of government together in a highly organized and secure environment to support efficient governance."
        />
        <District
          img="/districts/greenriver.jpg"
          heading="Green River"
          paragraph="The Green River is the central green corridor of the New Administrative Capital, stretching across the city as one of the largest urban parks in the world. Inspired by the Nile, it connects key districts through landscaped gardens, walking and cycling paths, cultural spaces, and recreational areas, providing a natural heart for the city and enhancing its sustainable urban design."
        />
        <h2 className="opacity-0 md:opacity-100 text-center text-6xl font-semibold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/parent:opacity-0 transition-all">
          New Capital Districts
        </h2>
      </div>
    </div>
  );
}

function District({
  img,
  heading,
  paragraph,
}: {
  img: string;
  heading: string;
  paragraph: string;
}) {
  return (
    <div className="md:flex-1 h-full relative px-4 py-6 cursor-pointer delay-100 md:hover:[flex:2] transition-all ease-in-out duration-500 group/district md:brightness-40 md:hover:brightness-100">
      <img
        src={img}
        alt={heading}
        className="object-cover h-full w-screen md:w-auto md:h-[80vh] absolute inset-0 -z-10 brightness-40 md:group-hover/district:brightness-[0.35] transition-all duration-500"
      />
      <div className="flex gap-2 items-center">
        <div className="w-1 self-stretch bg-primary"></div>
        <h1 className="text-3xl font-medium">{heading}</h1>
      </div>
      <p className="text-xs md:text-lg md:mt-9 md:opacity-0 md:group-hover/district:opacity-100 md:group-hover/district:translate-y-0 md:translate-y-6 md:text-center transition-all duration-500 md:group-hover/district:delay-600 ease-in-out px-9 py-5">
        {paragraph}
      </p>
    </div>
  );
}
