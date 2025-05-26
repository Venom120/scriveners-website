
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const SymphonyOfMindsEventDetails = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const eventDetails = {
    "Parliamentary Debate": {
      title: "Parliamentary Debate",
      description: "Step into the House and let your voice shape the narrative! Join us for the British Parliamentary Debate at Symphony of the mind, where intellect meets oratory. Eight participants, four teams, and one thought-provoking motion—battle it out with logic, wit, and persuasive flair in the world’s most prestigious debate format. Whether you're defending a motion or tearing it down, every word counts. No prior experience needed—just passion and perspective. Certificates, and bragging rights await. Register now and prove your power in the Parliament of ideas!",
      date: "31st MAY 2025",
      venue: "Spandan",
      additionalInfo: "A small workshop will be conducted on 29th MAY for this event. Details will be shared to you on the whatsapp group after you have registered."
    },
    "Poster Design Competition": {
      title: "Poster Design Competition",
      description: "In this event, participants will create visually compelling posters that communicate powerful messages through artistic design. Contestants will showcase their creativity, design skills, and ability to convey complex ideas through visual storytelling.",
      date: "31st MAY 2025",
      venue: "Spandan",
      additionalInfo: "No Preliminary Round!!! Guidelines will be provided on the whatsapp group after you have registered. Participants are required to showcase their poster on the final day."
    },
    "Treasure Hunt": {
      title: "Treasure Hunt on Books",
      description: "Treasure Hunt, an immersive literary quest where stories come to life through a trail of hidden clues. Starting at the “Literary Portal,” participants will follow clues inspired by iconic books — from magical train platforms to golden tickets and mythological gods. Each clue reveals a digit, and together, they form the code to unlock the Vault of Words. You don’t need to be a book expert — just bring your curiosity, wit, and love for stories. Solve the clues, uncover the code, and you might just claim the treasure that awaits at the end.",
      date: "30th MAY 2025",
      venue: "Spandan",
      additionalInfo: "Individual participation!!. A preliminary round will be conducted on 29th MAY to select finalists. Clues will be based on popular books and literary references."
    },
    "Spell Bee Competition": {
      title: "Spell Bee Competition",
      description: "The Spell Bee is an exciting, multi-round word challenge designed to test not just spelling, but also vocabulary, and confidence. Participants will be given words. For each word, the contestant may ask for the meaning, pronunciation, language of origin, or use it in a sentence for better understanding. Once ready, the participant must spell the word correctly, letter by letter, within the given time. Points are awarded for correct spellings, clarity, confidence, time. So, if someone asks, “What happens in Spell Bee?” — the answer is simple: You listen, understand, and spell your way to victory!",
      date: "30th MAY 2025",
      venue: "Spandan",
      additionalInfo: "Preliminary rounds will be conducted on 29th MAY to select finalists. Word lists will be based on standard dictionaries. More details will be shared on the whatsapp group after you have registered."
    },
    "Open Mic Sessions": {
      title: "Open Mic Sessions",
      description: "This Open Mic event is a celebration of artistic freedom and creative expression, bringing together a diverse blend of performances under one roof. From heartfelt poetry to compelling storytelling, dramatic monologues, soulful acoustic music, and light-hearted comedy (stand-up comedy), improvisation, mimicry—this platform is open to all.",
      date: "31st MAY 2025",
      venue: "Spandan",
      additionalInfo: "Preliminary rounds will be conducted on 29th MAY to select finalists. Time limit is 5 minutes per performance."
    }
  };

  const handleEventClick = (eventName: string) => {
    setSelectedEvent(eventName);
  };

  const handleCloseDialog = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <div className="container px-4 md:px-6 py-8 md:py-16 bg-gradient-to-r from-orange-100/80 to-amber-100/80 rounded-lg my-8 shadow-lg border-2 border-orange-300">
        <h2 className="text-3xl md:text-5xl font-bold text-amber-900 font-['Playfair Display'] mb-4 md:mb-6 text-center">Event Details</h2>
        <div className="text-xl md:text-3xl font-light text-amber-800 font-['K2D'] space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="bg-amber-50 p-4 rounded-lg shadow-md border border-amber-300 cursor-pointer md:col-span-2 hover:bg-amber-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => handleEventClick("Parliamentary Debate")}
            >
              <p className="font-semibold text-orange-800 text-center">🎪 Parliamentary Debate</p>
            </div>
            <div 
              className="bg-yellow-50 p-4 rounded-lg shadow-md border border-yellow-300 cursor-pointer hover:bg-yellow-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => handleEventClick("Treasure Hunt")}
            >
              <p className="font-semibold text-orange-800">🗺️ Treasure Hunt</p>
            </div>
            <div 
              className="bg-amber-50 p-4 rounded-lg shadow-md border border-orange-300 cursor-pointer hover:bg-orange-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => handleEventClick("Spell Bee Competition")}
            >
              <p className="font-semibold text-amber-800">🔤 Spell Bee Competition</p>
            </div>
            <div 
              className="bg-orange-50 p-4 rounded-lg shadow-md border border-orange-300 cursor-pointer hover:bg-orange-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => handleEventClick("Open Mic Sessions")}
            >
              <p className="font-semibold text-amber-800">🎤 Open Mic</p>
            </div>
            <div 
              className="bg-orange-50 p-4 rounded-lg shadow-md border border-amber-300 cursor-pointer hover:bg-amber-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => handleEventClick("Poster Design Competition")}
            >
              <p className="font-semibold text-amber-800">🎨 Poster Design Competition</p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={handleCloseDialog}>
        <DialogContent className="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-400 max-w-md sm:max-w-lg rounded-lg shadow-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-amber-900 font-['Playfair Display'] text-center mb-4">
              {selectedEvent && eventDetails[selectedEvent as keyof typeof eventDetails]?.title}
            </DialogTitle>
          </DialogHeader>
          
          {selectedEvent && (
            <div className="space-y-4 text-amber-800 font-['K2D']">
              <div className="bg-amber-100/60 p-4 rounded-lg border border-amber-300">
                <p className="text-base md:text-lg leading-relaxed">
                  {eventDetails[selectedEvent as keyof typeof eventDetails]?.description}
                </p>
              </div>
              
              <div className="bg-orange-100/60 p-4 rounded-lg border border-orange-300 space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-lg">📅</span>
                  <span className="font-semibold text-orange-800">Date: {eventDetails[selectedEvent as keyof typeof eventDetails]?.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">📍</span>
                  <span className="font-semibold text-orange-800">Venue: {eventDetails[selectedEvent as keyof typeof eventDetails]?.venue}</span>
                </div>
              </div>
              
              <div className="bg-yellow-100/60 p-4 rounded-lg border border-yellow-300">
                <p className="text-sm md:text-base text-amber-700 italic">
                  {eventDetails[selectedEvent as keyof typeof eventDetails]?.additionalInfo}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SymphonyOfMindsEventDetails;
