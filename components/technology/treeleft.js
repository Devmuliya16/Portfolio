import {motion} from 'framer-motion';

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

function Treeleft({obj,ind,setId}) {
  return (
    <motion.div layoutId={ind+1} variants={variants} viewport={{once:true}} initial="hidden" whileInView="visible" className="grid grid-cols-9 w-full ">
                <code variants={heading} className=" text-right col-start-1 col-span-4 h-fit">{obj.time}</code>
                <div className="flex flex-col col-span-1 items-center">
                    <span className="w-4 h-4 rounded-full border-violet-800 border-4 bg-violet-800"></span>
                    <span className="block border-dotted border-l-2 mx-4 h-full my-3 border-violet-800"></span>
                </div>
                <div layoutId={ind+1} onClick={() => setId(ind)} className="col-start-6 col-span-4 bg-gray-400 p-4 rounded-r-lg rounded-bl-lg mb-4 cursor-pointer">
                    <p>{obj.expr}</p>
                    {
                        obj.work.map((work) => {
                            return <li className="hidden sm:block">- {work}</li>
                        })
                    }
                    <code className="underline text-violet-700 sm:hidden visible">more..</code>
    </div>
    </motion.div>
  )
}

export default Treeleft