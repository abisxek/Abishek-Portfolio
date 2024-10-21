import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate developer by the day and an aspiring entrepreneur by the night, with a knack for crafting robust and scalable ML and Backend Applications. With an year of hands-on experience, I have honed my skills in Generative AI, ML Models, Computer Vision and Automations through developing Python applications. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `Hello, I am Abishek R, an AI/ML Engineer and Data Scientist from Bengaluru, India. I've worked at Lokibots, Chembio AI and Infogen Labs as an ML Engineer and Intern, received a copyright for healthcare work backed by the Department of Bio-Technology, Government of India. My expertise spans NLP, Generative AI, Computer Vision, and Automation. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, contributing to open-source projects and football. Let's go #HALAMADRID!🤍`;

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
          • Recreated the Deseq library from R to Python using Pandas, facilitating enhanced data manipulation and analysis.
          • Implemented an ensemble of feature selection techniques such as Minimum Redundancy Maximum Relevance (MRMR), Recursive Feature Elimination (RFE), and Boruta to improve model performance
          • Executed binary classification of genes as biomarkers or non-biomarkers using machine learning algorithms, achieving an accuracy of 90% in predicting biomarkers.`,
    technologies: ["Pandas", "Sci-kit Learn", "Numpy", "Boruta","PyMRMR","imblearn","SciPY"],
  },
  {
    year: "Sep, 2023 - Dec, 2023",
    role: "NLP Intern",
    company: "Infogen Labs",
    description: `
          • Fine-tuned open-source LLMs like Falcon and Llama using PEFT to convert text queries into SQL queries, significantly improving data querying efficiency and accuracy.
          • Developed and deployed custom AI applications leveraging advanced LLMs, including Llama 2 and Falcon, to optimize automation workflows and enhance user experiences.
          • Integrated NLP services such as OpenAI and Hugging Face APIs into enterprise applications, enhancing automation processes and decision-making capabilities.`,
    technologies: ["NLTK", "Transformer", "Hugging Face", "Autogen", "Gradio"],
  },
];

export const PROJECTS = [
  {
    title: "Jaundice Detection Kit",
    image: project1,
    description:
      "Developed Point of Care Kit for Infants to detect Jaundice from scratch. Conducted research as an E-YUVA Fellow in collaboration with DBT, Government of India, under BIRAC.",
    technologies: ["Sci-Kit Learn", "dlib", "Flask", "Docker", "AWS"],
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
