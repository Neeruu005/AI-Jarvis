
const products = [

  {
    id: 1,
    name: "Zoom video group call application using WebRTC",
    href:"https://dull-gold-jay-slip.cyclic.app/",
    repo:"https://dull-gold-jay-slip.cyclic.app/",
    
    imageSrc:"src/assets/webrtc.jpg",

    description:
      "WebRTC, MERN stack Web Applications or  Real-Time Communication, is a technology that allows browsers to exchange media and data in real-time. It's used for voice and video chat between devices, and camera, microphone, or screen and share it with others. Connect with SocketIO and create the necessary logic  Implement WebRTC for group calls  Add WebRTC data channels for chat functionality. to deployed projects",
  },


  {
    id: 2,
    name: "E-Commerce shopeWide Web application",
    href:"https://dull-gold-jay-slip.cyclic.app/",
    repo:"https://github.com/amit6742/production-mern-ecommerce-app-2023",

    imageSrc:
      "src/assets/e-commerce.jpg",

    description:
      "My Own MERN stack e-Commerce web application lets build and deploy in Cyclic mern stack project and full stack development full-stack web application using | MongoDB | Express.JS | React | and | Node.JS responsive and dynamic user interface with React, create a back-end API with Express and Node.js and store data in a NoSQL database with MongoDB and added more featured like a filter, searching, add to cart , Payment Gateway etc.",
  },

  {
    id: 3,
    name: "Expense Tracker Web Applications",
    href:"https://expense-tracker-app-kfdp.onrender.com/",
    repo:"https://github.com/amit6742/production-Expense-app-mern",
   
    imageSrc:
      "src/assets/expense tracker.jpg",

    description:
      "The art of money management is all about turning your money into wealth by reframing your mindset; expenses, using full stack website MERN Stack to Deployed in Render you should also think of money as an investment tool. , protection of accumulated wealth, and preservation of wealth. These key financial concepts are tied to your specific needs, objectives, financial goals, priorities, and risk factors.",
  },



  {
    id: 4,
    name: "Weather Application",
    href:"https://amit6742.github.io/weather-app./",
    repo:"https://github.com/amit6742/weather-app.",
 
    imageSrc:
      "/src/assets/weather.jpg",

    description:
      "Weather apps  HTML CSS using javascript programming language real time Api  provide users with real-time weather information, forecasts, and other weather-related data. Weather apps can help users make better decisions about their day-to-day activities Temperature, humidity, pressure, and wind direction Hourly and weekly forecasts. ",
  },


  {
    id: 5,
    name: "Rock, Paper, Scissors Game",
    href:"https://amit6742.github.io/stonePaperScissor/",
    repo:"https://github.com/amit6742/stonePaperScissor",
   
    imageSrc:
      "src/assets/rock.jpg",

    description:
      "The familiar game of Rock, Paper, Scissors using javaScript programming language is played like this: at the same time, two players display one of three symbols: a rock, paper, or scissors. A rock beats scissors, scissors beat paper by cutting it, and paper beats rock by covering it.",
  },

  {
    id: 6,
    name: "TO-DO-LIST ",
   href:"https://amit6742.github.io/TodoList/",
   repo:"https://github.com/amit6742/TodoList",
    imageSrc:
      "src/assets/todolist.jpg",
    description:
      " CRUD operations using javaScript programming language A to-do list is a list of tasks that need to be completed., or more complex tasks like creating project briefs Here are some elements that can be included to-do list: Title, Description, Deadline, Confirm button, Cancel button",
  },

 
];

const Project = () => {

 

  return (
    <div className=" mt-20 h-full w-full ">
      <div className="mx-auto max-w-6xl px-4 py-90 sm:px-6 sm:py-2 lg:max-w-full lg:px-8">
        <div className="   mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-col-3 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img 
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=" h-full w-full  object-center lg:h-full lg:w-full  "
                />
              </div>

              <div className="  text-center   ">
                <h3 className="mt-3   font-semibold  tracking-10 text-gray-900 group-hover:text-gray-600">
                  <a className="md:text-3xl  ">
                    <span className="" />
                    <h2>{product.name}</h2>
                  </a>
                </h3>

                <p className=" text-black text-[14px] mt-4">
                {product.description}
                </p>
              </div>

              <div className="mt-10 flex items-center justify-around gap-x-6">
                <a href={product.repo}
                  
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Check on Github
                </a>

                <a
                  href={product.href}
                  className="rounded-md bg-indigo-600 px-3.5  py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Show Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
