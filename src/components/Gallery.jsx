import { ImageService } from "./ImageService";
import milkMobile from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import milkDesktop from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import orangeMobile from "../assets/images/mobile/image-gallery-orange.jpg";
import orangeDesktop from "../assets/images/desktop/image-gallery-orange.jpg";
import coneMobile from "../assets/images/mobile/image-gallery-cone.jpg";
import coneDesktop from "../assets/images/desktop/image-gallery-cone.jpg";
import sugarMobile from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import sugarDesktop from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

export const Gallery = () => {
  return (
    <div className="grid grid-cols-2 sm:flex">
      <ImageService imageMobile={milkMobile} imageDesktop={milkDesktop} />
      <ImageService imageMobile={orangeMobile} imageDesktop={orangeDesktop} />
      <ImageService imageMobile={coneMobile} imageDesktop={coneDesktop} />
      <ImageService imageMobile={sugarMobile} imageDesktop={sugarDesktop} />
    </div>
  );
};
