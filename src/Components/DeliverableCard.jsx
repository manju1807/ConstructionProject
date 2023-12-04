const DeliverableCard = ({ Icon, heading, Img, Content }) => {
  return (
    <div className="bg-white flex flex-col justify-start py-3 md:py-2 items-start max-h-[412px] w-full px-6 md:px-4 rounded-2xl shadow-xl border border-solid">
      <div className="flex flex-col space-y-2 py-2">
        <div className="bg-actionColor text-lg font-medium text-white rounded-full w-fit p-2 shadow-md">
          {Icon}
        </div>
        <h1 className="text-md font-medium tracking-wide">{heading}</h1>
      </div>
      <div className="flex flex-col space-y-4 py-2">
        <div className="md:h-[200px] h-[250px] rounded-2xl">
          <img src={Img} className="h-full w-full rounded-2xl" alt="" />
        </div>
        <p className="text-sm">{Content}</p>
      </div>
    </div>
  );
};

export default DeliverableCard;
