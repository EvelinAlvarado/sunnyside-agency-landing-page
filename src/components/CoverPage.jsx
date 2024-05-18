import headerDesktop from "../assets/images/desktop/image-header.jpg";
import headerMobile from "../assets/images/mobile/image-header.jpg";

export const CoverPage = () => {
  return (
    <main>
      <picture>
        <source media="(max-width:640px)" srcSet={headerMobile} />
        <source media="(min-width:641px)" srcSet={headerDesktop} />
        {/* default */}
        <img src={headerDesktop} alt="Image header" />
      </picture>
    </main>
  );
};
