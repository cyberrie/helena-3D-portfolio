import {
  mobile,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  creator,
  maximus,
  lnwh,
  freelance,
  ucl,
  vevu,
  trilogy,
  threejs,
  firebase,
  bootstrap,
} from "../assets";

import TuneLab from "../assets/TuneLab.png";
import linkedinclone from "../assets/linkedinclone.png";
import moodmix from "../assets/moodmix.png";
import weatherdashboard from "../assets/weatherdashboard.png";
import dailyplanner from "../assets/dailyplanner.png";
import teamprofiles from "../assets/teamprofiles.png";

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
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: creator,
  },
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
  {
    name: "TypeScript",
    icon: typescript,
  },
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
    title: "Physiotherapist",
    company_name: "LNWH",
    icon: lnwh,
    iconBg: "#E6DEDD",
    date: "Aug 2017 - Sep 2018",
    points: [
      "Worked as a part of Short-Term Assessment, Rehabilitation and Reablement Service in A+E Department of Northwick Park Hospital.",
      "Assisted early discharge and prevented hospital admissions for 10+ patients daily.",
      "Mentored students and Band 5 Physiotherapists and Occupational Therapists",
      "#Physiotherapy #Rehabilitation #MSKPhysio #CardioRespiratoryPhysio #EmergencyPhysio #Mentoring",
    ],
  },
  {
    title: "Functional Assessor (Physiotherapist)",
    company_name: "Maximus UK",
    icon: maximus,
    iconBg: "#E6DEDD",
    date: "Sep 2018 - Mar 2020",
    points: [
      "As a part of my role, delivering the Health Assessment Advisory Service, covering a range of benefits.",
      "Transorming lives of our customers and helping them move forward by carrying out Work Capability Assessments.",
      "Submitting reports to DWP so that they can make an informed decision about an individual’s eligibility for benefits",
      "#CodeOfConduct #TransformingLives #Physiotherapy #OccupationalHealth",
    ],
  },
  {
    title: "National Trainer",
    company_name: "Maximus UK",
    icon: maximus,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - Mar 2021",
    points: [
      "Implemented successful remote training program during unprecedented times, onboarding and equipping 30+ new staff to become functional assessors.",
      "Awarded a Clinical Innovation Award at Maximus Clinical Conference 2022.",
      "Creating streamlined processes for new recruits, reducing attrition rates and standardizing procedures across regions.",
      "#QualityAssurance #Mentoring #Coaching #StaffDevelopment #TeamBuilding",
    ],
  },
  {
    title: "Clinical Manager",
    company_name: "Maximus UK",
    icon: maximus,
    iconBg: "#E6DEDD",
    date: "Sep 2011 - Present",
    points: [
      "Developing strategies to improve clinical performance and engagement, resulting in quality enhancements seen regionally and nationally.",
      "Awarded a Clinical Innovation Award at Maximus Clinical Conference 2022.",
      "Creating streamlined processes for new recruits, reducing attrition rates and standardizing procedures across regions.",
      "#BusinessProcessImprovement #TeamLeadership #QualityAssurance #Management #ClinicalSupervision #TeamBuilding #CustomerService #CustomerRelations",
    ],
  },
  {
    title: "Freelance React Developer",
    company_name: "Helena Gilja",
    icon: freelance,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Present",
    points: [
      "Developing web applications using React and other related technologies.",
      "Implementing responsive design to ensure that the applications are accessible across all devices and ensuring cross-browser compatibility for seamless user experiences.",
      "Collaborating with clients throughout the development process to ensure that their requirements are fully met and the end-product is of high quality.",
    ],
  },
];

const education = [
  {
    title: "BSc Physiotherapy",
    company_name: "University of Applied Sciences, Croatia",
    icon: vevu,
    iconBg: "#E6DEDD",
    date: "Sep 2011 - Sep 2014",
    grade: "1:1",
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
    title: "Certificate, Frontend Web Development",
    company_name: "Trilogy Education",
    icon: trilogy,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Mar 2023",
    grade: "A",
  },
];

