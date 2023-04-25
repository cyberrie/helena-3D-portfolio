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
  threejs,
  firebase,
  bootstrap,
  discovery,
  design1,
  planning,
  development,
  launch,
  maintenance,
  servicing,
  seo,
} from "../assets";

import TuneLab from "../assets/TuneLab.png";
import linkedinclone from "../assets/linkedinclone.png";
import moodmix from "../assets/moodmix.png";
import weatherdashboard from "../assets/weatherdashboard.png";
import dailyplanner from "../assets/dailyplanner.png";
import teamprofiles from "../assets/teamprofiles.png";
import ecommerce from "../assets/ecommerce.png";
import design from "../assets/design.png";
import reactive from "../assets/reactive.png";
import dane from "../assets/dane.png";
import scott from "../assets/scott.png";

export const navLinks = [
  {
    id: "about",
    title: "Services",
  },
  {
    id: "work",
    title: "Portfolio",
  },
  // {
  //   id: "profile",
  //   title: "Bio",
  // },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Website Design and Development",
    icon: frontend,
  },
  {
    title: "Website Maintenance and Support",
    icon: servicing,
  },
  {
    title: "React Web Development",
    icon: reactive,
  },
  {
    title: "Website Optimization",
    icon: seo,
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

const process = [
  {
    title: "1.",
    step_name: "Discovery Phase",
    icon: discovery,
    iconBg: "#000000",
    desc: "The Aha! Moment",
    points: [
      "This is where we get to know you and your brand, your goals, and your target audience. We dig deep to understand your unique story, message, and values so that we can create a website that truly represents who you are.",
    ],
  },
  {
    title: "2.",
    step_name: "Planning Phase",
    icon: planning,
    iconBg: "#000000",
    desc: "The Roadmap to Awesome",
    points: [
      "In this phase, we create a detailed roadmap for your website development project. We establish timelines, milestones, and deliverables, and make sure we are aligned with your vision and objectives. We collaborate with you to ensure that the planning phase is both strategic and creative.",
    ],
  },
  {
    title: "3.",
    step_name: "Design Phase",
    icon: design1,
    iconBg: "#000000",
    desc: "Let's Get Creative ",
    points: [
      "This is where we bring your website to life. Our team creates a visual concept that is both beautiful and functional. We focus on creating an engaging user experience that captures the essence of your brand and makes it easy for users to navigate.",
    ],
  },
  {
    title: "4.",
    step_name: "Development Phase",
    icon: development,
    iconBg: "#000000",
    desc: "The Building Blocks",
    points: [
      "In this phase, we turn the design into a functional website. Our team works on coding, testing, and refining your website to ensure that it is fast, responsive, and accessible to all users. We make sure that your website is optimized for search engines and integrates seamlessly with your existing systems.",
    ],
  },
  {
    title: "5.",
    step_name: "Launch Phase",
    icon: launch,
    iconBg: "#000000",
    desc: "Blast Off!",
    points: [
      "This is where we take your website live. We ensure that everything is in place, from hosting and domain name registration to analytics and tracking. We can also provide you with training and support to ensure that you can manage your website effectively.",
    ],
  },
  {
    title: "6.",
    step_name: "Maintenance Phase",
    icon: maintenance,
    iconBg: "#000000",
    desc: "the vip treatment",
    points: [
      " Once your website is live, we don't just disappear. We offer ongoing maintenance and support to ensure that your website stays up-to-date, secure, and performing at its best. We monitor your website for issues and provide regular updates and improvements to keep your website fresh and engaging.",
    ],
  },
];

const education = [
  {
    title: "Certificate, Frontend Web Development",
    company_name: "Trilogy Education",
    // icon: trilogy,
    iconBg: "#fff",
    date: "Oct 2022 - Mar 2023",
    grade: "A",
  },
  {
    title: "MSc Musculoskeletal Science",
    company_name: "UCL",
    // icon: ucl,
    iconBg: "#fff",
    date: "Sep 2017 - Sep 2019",
    grade: "1:1",
  },
  {
    title: "BSc Physiotherapy",
    // company_name: "University of Applied Sciences, Croatia",
    // icon: vevu,
    iconBg: "#fff",
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
    company: "Trilogy Education",
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

const pricing = [
  {
    recommended: false,
    title: "Basic",
    // icon: priceIcon1,
    desc: "Great for personal websites",
    amount: "£649",
    options: [
      {
        status: true,
        label: "3 Page Website",
      },
      {
        status: true,
        label: "Mobile Ready Design",
      },
      {
        status: true,
        label: "Website Contact Form",
      },
      {
        status: true,
        label: "Social Media Integration",
      },
      {
        status: false,
        label: "Google Maps",
      },
      {
        status: false,
        label: "1 Year FREE Hosting",
      },
    ],
  },
  {
    recommended: true,
    title: "Pro",
    // icon: priceIcon2,
    desc: "Great for small business websites",
    amount: "£949",
    options: [
      {
        status: true,
        label: "5 Page Website",
      },
      {
        status: true,
        label: "Mobile Ready Design",
      },
      {
        status: true,
        label: "Website Contact Form",
      },
      {
        status: true,
        label: "Google Maps",
      },
      {
        status: true,
        label: "Social Media Integration",
      },
      {
        status: true,
        label: "1 Year FREE Hosting",
      },
    ],
  },
  {
    recommended: false,
    title: "Ultimate",
    // icon: priceIcon2,
    desc: "Great for medium sized businesses",
    amount: "£1049",
    options: [
      {
        status: true,
        label: "7 Page Website",
      },
      {
        status: true,
        label: "Mobile Ready Design",
      },
      {
        status: true,
        label: "Website Contact Form",
      },
      {
        status: true,
        label: "Google Maps",
      },
      {
        status: true,
        label: "Social Media Integration",
      },
      {
        status: true,
        label: "1 Year FREE Hosting",
      },
    ],
  },
];

const projects = [
  {
    name: "AudioVerse",
    description:
      "eCommerce Website with integrated Stripe payments, using Sanity as forContent Management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "sanity",
        color: "pink-text-gradient",
      },
    ],
    image: ecommerce,
    live_link: "https://e-commerce-cyberrie.vercel.app/",
    source_code_link: "https://github.com/cyberrie/eCommerce",
  },
  {
    name: "TuneLab",
    description:
      "Web App that enables discovery of top artists and charts, searching and listening to music. Demo only available here due to API fees",
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
    live_link:
      "https://drive.google.com/file/d/11vnV9eSSdb0Wcx_xukyasOZtQeCtobKC/view?usp=sharing",
    source_code_link: "https://github.com/cyberrie/TuneLab",
  },
  {
    name: "LinkedIn Clone",
    description:
      "This Web App is a LinkedIn App Clone. Users can register, create posts, and view them on the feed.",
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
    live_link: "https://linkedin-clone-cyberrie.netlify.app/",
    source_code_link: "https://github.com/cyberrie/LinkedIn-Clone_React-Redux",
  },
  {
    name: "MoodMix",
    description:
      "This Web App selects meal and drink recipes based on selected mood.",
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
    live_link: "https://cyberrie.github.io/MoodMix/",
    source_code_link: "https://github.com/cyberrie/MoodMix",
  },
  {
    name: "Weather Dashboard",
    description:
      "This Web App shows current weather and weekly forecast for searched cities.",
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
    live_link: "https://cyberrie.github.io/Weather-Dashboard/",
    source_code_link: "https://github.com/cyberrie/Weather-Dashboard",
  },
  {
    name: "Daily Planner",
    description:
      "This Web App allows saving events for each hour of the day. Time-blocks are color-coded and events persist using local storage.",
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
    live_link: "https://cyberrie.github.io/Daily-Planner/",
    source_code_link: "https://github.com/cyberrie/Daily-Planner",
  },
  {
    name: "Team-Profile Generator",
    description:
      "Node.js CLI App that generates a Webpage. Developed using Test Driven Development. ",
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
    live_link:
      "https://drive.google.com/file/d/1xLqoTUv84jBp6aRmcj81XzrplRk0anPL/view",
    source_code_link: "https://github.com/cyberrie/yourTeamProfile-Generator",
  },
];

export {
  services,
  technologies,
  process,
  education,
  testimonials,
  projects,
  pricing,
};
