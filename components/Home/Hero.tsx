
import { Header } from "@/components/Layout/Header";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen bg-center bg-cover  "
      style={{ backgroundImage: `url('/hero-img.png')` }}
    >
      <Header />
    </div>
  );
};

export default HeroSection;
