
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import LitFestForm from "@/components/LitFestForm";

const LitFest25 = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-stone-900 relative overflow-hidden">
      {/* Add K2D and Poppins fonts */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=K2D:wght@300;400;700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" />
      
      {/* Background elements */}
      <div className="w-full h-full absolute bg-neutral-600 rounded-[54px] -left-[10%] -top-[5%]"></div>
      <div className="size-96 right-0 bottom-0 absolute bg-white/25 rounded-full shadow-[10px_14px_104px_0px_rgba(0,0,0,0.12)] blur-[100px]"></div>
      
      {/* Use the existing Header component */}
      <Header />
      
      <main className="relative z-10">
        {/* LitFest banner section */}
        <div className="w-full h-64 bg-zinc-200 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative">
          <div className="size-72 left-[30%] top-[-12px] absolute bg-emerald-300/25 rounded-full shadow-[10px_14px_104px_0px_rgba(0,0,0,0.12)] blur-[100px]"></div>
          
          <div className="container mx-auto px-4 py-8 text-center relative">
            <h1 className="text-6xl font-bold text-gray-800 font-['K2D'] mb-2">LITFEST 2025</h1>
            <p className="text-4xl text-gray-800 font-normal font-['K2D'] mb-8">Join us for a celebration of literature, creativity, and expression</p>
            
            <button 
              onClick={() => setShowRegistrationForm(!showRegistrationForm)}
              className="bg-sky-400/60 text-neutral-900 text-xl font-normal font-['Inter'] px-4 py-4 rounded-[51px] w-44 h-14 inline-flex justify-center items-center mt-4"
            >
              Register now
            </button>
            </div>
            
            <div className="absolute left-0 top-0 h-full">
              <img src="/src/components/images/litfest24left.svg" alt="LitFest event" className="h-full" />
            </div>
            
            <div className="absolute right-0 top-0 h-full">
              <img src="/src/components/images/litfest24right.svg" alt="LitFest event" className="h-full" />
            </div>
        </div>
        
        {/* Registration Form (conditionally shown) */}
        {showRegistrationForm && (
          <div className="px-10 py-12 bg-[#3a4545]">
            <LitFestForm />
          </div>
        )}
        
        {/* About section */}
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-5xl font-bold text-white font-['K2D'] mb-6">About LitFest25</h2>
          <div className="text-3xl font-light text-white font-['K2D'] space-y-6">
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
        <div className="container mx-auto px-6 py-16">
          <h2 className="text-5xl font-bold text-white font-['K2D'] mb-6">Key Highlights</h2>
          <div className="text-3xl font-light text-white font-['K2D'] space-y-2">
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
