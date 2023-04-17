import React from "react";
import { SectionWrapper } from "../hoc";
import { headshot } from "../assets";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const Profile = () => {
  // on click scroll to contact form
  const handleButtonClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Face Behind WebWorks</p>
        <h2 className={styles.sectionHeadText}>Who Am I?</h2>
      </motion.div>
      <div className="flex lg:flex-nowrap  flex-wrap items-center justify-evenly gap-6 mt-[60px] ">
        <motion.div variants={fadeIn("right", "", 0.1, 1)}>
          <img
            src={headshot}
            alt={headshot}
            className="h-[370px] min-w-[370px] rounded-3xl shadow-card border-l border-t border-white"
          />
        </motion.div>
        <div>
          <motion.p
            variants={fadeIn("left", "", 0.1, 1)}
            className="mt-4 text-secondary text-[16px] leading-[30px] "
          >
            Hi, my name is{" "}
            <span className="pink-text-gradient">Helena Gilja</span> and I am a{" "}
            <span className="pink-text-gradient">Freelance Web Developer</span>{" "}
            based in London. Fun fact: It took me a global pandemic to pursue my
            Tech Dreams.
          </motion.p>
          <motion.p
            variants={fadeIn("left", "", 0.1, 1)}
            className="mt-4 text-secondary text-[16px] leading-[30px]"
          >
            With years of experience in a large, complex and fast-paced
            organisations, I bring a unique set of skills to every web
            development project I undertake.
          </motion.p>
          <motion.p
            variants={fadeIn("left", "", 0.1, 1)}
            className="mt-4 text-secondary text-[16px] leading-[30px]"
          >
            My passion for technology is second to none, and I'm dedicated to
            helping local, small businesses, and startups create stunning
            websites that make them stand out from the crowd.
          </motion.p>
          <motion.p
            variants={fadeIn("left", "", 0.1, 1)}
            className="mt-4 text-secondary text-[16px] leading-[30px]"
          >
            I graduated from a{" "}
            <span className="pink-text-gradient">
              Bootcamp in Frontend Web Development
            </span>{" "}
            provided by Trilogy - globally recognised Education Company, with a
            grade A.
          </motion.p>
          <motion.p
            variants={fadeIn("left", "", 0.1, 1)}
            className="mt-4 text-secondary text-[16px] leading-[30px]"
          >
            So why wait?{" "}
            <span
              className="contact green-text-gradient text-[18px] cursor-pointer"
              type="button"
              onClick={handleButtonClick}
            >
              Contact me
            </span>{" "}
            today to learn more about how I can help you take your business to
            new heights!
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Profile, "profile");
