import React from "react";
import { Link } from 'react-router-dom';
import homeimg from "../assets/homeimg.png";
import mainpagebg from "../assets/mainpagebg.png";

const HomePage = () => {
  return (
    <div>
      <nav className="flex justify-start space-x-10 px-10 text-xl py-6 shadow-md bg-[#6c3319]">
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div
        className="h-full bg-cover bg-center bg-no-repeat relative"
        style={{ background: `url(${mainpagebg})`}}
      >
        <div className="absolute inset-0 bg-beige opacity-50"></div> 
        <section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-10 gap-10">
          <img
            src={homeimg}
            alt="home page illustration"
            className="w-1/3 h-auto rounded-lg shadow-lg"
          />

          <div className="flex justify-end">
            <div className="text-right">
              <h1 className="text-8xl font-bold font-happymonkey max-w-md">
                Welcome
              </h1>
              <h3 className="text-4xl font-happymonkey max-w-md">
                to Adt's Blogs!
              </h3>
              {/* Slightly shifted line */}
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
