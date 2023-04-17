import React, { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const greetings = [
    "Hello",
    "Hola",
    "Ciao",
    "Dobar Dan",
    "Bonjour",
    "Guten Tag",
    "Привет",
    "Merhaba",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((index) => (index + 1) % greetings.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

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
            <span className="pink-text-gradient">{greetings[index]}!</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Websites Designed To
            <br className="sm:block hidden" />
            {" "}Take{" "}<span className="orange-text-gradient font-bold">
              Your Business</span>
            <span className="orange-text-gradient font-bold">
            <br/>To New Heights!
            </span>
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center"
        style={{ marginTop: "100px", zIndex: "1000" }}
      >
        <a href="#about">
          <div className="w-[36px] h-[62px] rounded-3xl border-4 border-white  flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
