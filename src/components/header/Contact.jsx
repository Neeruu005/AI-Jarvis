import { useEffect, useState } from "react";
const Contact = () => {
  const data = {
    name: "",
    email: "",
    message: "",
  };

  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    // console.log("registered");
  }, [flag]);

  const handleData = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    // console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputData.name || !inputData.email || !inputData.message) {
      alert("please fill valid details!");
    } else {
      setFlag(true);
     
    }
  };
  return (

<>



    
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-green-300  rounded-2xl text-center">
      {flag ? (
          <h2 className=" px-3">
            Thank You {inputData.name}, you have Submitted Successfully✌️
          </h2>
        ) : (
          ""
        )}

      </div>
      

        <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Contact Us
        </h2>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm ">
        <form
          className="space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Your Name :-
            </label>
            <div className="mt-2">
              <input
                onChange={handleData}
                placeholder="Full Name"
                value={inputData.name}
                name="name"
                id="name"
                type="text"
                autoComplete="name"
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address :-
              </label>
            </div>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                onChange={handleData}
                placeholder="Email"
                value={inputData.email}
                required
                className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Messages
              </label>
            </div>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                type="text"
                autoFocus
                required
                onChange={handleData}
                placeholder="Your Message"
                value={inputData.message}
                className="block w-full rounded-md border-0 py-7 px-5 h-40 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submitted
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
