import BgComponent from "../Components/BgComponent";
const About = () => {
  const Content = () => {
    return <h1>hello</h1>;
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
