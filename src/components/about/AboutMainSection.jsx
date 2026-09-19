import About1 from "../../assets/about/about-1.jpg";
import About2 from "../../assets/about/about-2.jpg";
import { EASE_OUT } from "../shared/motion";
import { Reveal, RevealGroup, RevealItem, Words } from "../shared/guestMotion";

// Each photo opens from the page's outer edge in toward its text, drawing
// the eye across to it. The wipe runs on the photo but is triggered by its
// frame (the RevealGroup around it): a fully clipped element has no visible
// area, so it could never report itself as scrolled into view.
const WIPE_FROM_LEFT = {
  hidden: { clipPath: "inset(0% 100% 0% 0%)" },
  shown: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.2, ease: EASE_OUT } },
};
const WIPE_FROM_RIGHT = {
  hidden: { clipPath: "inset(0% 0% 0% 100%)" },
  shown: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 1.2, ease: EASE_OUT } },
};

export default function AboutMainSection() {
  return (
    <>
      <div
        data-component="AboutMainSection"
        className="p-[12rem] max-md:px-[6rem] max-sm:px-[4rem] w-full flex flex-col gap-[4.8rem]"
      >
        <Reveal y={24}
          data-component="Block1"
          className="bg-[color:var(--text-color)] p-[6rem] max-sm:p-[4rem] flex flex-col gap-[1.8rem] text-[var(--white)] font-secondary"
        >
          <Words
            as="h1"
            onLoad
            delay={0.2}
            text="Seamless Comfort and Hospitality"
            className="text-6xl font-secondary font-bold"
          />
          <p className="text-3xl">
            Five Clover Abijo brings modern comfort together with the warmth that defines West African hospitality, set in the upscale Abijo GRA neighborhood along the Lekki-Epe Expressway. It's a natural fit for travelers who want workspace, relaxation, and easy access to the surrounding area all in one place.
          </p>
        </Reveal>
        <div data-component="Block2" className="flex flex-col w-full">
          <div className="flex max-sm:flex-col">
            <RevealGroup amount={0.3}
              data-component="Block2Image"
              className="w-[60%] max-sm:w-[100%] max-w-[40rem] max-sm:max-w-[100%] max-sm:h-[25rem]"
            >
              <RevealItem
                as="img"
                variants={WIPE_FROM_LEFT}
                src={About1}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </RevealGroup>
            <Reveal delay={0.15}
              data-component="Block2Text"
              className="flex flex-col gap-[1.8rem] font-secondary bg-[color:var(--accent-2)] w-[100%] p-[12rem] max-md:p-[6rem] max-sm:p-[4rem]"
            >
              <h2 className="text-6xl font-bold">
                Your Ideal Retreat for Comfort and Convenience
              </h2>
              <p className="text-3xl">
                Just minutes from the Lekki-Epe Expressway, Five Clover Inn sets a new bar for hospitality in Abijo GRA - a genuinely restful stay for guests traveling on business or for leisure. Rooms combine comfort with function: king-sized beds and premium bedding, a complimentary coffee station, air conditioning, free Wi-Fi, flat-screen TVs, and private ensuite bathrooms.
              </p>
            </Reveal>
          </div>
          {/* Second row - you can add this structure for additional img+text pairs */}
          <div className="flex max-sm:flex-col">
            <Reveal delay={0.15}
              data-component="Block2Text"
              className="flex flex-col gap-[1.8rem] font-secondary bg-[color:var(--accent-2)] w-[100%] p-[12rem] max-md:p-[6rem] max-sm:p-[4rem]"
            >
              <h2 className="text-6xl font-bold">
                Experience Tranquil Stays with Unmatched Security
              </h2>
              <p className="text-3xl">
                Five Clover Abijo keeps security front and center, with advanced surveillance systems and a dedicated team watching over the property day and night. It's a stay built around more than just a room - comfort, safety, and genuinely personal service.
              </p>
            </Reveal>
            <RevealGroup amount={0.3}
              data-component="Block2Image"
              className="w-[60%] max-w-[40rem] max-sm:w-[100%] max-sm:max-w-[100%] max-sm:h-[25rem]"
            >
              <RevealItem
                as="img"
                variants={WIPE_FROM_RIGHT}
                src={About2}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </RevealGroup>
          </div>
        </div>
        <RevealGroup stagger={0.15}
          data-component="Block3"
          className="bg-[color:var(--text-color)] p-[6rem] flex max-sm:flex-col gap-[6rem] text-[var(--white)] font-secondary"
        >
          <RevealItem className="flex flex-col gap-[1.8rem]">
            <h2 className="text-6xl font-secondary font-bold">Our Vision</h2>
            <p className="text-3xl">
              We're building toward something larger than any one hotel - a hospitality group grown organically, excelling in place, service, people, and system.
            </p>
          </RevealItem>
          <RevealItem className="flex flex-col gap-[1.8rem]">
            <h2 className="text-6xl font-secondary font-bold">Our Mission</h2>
            <p className="text-3xl">
              At Five Clover Abijo, that vision means one thing for guests: a world-class experience, every time.
            </p>
          </RevealItem>
        </RevealGroup>
      </div>
    </>
  );
}
