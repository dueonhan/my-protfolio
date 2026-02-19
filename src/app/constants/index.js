export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "Web Developer", icon: "/web.png" },
  { title: "Penetration Tester", icon: "/security-removebg-preview.png" },
  { title: "Backend Developer", icon: "/backend.png" },
];

//{ title: "Content Creator", icon: "/creator.png" },

export const technologies = [
  { name: "HTML 5", icon: "/tech/html.png" },
  { name: "CSS 3", icon: "/tech/css.png" },
  { name: "JavaScript", icon: "/tech/javascript.png" },
  { name: "TypeScript", icon: "/tech/typescript.png" },
  { name: "React JS", icon: "/tech/reactjs.png" },
  { name: "Redux Toolkit", icon: "/tech/redux.png" },
  { name: "Tailwind CSS", icon: "/tech/tailwind.png" },
  { name: "Node JS", icon: "/tech/nodejs.png" },
  { name: "MongoDB", icon: "/tech/mongodb.png" },
  { name: "Three JS", icon: "/tech/threejs.svg" },
  { name: "git", icon: "/tech/git.png" },
  { name: "figma", icon: "/tech/figma.png" },
  { name: "docker", icon: "/tech/docker.png" },
];

export const experiences = [
  {
    title: "Full-Stack Web Developer",
    company_name: "EUN Korea",
    icon: "/company/eunkorea.png",
    iconBg: "#E6DEDD",
    date: "Dec 2017 – Feb 2019",
    points: [
      "Managed requirements and feedback for 24 hospital groupware systems, significantly improving usability and reducing user issues.",
      "Revamped legacy pages using Bootstrap to deliver responsive designs and decrease layout-related user complaints.",
      "Optimized server performance for high-traffic scenarios, successfully reducing response times by 2–3 seconds.",
      "Collaborated with cross-functional teams to ensure system reliability and seamless e-commerce retail operations.",
    ],
  },
  {
    title: "Cyber Security Specialist",
    company_name: "In the forest",
    icon: "/company/forest.png",
    iconBg: "#151030",
    date: "Jun 2019 – May 2022",
    points: [
      "Conducted 40+ penetration testing engagements annually for major enterprise clients, identifying high-risk and structural vulnerabilities.",
      "Performed static code analysis and dynamic penetration testing on large-scale codebases, focusing on authentication and business logic.",
      "Assessed security risks across 20+ web applications and internal infrastructure, aligning reports with OWASP Top 10 standards.",
      "Developed customized vulnerability analysis automation tools and built internal phishing simulation environments to improve assessment efficiency.",
    ],
  },
];

export const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    image: "/carrent.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "scss", color: "pink-text-gradient" },
    ],
    image: "/jobit.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description: "A comprehensive travel booking platform.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "supabase", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: "/tripguide.png",
    source_code_link: "https://github.com/",
  },
];

export const testimonials = [
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
