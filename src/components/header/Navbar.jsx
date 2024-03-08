
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition-all ">
        <ul className="text-center text-xl p-20 ">
          <NavLink spy={true} smooth={true} to="/">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded cursor-pointer">
              home
            </li>
          </NavLink>
          <NavLink spy={true} smooth={true} to="/about">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              about
            </li>
          </NavLink>
          <NavLink spy={true} smooth={true} to="/education">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              education
            </li>
          </NavLink>
          <NavLink spy={true} smooth={true} to="/skill">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              skills
            </li>
          </NavLink>
          <NavLink spy={true} smooth={true} to="/project">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              project
            </li>
          </NavLink>
          <NavLink spy={true} smooth={true} to="/contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              contact
            </li>
          </NavLink>
        </ul>
      </div>
    </>
  );

  return (
    <nav>
      <div className="h-full flex justify-between z-50 lg:py-5 px-20 py-4 ">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">logo</span>
        </div>
        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <NavLink spy={true} smooth={true} to="/">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  home
                </li>
              </NavLink>
              <NavLink spy={true} smooth={true} to="/about">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  about
                </li>
              </NavLink>
              <NavLink spy={true} smooth={true} to="/education">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  education
                </li>
              </NavLink>
              <NavLink spy={true} smooth={true} to="/skill">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  skills
                </li>
              </NavLink>
              <NavLink spy={true} smooth={true} to="/project">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  project
                </li>
              </NavLink>
              <NavLink spy={true} smooth={true} to="/contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  contact
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
        <div>
        {click && content}
        </div>
        <button className="block sm:hidden transition " onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
