// import banner from './src/assets/banner.png'
// import amit from '../images/home.jpg'
// import home from '../images/home2.jpg'

const Home = () => {
  return (
    <>
      <div className="mt-20 h-full w-full bg-bgShade  " id="home">
        <div className="lg:px-12 px-4 flex flex-col md:flex-row-reverse items-center justify-between  gap-5">
          <div className="md:w-1/2 w-full">
            <img src="" alt="" className="w-full" />
          </div>
          {/* left side */}
          <div className="md:w-1/2 w-full ">
            <p className="text-4xl text-heading color font-semibold mb-3">
              Hey, I am Amit !
            </p>
            <h1 className="md:text-2xl text-4xl font-bold text-heading color leading-snug md:leading-[76px]  mb-4">
               <span className="text-primary  text-indigo-600">Full Stack Web Developer !</span>
           
            </h1>
            <p className="text-2xl text-body leading- mb-8">
            My designs blend creativity and
          functionality, capturing the essence of each project.  From
          front-end magic with React to back-end wizardry with Node.js, I bring
          ideas to life. 📚 I m a lifelong learner, constantly exploring new
          technologies. 🌌
      
        
            </p>
           



            <div className="mt-20 flex  flex-wrap items-center gap-y-4 ml-1 gap-x-8">
                <a href=""
                  
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5  font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600   cursor-pointer hover:translate-y-3 transition-all duration-1000  hover:text-primary"
                >
                     <h3 className="w-[90px] ">Hire Me</h3>
                </a>

                <a
                  href=""
                  className="rounded-md bg-indigo-600 px-3.5  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600  cursor-pointer hover:translate-y-3 transition-all duration-1000  hover:text-primary"
                >
                    <h3>Resume / CV</h3>
                </a>
              </div>





          </div>
          {/* rigth side */}






          
        </div>

        <div className="bg-bgShade flex mt-10  md:px-12 px-2">
          <div className="flex md:items-center justify-between gap-8 mb-20">
            <div className="flex items-center  flex-wrap gap-7 ml-5 ">
              <a href="https://twitter.com/Amit_6742">
                <i className="bx bxl-twitter text-4xl cursor-pointer hover:-translate-y-3 transition-all duration-300  hover:text-primary "></i>
              </a>

              <a href="https://web.whatsapp.com/8287338299">
                <i
                  className="bx bxl-whatsapp  text-4xl cursor-pointer hover:-translate-y-3 transition-all duration-300  hover:text-primary"
                  id="box-social"
                ></i>
              </a>

              <a href="https://www.linkedin.com/in/amit-singh-39757925a">
                <i
                  className="bx bxl-linkedin  text-4xl cursor-pointer hover:-translate-y-3 transition-all duration-300  hover:text-primary"
                  id="box-social"
                ></i>
              </a>

              <a href="https://github.com/amit6742">
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
