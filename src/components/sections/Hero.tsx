
export const Hero = () => {
  return (
    <section className="w-full max-w-[1310px] mt-8 md:mt-[77px] px-4 md:px-0 max-md:max-w-full max-md:mt-6">
      <div className="gap-5 flex flex-col md:flex-row max-md:items-center">
        <div className="w-full md:w-6/12">
          <div className="text-[rgba(20,46,56,1)] mt-4 md:mt-[87px] text-center md:text-left">
            <h1 className="text-[36px] md:text-[62px] font-bold leading-[1.2] md:leading-[82px]">
              SCRIVENERS CLUB<br className="hidden md:block" /> PRESENTS YOU
            </h1>
            <p className="text-[16px] md:text-[22px] font-normal leading-[1.5] md:leading-[33px] mt-3 md:mt-5">
              Website where you can read stories, poems, quotes submitted by our
              members, see scoreboards of competition.
            </p>
          </div>
        </div>
        <div className="w-full md:w-6/12 mt-6 md:mt-0">
          <div className="flex justify-center md:justify-start items-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ad5bbae593c2463dac7a2da4d170e8bc/40374c2f807a26f9b787f374c6caf686aff303b5?placeholderIfAbsent=true"
              alt="Hero illustration"
              className="w-[70%] md:w-fit object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
