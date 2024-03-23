import about from '/src/assets/about.jpg'


const About = () => {
  return (
    <div className=" mt-10 lg:mx-12 mx-4 " id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/2 "> 
          <img src={about} alt="" className="w-full sm:w-11/12 rounded-[150px] cursor-pointer" />
        </div>
        <div className="sm:w-1/2">
          
          <h2 className="md:text-5xl text-4xl text-heading font-bold">My Expertise</h2>
          <p className="mt-8 md:pr-8 mb-8">
          A full-stack developer portfolio is a document or webpage that showcases a developers skills and how they used them to solve problems. A full-stack developer is a professional who works on both the front-end and back-end development processes. This includes designing, developing, and maintaining platforms with databases or servers
            <br /> <br />
            
          </p>
          <div className="mt-10 flex items-center  gap-x-6">
                

                <a
                  href="/contact"
                  className="rounded-md bg-indigo-600 px-3.5  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  cursor-pointer hover:translate-y-3 transition-all duration-1000  hover:text-primary"
                >
                    <h3>Contact me</h3>
                </a>
              </div>
        </div>
      </div>
    </div>
  );
};

export default About;
