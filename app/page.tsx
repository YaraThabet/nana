import Hero from "@/components/Home/Hero";
import FeaturedPaintings from "@/components/Home/FeaturedPaintings";
import Collections from "@/components/Home/Collections";
import AboutGallery from "@/components/Home/AboutGallery";
import Testimonials from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedPaintings />
      <Collections />
      <AboutGallery />
      <Testimonials />
    </div>
  );
}
