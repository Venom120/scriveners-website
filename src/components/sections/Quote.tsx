
import { useIsMobile } from "@/hooks/use-mobile";

export const Quote = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className={`w-full ${isMobile ? 'max-w-full px-4 mb-8 mt-4' : 'max-w-[700px] fixed bottom-4 right-5'} flex justify-end mb-4 z-5`}>
      <div className={`flex ${isMobile ? 'flex-col w-full' : 'items-stretch max-w-[800px]'}`}>
        {/* Image Section */}
        <div className={`${isMobile ? 'w-full' : 'w-[30%]'} flex items-stretch`}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ad5bbae593c2463dac7a2da4d170e8bc/9c65d963d3c55c33193858d566004e96b8d8a857?placeholderIfAbsent=true"
            alt="Quote decoration"
            className={`aspect-[1.79] object-cover w-full ${isMobile ? 'rounded-t-[20px]' : 'rounded-[20px_0px_0px_0px]'}`}
          />
        </div>

        {/* Quote Block */}
        <div className={`${isMobile ? 'w-full' : 'w-[70%]'} flex items-stretch`}>
          <blockquote 
            className={`bg-[rgba(20,46,56,1)] grow text-lg text-white font-normal leading-6 w-full px-4 py-6 ${isMobile ? 'rounded-b-[20px]' : 'rounded-[0px_0px_20px_0px] px-11 py-[50px]'}`}
          >
            You know you've read a good book when you turn the last page and
            feel a little as if you have lost a friend.
          </blockquote>
        </div>
      </div>
    </section>
  );
};
