import BgComponent from "../Components/BgComponent";
import BgImage from "../assets/AboutDP.jpg";
const About = () => {
  const Content = () => {
    return (
      <>
        <div className="bg-green-200 flex flex-col gap-2 md:gap-4 md:flex-row min-h-full min-w-full">
          <div className="h-full w-full">hello</div>
          <div className="h-full w-full flex place-content-center">
            <div className="flex md:h-[250px]">
              <img src={BgImage} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <BgComponent
      Title={"About Our Company"}
      SubHeading={"Consultation | Project Management | Construction"}
      Content={<Content />}
    />
  );
};

export default About;
