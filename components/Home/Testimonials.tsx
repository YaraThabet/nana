import { FaInstagram } from "react-icons/fa6";

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white text-gray-800 px-4 py-16">
      <div className="max-w-3xl text-center">
        <p className='font-["Cormorant_Garamond"] text-3xl sm:text-4xl md:text-5xl font-light italic leading-[1.4] text-gray-800'>
          “I do not paint the world as it is,
          <br />
          <span className="font-bold not-italic text-[#b58610]">
            — I paint it as it feels.”
          </span>
        </p>
      </div>

      <div className="w-12 h-0.5 bg-[#b58610] my-6"></div>

      <h2 className="font-['Cormorant_Garamond'] text-xl sm:text-2xl font-bold tracking-wide text-gray-800">
        Nana Hashim Abusenenh
      </h2>

      <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-widest mt-1">
        VISUAL ARTIST · PAINTER · CREATIVE
      </p>

      <p className="text-gray-500 text-xs sm:text-sm text-center max-w-md mt-6 leading-relaxed">
        Follow the process, the studio, and new work as it happens on Instagram.
      </p>

      <a
        href="https://instagram.com/nana.artistt"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-6 bg-[#b58610] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#c9971a] hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <FaInstagram size={18} />
        <span>Follow on Instagram</span>
      </a>
    </div>
  );
};

export default Testimonials;
