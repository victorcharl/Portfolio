import {
  frontend,
  ux,
  prototyping,
  custom,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  coverhunt,
  qaTest,
  supp,
  worldmap,
  i_css,
  i_html,
  i_javascript,
  i_typescript,
  i_react,
  i_tailwind,
  i_figma,
  i_git,
  i_node,
  student
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
];

const experiences = [
  {
    title: 'Junior Freelancer',
    company_name: 'Self Employed',
    icon: coverhunt,
    date: 'Aug 2020 - Present',
    jobDesc: 'Creating awesome website for customers',
    learnedSkills: [i_html, i_css, i_javascript, i_react, i_tailwind, i_typescript, i_figma, i_git]
  },

  {
    title: 'Student',
    company_name: 'Bow Valley College',
    icon: student,
    date: 'Aug 2019 - Apr 2020',
    jobDesc: 'Post Diploma Software Development',
    learnedSkills: [i_html, i_css, i_javascript, i_react, i_typescript,i_git, i_node]
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
    name: 'MOCK UP',
    description: 'DESIGN ONLY',
    image: worldmap,
    repo: '',
    demo: '',
  }
];

export { services, technologies, experiences, projects };