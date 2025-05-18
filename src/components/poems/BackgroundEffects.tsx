
const BackgroundEffects = () => {
  return (
    <>
      {/* Decorative blurs similar to Index page */}
      <div className="absolute w-96 h-96 right-0 bottom-0 bg-white/25 rounded-full shadow-xl blur-[100px] -z-10" />
      <div className="absolute w-72 h-72 left-1/4 top-20 bg-emerald-300/25 rounded-full shadow-xl blur-[100px] -z-10" />
      <div className="absolute w-60 h-80 right-1/4 bottom-40 bg-stone-300 shadow-xl blur-xl -z-10" />
    </>
  );
};

export default BackgroundEffects;
