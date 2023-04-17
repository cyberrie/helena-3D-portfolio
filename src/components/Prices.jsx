import React, { useRef } from "react";
import { SectionWrapper } from "../hoc";
import { pricing } from "../constants";
import { styles } from "../styles";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import { textVariant } from "../utils/motion";
import { yes, no } from "../assets";

const PriceCard = ({ index, recommended, title, desc, amount, options }) => {
  // on click scroll to contact form
  const handleButtonClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="sm:w-[98%] lg:w-[30%]">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full blue-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 15,
              scale: 1,
              speed: 450,
            }}
            className={`bg-tertiary rounded-[20px] py-5 flex  px-5 justify-start items-start flex-col ${
              recommended ? "recommended-card border shadow-card" : ""
            }`}
          >
            <h3 className="text-[#dfd9ff] font-bold text-[32px]">{title}</h3>
            <p className="tex-[14px] text-secondary uppercase pb-[25px] border-b border-white-100">
              {desc}
            </p>
            <p className="mt-[25px]">starting from</p>
            <p className="text-[#dfd9ff] text-[49px] font-bold">{amount}</p>
            <ul className="mt-5">
              {options.map((option) => (
                <li
                  key={option.label}
                  className={`flex items-center mb-[20px] ${
                    option.status ? "text-white" : "text-secondary"
                  }`}
                >
                  {option.status ? (
                    <img
                      src={yes}
                      alt="yes-icon"
                      className="h-[16px] w-[16px] mr-[12px]"
                    />
                  ) : (
                    <img
                      src={no}
                      alt="no-icon"
                      className="h-[11x] w-[11px] mr-[16px]"
                    />
                  )}
                  <span className="text-[16px] ">{option.label}</span>
                </li>
              ))}
            </ul>

            <button
              className={` shadow-lg py-2 px-3 text-[16px] font-semibold text-white rounded-xl border ${
                recommended
                  ? " mt-[40px] border-white shadow-card"
                  : " mt-[20px]"
              }`}
              type="button"
              onClick={handleButtonClick}
            >
              CHOOSE THIS
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

const Prices = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="lg:mt-12">
        <p className={styles.sectionSubText}>pricing</p>
        <h2 className={styles.sectionHeadText}>Pricing Plans To Suit You.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Kickstart your business with a cutting-edge website designed to outshine
        your rivals, all without breaking the bank!
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {pricing.map((price, index) => (
          <PriceCard key={price.title} index={index} {...price} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Prices, "");
