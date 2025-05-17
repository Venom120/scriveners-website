
import { Header } from "@/components/layout/Header";
import LitFestBanner from "@/components/sections/LitFestBanner";
import LitFestForm from "@/components/LitFestForm";
import { Quote } from "@/components/sections/Quote";

const LitFest25 = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4">
        <Header />
      </div>
      
      <LitFestBanner />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold mb-4">About LitFest25</h2>
            <p className="mb-4">
              Welcome to LitFest25, Scriveners' annual literary festival celebrating creativity, 
              expression, and the art of writing. Join us for an immersive experience featuring 
              workshops, competitions, and engaging discussions with renowned authors and poets.
            </p>
            <p className="mb-4">
              This year's theme explores the intersection of tradition and innovation in literature. 
              Participate in our signature events like poetry slams, short story competitions, and 
              literary quizzes designed to challenge and inspire writers of all levels.
            </p>
            <h3 className="text-xl font-bold mb-2">Key Highlights</h3>
            <ul className="list-disc pl-5 mb-4">
              <li>Interactive writing workshops led by published authors</li>
              <li>Panel discussions on contemporary literary trends</li>
              <li>Competitive events with exciting prizes</li>
              <li>Networking opportunities with fellow writers and enthusiasts</li>
              <li>Publication opportunities for outstanding entries</li>
            </ul>
            <p>
              Don't miss this opportunity to showcase your talent and connect with the literary community. 
              Register now using the form to secure your spot at LitFest25!
            </p>
          </div>
          
          <LitFestForm />
        </div>
      </div>
    </div>
  );
};

export default LitFest25;
