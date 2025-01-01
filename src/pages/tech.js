import { AnimatePresence, motion } from "framer-motion"
import { getLocalData } from '../lib/jsonreader';
import { Barlow } from 'next/font/google'
import { useState } from "react";
import Head from "next/head";



const barlow = Barlow({ subsets: ['latin'], weight: "400" });
const tech_cont = {
    hidden: {
        opacity: 0,
        y: -50
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.05,
        }
    }
}


const card = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    }
}

export async function getStaticProps() {
    const data = await getLocalData()
    return {
        props: { data }
    }
}

function tech(props) {
    const [selectedId, _selectedId] = useState(-1);
    const setId = (id) => {
        _selectedId(id);
    }

    return (
        <>
        <Head>
            <title>Dev Muliya - experiance</title>
        </Head>
        <div className='cont grid grid-cols-6 grid-rows-1'>
            <div className='p-6  sm:col-start-2 col-start-1 col-span-full flex flex-col items-center overflow-hidden overflow-y-auto'>

                <motion.div className={barlow.className +` flex flex-col space-y-6 items-center h-fit w-full m-auto py-8`}>
                    <span className="text-3xl m-auto ml-0 underline">Technologies</span>
                    <Techpanel />
                    <span className="text-3xl m-auto ml-0 underline">Experiance</span>
                    <AnimatePresence>
                        {selectedId>=0 && (
                            <motion.div layoutId={selectedId+1} className="absolute  z-20 top-0 backdrop-blur-3xl border-blue-700 border-2 rounded-lg p-4 overflow-y-auto border-dashed flex flex-col">
                                <motion.div className="w-5/6 m-auto">
                                    <motion.code>{props.data[selectedId].time}</motion.code>
                                    <motion.h2>{props.data[selectedId].expr}</motion.h2>
                                    <hr />
                                    {
                                        props.data[selectedId].work.map((work) => {
                                            return <li>{work}</li>
                                        })
                                    }
                                </motion.div>

                                <motion.button className="bg-gray-500 rounded-md m-auto w-fit p-2" onClick={() => _selectedId(-1)} >Close</motion.button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <Experiance data={props.data} setId={setId} />

                </motion.div>

            </div>
        </div>
        </>
    )
}

export default tech



const Techpanel = () => <motion.div variants={tech_cont} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col py-8">
        <li className="text-blue-400">Languages & scripts</li>
        <div className="flex flex-row items-center flex-wrap overflow-hidden mb-4">
            <motion.div variants={card} div className="imgsvg"><img src="Assets/svg/clan.svg"></img><div className="text-center">C</div></motion.div>
            <motion.div variants={card} div className="imgsvg"><img src="Assets/svg/cpplan.svg"></img><div className="text-center">C++</div></motion.div>
            <motion.div variants={card} div className="imgsvg"><img src="Assets/svg/javalan.svg"></img><div className="text-center">Java</div></motion.div>
            <motion.div variants={card} div className="imgsvg"><img src="Assets/svg/dartlan.svg"></img><div className="text-center">Dart</div></motion.div>
            <motion.div variants={card} div className="imgsvg"><img src="Assets/svg/pythonlan.svg"></img><div className="text-center">Python</div></motion.div>
            <motion.div variants={card} div className="imgsvg"><img src="Assets/svg/htmllan.svg"></img><div className="text-center">Html</div></motion.div>
            <motion.div variants={card} div className="imgsvg"><img src="Assets/svg/csslan.svg"></img><div className="text-center">Css</div></motion.div>
            <motion.div variants={card} div className="imgsvg"><img src="Assets/svg/jslan.svg"></img><div className="text-center">Javascript</div></motion.div>

        </div>
        <li className="text-blue-400">Framework & Database</li>
        <div className="flex flex-row items-center flex-wrap overflow-hidden mb-4">
            <motion.div variants={card} className="imgsvg"><img src="Assets/svg/tailwind.svg"></img><div className="text-center">Tailwind</div></motion.div>
            <motion.div variants={card} div className="imgsvg"><img src="Assets/svg/framermotion.svg"></img><div className="text-center">Framer</div></motion.div>
            <motion.div variants={card} className="imgsvg"><img src="Assets/svg/reactjs.svg"></img><div className="text-center">Reactjs</div></motion.div>
            <motion.div variants={card} className="imgsvg"><img src="Assets/svg/nextjs.svg"></img><div className="text-center">Nextjs</div></motion.div>
            <motion.div variants={card} className="imgsvg"><img src="Assets/svg/express.svg"></img><div className="text-center">Express</div></motion.div>
            <motion.div variants={card} className="imgsvg"><img src="Assets/svg/nodejs.svg"></img><div className="text-center">Nodejs</div></motion.div>
            <motion.div variants={card} className="imgsvg"><img src="Assets/svg/flutter.svg"></img><div className="text-center">Flutter</div></motion.div>
            <motion.div variants={card} className="imgsvg"><img src="Assets/svg/mongodb.svg"></img><div className="text-center">MongoDB</div></motion.div>
            <motion.div variants={card} className="imgsvg"><img src="Assets/svg/firebase.svg"></img><div className="text-center">Firebase</div></motion.div>
            <motion.div variants={card} className="imgsvg"><img src="Assets/svg/mysql.svg"></img><div className="text-center">MySql</div></motion.div>
        </div>
        <li className="text-blue-400">Development tools</li>
        <div className="flex flex-row items-center flex-wrap overflow-hidden">
            <motion.div variants={card} className="imgsvg"><img src="Assets/svg/git.svg"></img><div className="text-center">Git</div></motion.div>
            <motion.div variants={card} className="imgsvg"><img src="Assets/svg/github.svg"></img><div className="text-center">Github</div></motion.div>
        </div>
</motion.div>

const variants ={
    hidden:{
        rotateY:180,
        rotateX:20,
        scale:0,
        with:0
    },
    visible:{
        with:"100%",
        rotateX:0,
        rotateY:0,
        scale:1,
        transition: {
           delay:0.2,
        }
    },
   
}
const heading = {
    hidden:{
        opacity:0,
        y:8
    },
    visible:{
        opacity:1,
        y:0
    }
}

const Experiance = ({ data, setId }) => <motion.div variants={tech_cont} className="py-8 flex flex-col items-center">
    {
        data.map((obj, ind) => {
            return (ind % 2) ? (<motion.div layoutId={ind+1} variants={variants} viewport={{once:true}} initial="hidden" whileInView="visible" className="grid grid-cols-9 w-full ">
            <code variants={heading} className=" text-right col-start-1 col-span-4 h-fit">{obj.time}</code>
            <div className="flex flex-col col-span-1 items-center">
                <span className="w-4 h-4 rounded-full  border-blue-800 bg-blue-800 border-4"></span>
                <span className="block border-dotted border-l-2 mx-4 h-full my-3 border-blue-800"></span>
            </div>
            <div layoutId={ind+1} onClick={() => setId(ind)} className="col-start-6 col-span-4 bg-gray-400 p-4 rounded-r-lg rounded-bl-lg mb-4 cursor-pointer">
                <p>{obj.expr}</p>
                {
                    obj.work.map((work) => {
                        return <li className="hidden sm:block">- {work}</li>
                    })
                }
                <code className="underline text-blue-700 sm:hidden visible">more..</code>
</div>
</motion.div>
          ) : (
            <motion.div layoutId={ind+1} variants={variants} viewport={{once:true}} initial="hidden" whileInView="visible" className="grid grid-cols-9 w-full">
            <div layoutId={ind+1} onClick={() => setId(ind)} className=" col-start-1 col-span-4 bg-gray-400 p-4 rounded-l-lg rounded-br-lg mb-4 cursor-pointer">
                <p>{obj.expr}</p>
                {
                    obj.work.map((work) => {
                        return <li className="hidden sm:block">- {work}</li>
                    })
                }
                <code className="underline text-blue-700 sm:hidden visible">more..</code>
            </div>
            <div className="flex flex-col col-span-1 items-center">
                <span className="w-4 h-4 rounded-full border-blue-800 bg-blue-800 border-4"></span>
                <span className="block border-dotted border-l-2 mx-4 h-full my-3 border-blue-800"></span>
            </div>
            <code className="col-start-6 col-span-4 h-fit">{obj.time}</code>
        </motion.div>
            )
        })
    }

</motion.div>
