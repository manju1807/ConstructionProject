import Img from '../assets/BgCover.jpg';

// eslint-disable-next-line react/prop-types
const BgComponent = ({ Title, SubHeading, Content }) => {
  return (
    <section className='flex flex-col h-fit overflow-hidden'>
      <div className='relative flex items-center justify-center h-[35vh]'>
        <img
          src={Img}
          className='absolute inset-0 w-full h-full object-cover blur-[1px]'
          alt=''
        />
        <div className='absolute inset-0 bg-gray-900 h-[35vh] opacity-80'></div>
        <div className='z-20 text-white text-center leading-2 relative'>
          <h1 className='text-3xl md:text-5xl font-semibold mb-2 tracking-wider shadow-md'>
            {Title}
          </h1>
          <h4 className='text-sm md:text-md font-normal shadow-md'>
            {SubHeading}
          </h4>
        </div>
      </div>
      <div className='container px-4 py-8 md:p-12 '>{Content}</div>
    </section>
  );
};

export default BgComponent;
