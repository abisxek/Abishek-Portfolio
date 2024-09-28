import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Jun, 2024 - Present",
    role: "Automation and ML Engineer",
    company: "Lokibots, Inc.",
    description: `
      • Led the end-to-end development of automation bots based on client-specific requirements, ensuring smooth task execution and delivery.
      • Managed the complete process, including client consultations, design, implementation, documentation, and presentations.
      • Implemented text-to-action workflows using LangChain, automating tool selection and execution from a pre-defined set of tools based on natural language inputs.`,
    technologies: ["Selenium", "Pandas", "NLTK", "LangChain","OpenAI","LangGraph","PyAutoGUI","Openpyxl","PyPDF"],
  },
  {
    year: "Feb, 2024 - Jun, 2024",
    role: "ML Research Intern",
    company: "ChemBio AI",
    description: `
          • Developed a comprehensive web-based platform for integrative omics data analysis and machine learning applications.
          • Recreated the Deseq library from R to Python using Pandas, facilitating enhanced data manipulation and analysis..
          • Implemented an ensemble of feature selection techniques such as Minimum Redundancy Maximum Relevance (MRMR), Recursive Feature Elimination (RFE), and Boruta to improve model performance
          • Executed binary classification of genes as biomarkers or non-biomarkers using machine learning algorithms, achieving an accuracy of 90% in predicting biomarkers.`,
    technologies: ["Pandas", "Sci-kit Learn", "Numpy", "Boruta","PyMRMR","imblearn","SciPY"],
  },
  {
    year: "Sep, 2023 - Dec, 2023",
    role: "NLP Intern",
    company: "Infogen Labs",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Bengaluru, India ",
  phoneNo: "+91-6362123737",
  email: "abisxek@gmail.com",
};
