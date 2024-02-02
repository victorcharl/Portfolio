import {
  frontend,
  ux,
  prototyping,
  custom,
  javascript,
  typescript,
  html,
  css,
  json,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  webflow,
  coverhunt,
  qaTest,
  supp,
  i_css,
  i_html,
  i_javascript,
  i_typescript,
  i_react,
  i_tailwind,
  i_figma,
  i_git,
  i_node,
  i_web,
  i_json,
  student,
  charlPortfolio,
  hypermax,
  onlineResume,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Front End UI Design',
    icon: frontend,
  },
  {
    title: 'UI/UX Development',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
  {
    title: 'Custom Development',
    icon: custom,
  },
  {
    title: 'Front End QA Testing',
    icon: qaTest,
  },
  {
    title: 'Maintenance & Support',
    icon: supp,
  }
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
    years: 2019,
  },
  {
    name: 'CSS 3',
    icon: css,
    years: 2019,
  },
  {
    name: 'JavaScript',
    icon: javascript,
    years: 2019
  },
  {
    name: 'JSON',
    icon: json,
    years: 2019
  },
  {
    name: 'TypeScript',
    icon: typescript,
    years: 2022
  },
  {
    name: 'React JS',
    icon: reactjs,
    years: 2019
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
    years: 2023
  },
  {
    name: 'Node JS',
    icon: nodejs,
    years: 2019
  },
  {
    name: 'Git',
    icon: git,
    years: 2020
  },
  {
    name: 'Figma',
    icon: figma,
    years: 2023
  },
  {
    name: 'WebFlow',
    icon: webflow,
    years: 2023
  }
];

const experiences = [
  {
    title: 'Junior Freelancer',
    company_name: 'Self Employed',
    icon: coverhunt,
    date: 'Aug 2020 - Present',
    jobDesc: 'Creating awesome website for customers',
    learnedSkills: [i_html, i_css, i_javascript, i_react, i_tailwind, i_typescript, i_figma, i_git, i_web, i_json]
  },

  {
    title: 'Student',
    company_name: 'Bow Valley College',
    icon: student,
    date: 'Aug 2019 - Apr 2020',
    jobDesc: 'Post Diploma Software Development',
    learnedSkills: [i_html, i_css, i_javascript, i_react, i_typescript,i_git, i_node, i_json]
  }, 
  
  {
    title: 'Student',
    company_name: 'STI College Dagupan',
    icon: student,
    date: 'Jun 2013 - May 2017',
    jobDesc: 'Bachelor Degree in Information Technology',
    learnedSkills: [i_html, i_css,i_javascript]
  }
  
];

const projects = [
  {
    id: 'project-1',
    name: 'My Portfolio',
    description: 'Crafted with HTML, CSS, and JavaScript, powered by ReactJS. ThreeJS adds visual magic, Tailwind CSS brings style, and Framer Motion ensures smooth animations. Explore the intersection of tech and creativity, where each project tells a unique story.',
    image: charlPortfolio,
    repo: 'https://github.com/victorcharl/Portfolio',
    demo: 'https://portfolio-victorcharl.vercel.app/',
  },
  {
    id: 'project-2',
    name: 'Hypermax Store',
    description: 'My Webflow masterpiece. A sleek online store where HTML, CSS, and JavaScript unite for a seamless shopping experience. Explore style and functionality in every line of code.',
    image: hypermax,
    repo: '',
    demo: 'http://hypermaxstore.webflow.io/',
  },
  {
    id: 'project-3',
    name: 'My Online Resume',
    description: 'Empowered by Next.js 13 for efficient server-side rendering, our platform features a responsive and customizable UI crafted with Tailwind CSS. TypeScript ensures top-notch code quality, while our Dark Mode option enhances readability. Plus, SEO optimizations ensure greater visibility. Seamlessly toggle between light and dark themes for personalized browsing.',
    image: onlineResume,
    repo: 'https://github.com/victorcharl/MyResume',
    demo: 'https://charl-resume.vercel.app/',
  },
];

export { services, technologies, experiences, projects };
