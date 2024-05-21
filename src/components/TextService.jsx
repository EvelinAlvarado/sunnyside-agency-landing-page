export const TextService = ({ title, text, color, order }) => {
  return (
    <div
      className={`h-[437px] px-6 text-center flex flex-col place-content-around py-6 bg-white tablet:h-auto ${order} lg:px-[100px] lg:text-left lg:py-12`}
    >
      <h2 className="font-Fraunces text-[2rem] font-black tablet:text-[1.25rem] tabletxl:text-[2rem] lg:text-[2.5rem]">
        {title}
      </h2>
      <p className="font-Barlow text-Dark-grayish-blue text-[1.125rem] leading-[1.875rem] tablet:text-[0.8rem] tablet:leading-[1.5rem] tabletxl:text-[1rem] lg:text-[18px]">
        {text}
      </p>
      <div className="relative flex justify-center items-center lg:justify-start">
        <button className="uppercase font-Fraunces font-black cursor-pointer z-10 lg:px-2">
          Learn more
        </button>
        <div
          className={`w-[137px] h-[10px] ${color} rounded-full absolute -bottom-[0.10rem] z-0 opacity-25`}
        ></div>
      </div>
    </div>
  );
};
