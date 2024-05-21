import { ImageService } from "./ImageService";
import { ImageTextService } from "./ImageTextService";
import { TextService } from "./TextService";
import imgEggMobile from "../assets/images/mobile/image-transform.jpg";
import imgEggDesktop from "../assets/images/desktop/image-transform.jpg";
import imgGlassMobile from "../assets/images/mobile/image-stand-out.jpg";
import imgGlassDesktop from "../assets/images/desktop/image-stand-out.jpg";
import graphicDesignMobile from "../assets/images/mobile/image-graphic-design.jpg";
import graphicDesignDesktop from "../assets/images/desktop/image-graphic-design.jpg";
import photographyMobile from "../assets/images/mobile/image-photography.jpg";
import photographyDesktop from "../assets/images/desktop/image-photography.jpg";
/* import galleryOrangeMobile from "../assets/images/mobile/image-gallery-orange.jpg";
import galleryOrangeDesktop from "../assets/images/desktop/image-gallery-orange.jpg"; */

export const Services = () => {
  return (
    <section className="grid grid-cols-1 tablet:grid-cols-2">
      <ImageService
        imageMobile={imgEggMobile}
        imageDesktop={imgEggDesktop}
        order="tablet:order-2"
      />

      <TextService
        title={"Transform your brand"}
        text={`We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.`}
        color="bg-Yellow"
        order="tablet:order-1"
      />
      <ImageService
        imageMobile={imgGlassMobile}
        imageDesktop={imgGlassDesktop}
        order="tablet:order-3"
      />
      <TextService
        title={"Stand out to the right audience"}
        text={`Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.`}
        color="bg-Soft-red"
        order="tablet:order-4"
      />
      <ImageTextService
        imgMobile={graphicDesignMobile}
        imgDesktop={graphicDesignDesktop}
        order="tablet:order-5"
        title="Graphic design"
        text="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
      />
      <ImageTextService
        imgMobile={photographyMobile}
        imgDesktop={photographyDesktop}
        order="tablet:order-6"
        title="Photography"
        text="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
      />
    </section>
  );
};
