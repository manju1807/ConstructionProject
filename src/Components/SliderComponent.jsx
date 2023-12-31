// eslint-disable-next-line react/prop-types
const SliderComponent = ({ Title, Description, Image }) => {
  return (
    <>
      <div className='relative group w-full'>
        <div className='h-[280px] w-full bg-red-200 object-cover rounded-lg overflow-clip'>
          <img
            src={Image}
            alt={Title}
            className='h-full w-full rounded-lg group-hover:scale-110 transition-all duration-300'
          />
        </div>
        <div className='absolute z-50 flex flex-col -bottom-[15rem] w-full group group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer bg-primary text-gray-100 p-2 px-4 h-2/4 rounded-b-lg'>
          <h1 className='text-xl font-semibold'>{Title}</h1>
          <p className='text-sm'>{Description}</p>
        </div>
      </div>
    </>
  );
};

export default SliderComponent;
