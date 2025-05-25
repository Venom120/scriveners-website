
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import SymphonyOfMindsForm from "@/components/symphony/SymphonyOfMindsForm";
import SymphonyOfMindsBanner from "@/components/symphony/SymphonyOfMindsBanner";
import SymphonyOfMindsAbout from "@/components/symphony/SymphonyOfMindsAbout";
import SymphonyOfMindsHighlights from "@/components/symphony/SymphonyOfMindsHighlights";

const SymphonyOfMinds = () => {
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
        {/* Use the Symphony of Minds banner component */}
        <SymphonyOfMindsBanner onRegisterClick={toggleRegistrationForm} />
        
        {/* Registration Form (conditionally shown) */}
        {showRegistrationForm && (
          <div className="px-4 md:px-10 py-8 md:py-12 bg-[#3a4545]">
            <SymphonyOfMindsForm />
          </div>
        )}
        
        {/* Poster section */}
        <div className="px-4 md:px-96 py-8 md:py-12">
          <img
            src="/src/components/images/SymphonyOfMinds.jpeg"
            alt="Symphony of Minds Poster"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* About section */}
        <SymphonyOfMindsAbout />
        
        {/* Key Highlights section */}
        <SymphonyOfMindsHighlights />
      </main>
    </div>
  );
};

export default SymphonyOfMinds;
