import {AnimatePresence, motion} from "framer-motion";
import {TiThMenu} from 'react-icons/ti'
import {IoClose} from 'react-icons/io5'

const button = {
    hidden:{
        scale:0,
        y:800
    },
    visible:{
        scale:1,
        y:0
    },
    tap:{
        scale:0.8
    }
}



function Navbtn({toggle,value}) {
  return (
    <>
    <AnimatePresence  mode='wait'>
    <motion.button 
    key={'navbar'}
    exit={{ x: -500, opacity: 0 }}
    onClick={toggle}
    variants={button} 
    initial="hidden"
    animate="visible"
    whileTap="tap"
    className="mobile navbtn ">
    
    {!value && <TiThMenu className="m-auto"/>}
    {value &&<IoClose  className="m-auto"/>}


    </motion.button>
    </AnimatePresence>
    </>
  )
}

export default Navbtn

