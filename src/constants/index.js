import {
  frontend,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  maximus,
  lnwh,
  ucl,
  vevu,
  trilogy,
  threejs,
  firebase,
  bootstrap,
  logo,
  physiotherapist
} from "../assets";

import TuneLab from "../assets/TuneLab.png";
import linkedinclone from "../assets/linkedinclone.png";
import moodmix from "../assets/moodmix.png";
import weatherdashboard from "../assets/weatherdashboard.png";
import dailyplanner from "../assets/dailyplanner.png";
import teamprofiles from "../assets/teamprofiles.png";
import design from '../assets/design.png'
import reactive from '../assets/reactive.png'
import dane from '../assets/dane.png'
import scott from '../assets/scott.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "UI/UX Designer",
    icon: design,
  },
  {
    title: "React.js Developer",
    icon: reactive,
  },
  {
    title: "Physiotherapist",
    icon: physiotherapist,
  }
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Freelance",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Present",
    points: [
      "Developing web applications using React and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility for seamless user experiences.",
      "Collaborating with clients throughout the development process to ensure that their requirements are fully met and the end-product is of high quality.",
    ],
  },
  {
    title: "Clinical Manager",
    company_name: "Maximus UK",
    icon: maximus,
    iconBg: "#E6DEDD",
    date: "Sep 2021 - Present",
    points: [
      "Developing strategies to improve clinical performance and engagement, resulting in quality enhancements seen regionally and nationally.",
      "Creating streamlined processes for new recruits, reducing attrition rates and standardizing procedures across regions.",
      "Awarded a Clinical Innovation Award at Maximus Clinical Conference 2022.",
   
    ],
  },
  {
    title: "National Trainer",
    company_name: "Maximus UK",
    icon: maximus,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - Mar 2021",
    points: [
      // "Implemented successful remote training program during unprecedented times, onboarding and equipping 30+ new staff to become functional assessors.",
      // "Creating streamlined processes for new recruits, reducing attrition rates and standardizing procedures across regions.",

    ],
  },
  {
    title: "Physiotherapist",
    company_name: "Maximus UK",
    icon: maximus,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Mar 2020",
    points: [
      // "Transforming lives of our customers and helping them move forward by carrying out Work Capability Assessments.",
    ],
  },
  {
    title: "Physiotherapist",
    company_name: "LNWH",
    icon: lnwh,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - Sep 2018",
    points: [
      // "Worked as a part of Short-Term Assessment, Rehabilitation and Reablement Service in A+E Department",
  
      // "Mentored students and Junior Physiotherapists.",
  
    ],
  },
 
  
 
 
];

const education = [
  {
    title: "Certificate, Frontend Web Development",
    company_name: "Trilogy Education",
    icon: trilogy,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Mar 2023",
    grade: "A",
  },
  {
    title: "MSc Musculoskeletal Science",
    company_name: "UCL",
    icon: ucl,
    iconBg: "#E6DEDD",
    date: "Sep 2017 - Sep 2019",
    grade: "1:1",
  },
  {
    title: "BSc Physiotherapy",
    company_name: "University of Applied Sciences, Croatia",
    icon: vevu,
    iconBg: "#E6DEDD",
    date: "Sep 2011 - Sep 2014",
    grade: "1:1",
  },
];

const testimonials = [
  {
    testimonial:
      "As a student, Helena displayed a great aptitude for front-end web development. I was consistently impressed with her technical proficiency, and her ability to learn and apply concepts quickly and effectively. Helena showed a keen attention to detail in all her work. More than just her technical skills, Helena was a joy to work with. She has a fantastic personality, is hardworking, and is committed to excellence. She was always willing to help her classmates and contributed positively to the classroom environment. I am confident that Helena will bring these same qualities to any position she holds in the industry. She is a dedicated learner and a team player, and I have no doubt that she will continue to grow and thrive in the field of front-end web development.",
    name: "Dane Edwards",
    designation: "Web Development Instructor",
    company: "Trilogy Education (acquired by 2U)",
    image: dane,
  },
  {
    testimonial:
      "Helena was a student in the frontend web development bootcamp for which I was part of the instructional staff. Throughout the bootcamp, Helena was always among the top students. Her questions were regularly insightful, her assignments were both excellently done and promptly submitted, and she consistently displayed both her ability to learn, as well as her willingness to help others in the class. I found her to be an absolute pleasure in all of our interactions, and I cannot recommend her highly enough.",
    name: "Scott Nelson",
    designation: "Full Stack Web Developer",
    company: "2U",
    image: scott,
  },
];

const projects = [
  {
    name: "TuneLab",
    description:
      "Discover top artists and charts, search and listen to music with this web app. Built with ShazamCore API, React Redux, Tailwind, and Vite, and deployed on Netlify. Demo available due to subscription fee for Shazam Core API.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: TuneLab,
    source_code_link: "https://github.com/cyberrie/TuneLab",
  },
  {
    name: "LinkedIn Clone",
    description:
      "A React-based web app that uses Firebase and Cloud Firestore for user authentication and data storage. Users can register, create posts, and view them on the feed. Material UI is used for styling and login details are stored in Redux for a seamless experience. Deployed on Firebase.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: linkedinclone,
    source_code_link: "https://github.com/cyberrie/LinkedIn-Clone_React-Redux",
  },
  {
    name: "MoodMix",
    description:
      "This web app offers a unique experience that combines mixology, gastronomy, and inspiration. It has a polished UI and uses server-side APIs and client-side storage for data persistence. Created with HTML, CSS, Bootstrap, and JavaScript, and deployed on GitHub Pages.",
    tags: [
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: moodmix,
    source_code_link: "https://github.com/cyberrie/MoodMix",
  },
  {
    name: "Weather Dashboard",
    description:
      "This web app shows current and future weather for searched cities and stores search history in local storage. OpenWeather API provides weather data. Built with HTML, CSS, JavaScript, Moment.js.",
    tags: [
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "momentjs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: weatherdashboard,
    source_code_link: "https://github.com/cyberrie/Weather-Dashboard",
  },
  {
    name: "Daily Planner",
    description:
      "A web calendar app built with HTML, CSS, JavaScript, jQuery, and Moment.js. It allows saving events for each hour of the day and displays the current day. Time-blocks are color-coded and events persist using local storage.",
    tags: [
      {
        name: "jquery",
        color: "blue-text-gradient",
      },
      {
        name: "momentjs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: dailyplanner,
    source_code_link: "https://github.com/cyberrie/Daily-Planner",
  },
  {
    name: "Team-Profile Generator",
    description:
      "This Node.js command-line app generates an HTML webpage of employee summaries for a software engineering team. It uses TDD, Inquirer for user input, and Jest package for unit tests. Includes input validation and prompts for team members. ",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "tdd",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: teamprofiles,
    source_code_link: "https://github.com/cyberrie/yourTeamProfile-Generator",
  },
];

export {
  services,
  technologies,
  experiences,
  education,
  testimonials,
  projects,
};
