const posts = [
  {
    id: 1,
    title: "Bachelor of Computer Application (BCA) - UNIVERSITY",
    description:
      "I am pursing My Bachelor degree (Computer Application) in BHAGWANT GLOBAL UNIVERSITY KOTDWARA (UTTARAKHAND)",
    college: " BHAGWANT GLOBAL UNIVERSITY KOTDWARA (UTTARAKHAND)",
    date: "01 July 2022",
    end: "01 July 2025",
    subject: [
      "DBMS ",
      "COMPUTER NETWORK",
      "DATA STRUCTURE ALGORITHMS ",
      "PROGRAMMING IN C || C++ ",
      "MATHS ",
      "OPERATING SYSTEM ",
    ],
    grade: "8.81",
  },

  {
    id: 2,
    title: "INTERMEDIATE EXAMINATION",

    description:
      "I has passed Intermediate Examination  from school GOVT I.C KANWAGHATI PAURI GARHWAL (BOARD OF SCHOOL EDUCATION UTTARAKHAND)",
    college: "GOVT INTER.COLLEGE KANWAGHATI KOTDWARA (UTTRAKHAND)",
    date: "01 APRIL (2020)",
    end: "01 JULY  (2021)",

    subject: ["PHYSICS ", "CHEMISTRY ", "MATH ", "ENGLISH ", "HINDI "],
    grade: "67.7",
  },
  {
    id: 3,
    title: "HIGH SCHOOL EXAMINATION",

    description:
      "I has passed high school examination held from school V.N.I.C PADAMPUR PAURI GARHWAL (BOARD OF SCHOOL EDUCATION UTTARAKHAND)",
    college: "VIDHYA NIKETAN INTER COLLEGE KOTWARA",
    date: "01 APRIL 2018",

    end: "30 MAY 2019",
    subject: [
      "MATHS ",
      "SCIENCE ",
      "SOCIAL-SCIENCE ",
      "HINDI ",
      "ENGLISH ",
    ],
    grade: "72.3",
  },
];



const Education = () => {
  return (
    <div className=" py-8  mx-4 max-w-full  ">
      
      <div className="mx-auto max-w-20xl px-6 lg:px-8 ">
        <div className="mx-auto  border-4xl grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10  sm:mt-1 sm:pt-1  lg:mx-0 lg:max-w-none ">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex  flex-col items-start  "
            >
              <div className="flex ">
                <h2 className="text-gray-500">{post.date} -</h2>
                <h2 className="text-gray-500">{post.end}</h2>
              </div>
            
              <div className=" w-full    ">
                <h3 className="mt-3 text-cl w-full font-semibold  tracking-10 text-gray-900 group-hover:text-gray-600">
                  <a className="md:text-3xl  ">
                    <span className="" />
                    {post.title}
                  </a>
                </h3>

                <p className="mt-6   flex flex-wrap lg:text-[22px] font-4 w-full text-gray-600">
                  {post.description}
                </p>
              </div>
             

              <div className="flex  items-center text-[10px] mt-4 leading-4  ">
              <span className="leading-8 font-medium text-[20px]  ">Subject :-
                <a className="relative z-10 rounded-full bg-gray-50 px-1 py-1.4 leading-8 text-[16px] font-medium  text-gray-600 hover:bg-gray-100 tracking-widest">
                  {post.subject}
                </a>
                </span>
              </div>
           

              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-bold text-gray-900"> <span className="leading-8  font-bold text-[17px] mt-5">CGPA / PER % :-</span>
                    <a className="  text-[17px]">
                      <span className="absolute inset-0  " />
                      {post.grade}
                    </a>
                  </p>
                
                </div>
                
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>



 
  );
};

export default Education;
