export const Testimonial = ({ img, testimonial, name, position }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img className="rounded-full w-[72px]" src={img} alt={`Photo ${name}`} />
      <p className="my-[30px] font-Barlow text-Very-dark-grayish-blue font-bold px-4 max-w-[400px]">
        {testimonial}
      </p>
      <h3 className="font-Fraunces text-[18px] text-Very-dark-grayish-blue font-black">
        {name}
      </h3>
      <p className="font-Barlow text-[15px] text-Grayish-blue font-medium">
        {position}
      </p>
    </div>
  );
};
