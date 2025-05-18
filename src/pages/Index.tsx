
import { Header } from "@/components/layout/Header";
import HeroSection from "@/components/index/HeroSection";

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-stone-800 relative">
      <div className="w-full bg-white/25 shadow-lg outline outline-1 outline-offset-[-1px] outline-white overflow-hidden">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;
