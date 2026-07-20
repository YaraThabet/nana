import React from "react";

const collections = [
  {
    id: 1,
    title: "Texture & Stone",
    description:
      "Exploring the tactile beauty of natural textures and stone-like surfaces.",
    image: "./8.png",
  },
  {
    id: 2,
    title: "Coastal Studies",
    description: "Inspired by the rhythm of the sea and coastal landscapes.",
    image: "./3.png",
  },
  {
    id: 3,
    title: "Colour & Form",
    description:
      "A vibrant exploration of color relationships and abstract forms.",
    image: "./1.png",
  },
];

const Collections = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center pt-10 sm:pt-15 px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-4xl text-center space-y-3 sm:space-y-5">
        <p className="uppercase text-[#b58610] text-xs sm:text-sm tracking-widest font-medium">
          Grouped by Theme
        </p>
        <h1 className='uppercase font-bold font-["Cormorant_Garamond"] text-3xl sm:text-4xl md:text-5xl'>
          Collections
        </h1>
        <p className="text-gray-500 text-sm sm:text-base pt-1 sm:pt-2 max-w-2xl mx-auto px-4">
          Works grouped by shared texture, material, and mood — a way into the
          collection.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 w-full max-w-6xl px-2 sm:px-0">
        {collections.map((collection) => (
          <div
            key={collection.id}
            className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 h-56 sm:h-64 md:h-72 cursor-pointer"
          >
            <img
              src={collection.image}
              alt={collection.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300"></div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4 sm:p-6 text-center">
              <h3 className='font-["Cormorant_Garamond"] text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2'>
                {collection.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-xs px-2">
                {collection.description}
              </p>
              <button className="mt-3 sm:mt-4 bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-white hover:text-black transition-all duration-300 border border-white/30 hover:border-transparent">
                Explore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
