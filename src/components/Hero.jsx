import React from "react";
import { FcAlarmClock } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
import heroImage from "../assets/hero-image.png";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8"
    >
      {/* left col */}
      <div className="w-full md:w-1/2 space-y-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <div className="flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer group">
            {/* star badge */}
            <span className="text-blue-600 group-hover:text-amber-300 group-hover:scale-110 transition-transform">
              ★
            </span>
            <span className="">Jump start your growth</span>
          </div>
        </motion.div>

        <motion.h1
          variants={textVariant(0.4)}
          initial="hidden"
          whileInView="show"
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          we boost the growth for
          <span className="text-blue-600 relative inline-block pb-1">
            Startup to Fortune 500
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200/60"></span>
          </span>{" "}
          Companies
          <span className="inline-block ml-2 animate-pulse">
            <FcAlarmClock />
          </span>
        </motion.h1>

        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="text-gray-600 text-lg md:text-xl max-w-xl"
        >
          Get the most accurate leads, sales people training conversions, tools
          and more - all within the same one billing
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          className="flex gap-3 max-w-md"
        >
          <input
            type="email"
            placeholder="Emai address"
            className="flex-1 px-6 py-4 border border-gray-200 rounded-xl focus:outline-none
                focus:border-blue-600 focus:ring-2 focus:ring-blue-100 transition-all"
          />

          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 cursor-pointer transition-all hover:shadow-lg hover:shadow-blue-300">
            <BsArrowRight />
          </button>
        </motion.div>
      </div>

      {/* right col */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        className="w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12"
      >
        <div className="relative">
          <img
            src={heroImage}
            alt="hero Image"
            className="rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
