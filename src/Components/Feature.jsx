import GreenBtn from "./GreenBtn";
import Img from "../assets/vu-anh-TiVPTYCG_3E-unsplash(1).jpg";
import { IoIosStar } from "react-icons/io";
const Feature = () => {
  return (
    <section className="relative h-fit max-w-[100vw] w-[100vw] overflow-y-auto md:overflow-hidden">
      <div className="container my-6 flex flex-col">
        <div className="w-full h-[70vh] flex flex-col py-4 gap-4 md:flex-row ">
          <div className=" w-full h-full flex place-content-center items-center ">
            <div className="md:h-[400px] md:w-full w-[380px] sm:px-4 overflow-clip rounded-2xl">
              <img
                src={Img}
                className="h-full w-full object-cover rounded-2xl shadow-xl"
                alt="Feature img"
              />
            </div>
          </div>
          <div className=" w-full h-full flex place-content-center items-center px-4">
            <div className="flex flex-col space-y-12 md:space-y-18 px-4 md:px-2">
              <div className="max-w-md md:space-y-4 space-y-4 py-2">
                <h1 className="md:text-3xl text-2xl font-light uppercase leading-[1.8rem]">
                  Where Innovation Meets Construction{" "}
                  <span className="font-medium">Excellence</span>
                </h1>
                <p className="text-md leading-5">
                  We pride ourselves on pioneering cutting-edge solutions in
                  every project. Our commitment to pushing the boundaries of
                  traditional construction ensures that your vision is brought
                  to life with unparalleled ingenuity and precision.
                </p>
              </div>
              <div>
                <GreenBtn Content={"Know More"} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[30vh] relative flex flex-col space-y-4 py-6 my-6 md:py-6 items-center"
          style={{
            borderBottom: "1px solid #0f172a1a",
            borderTop: "1px solid #0f172a1a",
          }}
        >
          <div className="flex">
            <h1
              className="uppercase inline-block mx-auto tracking-widest px-6 h-fit py-2"
              style={{
                borderBottom: "1px solid #0f172a1a",
                borderTop: "1px solid #0f172a1a",
              }}
            >
              Our <span className="font-medium">Features</span>
            </h1>
          </div>
          <div className="flex flex-wrap md:flex-row items-center justify-center gap-4 md:gap-6 py-8 md:py-12">
            <h2 className="flex items-center gap-2">
              <span className="text-actionColor">
                <IoIosStar />
              </span>
              Perfect Design
            </h2>
            <h2 className="flex items-center gap-2">
              <span className="text-actionColor">
                <IoIosStar />
              </span>
              Flexible Pricing
            </h2>
            <h2 className="flex items-center gap-2">
              <span className="text-actionColor">
                <IoIosStar />
              </span>
              Top Quality
            </h2>
            <h2 className="flex items-center gap-2">
              <span className="text-actionColor">
                <IoIosStar />
              </span>
              Premium Materials
            </h2>
            <h2 className="flex items-center gap-2">
              <span>
                <IoIosStar className="text-actionColor" />
              </span>
              100% Secure
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
