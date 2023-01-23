import React from "react";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "../actionButton/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          <div className="md:-mt-20">
            <div>
              <div>
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
              delectus, exercitationem minima nostrum quibusdam commodi culpa
              magni voluptas corporis adipisci! Earum tempore incidunt neque
              molestiae reiciendis corporis, eum praesentium est.
            </p>
          </div>
          <div>
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </div>
        </div>
        <div>
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </div>
      {isAboveMediumScreen && (
        <div>
          <div>
            <div>
              <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
