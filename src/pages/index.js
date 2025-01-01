import Typewriter from 'typewriter-effect';
import { AnimatePresence, motion } from 'framer-motion'
import { Zilla_Slab_Highlight } from 'next/font/google';
import Head from 'next/head';

const dancingScript = Zilla_Slab_Highlight({ subsets: ['latin'], weight: "700" });
const list = {
  hidden: { y: -200 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      when: 'beforeChildren',
    },
  },

}

const line = {
  hidden: { x: 800, opacity: 0 },
  visible: { x: 0, opacity: 1 }
}

const quote = {
  hidden: {
    y: -200,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.8
    }
  }
}

export default function Home(props) {

  return (
    <>
      <Head>
        <title>Dev Muliya - home</title>
      </Head>
      <div className='cont grid grid-cols-6 grid-rows-1 overflow-hidden justify-items-stretch'>
       
        <div className='p-8 sm:col-start-2 col-start-1 col-span-full flex flex-col items-center overflow-hidden overflow-y-auto'>

          <div className='flex flex-col space-y-6 items-start h-fit w-full m-auto'>

            <motion.div
              variants={list}
              initial="hidden"
              animate="visible"
              className='text-5xl '
            >
              Welcome
              <motion.div variants={line} className='border-b-4  border-blue-800 w-full'></motion.div>
            </motion.div>

            <span className='typewriter text-2xl'>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter.typeString('✍ Hello Visitor!')
                    .pauseFor(2500)
                    .typeString(" My name is Muliya Dev")
                    .start();
                }}
              />
            </span>

            <motion.div className='text-xl'>I'm passionate
              <AnimatePresence>
                <motion.div key={1} exit={{ x: 300 }} className='typewriter w-fit bg-blue-800/50 text-white underline drop-shadow-lg' variants={line} initial="hidden" animate="visible">
                  <Typewriter options={{ loop: true }}
                    onInit={(typewriter) => {
                      typewriter.pauseFor(2500).typeString('Flull-stack web developer')
                        .pauseFor(2500)
                        .deleteAll().typeString("Flutter Developer")
                        .pauseFor(2000).deleteAll()
                        .typeString("DSA Learner").pauseFor(2000).deleteAll()
                        .typeString("Computer engineering student").pauseFor(2000)
                        .start();
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              from India.</motion.div>
            <motion.span variants={quote} initial="hidden" animate="visible" className={dancingScript.className + ` text-xl`} dangerouslySetInnerHTML={{ __html: props.data[0].h }}></motion.span>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  var data = [{ h: "" }];
  try {
    const response = await fetch("https://zenquotes.io/api/quotes");
    data = await response.json();
  } catch (e) {
    console.log("quote fetch error");
  }


  return {
    props: { data },
  };
}
