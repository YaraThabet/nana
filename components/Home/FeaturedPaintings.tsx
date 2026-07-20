import React from "react";

const artworks = [
  {
    id: 1,
    title: "Bloom of Thought",
    medium: "COOL AND ACRYLIC ON CANVAS",
    price: 12000,
    priceFormatted: "$12,000",
    slug: "bloom-of-thought",
  },
  {
    id: 2,
    title: "Layers of Time I",
    medium: "GYPSUM AND ACRYLIC ON CANVAS",
    price: 1500,
    priceFormatted: "$1,500",
    slug: "layers-of-time-i",
  },
  {
    id: 3,
    title: "Tide, Two Ways",
    medium: "GYPSUM AND ACRYLIC ON CANVAS",
    price: 2400,
    priceFormatted: "$2,400",
    slug: "tide-two-ways",
  },
  {
    id: 6,
    title: "Orbit",
    medium: "GYPSUM AND ACRYLIC ON CANVAS",
    price: 1500,
    priceFormatted: "$1,500",
    slug: "orbit",
  },
];

const FeaturedPaintings = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center pt-10 sm:pt-15 px-4 sm:px-6 pb-16">
      <div className="max-w-4xl text-center space-y-3 sm:space-y-5">
        <p className="uppercase text-[#b58610] text-xs sm:text-sm tracking-widest font-medium">
          Recently Finished
        </p>
        <h1 className='uppercase font-bold font-["Cormorant_Garamond"] text-3xl sm:text-4xl md:text-5xl'>
          Featured Paintings
        </h1>
        <p className="text-gray-500 text-sm sm:text-base pt-1 sm:pt-2 max-w-2xl mx-auto px-4">
          A rotating selection of recent paintings, each built entirely by hand
          from concept to final brushstroke.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-10 w-full max-w-7xl px-2 sm:px-0">
        {artworks.map((artwork) => (
          <div key={artwork.id} className="group flex flex-col items-center">
            <div className="relative w-full aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
              <img
                src={`/${artwork.id}.png`}
                alt={`${artwork.title} - Original painting by Nana Hashim Abusenenh`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <button className="bg-white text-black px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-[#b58610] hover:text-white transition-colors duration-300">
                  View Details
                </button>
              </div>
            </div>

            <div className="mt-3 sm:mt-4 text-center px-2">
              <h3 className="font-bold text-base sm:text-lg">
                {artwork.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500">
                {artwork.medium}
              </p>
              <p className="text-[#b58610] font-semibold mt-0.5 sm:mt-1">
                {artwork.priceFormatted}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPaintings;
