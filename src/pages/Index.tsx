
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Quote } from "@/components/sections/Quote";
import { useIsMobile } from "@/hooks/use-mobile";
import { Head } from "react-day-picker";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className={`bg-[rgba(255,255,255,0.25)] border flex flex-col overflow-hidden items-stretch ${isMobile ? 'px-2' : 'pl-4'} rounded-[20px] border-white border-solid`}>
      <Header /> 
      <Hero />
      <Quote />

    </div>
  );
};

export default Index;
