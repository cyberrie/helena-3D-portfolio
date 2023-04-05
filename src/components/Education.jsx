import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../styles'
import { education } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'


const EducationCard = ({education}) => (
  <VerticalTimelineElement contentStyle={{background: '#141313', color: '#fff'}}
  contentArrowStyle={{borderRight: '7px solid #232631'}}
  date={education.date}
  iconStyle={{background: education.iconBg}}
  icon={
    <div className='flex justify-center items-center w-full h-full'>
      <img src={education.icon}
      alt={education.company_name}
      className="w=[80%] h-[80%] object-contain rounded-full " 
      />
    </div>
  }>
    <div>
      <h3 className='text-white text-[24px] font-bold'>{education.title}</h3>
      <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{education.company_name}</p>
      <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>Grade: {education.grade}</p>
    </div>
  </VerticalTimelineElement>
);


const Education = () => {
  return (
    <>
    <motion.div variants={textVariant}>
    <p className={styles.sectionSubText}>My Credentials</p>
    <h2 className={styles.sectionHeadText} >Education.</h2>
    </motion.div>
    <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {education.map((education, index) => (
        <EducationCard key={index} education={education} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Education, 'work');