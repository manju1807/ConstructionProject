import { FaArrowRightLong } from "react-icons/fa6";
const GreenBtn = ({ Content }) => {
  return (
    <button className="rounded-full px-3 py-3 md:px-5 text-sm bg-actionColor text-white flex flex-row items-center justify-center gap-2">
      {Content}
      <FaArrowRightLong className="text-sm" />
    </button>
  );
};

export default GreenBtn;
