import Accordions from "./Accordions";
const Partners = () => {
  const accordionItems = [
    {
      title: "Consulting by Top-Notch Experts",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      title: "Detailed Designing Process",
      content:
        "Our detailed designing process involves a meticulous approach to understanding your unique requirements. We start by conducting thorough research, followed by brainstorming sessions and collaborative design discussions. Our team of experienced designers then creates tailored solutions that align perfectly with your goals and vision.",
    },
    {
      title: "Tailor-Made Services",
      content:
        "Our commitment to excellence extends to providing tailor-made services that cater to your specific needs. Whether you require customized consulting, specialized design work, or unique solutions, our team is dedicated to delivering services that are crafted to suit your business and objectives. We believe in going beyond the conventional to ensure your satisfaction.",
    },
  ];

  return (
    <section className="h-fit w-[100vw] bg-secondary2 overflow-y-auto">
      <div className="container my-6 flex flex-col">
        <div className="w-full h-fit relative flex flex-col space-y-4 py-2 my-2 md:py-2 items-center">
          <div className="flex">
            <h1
              className="uppercase inline-block mx-auto tracking-widest px-6 h-fit py-2"
              style={{
                borderBottom: "1px solid #0f172a1a",
                borderTop: "1px solid #0f172a1a",
              }}
            >
              Our <span className="font-semibold">Partners</span>
            </h1>
          </div>
          <div className="flex relative flex-wrap md:flex-row items-center justify-center gap-4 md:gap-6 py-8 md:py-8">
            <h2 className="flex items-center gap-2">Perfect Design</h2>
            <h2 className="flex items-center gap-2">Flexible Pricing</h2>
            <h2 className="flex items-center gap-2">Top Quality</h2>
            <h2 className="flex items-center gap-2">Premium Materials</h2>
            <h2 className="flex items-center gap-2">100% Secure</h2>
          </div>
        </div>
        <div className="w-full h-fit flex flex-col-reverse py-4 gap-4 md:flex-row ">
          <div className=" w-full h-full flex place-content-center items-center ">
            <div className="flex flex-col font-headingcursive text-3xl font-medium cursor-pointer text-gray-500 items-center justify-end gap-4 md:gap-6 py-8">
              <h2 className="flex  items-center gap-2 hover:text-primary transition duration-300">
                Strategy and Planning
              </h2>
              <h2 className="flex items-center gap-2 hover:text-primary transition duration-300">
                Designing
              </h2>
              <h2 className="flex  items-center gap-2 hover:text-primary transition duration-300">
                Implementation
              </h2>
              <h2 className="flex  items-center gap-2 hover:text-primary transition duration-300">
                Quality Assurance
              </h2>
              <h2 className="flex  items-center gap-2  hover:text-primary transition duration-300">
                Guidance & Handover
              </h2>
            </div>
          </div>
          <div className="w-full h-full flex place-content-start items-center px-4 ">
            <div className="flex flex-col w-full space-y-12 md:space-y-18 px-4 md:px-2">
              <div className="md:space-y-12 md:max-w-xl space-y-4 py-2">
                <h1 className="md:text-3xl text-2xl font-light uppercase leading-[1.8rem]">
                  Our Approch{" "}
                  <span className="font-medium text-actionColor">Process</span>
                </h1>
                <div className="text-md leading-5 w-full">
                  <div className="h-full w-full flex flex-col items-center justify-center">
                    <Accordions items={accordionItems} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
