import img1 from "/public/img1.png";
import { motion } from "framer-motion";

const projData =[
    {
        image:img1,
        title:'Real-time Chat Application',
        description:'Real-time chat application built with React and Firebase that enables seamless messaging between users. It features a responsive user interface with a left sidebar displaying chats and a chatbox for conversations. Users can search for others, initiate new chats, send text messages and images, and see message status updates. The app leverages Firestore for data storage and real-time updates, providing a smooth and interactive messaging experience across devices.',
        technologies:["React","Firebase"],
        link:"https://chat-app-swart-tau.vercel.app/"
    },
     
    
]

const ScrollReveal= ({children}) => {
    return(
        <motion.div
        initial ={{opacity:0,y:100}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        transition={{duration:0.8,delay:0.2}}
        >{children}</motion.div>
    )
}

const ProjectCard = ({project}) =>{
return (
    <ScrollReveal><a href= {project.link}>
    <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        
        <img src={project.image} alt="" className="max-w-[300px] cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:max-w-[500px] w-full"/>
        <div className="flex flex-col gap-5 ">
            <div className="flex flex-col gap-3">
            <div className="text-xl font-semibold">{project.title}</div>
            <p className="text-gray-400">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-5">
                {
                    project.technologies.map((tech,index) => (
                        <span key={index} className="rounded-lg bg-black p-3">{tech}</span>
                    ))
                }
            </div>
        </div>
    </div>
    </a>
    </ScrollReveal>
)
}
const Projects = () => {
  return (
    <div id ="project" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24" >
        <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
{
    projData.map((project,index) => (
        <ProjectCard key={index} project={project}/>
    ))
}

      </div>
    </div>
  )
}

export default Projects
