import about from "/src/assets/nnnn.jpg";

const About = () => {
  return (
    <div className=" mt-10 lg:mx-12 mx-4 " id="about">
      <div className="flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between">
        <div className="sm:w-1/3 ">
          <img
            src={about}
            alt=""
            className="w-full sm:w-11/12 rounded-[40px] cursor-pointer"
          />
        </div>
        <div className="sm:w-1/2">
          <h2 className="md:text-5xl text-4xl text-heading font-bold">
            My Expertise
          </h2>
          <p className="mt-8 md:pr-8 mb-8 font">
            Hello! I'm Neeraj Negi , a dedicated Full Stack Developer with a
            strong passion for crafting efficient and innovative web solutions.
            I specialize in working with modern technologies such as JavaScript,
            React, Node.js, and more, blending my technical expertise with
            creative problem-solving skills. I started my journey as a developer
            with a keen interest in both design and coding, allowing me to
            create applications that are not only functional but also visually
            engaging. My background in full stack development enables me to work
            seamlessly on both client-side and server-side tasks, ensuring a
            cohesive and complete product. With experience in building
            responsive and user-friendly websites, I thrive on challenges and
            love turning complex problems into simple, beautiful solutions. My
            training at Bharat Electronics Limited and Bajaj Motors Limited has
            further enriched my technical skills and work ethic. Outside of
            coding, I am constantly exploring new tools and technologies to stay
            ahead in this fast-evolving field. I believe in continuous learning
            and enjoy collaborating with teams to build impactful digital
            experiences. Let's create something amazing together!
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
