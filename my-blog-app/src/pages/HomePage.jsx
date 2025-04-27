import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import homegirlimg from "../assets/homegirlimg.png";
import mainpagebg from "../assets/mainpagebg.png";

const HomePage = () => {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);
    
  return (
    <div className="h-screen flex flex-col overflow-clip">
      <nav className="flex justify-start space-x-10 px-10 text-xl py-6 shadow-md bg-[#a96f23]">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div
        className="bg-cover bg-center bg-no-repeat relative"
        style={{ background: `url(${mainpagebg})`, backgroundSize: "cover" }}
      >
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-10 gap-10">
          <div className="flex justify-end w-1/2">
          <img
            src={homegirlimg}
            alt="home page illustration"
            className="w-full h-auto rounded-lg"
          />
          </div>
          <div className="flex justify-center w-1/4">
            <div className="text-right">
              <h1 className="text-8xl font-bold font-happymonkey max-w-md">
                Welcome
              </h1>
              <h3 className="text-4xl font-happymonkey max-w-md">
                to Adt's Blogs!
              </h3>
              <hr className="w-32 ml-16 my-4 border-t-2 border-gray-300" />

              <p className="mt-6 text-lg text-gray-700 max-w-md">
                Welcome to my world of stories and ideas. I'm passionate about
                tech, creativity, and expressing thoughts through blogs!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
