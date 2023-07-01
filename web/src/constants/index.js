import {
  mobile,
  backend,
  aws,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  database,
  humanapi,
  lookfarlabs,
  operationspark,
} from "../assets";

const pdfUrl = "../../src/constants/MichaelBazileResume2023.pdf";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Work Experience",
  },
  {
    id: "work",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React / React Native Developer",
    icon: reactjs,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Cloud Computing",
    icon: aws,
  },
  {
    title: "Database Management Systems",
    icon: database,
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer - Full Time",
    company_name: "Human API",
    icon: humanapi,
    iconBg: "#E6DEDD",
    date: "May 2021 - January 2023",
    points: [
      "Expanded observability through DataDog to facilitate constant monitoring of user activity & incidents.",
      "Utilized Puppeteer to crawl, gather & retrieve health data on behalf of users.",
      "Refactored internal troubleshooting tools in React to proxy API calls to the backend instead of the client to facilitate improved security & logging.",
      "Complied with the system development lifecycle (SDLC) and project management methodology - adopting Agile approaches as necessary.",
      "Spearheaded overseeing Puppeteer automation crawling error metrics and reports from DataDog remained below 5%.",
      "Analyzed workflow issue reports using AWS log data with CloudWatch Logs.",
      "Optimized time spent testing code fixes to crawlers using Jenkins CI/CD.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "LookFar Labs",
    icon: lookfarlabs,
    iconBg: "#E6DEDD",
    date: "January 2021 - April 2021",
    points: [
      "Created a robust Node.js and Express API to efficiently manage CRUD operations across multiple Postgres databases.",
      "Implemented Puppeteer to capture screenshots of image thumbnails and seamlessly upload them to an AWS S3 storage bucket.",
      "Utilized AWS-SDK to establish SQS queues & subscribe to SNS topics, facilitating efficient data publishing across different application components.",
      "Designed & implemented comprehensive server-side unit tests using Chai to ensure code quality and reliability. ",
      "Developed custom functional components using React and Material-UI grid components, enhancing the user interface and experience.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Operation Spark",
    icon: operationspark,
    iconBg: "#E6DEDD",
    date: "August 2020 - December 2020",
    points: [
      "Created a robust Node.js and Express API to efficiently manage CRUD operations across multiple Postgres databases.",
      "Implemented Puppeteer to capture screenshots of image thumbnails and seamlessly upload them to an AWS S3 storage bucket.",
      "Utilized AWS-SDK to establish SQS queues & subscribe to SNS topics, facilitating efficient data publishing across different application components.",
      "Designed & implemented comprehensive server-side unit tests using Chai to ensure code quality and reliability.",
      "Developed custom functional components using React and Material-UI grid components, enhancing the user interface and experience.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Operation Spark",
    icon: operationspark,
    iconBg: "#E6DEDD",
    date: "June 2020 - August 2020",
    points: [
      "Designed application infrastructure by employing FeathersJS and MariaDB, enabling streamlined CRUD operations for data flow management throughout the application to improve overall performance.",
      "Integrated expo-image-picker with React Native to develop an intuitive image-uploading system by leveraging Cloudinary as the storage solution to facilitate a seamless image management process. ",
      "Leveraged the capabilities of expo-camera to seamlessly integrate the PlantId API to allow users to identify plants by either using a picture saved on their phone or taking a photo in real time. ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Flourish",
    description:
      "React Native mobile application, featuring augmented reality (AR) and plant identification, that serves as a comprehensive social media platform connecting plant owners worldwide, enabling them to visualize plants in their surroundings and discover plant species while fostering a vibrant community of passionate plant enthusiasts.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "expo",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects, pdfUrl };
