import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import {motion } from "framer-motion"


const About = () => {
  const resumeLink = "https://drive.google.com/file/d/1B8ZrPEhc_UdBCtc7rPjlRzTpyRkEcOlP/view?usp=sharing"; 

  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{opacity:1, x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2"
          whileInView={{opacity:1, x:0}}
          initial={{opacity: 0, x: 100}}
          transition={{duration:0.5}}>
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>

      {/* Centered Download Button */}
      <div className="flex justify-center"> {/* Optional margin to separate from content above */}
        <a
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          download
          className="px-6 py-2 bg-cyan-500 text-neutral-900 text-md font-medium tracking-normal rounded-md hover:bg-cyan-400 hover:text-neutral-950 transition duration-300 shadow-md shadow-cyan-500/50 transform hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default About;
