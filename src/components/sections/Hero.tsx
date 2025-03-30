export const Hero = () => {
  return (
    <section className="w-full max-w-[1310px] mt-[77px] max-md:max-w-full max-md:mt-10">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-6/12 max-md:w-full max-md:ml-0">
          <div className="text-[rgba(20,46,56,1)] mt-[87px] max-md:max-w-full max-md:mt-10">
            <h1 className="text-[62px] font-bold leading-[82px] max-md:max-w-full max-md:text-[40px] max-md:leading-[59px]">
              SCRIVENERS CLUBPRESENTS YOU
            </h1>
            <p className="text-[22px] font-normal leading-[33px] mt-5 max-md:max-w-full max-md:mr-2.5">
              Website where you can read stories, poems, quotes submitted by our
              members, see scoreboards of competition.
            </p>
          </div>
        </div>
        <div className="w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow items-start gap-[40px_41px] flex-wrap max-md:max-w-full max-md:mt-10">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/ad5bbae593c2463dac7a2da4d170e8bc/40374c2f807a26f9b787f374c6caf686aff303b5?placeholderIfAbsent=true"
              alt="Hero illustration"
              className="aspect-[1] object-contain w-fit grow shrink-0 basis-0 max-md:max-w-full"
            />
            <div className="flex flex-col items-stretch mt-56 max-md:hidden max-md:mt-10">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ad5bbae593c2463dac7a2da4d170e8bc/14131369cb7bee2c3ca0f89bdee53fa6085d16ac?placeholderIfAbsent=true"
                alt="Decoration 1"
                className="aspect-[1] object-contain w-8"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ad5bbae593c2463dac7a2da4d170e8bc/04a87b50a1d38e9a6d867bc7fffafdd7be2ba34c?placeholderIfAbsent=true"
                alt="Decoration 2"
                className="aspect-[1] object-contain w-8 mt-10"
              />
              <div className="self-center w-0.5 shrink-0 h-[201px] mt-10 border-[rgba(26,50,55,1)] border-solid border-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
