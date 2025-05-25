
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const SymphonyOfMindsHighlights = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const eventDetails = {
    "Parliamentary Debate": {
      title: "Parliamentary Debate",
      description: "In this event, participants engage in structured debates following parliamentary procedures. Teams will argue for and against various motions, showcasing their critical thinking, public speaking, and argumentation skills. This competitive format encourages research, quick thinking, and effective communication.",
      date: "31st MAY 2025",
      venue: "Spandan",
      additionalInfo: "A small workshop will be conducted on 29th MAY for this event. Details will be shared to you on 28th MAY."
    },
    "Poster Design Competition": {
      title: "Poster Design Competition",
      description: "In this event, participants will create visually compelling posters that communicate powerful messages through artistic design. Contestants will showcase their creativity, design skills, and ability to convey complex ideas through visual storytelling.",
      date: "31st MAY 2025",
      venue: "Spandan",
      additionalInfo: "Design materials and guidelines will be provided. Participants can bring their own art supplies for better results."
    },
    "Treasure Hunt": {
      title: "Treasure Hunt",
      description: "In this event, teams will embark on an exciting literary treasure hunt, solving clues and riddles related to books, authors, and literary works. This engaging activity combines knowledge, teamwork, and problem-solving skills in a fun, interactive format.",
      date: "31st MAY 2025",
      venue: "Spandan",
      additionalInfo: "Teams of 3-4 members will be formed. The hunt will cover various locations within the campus."
    },
    "Spell Bee Competition": {
      title: "Spell Bee Competition",
      description: "In this event, participants will demonstrate their spelling prowess and vocabulary knowledge. Contestants will face increasingly challenging words, testing their linguistic skills and memory in a competitive yet supportive environment.",
      date: "31st MAY 2025",
      venue: "Spandan",
      additionalInfo: "Preliminary rounds will be conducted to select finalists. Word lists will be based on standard dictionaries."
    },
    "Open Mic Sessions": {
      title: "Open Mic Sessions",
      description: "In this event, poets and storytellers will have the opportunity to share their original works with an appreciative audience. This platform celebrates creativity, self-expression, and the power of spoken word in all its forms.",
      date: "31st MAY 2025",
      venue: "Spandan",
      additionalInfo: "Participants can perform poetry, short stories, or spoken word pieces. Time limit is 5 minutes per performance."
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
        <h2 className="text-3xl md:text-5xl font-bold text-amber-900 font-['Playfair Display'] mb-4 md:mb-6 text-center">Key Highlights</h2>
        <div className="text-xl md:text-3xl font-light text-amber-800 font-['K2D'] space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="bg-amber-50 p-4 rounded-lg shadow-md border border-amber-300 cursor-pointer hover:bg-amber-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => handleEventClick("Parliamentary Debate")}
            >
              <p className="font-semibold text-orange-800">🎪 Parliamentary Debate</p>
            </div>
            <div 
              className="bg-orange-50 p-4 rounded-lg shadow-md border border-orange-300 cursor-pointer hover:bg-orange-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => handleEventClick("Poster Design Competition")}
            >
              <p className="font-semibold text-amber-800">🎨 Poster Design Competition</p>
            </div>
            <div 
              className="bg-yellow-50 p-4 rounded-lg shadow-md border border-yellow-300 cursor-pointer hover:bg-yellow-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => handleEventClick("Treasure Hunt")}
            >
              <p className="font-semibold text-orange-800">🗺️ Treasure Hunt</p>
            </div>
            <div 
              className="bg-amber-50 p-4 rounded-lg shadow-md border border-amber-300 cursor-pointer hover:bg-amber-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => handleEventClick("Spell Bee Competition")}
            >
              <p className="font-semibold text-amber-800">🔤 Spell Bee Competition</p>
            </div>
            <div 
              className="bg-orange-50 p-4 rounded-lg shadow-md border border-orange-300 md:col-span-2 cursor-pointer hover:bg-orange-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => handleEventClick("Open Mic Sessions")}
            >
              <p className="font-semibold text-amber-800">🎤 Open Mic Sessions for poets and storytellers</p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details Dialog */}
      <Dialog open={!!selectedEvent} onOpenChange={handleCloseDialog}>
        <DialogContent className="bg-gradient-to-br from-amber-50 to-orange-100 border-2 border-amber-400 max-w-md mx-4 sm:max-w-lg rounded-lg shadow-xl">
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

export default SymphonyOfMindsHighlights;
