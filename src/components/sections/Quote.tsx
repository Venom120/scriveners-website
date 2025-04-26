
import { useIsMobile } from "@/hooks/use-mobile";

export const Quote = () => {
  const isMobile = useIsMobile();
  
  if (isMobile) return null;
  
  return (
    <section className="w-full max-w-[700px] flex justify-end mb-4 fixed bottom-4 right-5 z-5 max-md:max-w-full">
      <div className="flex items-stretch max-w-[800px] max-md:flex-col max-md:items-stretch">
        {/* Image Section */}
        <div className="w-[30%] max-md:w-full max-md:ml-0 flex items-stretch">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ad5bbae593c2463dac7a2da4d170e8bc/9c65d963d3c55c33193858d566004e96b8d8a857?placeholderIfAbsent=true"
            alt="Quote decoration"
            className="aspect-[1.79] object-cover w-full h-full rounded-[20px_0px_0px_0px]"
          />
        </div>

        {/* Quote Block */}
        <div className="w-[70%] max-md:w-full max-md:ml-0 flex items-stretch">
          <blockquote className="bg-[rgba(20,46,56,1)] grow text-lg text-white font-normal leading-6 w-full px-11 py-[50px] rounded-[0px_0px_20px_0px] max-md:max-w-full max-md:px-5">
            You know you've read a good book when you turn the last page and
            feel a little as if you have lost a friend.
          </blockquote>
        </div>
      </div>
    </section>
  );
};
