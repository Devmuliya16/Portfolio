import {motion} from "framer-motion"
import { getLocalData } from '../lib/jsonreader2';
import Project from "../../components/Project";
import Head from "next/head";



function projects(props) {
  return (
    <>
    <Head>
      <title>Dev Muliya - projects</title>
    </Head>
    <div className='cont grid grid-cols-6 grid-rows-1'>
            <div className='p-6  sm:col-start-2 col-start-1 col-span-full flex flex-col  overflow-hidden overflow-y-auto'>

                <motion.div className='flex flex-col space-y-6  items-center h-fit w-full flex-wrap m-auto py-8'>
                    <span className="text-3xl m-auto ml-0 underline">Projects</span>
                    <motion.div className="w-full flex flex-col items-center">
                        {
                          props.data.map((project,ind)=>{
                              return <Project data={project} key={ind} id={ind}/>
                          })
                        }
                    </motion.div>
                    
                    
                    
                </motion.div>

            </div>
        </div>
        </>
  )
}

export default projects

export async function getStaticProps() {
  const data = await getLocalData()
  return {
      props: { data }
  }
}


