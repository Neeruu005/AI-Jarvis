import { Route, Routes } from "react-router-dom";
import Home from "./components/header/Home";
import Navbar from "./components/header/Navbar";
import About from "./components/header/About";
import Education from "./components/header/Education";
import Skill from "./components/header/Skills";
import Project from "./components/header/Project";
import Contact from "./components/header/Contact";
import "./App.css";
import Page404 from "./components/header/Page404";

import Footer from "./components/header/Footer";
// import Navbar from "./components/header/Navbar2"

const App = () => {
  return (
    <>

  
      <Navbar></Navbar>
      


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Footer />
     

     
     
     
  
    </>
  );
};

export default App;
