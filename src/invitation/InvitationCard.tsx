
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Clock } from "lucide-react";

interface InvitationCardProps {
  onRegisterClick: () => void;
  onShareClick: () => void;
}

const InvitationCard: React.FC<InvitationCardProps> = ({ onRegisterClick, onShareClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Animation delay effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const invitationText = `*You're Invited to Literature Day 2025!*📚

Join us for a celebration of words, wit, and wonder on *31st May from 10:30 AM onwards*!

*Events include:*

* Open Mic 🎤 
* Spelling Bee 🐝 
* Bookish Treasure Hunt 🪙
* Parliamentary Debate 💬 
* Poster Making 🎨

Show off your literary flair, challenge your mind, and enjoy a day filled with creativity and fun.
*All students are welcome!*

Let the love for literature shine—see you there!
 
To register visit our website : https://scriveners.pythonabc.org/litfest25

*For any queries, please reach out to us:*
Vedant Talankar (8839198566) 📞`;

  return (
    <Card className={`parchment w-full max-w-2xl mx-auto ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
      <CardContent className="p-6 flex flex-col gap-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-[#8B4513] animate-glow">LitFest2025</h1>
          <div className="h-0.5 w-24 bg-[#8B4513] mx-auto my-2"></div>
          <h2 className="text-2xl font-semibold text-[#8B4513] animate-quill-write">GGITS</h2>
        </div>

        <div className="space-y-4 mt-4">
          <p className="text-lg whitespace-pre-line font-medium">
            {invitationText}
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-4 mt-4 text-[#8B4513]">
          <div className="flex items-center gap-3 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <Calendar className="h-5 w-5" />
            <span className="font-medium">31st May 2025</span>
          </div>
          
          <div className="flex items-center gap-3 animate-fade-in" style={{animationDelay: "0.6s"}}>
            <Clock className="h-5 w-5" />
            <span className="font-medium">10:30 AM</span>
          </div>
          
          <div className="flex items-center gap-3 animate-fade-in" style={{animationDelay: "0.9s"}}>
            <MapPin className="h-5 w-5" />
            <span className="font-medium">MBA SEMINAR HALL</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 animate-fade-in" style={{animationDelay: "1.2s"}}>
          <Button 
            onClick={onRegisterClick} 
            className="bg-[#8B4513] hover:bg-[#654321] text-white"
          >
            REGISTER HERE
          </Button>
          
          <Button 
            onClick={onShareClick} 
            variant="outline" 
            className="border-[#8B4513] text-[#8B4513] hover:bg-[#8B4513]/10"
          >
            SEND TO WHATSAPP
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvitationCard;
