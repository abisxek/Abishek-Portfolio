import { FaPython,FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTensorflow, SiOpencv, SiLangchain } from "react-icons/si";
import {motion } from "framer-motion"

const iconVariant=(duration) => ({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
})
const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1.5}}
            className="my-20 text-center text-4xl">Technologies</motion.h2>
        <motion.div 
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
                variants={iconVariant(2.5)}
                initial= "initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-blue-400" />
            </motion.div>
            <motion.div
                variants={iconVariant(3)}
                initial= "initial"
                animate="animate" 
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiTensorflow className="text-7xl text-orange-600" />
            </motion.div>
            <motion.div 
                variants={iconVariant(5)}
                initial= "initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiLangchain className="text-7xl text-cyan-500" />
            </motion.div>
            <motion.div 
                variants={iconVariant(2)}
                initial= "initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiOpencv className="text-7xl text-red-600" />
            </motion.div>
            <motion.div 
                variants={iconVariant(6)}
                initial= "initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGitAlt className="text-7xl text-orange-400" />
            </motion.div>
            <motion.div 
                variants={iconVariant(4)}
                initial= "initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className="text-7xl text-blue-400" />
            </motion.div>
        </motion.div>
    </div>
  )
};

export default Technologies
