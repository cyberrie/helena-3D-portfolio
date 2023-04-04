import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#fff]" />
          <div className="w-1 sm:h-80 h-40 white-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="text-[#db0606]">Helena</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user-friendly interfaces <br className="sm:block hidden" /> and web
            applications.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
