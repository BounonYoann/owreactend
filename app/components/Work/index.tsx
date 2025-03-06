"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

interface cardDataType {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: "/images/Features/featureOne.svg",
    heading: "Spécialités",
    subheading:
      "Laissez-vous tenter par nos pâtes fraîches, arancini, carpaccio et desserts maison.",
  },
  {
    imgSrc: "/images/Features/featureTwo.svg",
    heading: "Produits frais",
    subheading:
      "Nos plats sont préparés chaque jour avec des ingrédients frais et de saison.",
  },
  {
    imgSrc: "/images/Features/featureThree.svg",
    heading: "Ambiance chaleureuse",
    subheading:
      "Un cadre cosy et raffiné pour une expérience culinaire immersive.",
  },
  {
    imgSrc: "/images/Features/featureFour.svg",
    heading: "Expérience privatisée",
    subheading:
      "Possibilité de privatiser le restaurant pour vos événements spéciaux.",
  },
];

const Work = () => {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl pt-20 pb-30 px-6" id="about-section">
        <div className="text-center mb-14">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-pink text-lg font-normal mb-3 ls-51 uppercase">
              Découvrez Notre Univers
            </h3>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-3xl lg:text-5xl font-semibold text-lightgrey">
              L&apos;talie à Votre Table
            </p>
          </Fade>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-32">
          <Fade
            direction={"up"}
            delay={1000}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {cardData.map((items, i) => (
              <div className="card-b p-8 relative rounded-3xl" key={i}>
                <div className="work-img-bg rounded-full hidden lg:flex justify-center items-center absolute top-[-35%] left-[5%]">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={510}
                    height={10}
                    className="w-full object-contain"
                  />
                </div>
                <h3 className="text-2xl text-black font-semibold text-center mt-8">
                  {items.heading}
                </h3>
                <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
                  {items.subheading}
                </p>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Work;
