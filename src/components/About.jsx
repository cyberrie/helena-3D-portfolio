import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
<motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className="w-full blue-pink-gradient p-[1px] rounded-[20px] shadow-card">

  <div options={{
    max: 45, 
    scale: 1, 
    speed: 450 
  }} className="bg-tertiary rounded-[20px] py-5 min-h-[250px] flex justify-evenly items-center flex-col">
    <img src={icon} alt={title} className="w-[80px] h-[80px] object-contain"/>
    <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
  </div>

</motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
   <> 
   <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>Introduction</p>
    <h2 className={styles.sectionHeadText} >Overview.</h2>
   </motion.div>

   <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">As a hybrid of Frontend Developer and Physiotherapist, I'm equipped to make sure your website is not only running smoothly but pain-free. With experience in JavaScript, React and Node.js I focus on designing applications that are aesthetically pleasing, functional, and intuitive. I'm a quick learner and enjoy collaborating with clients to create efficient and user-friendly solutions. Let's work together to build a website that not only works great but looks fabulous too! 
  </motion.p>

  <div className="mt-20 flex flex-wrap gap-10">
    {services.map((service, index) =>  (
      <ServiceCard key={service.title} index={index} {...service} />
    ))}
  </div>
   </>
  )
}

export default SectionWrapper(About, 'about'); //pass name and id