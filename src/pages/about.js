
import { Barlow } from 'next/font/google'
import { motion } from 'framer-motion'
import Head from 'next/head';

const barlow = Barlow({ subsets: ['latin'], weight: "400" });

const name_cont = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    },
  }
}

const profile = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1
  }
}

const head = {
  hidden: {
    x: -30,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1
  }
}

const name = {
  hidden: {
    y: -80,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}

const para_cont = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const para_child = {
  hidden: {
    y: -8,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  }
}





function about() {
  return (
    <>
    <Head>
      <title>Muliya Dev - about</title>
    </Head>
    <div className='cont grid grid-cols-6 grid-rows-1 overflow-hidden justify-items-stretch'>

      <div className="p-8 sm:col-start-2 col-start-1 col-span-full flex flex-col items-center overflow-hidden overflow-y-auto">

        <motion.div className={barlow.className +' flex flex-col space-y-6 items-center h-fit w-full m-auto py-8'}>
          <span className="text-3xl m-auto ml-0 underline">About</span>
          <Intro />
          <About />
          <span className="text-3xl m-auto ml-0 pt-16 underline">Education</span>

          <Education />


        </motion.div>
      </div>
    </div>
    </>
  )
}
export default about




const Intro = () => <motion.div variants={name_cont} initial="hidden" animate="visible" className="grid grid-cols-2 grid-rows-1 justify-center">
  <motion.img variants={profile} src="Assets/profile.jpg" className="rounded-full sm:w-1/2 w-4/6 mr-4 m-auto aspect-square" />
  <motion.span variants={head} className="text-[8vw] md:text-[6vw] w-full inline-block m-auto">I`M <motion.span variants={name} className="text-blue-800">DEV MULIYA</motion.span>
  </motion.span></motion.div>





const About = () => <motion.div variants={para_cont} whileInView="visible" initial="hidden"
  viewport={{ amount: 0.8 }}

  className={barlow.className + " flex flex-col text-justify"}>
  <motion.p className="indent-12">hii, I am full stack web developer and application developer, countinuously in the process of learning new things and technologies.</motion.p>

  <motion.ul className="list-disc pl-8 text-[13px] sm:text-[15px] text-ellipsis">
    <motion.li variants={para_child}> A computer science engineering student passionate about programming and design.</motion.li>
    <motion.li variants={para_child}> My goal is to build highly performant applications that solve real-world problems and provide users with an awesome experience.</motion.li>
    <motion.li variants={para_child}> Always looking for ways to solve the problem and designing algorithms as efficiently as possible.</motion.li>
    <motion.li variants={para_child}> Currently I am learning Datascience and Data mining</motion.li>
  </motion.ul>
</motion.div>










const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "spring", duration: 8, bounce: 0 },
      opacity: { duration: 0.01 }
    }
  }
};
const Education = () => <div className='flex flex-row pb-10 items-center w-full'>
  <motion.svg
    initial="hidden"
    whileInView="visible" className=" w-2 h-full">
    <motion.line

      x1="4"
      y1="0"
      x2="4"
      y2="600"
      stroke-width="2" stroke-linecap="butt"
      className="stroke-black dark:stroke-white"
      variants={draw}
      custom={2}
    />
  </motion.svg>
  <motion.div variants={para_cont} whileInView="visible" initial="hidden"
    viewport={{ amount: 0.8 }}
    className={barlow.className + " flex flex-col  w-full"}>

    <motion.li variants={para_child} className='pt-6'>
      2020 - continue (Pre-final year)
    </motion.li>
    <motion.ul variants={para_child} className='bg-gray-400 p-4 rounded-lg'>
      <u className='text-blue-800'>Bachelor's Degree</u>
      <li>University: Gujarat Technological University - India</li>
      <li>College: L.D. college of engineering - Ahmedabad</li>
      <li>Branch: Computer Science and Engineering</li>
    </motion.ul>
    <motion.li variants={para_child} className='pt-6'>
      2018 - 2020
    </motion.li>
    <motion.ul variants={para_child} className='bg-gray-400 p-4 rounded-lg'>
      <u className='text-blue-800'>High School</u>
      <li>Education Board: Gujarat Secondary and Higher Secondary Education Board</li>
      <li>Stream: Science</li>
      <li>Elective: Maths with Computer</li>
    </motion.ul>


  </motion.div>


</div> 
