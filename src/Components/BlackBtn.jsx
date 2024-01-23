import { FaArrowRightLong } from 'react-icons/fa6';
// eslint-disable-next-line react/prop-types
const BlackBtn = ({ Content }) => {
  return (
    <button className='rounded-full px-3 md:px-5 py-3 text-sm bg-black text-white flex flex-row items-center justify-center gap-2 border border-white-[1px]'>
      {Content}
      <FaArrowRightLong className='text-sm' />
    </button>
  );
};

export default BlackBtn;
