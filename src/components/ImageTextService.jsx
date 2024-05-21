export const ImageTextService = ({
  imgMobile,
  imgDesktop,
  order,
  title,
  text,
}) => {
  return (
    <div
      className={`${order} relative pt-[95%] sm:pt-[50%] tablet:pt-[45%] tabletxl:pt-[50%]`}
    >
      <picture className="absolute top-0 z-[-1] ">
        <source media="(max-width:640px)" srcSet={imgMobile} />
        <source media="(min-width:641px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="Image Service" />
      </picture>
      <div className="text-center text-Dark-desaturated-cyan mx-3 px-6 lg:px-8  xl:px-[6rem]">
        <h2 className="font-black font-Fraunces text-[28px] mb-7 tablet:mb-2 tablet:text-[1.25rem] tabletxl:text-[1.5rem] lg:text-[2.5rem]">
          {title}
        </h2>
        <p className="font-semibold font-Barlow mb-[60px] tablet:mb-0 tablet:mb-20px text-[1.125rem] tablet:text-[0.8rem] tablet:leading-[1.4rem] tablet:pb-6 tabletxl:text-[0.9rem] lg:text-[18px] xl:mb-10 xl:leading-[1.5rem]">
          {text}
        </p>
      </div>
    </div>
  );
};