const testimonials = [
  {
    testimonial:
      "As a student, Helena displayed a great aptitude for front-end web development. I was consistently impressed with her technical proficiency, and her ability to learn and apply concepts quickly and effectively. Helena showed a keen attention to detail in all her work. More than just her technical skills, Helena was a joy to work with. She has a fantastic personality, is hardworking, and is committed to excellence. She was always willing to help her classmates and contributed positively to the classroom environment. I am confident that Helena will bring these same qualities to any position she holds in the industry. She is a dedicated learner and a team player, and I have no doubt that she will continue to grow and thrive in the field of front-end web development.",
    name: "Dane Edwards",
    designation: "Web Development Instructor",
    company: "Trilogy Education (acquired by 2U)",
    image: "../assets/dane.png",
  },
  {
    testimonial:
      "Helena was a student in the frontend web development bootcamp for which I was part of the instructional staff. Throughout the bootcamp, Helena was always among the top students. Her questions were regularly insightful, her assignments were both excellently done and promptly submitted, and she consistently displayed both her ability to learn, as well as her willingness to help others in the class. I found her to be an absolute pleasure in all of our interactions, and I cannot recommend her highly enough.",
    name: "Scott Nelson",
    designation: "Full Stack Web Developer",
    company: "2U",
    image: "../assets/scott.png",
  },
];

const projects = [
  {
    name: "TuneLab",
    description:
      "Web application that allows you to discover top artists, top charts, and top artists and charts, search for and listen to your favourite music. The app utilizes ShazamCore API, React Redux, Tailwind, and Vite, and is deployed on Netlify (unfortunately, I can't share the link due to the pesky subscription fee for Shazam Core API - link will take you to demo).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
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
      "Web application created with React, Redux, and Firebase. It lets users register with their name, email, and password, and create new posts that will appear on the feed section. The app is styled with Material UI and user data is stored in Cloud Firestore. The app is deployed on Firebase and login details are stored in Redux for seamless user experience.",
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
      "Web application that combines mixology, gastronomy, and inspiration to create a unique experience for users. It features a polished UI, uses server-side APIs, and client-side storage for persistent data. Built with HTML, CSS, Bootstrap, JavaScript, and deployed on GitHub Pages",
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
        color: "green-text-gradient",
      },
    ],
    image: moodmix,
    source_code_link: "https://github.com/cyberrie/MoodMix",
  },
  {
    name: "Weather Dashboard",
    description:
      "Web application that provides current and future weather conditions for a searched city, and stores search history using local storage. It uses OpenWeather API to retrieve weather data and was built with HTML, CSS, JavaScript, and Moment.js. Through this project, I learned how to access data from backend servers, use server-side APIs, and work with JSON in web applications.",
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
        color: "green-text-gradient",
      },
    ],
    image: weatherdashboard,
    source_code_link: "https://github.com/cyberrie/Weather-Dashboard",
  },
  {
    name: "Daily Planner",
    description:
      "Web calendar application built with HTML, CSS, JavaScript, jQuery, and Moment.js. It allows users to save events for each hour of the day, displays the current day and time-blocks color-coded based on past, present, and future. Events are saved in local storage, persisting between refreshes. With the Daily Planner app, staying on top of your busy schedule has never been easier!",
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
        color: "green-text-gradient",
      },
    ],
    image: dailyplanner,
    source_code_link: "https://github.com/cyberrie/Daily-Planner",
  },
  {
    name: "Team-Profile Generator",
    description:
      "Node.js command-line app that generates an HTML webpage of employee summaries for a software engineering team. Developed with Test-Driven Development and Inquirer package for user input. The app includes input validation and prompts for team manager, engineer, and intern information. Unit tests performed with Jest package. ",
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
        color: "green-text-gradient",
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
