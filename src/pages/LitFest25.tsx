
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import LitFestForm from "@/components/litfest/LitFestForm";
import LitFestBanner from "@/components/litfest/LitFestBanner";
import LitFestAboutSection from "@/components/litfest/LitFestAboutSection";
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
      
      {/* Background elements */}
      <div className="w-full h-full absolute bg-neutral-600 rounded-[54px]"></div>
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
        
        {/* About section */}
        <LitFestAboutSection />
        
        {/* Key Highlights section */}
        <LitFestHighlights />
        
        {/* Footer */}
        <div className="w-full h-20 bg-zinc-300 mt-16"></div>
      </main>
    </div>
  );
};

export default LitFest25;
