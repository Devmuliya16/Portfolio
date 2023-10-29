import {motion} from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'



const item = { hidden: { x: -100, opacity: 0 },visible:{opacity:1 ,x:0}}
const container = {
    hidden: { opacity:0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    },
   
  }

function panel() {
  const active = "border-blue-800"
  return (
    <div className='desktop'>
      <motion.div 
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <ul className='list '>
        <Link href="/" className={`${useRouter().asPath=='/'&& active} hover:border-blue-800 border-l-4 text-white`}><motion.li variants={item} >Home</motion.li></Link>
        <Link href="/about" className={`${useRouter().asPath=='/about'&& active} hover:border-blue-800 border-l-4 text-white`}><motion.li variants={item} >About</motion.li></Link>
        <Link href="/tech" className={`${useRouter().asPath=='/tech'&& active} hover:border-blue-800 border-l-4 text-white`}><motion.li variants={item} >Technologies</motion.li></Link>
        <Link href="/projects" className={`${useRouter().asPath=='/projects'&& active} hover:border-blue-800 border-l-4 text-white`}><motion.li variants={item} >Projects</motion.li></Link>
        <Link href="/contact" className={`${useRouter().asPath=='/contact'&& active} hover:border-blue-800 border-l-4 text-white`}><motion.li variants={item} >Contact</motion.li></Link>
        <Link href="/resume" className={`${useRouter().asPath=='/resume'&& active} hover:border-blue-800 border-l-4 text-white`}><motion.li variants={item} >Resume</motion.li></Link>
        </ul>
        
       </motion.div>
       </div>
  )
}

export default panel

