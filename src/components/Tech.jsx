import { BiLogoReact,BiLogoJavascript, BiLogoHtml5, BiLogoBootstrap, BiLogoTailwindCss } from "react-icons/bi"
import { motion } from "framer-motion"
const Tech = () => {

    const variants={
        hidden:{opacity:0,y:50},
        visible:{opacity:1,y:0}
    }
  return (
    <div id="tech" className="flex min-h-[70vh] w-full flex flex-col items-center justify-center gap-16 md:gap-32">
      <motion.h1 
      variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}

      
      className="text-4xl font-light text-white md:text-6">Technologies</motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <motion.div
        variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
            <BiLogoJavascript className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" ></BiLogoJavascript>
        </motion.div>

        <motion.div
        variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
            <BiLogoReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" ></BiLogoReact>
    </motion.div>

        <motion.div
        variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
            <BiLogoHtml5 className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" ></BiLogoHtml5>
        </motion.div>

        <motion.div
        variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
            <BiLogoBootstrap className="cursor-pointer text-[80px] text-purple-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" ></BiLogoBootstrap>
        </motion.div>

         <motion.div
         variants={variants}
      initial="hidden"
      whileInView="visible"
      transition={{duration:0.5}}>
            <BiLogoTailwindCss className="cursor-pointer text-[80px] text-blue-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]" ></BiLogoTailwindCss>
        </motion.div>
      </div>
    </div>
  )
}

export default Tech
