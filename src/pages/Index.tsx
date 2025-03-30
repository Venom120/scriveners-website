import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Quote } from "@/components/sections/Quote";

const Index = () => {
  return (
    <main className="bg-[rgba(255,255,255,0.25)] border flex flex-col overflow-hidden items-stretch pl-20 rounded-[54px] border-white border-solid max-md:pl-5">
      <div className="w-full max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[73%] max-md:w-full max-md:ml-0">
            <Header />
          </div>
          <div className="w-[27%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-[rgba(20,46,56,1)] flex grow flex-col items-center justify-center w-full px-[61px] py-[39px] rounded-[0px_19px_0px_19px] max-md:mt-10 max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/ad5bbae593c2463dac7a2da4d170e8bc/68b64136ef16a17cbe9841f570bd598bad6ebb1f?placeholderIfAbsent=true"
                alt="Logo"
                className="aspect-[4.5] object-contain w-36 max-w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <Hero />
      <Quote />
    </main>
  );
};

export default Index;
