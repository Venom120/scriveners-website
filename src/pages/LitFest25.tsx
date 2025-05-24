
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import LitFestForm from "@/components/litfest/LitFestForm";
import LitFestBanner from "@/components/litfest/LitFestBanner";
import LitFestAbout from "@/components/litfest/LitFestAbout";
import LitFestHighlights from "@/components/litfest/LitFestHighlights";

const LitFest25 = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  const toggleRegistrationForm = () => {
    setShowRegistrationForm(!showRegistrationForm);
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-900 relative overflow-hidden">
      {/* Use the existing Header component */}
      <Header />
      
      {/* Background color */}
      <div className="w-full h-full absolute bg-neutral-600"></div>
      {/* Background Blur */}
      <div className="size-96 right-0 bottom-0 absolute bg-white/25 rounded-full shadow-[10px_14px_104px_0px_rgba(0,0,0,0.12)] blur-[100px]"></div>
      
      <main className="relative z-10">
        {/* Use the LitFest banner component */}
        <LitFestBanner onRegisterClick={toggleRegistrationForm} />
        
        {/* Registration Form (conditionally shown) */}
        {showRegistrationForm && (
          <div className="px-4 md:px-10 py-8 md:py-12 bg-[#3a4545]">
            <LitFestForm />
          </div>
        )}
        
        {/* Poster section */}
        <div className="px-4 md:px-96 py-8 md:py-12">
          <img
            src="/src/components/images/posterSOM.png"
            alt="LitFest25 Poster"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* About section */}
        <LitFestAbout />
        
        {/* Key Highlights section */}
        <LitFestHighlights />
      </main>
    </div>
  );
};

export default LitFest25;
