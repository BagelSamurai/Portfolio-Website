import { ReactNode } from 'react';
import {
  IoBriefcaseOutline,
  IoHomeOutline,
  IoMailOpenOutline,
  IoMenu,
} from 'react-icons/io5';
import { PiProjectorScreen } from 'react-icons/pi'; // Add this import
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiLogoRedux,
  BiLogoFlask,
  BiLogoMongodb,
  BiLogoFirebase,
} from 'react-icons/bi';
import { IoLogoJavascript } from 'react-icons/io';
import {
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaPython,
  FaAws,
  FaGitAlt,
  FaDocker,
} from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiExpress, SiSpringboot } from 'react-icons/si';
import { AiOutlineOpenAI } from 'react-icons/ai';
interface Profile {
  name: string;
  title: string;
  avatar: string;
  experience: string;
  about: string;
}

interface Contact {
  email: string;
  emailHref: string;
}

interface Social {
  githubHref: string;
  githubHandle: string;
  linkedinHandle: string;
  linkedinHref: string;
}

type NavLink = {
  label: string;
  icon: React.ReactNode;
  href: string;
};
export const navItems: NavLink[] = [
  {
    label: 'Home',
    icon: <IoHomeOutline />,
    href: '#about',
  },
  {
    label: 'Projects',
    icon: <PiProjectorScreen />,
    href: '#projects',
  },
  {
    label: 'Work',
    icon: <IoBriefcaseOutline />,
    href: '#work',
  },
  {
    label: 'Contact',
    icon: <IoMailOpenOutline />,
    href: '#contact',
  },
];

export interface SiteConfig {
  profile: Profile;
  contact: Contact;
  social: Social;
}

export const siteConfig: SiteConfig = {
  profile: {
    name: 'Rohan Chaudhary',
    title: 'Software and Data Programmer',
    avatar: '/assets/avatar.png',
    experience: 'Coding for 6 years',
    about: `Senior @ University of Houston
Double Major @ Mathematics and Computer Science
Teaching Assistant @ Data Science Dr Nouhad Rizk
Research @ Dr Nikolaos Tsekos`,
  },
  contact: {
    email: 'rohanc1021@gmail.com',
    emailHref: 'mailto:rohanc1021@gmail.com',
  },
  social: {
    githubHref: 'https://github.com/BagelSamurai/',
    githubHandle: 'BagelSamurai',
    linkedinHref: 'https://www.linkedin.com/in/rohan-codes',
    linkedinHandle: 'rohan-codes',
  },
};

export const aboutSocials: {
  Icon: React.ReactNode;
  href: string;
  title: string;
}[] = [
  {
    Icon: <FaGithub />,
    href: siteConfig.social.githubHref,
    title: 'Github',
  },
  {
    Icon: <FaLinkedin />,
    href: siteConfig.social.linkedinHref,
    title: 'LinkedIn',
  },
];
export interface Skill {
  // Renamed to singular 'Skill' as it describes a single object
  name: string;
  icon: React.ReactNode; // Changed 'badge' to 'icon' to match your interface property
}

export const skills: Skill[] = [
  { name: 'TypeScript', icon: <BiLogoTypescript /> },
  { name: 'JavaScript', icon: <IoLogoJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Next', icon: <RiNextjsFill /> },
  { name: 'Tailwind', icon: <BiLogoTailwindCss /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3 /> },
  { name: 'Node', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'MongoDB', icon: <BiLogoMongodb /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Docker', icon: <FaDocker /> },
  { name: 'Spring Boot', icon: <SiSpringboot /> },
];

export type ProjectsType = {
  title: string;
  description: string;
  href: string;
};

export const projectsData: ProjectsType[] = [
  {
    title: 'MRI Digital Twin',
    description:
      'Engineered a 1D MRI digital twin in MATLAB under faculty mentorship to model Bloch equations, T1/T2 relaxation, and FID signals, enhancing the simulation accuracy for MRI research',
    href: '',
  },
  {
    title: 'Ride Share App',
    description:
      'Developed a real-time, event-driven backend in Go using RabbitMQ for messaging and MongoDB database, Established a full CI/CD pipeline to Google Cloud (GCP) with Docker and Kubernetes ',
    href: 'https://github.com/BagelSamurai/Ride-Share-App/tree/main',
  },
  {
    title: 'SQL Data Warehouse and Analysis',
    description:
      'A modern data warehouse built using SQL Server, encompassing robust ETL processes, comprehensive data modeling, and insightful analytics.',
    href: 'https://github.com/BagelSamurai/SQL-Date-Warehouse-and-Analysis',
  },
  {
    title: 'Patient Management System',
    description:
      'Architected event-driven microservices using Java (Spring Boot), gRPC, and Apache Kafka. Improved system resilience and performance with Redis, Resilience4j, and Spring Cloud Gateway. Deployed to AWS ECS with Docker & CDK and established monitoring with Prometheus & Grafana',
    href: 'https://github.com/BagelSamurai/Patient-Management-System',
  },
  {
    title: 'Analyzing Amazon reviews using NLP',
    description:
      'A semester long project where I built a Python based opinion search engine using NLTK and Scikit-Learn on 21,000 Amazon reviews, applying 6 methods and NLP techniques to boost semantic search and relevance, assessed by a custom composite score',
    href: 'https://github.com/BagelSamurai/Amazon-Reviews-NLP',
  },
  {
    title: 'Predicting oil production rate at its peak',
    description:
      'Collaborated with a team of 4 members for 36 hours at Rice Datathon 2024 to build a model using Python to predict oil peak rates using a dataset with 30,000 entries achieving a RMSE of 31. ',
    href: 'github.com/BagelSamurai/Rice-Datathon-2024/blob/main/DatathonInfo/2024%20Chevron%20Rice%20Datathon%20Challenge%20Synopsis.docx.pdf',
  },
  {
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio website showcasing projects, skills, and experience with a modern design. Created using React and Chakra UI.',
    href: '#',
  },
  {
    title: 'CaseQuest',
    description:
      'Spearheaded the system architecture and UI/UX design for a 4-person team project, securing a 3rd place award in a design competition by delivering prototypes and user flows using Figma.',
    href: 'https://drive.google.com/drive/folders/1ZAuLbe56QDPQNrQXVLx3AKzM0WtTtRpr?usp=sharing',
  },
];

export type WorkType = {
  company: string;
  deliverables: string[]; // This is correct
  fromDate: string;
  toDate: string;
};

export const worksData: WorkType[] = [
  {
    company: 'Teaching Assistant',
    deliverables: [
      'Enchanced learning for 100+ students through office hours and co-authored new textbooks to be used in future curricula.',
      'Evaluated Python-based assignments on topics including Pandas, Scikit-learn, and TensorFlow, providing targeted feedback to improve student code quality.',
    ],
    fromDate: '2024-08',
    toDate: 'Present',
  },
];
