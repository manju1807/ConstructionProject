import Img from '../assets/BgCover.jpg';
const BgComponent = ({ Title, SubHeading, Content }) => {
  return (
    <section className='max-h-fit'>
      <div className='relative'>
        <div className='h-[60vh] w-full flex items-center justify-center'>
          <img
            src={Img}
            className='h-full w-full object-cover blur-[1px]'
            alt=''
          />
          <div className='absolute top-0 left-0 min-h-full min-w-full bg-gray-900 opacity-70 z-10'></div>
          <div className='absolute z-20 text-white text-center uppercase leading-2'>
            <h1 className='text-3xl md:text-5xl font-semibold mb-2 tracking-wider shadow-md'>
              {Title}
            </h1>
            <h4 className='text-sm md:text-md font-medium shadow-md'>
              {' '}
              {SubHeading}
            </h4>
          </div>
        </div>
      </div>
      <div className='bg-secondary2 h-[130vh] md:h-[90vh] lg:h-[92vh] xl:h-[90vh]  w-[100vw]'></div>
      <div className=' w-full md:w-[80%] h-fit bg-white shadow-md rounded-xl absolute top-[52%] md:top-[42%] left-[50%] transform -translate-x-[50%] z-20 px-4 py-4 md:px-4 xl:px-8'>
        <div className='flex justify-center items-center overflow-hidden max-w-full max-h-full'>
          {Content}
        </div>
      </div>
    </section>
  );
};

export default BgComponent;
