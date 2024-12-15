import {
    mobile,
    backend,
    creator,
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
  } from "../assets";
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "WordPress Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
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
      title: "React.js Developer",
      company_name: "Freelance",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2021, present",
      points: [

        "Developed user interfaces for 6 eCommerce websites, focusing on enhancing user experience and optimizing performance.",
        "Created modern, responsive UIs using HTML, JavaScript, and CSS, resulting in a 10% increase in organic site visits and a 20% increase in average shopping cart value"
      ],
    },
    {
      title: "Junior UX developer  ",
      company_name: "Graduaton Project",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
    "Developed and optimized user interfaces for web applications, focusing on enhancing user experience and ensuring code quality through Agile methodologies",
    "Leveraged Agile methodology to automate tasks and maintain code quality while developing frontend logic using HTML, JavaScript, and CSS",
    "Integrated user interface components with server-side logic to enhance user experience optimizing applications for maximum efficiency and scalability cycles",
    ],
    },
    {
      title: "Web Developer",
      company_name: "Fekra Tech",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Nov 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Supervisor  ",
      company_name: "Anan Capital",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
        "Monitoring logistics processes, ensuring they are efficient, and finding ways to optimize the supply chain.",
        "Ensuring the services meet the company’s standards, and addressing any performance gaps.",
        "Handling any operational challenges, such as delays, damages, or customer service issues.",
        "Maintaining relationships with clients and vendors to ensure seamless logistics operations.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but loay proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like loay does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick loay our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "X-GYM",
      description:
        "Web-based platform that allows users to search, course, and manage  yoga from various providers, providing a convenient and efficient solution for trainers needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://loayshawky.github.io/x-gym/",
    },
    {
      name: " E-commerce",
      description:
      " shopping experience crafted with care and passion by me, Loay. As the developer behind this platform, I’ve focused on making your online shopping experience smooth",
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
      source_code_link: "https://loayshawky.github.io/e-ecommerce/",
    },
    {
      name: "online learning-courses",
      description:
        "Learn from industry-leading professionals and experienced educators industry-leading professionals and   experienced experienced educators",
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
      source_code_link: "https://loayshawky.github.io/online-learning-courses",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };