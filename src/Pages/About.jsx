import BgComponent from '../Components/BgComponent';
import SliderComponent from '../Components/SliderComponent';
import BgImage from '../assets/AboutDP.jpg';
import Img1 from '../assets/vu-anh-TiVPTYCG_3E-unsplash(1).jpg';
import { Carousel } from '@trendyol-js/react-carousel';
import { FaCircleChevronRight } from 'react-icons/fa6';
import { FaCircleChevronLeft } from 'react-icons/fa6';

const About = () => {
  let Items = [
    {
      Title: 'Achievement 1',
      Description: 'Description of Achievement 1',
      Image: Img1,
    },
    {
      Title: 'Achievement 2',
      Description: 'Description of Achievement 2',
      Image: Img1,
    },
    {
      Title: 'Achievement 3',
      Description: 'Description of Achievement 3',
      Image: Img1,
    },
    {
      Title: 'Achievement 4',
      Description: 'Description of Achievement 4',
      Image: Img1,
    },
    {
      Title: 'Achievement 5',
      Description: 'Description of Achievement 5',
      Image: Img1,
    },
  ];

  const Content = () => {
    return (
      <div className='flex flex-col gap-4 max-w-full'>
        <div className='flex flex-col gap-4 md:flex-row min-h-full min-w-full justify-center items-center align-middle'>
          <div className='h-full w-full md:w-1/2 flex flex-col justify-center items-start space-y-4 px-4 md:px-14 '>
            <h1 className='text-xl font-semibold uppercase'>
              About Logo<span className='text-actionColor'> *</span>
            </h1>
            <p>
              LOGO * , was established by XYZ, in 19XX. Since its inception,
              Esha Constructions has worked with an aim to cater to the
              Construction Industry in all possible dimensions like Planning,
              Designing, Project Management and Construction, with a strong
              emphasis on quality and time. XYZ, a Civil Engineer, graduated
              from Bangalore University in 1988, having a rock-solid experience
              of 35 years in this field of construction is the backbone of Esha
              Constructions.
            </p>
          </div>
          <div className='h-full w-1/2 flex justify-center items-center'>
            <div className='flex flex-col md:h-[50vh] justify-center items-center'>
              <img
                src={BgImage}
                className='md:h-[40vh] flex justify-center items-center'
                alt=''
              />
              <p className='m-2'>Mr.XYZ Civil Engineer</p>
            </div>
          </div>
        </div>
        <div className='h-fit flex flex-col gap-2 md:gap-4 min-w-full justify-start items-start align-middle px-4 md:px-14'>
          <h1 className='text-xl flex font-semibold uppercase space-y-4'>
            Our Achievements
          </h1>
          <div className='my-4 w-full block md:hidden lg:hidden xl:hidden'>
            <Carousel
              swiping={true}
              show={1}
              slide={1}
              autoSwipe={3000}
              swipeOn={3000}
              responsive={true}
              transition={0.5}
              dynamic={true}
              rightArrow={
                <FaCircleChevronRight className='text-3xl cursor-pointer' />
              }
              leftArrow={
                <FaCircleChevronLeft className='text-3xl cursor-pointer' />
              }
              className={`gap-2 justify-center align-middle items-center`}
            >
              {Items.map((item, index) => (
                <div key={index} className='m-2'>
                  <SliderComponent
                    Title={item.Title}
                    Description={item.Description}
                    Image={item.Image}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className='my-4 w-full hidden md:block lg:hidden xl:hidden'>
            <Carousel
              swiping={true}
              show={2.5}
              slide={1}
              autoSwipe={3000}
              swipeOn={3000}
              responsive={true}
              transition={0.5}
              dynamic={true}
              rightArrow={
                <FaCircleChevronRight className='text-3xl cursor-pointer' />
              }
              leftArrow={
                <FaCircleChevronLeft className='text-3xl cursor-pointer' />
              }
              className={`gap-2 justify-center align-middle items-center`}
            >
              {Items.map((item, index) => (
                <div key={index} className='m-2'>
                  <SliderComponent
                    Title={item.Title}
                    Description={item.Description}
                    Image={item.Image}
                  />
                </div>
              ))}
            </Carousel>
          </div>
          <div className='my-4 w-full hidden md:hidden lg:block'>
            <Carousel
              swiping={true}
              show={3.5}
              slide={2}
              autoSwipe={15000}
              swipeOn={15000}
              responsive={true}
              transition={0.5}
              dynamic={true}
              rightArrow={
                <FaCircleChevronRight className='text-3xl cursor-pointer' />
              }
              leftArrow={
                <FaCircleChevronLeft className='text-3xl cursor-pointer' />
              }
              className={`gap-2 justify-center align-middle items-center`}
            >
              {Items.map((item, index) => (
                <div key={index} className='m-2'>
                  <SliderComponent
                    Title={item.Title}
                    Description={item.Description}
                    Image={item.Image}
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    );
  };

  return (
    <BgComponent
      Title={'About Our Company'}
      SubHeading={'Consultation | Project Management | Construction'}
      Content={<Content />}
    />
  );
};

export default About;
