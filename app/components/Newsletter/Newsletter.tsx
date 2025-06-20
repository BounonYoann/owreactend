"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
const Newsletter = () => {
  return (
    <div className="relative" id="newsletter">
      <div className="mx-auto max-w-2xl bg-pink br-50 md:max-w-7xl mt-48 rounded-lg">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 md:grid-cols-12 xl:gap-x-8">
          {/* COLUMN-1 */}
          <div className="col-span-7">
            <div className="m-10 lg:ml-32 lg:mt-20 lg:mb-20">
              <Fade
                direction={"up"}
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <h3 className="text-lg font-normal text-white mb-3 ls-51">
                  {" "}
                  Votre opinion compte énormément pour nous !{" "}
                </h3>
              </Fade>
              <Fade
                direction={"up"}
                delay={800}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                <h3 className="text-1xl md:text-2xl font-semibold text-white mb-8">
                  Si vous avez apprécié notre service, nous vous serions
                  reconnaissants de bien vouloir laisser un avis sur Google.
                  Cela nous aide à améliorer constamment la qualité de nos
                  services et à mieux vous satisfaire.
                </h3>
              </Fade>

              <div>
                <Fade
                  direction={"up"}
                  delay={1200}
                  cascade
                  damping={1e-1}
                  triggerOnce={true}
                >
                  <Link
                    href="https://g.page/r/CWygaS_CtFmiEBM/review"
                    className="inline-flex items-center px-6 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Donnez nous votre avis
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </Fade>
              </div>
            </div>
          </div>

          {/* COLUMN-2 */}
          <div className="col-span-5 relative hidden md:block">
            <div>
              <Image
                src={"/images/Newsletter/avis.png"}
                alt="soup-image"
                width={626}
                height={602}
                className="-mt-24"
              />
            </div>

            <div className="absolute bottom-[10%] left-[0%]">
              <Image
                src={"/images/Newsletter/yellow.svg"}
                alt="yellow-image"
                width={59}
                height={59}
              />
            </div>
            <div className="absolute bottom-[20%] right-[20%]">
              <Image
                src={"/images/Newsletter/blue.svg"}
                alt="blue-image"
                width={25}
                height={25}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
