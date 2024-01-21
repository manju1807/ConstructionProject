import { useState, useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const DeliverableCard = ({ Icon, heading, Img, Content }) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth > 416 && window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='bg-white flex flex-col justify-start py-3 md:py-2 items-start max-h-[512px] w-full px-6 md:px-4 rounded-2xl shadow-xl border border-solid overflow-hidden'>
      <div className='flex flex-col space-y-2 py-2'>
        <div className='bg-actionColor text-lg font-medium text-white rounded-full w-fit p-2 shadow-md'>
          {Icon}
        </div>
        <h1 className='text-md font-medium tracking-wide'>{heading}</h1>
      </div>
      <div className='flex flex-col space-y-3 py-2'>
        <div className='md:h-[200px] h-[250px] rounded-2xl'>
          <img src={Img} className='h-full w-full rounded-2xl' alt='' />
        </div>
        <p className={`text-sm ${isShowMore ? '' : 'line-clamp-3'}`}>
          {Content}
        </p>
        {Content.length > 100 && isMediumScreen && window.innerWidth > 416 && (
          <button onClick={toggleReadMoreLess} className='text-actionColor'>
            {isShowMore ? 'Read Less' : 'Read More >>'}
          </button>
        )}
      </div>
    </div>
  );
};

export default DeliverableCard;
