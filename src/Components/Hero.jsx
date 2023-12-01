const Hero = () => {
  return (
    <section className="relative min-h-[100vh] min-w-full max-w-[100vw]">
      <div className="container min-h-[100vh] w-screen flex flex-col gap-4">
        <div className="min-h-[70vh] w-full flex">
          <div className="bg-violet-400 mt-[4rem] rounded-2xl w-full flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="flex">hello</div>
            <div className="flex">hello</div>
          </div>
        </div>
        <div className="min-h-[20vh] w-full bg-green-400 rounded-2xl">
          secondary
        </div>
      </div>
    </section>
  );
};

export default Hero;
