"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

const Gallery = () => {
  return (
    <div id="gallery-section" className="bg-black">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24">
        <div className="text-center">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
              Galerie
            </h2>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-3xl lg:text-5xl font-semibold text-white">
              Voyage Culinaire en Images
            </h3>
          </Fade>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 my-16 sm:space-x-6 space-y-6 md:space-y-0 px-6">
          <div className="col-span-6 flex justify-center overflow-hidden rounded-3xl">
            <Image
              src="/images/Gallery/foodone.jpg"
              alt="pizza-one"
              width={1000}
              height={805}
              className="inner-img"
            />
          </div>

          <div className="col-span-6 flex justify-center">
            <div className="grid grid-rows-1 grid-flow-row gap-4">
              <div className="row-span-1 overflow-hidden rounded-3xl">
                <Image
                  src="/images/Gallery/foodtwo.jpg"
                  alt="pizza-two"
                  width={700}
                  height={405}
                  className="inner-img"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/Gallery/foodthree.jpg"
                    alt="pizza-three"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src="/images/Gallery/foodfour.jpg"
                    alt="pizza-four"
                    width={500}
                    height={405}
                    className="inner-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nouvelle section avec les deux images de la carte et l'image des horaires */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-6">
          {/* Image 1 - Carte */}
          <div className="overflow-hidden rounded-3xl w-full mx-auto">
            <Image
              src="/images/Gallery/cardone.jpg"
              alt="carte-1"
              id="cardone"
              width={1600}
              height={900}
              className="inner-img w-full transform-none hover:transform-none" // Retire le zoom au survol
            />
          </div>

          {/* Image 2 - Carte */}
          <div className="overflow-hidden rounded-3xl w-full mx-auto">
            <Image
              src="/images/Gallery/cardtwo.jpg"
              alt="carte-2"
              width={1600}
              height={900}
              className="inner-img w-full transform-none hover:transform-none" // Retire le zoom au survol
            />
          </div>

          {/* Image 3 - Horaires */}
          <div className="overflow-hidden rounded-3xl col-span-1 sm:col-span-2">
            <Image
              src="/images/Gallery/hours.jpg"
              alt="horaires"
              width={800}
              height={400}
              className="inner-img w-70% transform-none hover:transform-none mx-auto rounded" // Retire le zoom au survol
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
