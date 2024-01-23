import DeliverableCard from './DeliverableCard';
import { PiPencilCircle } from 'react-icons/pi';
import { MdOutlineConstruction } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import { FaHandshakeSimple } from 'react-icons/fa6';
import { IoDocumentTextSharp } from 'react-icons/io5';
import Img from '../assets/ExploreSection/ProjectDesign.jpg';
import Img2 from '../assets/ExploreSection/ProjectExecution.jpg';
import Img3 from '../assets/ExploreSection/CustomerService.jpg';
import Img4 from '../assets/ExploreSection/Promises.jpg';
import Img5 from '../assets/ExploreSection/NRIguide.jpg';

const Deliverables = () => {
  const deliverablesData = [
    {
      Icon: <PiPencilCircle />,
      heading: 'Project Designs',
      Img: Img,
      Content:
        "Eminent architects meticulously plan projects, ensuring strict adherence to building laws, with residents' comfort as our top priority.",
    },
    {
      Icon: <MdOutlineConstruction />,
      heading: 'Project Execution',
      Img: Img2,
      Content:
        "Meticulous contractor selection, top-tier materials, and stringent quality control ensure timely project completion. We adhere to both Indian and international standards, emphasizing the preservation of each site's natural advantages.",
    },
    {
      Icon: <IoPerson />,
      heading: 'Customer Services',
      Img: Img3,
      Content:
        'Enjoy free site visits, perfect documentation, and full customization for the home you envision.',
    },
    {
      Icon: <FaHandshakeSimple />,
      heading: 'Our Promise',
      Img: Img4,
      Content:
        'We deliver quality construction, on-schedule completion, guaranteed titles, ensuring every project provides unbeatable value for money.',
    },
    {
      Icon: <IoDocumentTextSharp />,
      heading: 'NRI Guide',
      Img: Img5,
      Content:
        'NRI clients are essential to us. We provide seamless assistance for acquiring residential and commercial properties in India.',
    },
  ];

  return (
    <section className='relative h-fit max-w-[100vw] w-[100vw]'>
      <div className='container flex flex-col px-4 py-6 space-y-12'>
        <header className='flex flex-col space-y-2 text-center'>
          <h1 className='font-medium text-2xl px-4'>
            Elevate Your Options,{' '}
            <span className='font-medium text-actionColor text-2xl mt-1'>
              Explore What We Offer
            </span>
          </h1>
          <p className='text-sm font-normal px-4 leading-6'>
            Elevate your possibilities with our commitment to delivering
            high-quality construction for the utmost customer satisfaction.
          </p>
        </header>

        <div className='grid grid-cols-1 px-6 py-6 md:px-0 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 h-full w-full'>
          {deliverablesData.map((data, index) => (
            <div
              key={index}
              className={`md:min-h-[80vh] ${
                index % 2 === 0
                  ? 'flex justify-center items-center'
                  : 'flex justify-center items-start'
              } p-2`}
            >
              <DeliverableCard {...data} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Deliverables;
