import { Testimonial } from "./Testimonial";
import emilyPhoto from "../assets/images/image-emily.jpg";
import jenniePhoto from "../assets/images/image-jennie.jpg";
import thomasPhoto from "../assets/images/image-thomas.jpg";

export const TestimonialsContainer = () => {
  return (
    <section className="bg-white py-16 xl:px-[100px]">
      <h2 className="uppercase font-Fraunces font-black text-Grayish-blue text-center tracking-[0.25rem] mb-16">
        Client Testimonials
      </h2>
      <div className="flex flex-col gap-16 xl:gap-4 xl:grid xl:grid-cols-3">
        <Testimonial
          img={emilyPhoto}
          testimonial="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          position="Marketing Director"
        />
        <Testimonial
          img={thomasPhoto}
          testimonial="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          position="Chief Operating Officer"
        />
        <Testimonial
          img={jenniePhoto}
          testimonial=" Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          position="Business Owner"
        />
      </div>
    </section>
  );
};
