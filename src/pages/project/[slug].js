import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { getLocalData } from '../../lib/jsonreader2';
import { useState } from "react";

function slug({ data }) {
    const [project, _project] = useState(data[useRouter().query.slug]);


    return (
        <div className='cont grid grid-cols-6 grid-rows-1'>
            <div className='p-6  sm:col-start-2 col-start-1 col-span-full flex flex-col  overflow-hidden overflow-y-auto'>

                <motion.div className='flex flex-col space-y-6  items-center h-fit w-full flex-wrap m-auto py-8'>
                    <div className="max-w-2xl  py-16 mx-auto space-y-12">
                        <div className="space-y-4">
                            <img src={project.Links[0]} />
                            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{project.title}</h1>
                            <h1 className="text-xl font-bold md:tracking-tight md:text-5xl"></h1>
                            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
                                <div className="flex items-center md:space-x-2">
                                    <img src="/Assets/profile.jpg" alt="Muliya Dev profile picture" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                                    <p className="text-sm">Muliya Dev • May 5th, 2023</p>
                                </div>
                                <a href={project.Link} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  rounded-lg hover:bg-blue-900">
                                    Visit Project
                                </a>
                            </div>
                            <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
                                {
                                    project.technology.map((tech, ind) => <button key={ind} className='m-1 p-1 border-[1px] text-sm rounded-lg '>

                                        {'#' + tech[1]}</button>)
                                }
                            </div>
                        </div>

                        <div className=" overflow-hidden rounded-lg ">

                            <h2 className="text-3xl font-bold">{project.about}</h2>
                            <p className="mt-4 dark:text-gray-400">{project.para}</p>
                            <div className="mt-4 dark:text-gray-400">
                                <h1 className="mt-4 text-3xl font-semibold dark:text-white">Features</h1>

                                {
                                    project.Discription.map((line, ind) => {
                                        return <li key={ind}>{line}</li>
                                    })
                                }
                                <h1 className="mt-4 text-3xl font-semibold dark:text-white">Learnings</h1>

                                {
                                    project.Learnings.map((line, ind) => {
                                        return <li key={ind}>{line}</li>
                                    })
                                }
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>

                </motion.div>

            </div>
        </div>
    )
}

export default slug


export async function getServerSideProps() {
    const data = await getLocalData()
    return {
        props: { data }
    }
}