import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { process } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";

const TimelineCard = ({ step }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#141313",
    }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={step.desc}
    iconStyle={{ background: step.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={step.icon}
          alt={step.step_name}
          className="w-[55%] h-[55%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="pink-text-gradient text-[24px] font-bold">{step.title}</h3>
      <p
        className="text-secondary font-semibold"
        style={{ margin: 0, fontSize: "22px" }}
      >
        {step.step_name}
      </p>
    </div>

    <ul className="mt-5 list-disc space-y-2 ">
      {step.points.map((point, index) => (
        <li
          key={`timeline-point-${index}`}
          className=" list-none text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Timeline = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}>our process</p>
        <h2 className={styles.sectionHeadText}>
          A Journey Through Our Website Creation.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        We strive to create websites that truly embody the essence
        of our clients' brands and messages. To achieve this, we prioritize
        designing for the user and ensuring the website is intuitive, easy to
        navigate, and accessible for everyone.
      </motion.p>
      <div className="mt-2 flex flex-col">
        <VerticalTimeline>
          {process.map((step, index) => (
            <TimelineCard key={index} step={step} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Timeline, "");
