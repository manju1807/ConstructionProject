import BgComponent from '../Components/BgComponent';

const Services = () => {
  const Content = () => {
    return (
      <section className='container h-fit relative w-screen'>hello</section>
    );
  };
  return (
    <BgComponent
      Title={'Services'}
      SubHeading={
        "From Concept to Completion, We've Got Your Construction Needs Covered!"
      }
      Content={<Content />}
    />
  );
};

export default Services;
