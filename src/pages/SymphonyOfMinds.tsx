
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-100 to-orange-200 relative overflow-hidden">
      {/* Use the existing Header component */}
      <Header />
      
      {/* Background with poster-inspired elements */}
      <div className="w-full h-full absolute bg-gradient-to-br from-amber-50 to-orange-100"></div>
      
      {/* Animated background elements matching poster theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating books */}
        <div className="absolute top-20 left-10 w-12 h-16 bg-amber-600 rounded-sm animate-float opacity-20 shadow-lg"></div>
        <div className="absolute top-40 right-20 w-10 h-14 bg-orange-600 rounded-sm animate-float-slow opacity-20 shadow-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-14 h-18 bg-yellow-700 rounded-sm animate-float opacity-20 shadow-lg"></div>
        
        {/* Floating pencils */}
        <div className="absolute top-60 right-1/3 w-2 h-20 bg-gradient-to-t from-amber-400 to-yellow-300 rounded-full animate-float-slow opacity-30"></div>
        <div className="absolute bottom-60 left-1/2 w-2 h-16 bg-gradient-to-t from-orange-400 to-amber-300 rounded-full animate-float opacity-30"></div>
        
        {/* Decorative triangular elements */}
        <div className="absolute top-32 right-10 w-0 h-0 border-l-12 border-r-12 border-b-16 border-l-transparent border-r-transparent border-b-orange-400/30 animate-float"></div>
        <div className="absolute bottom-40 right-1/4 w-0 h-0 border-l-10 border-r-10 border-b-14 border-l-transparent border-r-transparent border-b-amber-500/30 animate-float-slow"></div>
        
        {/* Animated bees */}
        <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-yellow-400 rounded-full animate-float opacity-60">
          <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-black rounded-full"></div>
          <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-black rounded-full"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/5 w-8 h-8 bg-yellow-400 rounded-full animate-float-slow opacity-60">
          <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-black rounded-full"></div>
          <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-black rounded-full"></div>
        </div>
      </div>
      
      <main className="relative z-10">
        {/* Use the Symphony of Minds banner component */}
        <SymphonyOfMindsBanner onRegisterClick={toggleRegistrationForm} />
        
        {/* Registration Form (conditionally shown) */}
        {showRegistrationForm && (
          <div className="px-4 md:px-10 py-8 md:py-12 bg-gradient-to-r from-amber-200 to-orange-200">
            <SymphonyOfMindsForm />
          </div>
        )}
        
        {/* Poster section */}
        <div className="px-4 md:px-96 py-8 md:py-12">
          <img
            src="/lovable-uploads/29fc6913-3148-4777-93e1-8f237963ffe9.png"
            alt="Symphony of Minds 2025 Poster"
            className="w-full h-auto rounded-lg shadow-lg border-4 border-amber-600"
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
