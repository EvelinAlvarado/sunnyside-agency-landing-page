export const ImageService = ({ imageMobile, imageDesktop, order }) => {
  return (
    <picture className={order}>
      <source media="(max-width:669px )" srcSet={imageMobile} />
      <source media="(min-width:700px )" srcSet={imageDesktop} />
      <img src={imageMobile} alt="Service Image" className="sm:bg-cover" />
      {/*         width: -webkit-fill-available; */}
    </picture>
  );
};
