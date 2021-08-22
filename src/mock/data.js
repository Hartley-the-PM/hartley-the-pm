import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'HS.png',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'resume',
};

// RESUME DATA
export const resumeData = {
  img: 'resume-1.png',
  img2: 'resume-2.png',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'undraw_pie.png',
    title: 'Distribution Channel Strategy',
    info: 'Hartley led the development of a new distribution strategy with a channel partner organization. This initiative increased sales by ~10% in the initial quarter of the release.',
    info2:
      'To achieve this, Hartley modelled potential user growth to inform the profitability of the initiative, the negotiation process, and supply chain inputs; he then collaberated with legal to create the agreement. He also launched the initiative via a robust project roadmap and onboarded users by facilitating product training.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'undraw_cart.png',
    title: 'Medical Device E-Catalog',
    info: 'Hartley mapped out and orchestrated the development of an E-catalog in the MDS-Canada business unit, leading to improved user experience. This new tool provided customers with the ability to learn more about products in real time without speaking to the customer support team at BD-Canada.',
    info2:
      'Hartley gathered all product related information and developed content criteria based on internal feedback, along with strategically choosing product images. He then worked with the global development and digit marketing teams to construct and design the layout of the platform.',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'undraw_medicine.png',
    title: 'Something Awesome is in the Works',
    info: 'Hartley is diligently working on more exciting independent projects, product management articles, and case studies. Stay tuned to learn more and join the community!',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'shapirohartley@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Hartley_The_PM',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: 'https://medium.com/@Hartley_The_PM',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hartleyshapiro/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Hartley-the-PM',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
