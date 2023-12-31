import BgComponent from '../Components/BgComponent';
import BgImage from '../assets/AboutDP.jpg';
const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const Content = () => {
    return (
      <div className='flex flex-col gap-2 md:gap-4 p-4 max-w-full w-full'>
        <div className='flex flex-col text-center'>
          <h1 className='text-gray-900 text-xl font-bold'>
            Ready to Bring Your Vision to Life?
          </h1>
          <p className='text-gray-700 text-md'>
            Let's Talk About Your Project!
          </p>
        </div>
        <main className='flex flex-col md:flex-row gap-4 justify-center items-center '>
          <div className='h-[100%] w-full p-4 place-content-center flex '>
            <img src={BgImage} className='h-[350px]' alt='' />
          </div>
          <div className=' flex w-full h-full place-content-center p-4'>
            <form className='p-6 cursor-pointer w-full md:w-[75%] space-y-4 '>
              <h2 className='text-lg font-medium mb-4'>
                Tell Us About Your Project.
              </h2>
              <div className='grid md:grid-cols-2 md:gap-6'>
                <div className='relative z-0 w-full group'>
                  <input
                    type='text'
                    name='floating_first_name'
                    id='floating_first_name'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                  />
                  <label className='peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                    First name
                  </label>
                </div>
                <div className='relative z-0 w-full group'>
                  <input
                    type='text'
                    name='floating_last_name'
                    id='floating_last_name'
                    className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                    placeholder=' '
                    required
                  />
                  <label className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                    Last name
                  </label>
                </div>
              </div>

              <div className='relative z-0 w-full group'>
                <input
                  type='email'
                  name='floating_email'
                  id='floating_email'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label className='peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Email address
                </label>
              </div>

              <div className='relative z-0 w-full group'>
                <input
                  type='tel'
                  pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                  className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'
                  placeholder=' '
                  required
                />
                <label className='peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                  Phone number
                </label>
              </div>
              <div className='flex flex-col gap-1'>
                <label className='block text-sm font-medium text-gray-400'>
                  Your message
                </label>
                <textarea
                  id='message'
                  rows='4'
                  className='block p-2.5 w-full resize-none text-sm text-gray-900 bg-gray-50 rounded-sm border-[1px] border-gray-600 focus:ring-blue-500 focus:border-blue-500'
                  placeholder='Leave Your Queries...'
                ></textarea>
              </div>

              <button
                type='submit'
                onClick={handleSubmit}
                className='bg-transparent hover:text-gray-100 hover:bg-primary transition-all duration-300 text-gray-700 text-sm font-semibold py-2 px-3 rounded-[25px] border-[1px] border-gray-700'
              >
                Send Message
              </button>
            </form>
          </div>
        </main>
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

export default Contacts;
