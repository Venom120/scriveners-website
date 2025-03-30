export const Quote = () => {
  return (
    <section className="w-full max-w-[1190px] max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[22%] max-md:w-full max-md:ml-0">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/ad5bbae593c2463dac7a2da4d170e8bc/9c65d963d3c55c33193858d566004e96b8d8a857?placeholderIfAbsent=true"
            alt="Quote decoration"
            className="aspect-[1.79] object-contain w-[259px] shrink-0 max-w-full grow rounded-[0px_0px_0px_0px]"
          />
        </div>
        <div className="w-[78%] ml-5 max-md:w-full max-md:ml-0">
          <blockquote className="bg-[rgba(20,46,56,1)] grow text-lg text-white font-normal leading-8 w-full px-11 py-[50px] rounded-[0px_0px_20px_0px] max-md:max-w-full max-md:px-5">
            You know you've read a good book when you turn the last page and
            feel a little as if you have lost a friend.
          </blockquote>
        </div>
      </div>
    </section>
  );
};
