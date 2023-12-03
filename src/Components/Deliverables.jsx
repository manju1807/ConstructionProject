import DeliverableCard from "./DeliverableCard";
import { PiPencilCircle } from "react-icons/pi";
import { MdOutlineConstruction } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaHandshakeSimple } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import Img from "../assets/ExploreSection/ProjectDesign.jpg";
import Img2 from "../assets/ExploreSection/ProjectExecution.jpg";
import Img3 from "../assets/ExploreSection/CustomerService.jpg";
import Img4 from "../assets/ExploreSection/Promises.jpg";
import Img5 from "../assets/ExploreSection/NRIguide.jpg";

const Deliverables = () => {
  return (
    <section className="relative h-fit max-w-[100vw] w-[100vw]">
      <div className="container flex flex-col px-4 py-6 space-y-4">
        <header className="flex space-y-2 flex-col">
          <h1 className="uppercase font-medium text-xl md:text-2xl">
            Elevate your Options{" "}
            <span className="font-light">explore what we offer</span>
          </h1>
          <p className="text-sm">
            to provide the highest customer satisfaction by providing high
            quality construction.
          </p>
        </header>
        <div className="grid grid-cols-1 px-6 md:px-0 gap-2 md:grid-cols-5 h-full w-full">
          <div className="md:min-h-[80vh] flex justify-center items-start p-2">
            <DeliverableCard
              Icon={<PiPencilCircle />}
              heading={"Project Designs"}
              Img={Img}
              Content={
                "Eminent architects meticulously plan projects, ensuring strict adherence to building laws, with residents' comfort as our top priority."
              }
            />
          </div>
          <div className="md:min-h-[80vh] flex justify-center items-center p-2">
            <DeliverableCard
              Icon={<MdOutlineConstruction />}
              heading={"Project Execution"}
              Img={Img2}
              Content={
                "Meticulous contractor selection, top-tier materials, and stringent quality control ensure timely project completion. We adhere to both Indian and international standards, emphasizing the preservation of each site's natural advantages."
              }
            />
          </div>
          <div className="md:min-h-[80vh] flex justify-center items-start p-2">
            <DeliverableCard
              Icon={<IoPerson />}
              heading={"Customer Services"}
              Img={Img3}
              Content={
                "Enjoy free site visits, perfect documentation, and full customization for the home you envision."
              }
            />
          </div>
          <div className="md:min-h-[80vh] flex justify-center items-center p-2">
            <DeliverableCard
              Icon={<FaHandshakeSimple />}
              heading={"Our Promise"}
              Img={Img4}
              Content={
                "We deliver quality construction, on-schedule completion, guaranteed titles, ensuring every project provides unbeatable value for money."
              }
            />
          </div>
          <div className="md:min-h-[80vh] flex justify-center items-start p-2">
            <DeliverableCard
              Icon={<IoDocumentTextSharp />}
              heading={"NRI Guide"}
              Img={Img5}
              Content={
                "NRI clients are essential to us. We provide seamless assistance for acquiring residential and commercial properties in India."
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
