
import home from "/src/assets/neeraj.jpg";


const Home = () => {
  return (
    <>
      <div className="md:mt-10 mt-4 h-full w-full bg-bgShade" id="home">
        <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between  gap-4">
          <div className="md:w-1/3 w-full">
            <img src={home} className="w-full rounded-[100%]" />
          </div>
          {/* left side */}
          <div className="md:w-1/2 w-full ">
            <p className="text-4xl text-heading color font-semibold mb-3">
              Hey, I am Neeraj Negi!
            </p>
            <h1 className="md:text-2xl text-4xl font-bold text-heading color leading-snug md:leading-[76px]  mb-4">
              <span className="text-primary  text-indigo-600">
                Full Stack Web Developer !
              </span>
            </h1>
            <p className="text-2xl text-body leading- mb-8">
              
              I am a skilled Full Stack Developer with expertise in front-end and back-end technologies like JavaScript, React, and Node.js. I create responsive, user-friendly web applications with a focus on clean code and modern design. Passionate about problem-solving and always eager to learn new technologies, I aim to build innovative solutions that drive success.🌌📚
            </p>

            <div className=" flex  flex-wrap items-center gap-y-4 ml-1 gap-x-8">
              <a
                href=""
                className="rounded-md bg-indigo-600 px-3.5 py-2.5  font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600   cursor-pointer hover:translate-y-3 transition-all duration-1000  hover:text-primary"
              >
                <h3 className="w-[90px] ">Hire Me</h3>
              </a>

              <a
                href="/amit/personal-portfolio/src/assets/neeraj.jpg"
                download="/personal-portfolio/src/components/header/cnt.txt"
                target="_blank"
                className="rounded-md bg-indigo-600 px-3.5  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  cursor-pointer hover:translate-y-3 transition-all duration-1000  hover:text-primary"
              >
                <h3>Resume / CV</h3>
              </a>
            </div>
          </div>
          {/* right side */}
        </div>
        <div className="bg-bgShade flex sm:mt-10  md:px-12 px-2">
          <div className="flex md:items-center justify-between gap-8 mb-20">
            <div className="flex items-center  flex-wrap gap-7 ml-5 ">
              <a href="https://x.com/Neeruu003">
                <i className="bx bxl-twitter text-4xl cursor-pointer hover:-translate-y-3 transition-all duration-300  hover:text-primary "></i>
              </a>

              <a href="https://web.whatsapp.com/8287338299">
                <i
                  className="bx bxl-instagram  text-4xl cursor-pointer hover:-translate-y-3 transition-all duration-300  hover:text-primary"
                  id="box-social" 
                ></i>
              
              </a>

              <a href="https://www.linkedin.com/in/neeruu003">
                <i
                  className="bx bxl-linkedin  text-4xl cursor-pointer hover:-translate-y-3 transition-all duration-300  hover:text-primary"
                  id="box-social"
                ></i>
              </a>

              <a href="https://github.com/Neeruu005">
                <i
                  id="box-social"
                  className="bx bxl-github  text-4xl cursor-pointer hover:-translate-y-3 transition-all duration-300  hover:text-primary"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
