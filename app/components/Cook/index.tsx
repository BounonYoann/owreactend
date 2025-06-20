"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

const Cook = () => {
  return (
    <div className="relative bg-black" id="cook-section">
      <div className="mx-auto max-w-7xl lg:pt-20 sm:pb-24 px-6">
        <div className="absolute right-0 bottom-[-18%] hidden lg:block">
          <Image
            src={"/images/Cook/burger.png"}
            alt="burger-image"
            width={463}
            height={622}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 my-16 space-x-5">
          <div className="col-span-6 flex justify-start">
            <Image
              src="/images/Cook/cook.png"
              alt="nothing"
              width={636}
              height={808}
            />
          </div>

          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h2 className="text-pink text-lg font-normal mb-3 ls-51 uppercase text-start">
                Le Plaisir De Bien Manger
              </h2>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h3 className="text-3xl lg:text-5xl font-semibold text-white text-start ">
                La Passion Des Pâtes Maison
              </h3>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-white md:text-lg font-normal mb-10 text-start mt-2">
                Savourez des recettes traditionnelles, préparées avec des
                ingrédients frais et authentiques. Situé au bord de l&apos;eau,
                O&apos;W vous invite à une escapade gourmande aux saveurs
                italiennes. Dégustez nos arancini croustillants, notre carpaccio
                savoureux, et nos pâtes fraîches faites maison. Finissez sur une
                touche sucrée avec notre tiramisu artisanal. Une cuisine
                authentique, un cadre idyllique.{" "}
              </p>
              <p className="text-white md:text-lg font-normal mb-10 text-start mt-1">
                Laissez-vous porter par l&apos;ambiance chaleureuse et la
                douceur d&apos;un repas au bord de l&apos;eau.
              </p>
              <div className="flex align-middle justify-center md:justify-start">
                <button className="text-xl font-medium rounded-full text-white py-5 px-6 bg-pink lg:px-10 mr-6">
                  <Link href="#cardone">Nos Horaires</Link>
                </button>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cook;
