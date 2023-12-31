import BgComponent from '../Components/BgComponent';

const Projects = () => {
  const Content = () => {
    return <div>hello</div>;
  };
  return (
    <BgComponent
      Title={'Contact Us'}
      SubHeading={'Your Voice Matters! Reach Out – We Love to Hear from You!'}
      Content={<Content />}
    />
  );
};

export default Projects;
