import pic1 from "/src/assets/html.png";
import pic2 from "/src/assets/css.jpg";
import pic3 from "/src/assets/javascript.png";
import pic4 from "/src/assets/react.png";
import pic5 from "/src/assets/node.png";
import pic6 from "/src/assets/express.jpg";
import pic7 from "/src/assets/mongodb.jpg";
import pic8 from "/src/assets/github.jpg";
import pic9 from "/src/assets/git.png";
import pic10 from "/src/assets/py.jpg";
import pic11 from "/src/assets/tailwind.png";
import pic12 from "/src/assets/redux.jpg";
import pic13 from "/src/assets/rest.jpg";
import pic14 from "/src/assets/openai.jpg";
import pic15 from "/src/assets/durable.jpg";
import pic16 from "/src/assets/code.jpg";
import pic17 from "/src/assets/gamma.jpg";


const skills = [
  {
    id: 1,
    name: "HTML",

    image: pic1,
  },
  {
    id: 2,
    name: "CSS",

    image: pic2,
  },
  {
    id: 3,
    name: "Javascript",

    image: pic3,
  },
  {
    id: 4,
    name: "ReactJS",

    image: pic4,
  },
  {
    id: 5,
    name: "NodeJS",

    image: pic5,
  },
  {
    id: 6,
    name: "Express",

    image: pic6,
  },
  {
    id: 7,
    name: "MongoDB",

    image: pic7,
  },
  {
    id: 8,
    name: "Git Hub",

    image: pic8,
  },

  {
    id: 9,
    name: "Git",

    image: pic9,
  },
  {
    id: 10,
    name: "Python",

    image: pic10,
  },

  {
    id: 11,
    name: "Tailwind CSS",

    image: pic11,
  },
  {
    id: 12,
    name: "Redux & RTK",

    image: pic12,
  },

  {
    id: 13,
    name: "Rest API",

    image: pic13,
  },
  {
    id: 14,
    name: "Open Ai",

    image: pic14,
  },
  {
    id: 15,
    name: "Durable",

    image: pic15,
  },
  {
    id: 16,
    name: "Code Whisperer",

    image: pic16,
  },
  {
    id: 17,
    name: "Gamma",

    image: pic17,
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
          <p className="py-4">
            {" "}
            These are the technologies and some ai tools I have worked with{" "}
          </p>
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
