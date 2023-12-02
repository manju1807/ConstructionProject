import BlackBtn from "./BlackBtn";
import GreenBtn from "./GreenBtn";
import HeroImg2 from "../assets/r-architecture-JvQ0Q5IkeMM-unsplash.png";

const Hero = () => {
  return (
    <section className="relative min-h-[100vh] min-w-full max-w-[100vw] overflow-y-auto mb-4 md:mb-0 md:overflow-hidden">
      <div className="container min-h-[100vh] w-screen flex flex-col gap-4 px-4">
        <div className="min-h-[75vh] w-full flex">
          <div className="bg-primary mt-[4rem] rounded-2xl w-full flex flex-col-reverse md:flex-row md:gap-4 gap-0 justify-center items-center">
            <div className="flex flex-col justify-between items-center h-full w-full md:py-16 pb-8 space-y-12 px-4">
              <div className="flex flex-col px-4 md:px-0 space-y-4 md:space-y-2 max-w-md">
                <h1 className="md:text-4xl text-2xl text-white font-semibold md:leading-[2.8rem] leading-[2rem]">
                  <span className="font-semibold uppercase">
                    Your vision, our expertise:
                  </span>
                  <span className="font-thin uppercase">
                    {" "}
                    building success{" "}
                  </span>
                  <span className="text-5xl font-headingcursive text-actionColor">
                    Together
                  </span>
                </h1>
                <p className="font-inter md:text-md text-sm text-secondary leading-6">
                  In Construction&apos;s realm, we transcend, crafting your
                  vision as artisans of aspiration. Your dreams, a canvas
                  awaiting the precision and skill that define our creative
                  journey.
                </p>
              </div>
              <div className="flex flex-row gap-6 max-w-md w-full items-center px-4 md:px-0">
                <GreenBtn Content={"Contact Us"} />
                <BlackBtn Content={"Our Services"} />
              </div>
            </div>
            <div className="flex h-full w-full relative justify-center items-center rounded-2xl overflow-x-clip">
              <img
                src={HeroImg2}
                className="relative md:absolute h-[450px] md:h-[650px] w-[100%] md:top-[-5.3rem] md:right-0 top-[-4rem] left-0 "
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="min-h-[20vh] w-full flex justify-center items-center bg-secondary rounded-2xl px-4 py-2">
          <div className="flex flex-col md:flex-row space-y-6 md:min-w-full md:px-[8rem] md:py-2 py-4 justify-between items-center">
            <p className="uppercase text-md font-semibold max-w-full md:w-[18rem] md:leading-6 w-[22rem]">
              WE ARE PROUD FOR{" "}
              <span className="text-actionColor">THE RESULTS {""}</span>IN THE
              PAST 10 years{" "}
            </p>
            <div className="flex flex-wrap px-4 md:py-2 md:space-x-12 uppercase items-start gap-6 md:gap-2">
              <div className="flex flex-col space-y-2 max-w-[16rem]">
                <h1 className="text-xl font-semibold">1,5K+</h1>
                <p className="text-sm max-w-[12rem] ">
                  Clients And Partners Across the world
                </p>
              </div>
              <div className="flex flex-col space-y-2 max-w-[16rem]">
                <h1 className="text-xl font-semibold">80+</h1>
                <p className="text-sm max-w-[12rem]">Award Winning Aquired</p>
              </div>
              <div className="flex flex-col space-y-2 max-w-[16rem]">
                <h1 className="text-xl font-semibold">90+</h1>
                <p className="text-sm max-w-[12rem]">
                  Projects Completed in 24 Countries
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
