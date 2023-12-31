import Accordions from './Accordions';
import TestimonialCard from './TestimonialCard';
const Testimonials = () => {
  const accordionItems = [
    {
      title: 'Construction Consultation with Industry Experts',
      content:
        'Have questions about your construction project? Our team of top-notch experts is here to provide comprehensive consulting services. We understand that the success of your project depends on reliable advice, and our experienced professionals are committed to guiding you through every step of the construction process. Trust us for expert insights that make a difference.',
    },
    {
      title: 'Thorough Designing Process for Your Construction Project',
      content:
        "Embark on a journey of detailed design with our meticulous process tailored for your construction needs. We initiate with in-depth research, followed by engaging brainstorming sessions and collaborative design discussions. Our seasoned team of designers then crafts bespoke solutions that perfectly align with your project's goals and vision. From concept to execution, we're with you all the way.",
    },
    {
      title: 'Customized Construction Services',
      content:
        'Experience excellence with our tailor-made services designed to meet your unique construction requirements. Whether you need personalized consulting, specialized design work, or unique solutions, our dedicated team is committed to delivering services crafted specifically for your business and objectives. We go beyond the conventional to ensure your satisfaction and project success.',
    },
  ];

  const testimonialCards = [
    {
      testimonial:
        'I had numerous questions about my construction project, and the team of top-notch experts here provided not only comprehensive consulting services but also reassured me at every step. Their reliable advice and commitment made a significant difference in the success of my project.',
      image:
        'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg',
      name: 'John Smith',
      occupation: 'Project Manager',
    },
    {
      testimonial:
        'I had numerous questions about my construction project, and the team of top-notch experts here provided not only comprehensive consulting services but also reassured me at every step. Their reliable advice and commitment made a significant difference in the success of my project.',
      image:
        'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/2.jpg',
      name: 'Alice Johnson',
      occupation: 'Architect',
    },
    {
      testimonial:
        'I had numerous questions about my construction project, and the team of top-notch experts here provided not only comprehensive consulting services but also reassured me at every step. Their reliable advice and commitment made a significant difference in the success of my project.',
      image:
        'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/1.jpg',
      name: 'Robert Carter',
      occupation: 'Property Developer',
    },
    {
      testimonial:
        'I had numerous questions about my construction project, and the team of top-notch experts here provided not only comprehensive consulting services but also reassured me at every step. Their reliable advice and commitment made a significant difference in the success of my project.',
      image:
        'https://monteluke.com.au/wp-content/gallery/linkedin-profile-pictures/2.jpg',
      name: 'Alice Johnson',
      occupation: 'Property Developer',
    },
  ];
  return (
    <section className='h-fit w-[100vw] bg-primary overflow-y-auto py-12 text-gray-50'>
      <div className='container my-6 flex flex-col space-y-4 md:space-y-6'>
        <div className='w-full h-fit relative flex flex-col space-y-4 py-2 my-2 md:py-2 items-center'>
          <div className='flex'>
            <h1
              className='uppercase inline-block mx-auto tracking-widest font-semibold px-6 h-fit py-2 border-gray-50'
              style={{
                borderBottom: '1px solid',
                borderTop: '1px solid',
              }}
            >
              Client Satisfaction,{' '}
              <span className='font-light'>Our REPUTATION</span>
            </h1>
          </div>
        </div>
        <div className='w-full h-fit'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 md:gap-y-6 lg:gap-y-8 transition-all duration-300'>
            {testimonialCards.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                testimonial={testimonial.testimonial}
                image={testimonial.image}
                name={testimonial.name}
                occupation={testimonial.title}
              />
            ))}
          </div>
        </div>
        <div className='w-[80%] h-fit flex flex-col justify-center place-self-center items-start space-y-2 px-6 '>
          <h1 className='md:text-3xl text-2xl font-medium uppercase leading-[1.8rem]'>
            FAQ&apos;
            <span className='text-2xl text-actionColor'>s</span>
          </h1>
          <div className='text-sm leading-5 w-full'>
            <div className='h-full w-full flex flex-col items-center justify-center'>
              <Accordions items={accordionItems} bg={'dark'} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
