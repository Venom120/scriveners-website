
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import LitFestForm from "@/components/LitFestForm";
import LitFestBanner from "@/components/sections/LitFestBanner";

const LitFest25 = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-900 relative overflow-hidden">
      {/* Use the existing Header component */}
      <Header />
      
      {/* Background elements */}
      <div className="w-full h-full absolute bg-neutral-600 rounded-[54px]"></div>
      <div className="size-96 right-0 bottom-0 absolute bg-white/25 rounded-full shadow-[10px_14px_104px_0px_rgba(0,0,0,0.12)] blur-[100px]"></div>
      
      <main className="relative z-10">
        {/* Use the new LitFest banner component */}
        <LitFestBanner onRegisterClick={toggleRegistrationForm} />
        
        {/* Registration Form (conditionally shown) */}
        {showRegistrationForm && (
          <div className="px-4 md:px-10 py-8 md:py-12 bg-[#3a4545]">
            <LitFestForm />
          </div>
        )}
        
        {/* About section */}
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-['K2D'] mb-4 md:mb-6">About LitFest25</h2>
          <div className="text-xl md:text-3xl font-light text-white font-['K2D'] space-y-4 md:space-y-6">
            <p>
              Welcome to LitFest25, Scriveners' annual literary festival celebrating creativity, 
              expression, and the art of writing. Join us for an immersive experience featuring 
              workshops, competitions, and engaging discussions with renowned authors and poets.
            </p>
            <p>
              This year's theme explores the intersection of tradition and innovation in literature. 
              Participate in our signature events like poetry slams, short story competitions, and 
              literary quizzes designed to challenge and inspire writers of all levels.
            </p>
          </div>
        </div>
        
        {/* Key Highlights section */}
        <div className="container mx-auto px-4 md:px-6 py-8 md:py-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white font-['K2D'] mb-4 md:mb-6">Key Highlights</h2>
          <div className="text-xl md:text-3xl font-light text-white font-['K2D'] space-y-2">
            <p>Interactive writing workshops led by published authors</p>
            <p>Panel discussions on contemporary literary trends</p>
            <p>Competitive events with exciting prizes</p>
            <p>Networking opportunities with fellow writers and enthusiasts</p>
            <p>Publication opportunities for outstanding entries</p>
          </div>
        </div>
        
        {/* Footer */}
        <div className="w-full h-20 bg-zinc-300 mt-16"></div>
      </main>
    </div>
  );
};

export default LitFest25;
