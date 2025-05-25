
const SymphonyOfMindsHighlights = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8 md:py-16 bg-gradient-to-r from-orange-100/80 to-amber-100/80 rounded-lg mx-4 my-8 shadow-lg border-2 border-orange-300">
      <h2 className="text-3xl md:text-5xl font-bold text-amber-900 font-['Playfair Display'] mb-4 md:mb-6 text-center drop-shadow-lg">Key Highlights</h2>
      <div className="text-xl md:text-3xl font-light text-amber-800 font-['K2D'] space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-amber-50 p-4 rounded-lg shadow-md border border-amber-300">
            <p className="font-semibold text-orange-800">🎪 Parliamentary Debate</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg shadow-md border border-orange-300">
            <p className="font-semibold text-amber-800">🎨 Poster Design Competition</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg shadow-md border border-yellow-300">
            <p className="font-semibold text-orange-800">🗺️ Treasure Hunt</p>
          </div>
          <div className="bg-amber-50 p-4 rounded-lg shadow-md border border-amber-300">
            <p className="font-semibold text-amber-800">🔤 Spell Bee Competition</p>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg shadow-md border border-orange-300 md:col-span-2">
            <p className="font-semibold text-amber-800">🎤 Open Mic Sessions for poets and storytellers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SymphonyOfMindsHighlights;
