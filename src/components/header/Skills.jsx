const skills = [
  {
    id: 1,
    name: "HTML",

    image: "/src/assets/html.png",
  },
  {
    id: 2,
    name: "CSS",

    image: "src/assets/css.png",
  },
  {
    id: 3,
    name: "Javascript",

    image: "src/assets/javascript.png",
  },
  {
    id: 4,
    name: "ReactJS",

    image: "/src/assets/react.png",
  },
  {
    id: 5,
    name: "NodeJS",

    image: "src/assets/node.png",
  },
  {
    id: 6,
    name: "Express",

    image: "src/assets/express.jpg",
  },
  {
    id: 7,
    name: "MongoDB",

    image: "src/assets/mongodb.jpg",
  },
  {
    id: 8,
    name: "Git Hub",

    image: "/src/assets/github.jpg",
  },

  {
    id: 9,
    name: "Git",

    image: "src/assets/git.png",
  },
  {
    id: 10,
    name: "Python",

    image: "/src/assets/py.jpg",
  },
 
  {
    id: 11,
    name: "Tailwind CSS",

    image: "/src/assets/tailwind.png",
  },
  {
    id: 12,
    name: "Redux & RTK",

    image: "/src/assets/redux.jpg",
  },
 
  
  {
    id: 13,
    name: "Rest API",

    image: "/src/assets/rest.jpg",
  },
  {
    id: 14,
    name: "Open Ai",

    image: "/src/assets/openai.jpg",
  },
  {
    id: 15,
    name: "Durable",

    image: "/src/assets/durable.jpg",
  },
  {
    id: 16,
    name: "Code Whisperer",

    image: "/src/assets/code.jpg",
  },
  {
    id: 17,
    name: "Gamma",

    image: "/src/assets/gamma.jpg",
  },
  {
    id: 18,
    name: "Mintlify",

    image: "/src/assets/mintlifly.jpg",
  },
];

const Skills = () => {
  return (

      <div name="skills" className="w-full h-full mt-10 mx-4 ">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto flex  flex-col flex-wrap justify-center w-full h-full">
          <div>
            <p className="text-[25px]  font-bold inline border-b-4 border-pink-600 ">
              Skills & AI Tools
            </p>
            <p className="py-4"> These are the technologies and some ai tools I have worked with </p>
          </div>

          <div className="w-full   h-full grid grid-cols-2 sm:grid-cols-4  gap-8 text-center py-8 ">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 cursor-pointer  "
              >
                <img
                  className="mt-5 rounded-md w-20 mx-auto "
                  src={skill.image}
                  alt="HTML icon"
                />
                <p className="font-bold  lg:text-xl my-4">{skill.name}</p>
              </div>
            ))}
            
          </div>
          
        </div>
      </div>

    
    
  );
};

export default Skills;
