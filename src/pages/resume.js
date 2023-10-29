import Head  from "next/head"
import { motion } from 'framer-motion'

function resume() {
	return (
		<>
			<Head>
				<title>Muliya Dev - resume</title>
			</Head>

			<div className='cont grid grid-cols-6 grid-rows-1'>
				<div className='sm:col-start-2 col-start-1 col-span-full flex flex-col items-center overflow-hidden overflow-y-auto px-3'>
					<motion.div className='flex flex-col space-y-6 items-center h-fit w-full m-auto py-8'>
						<span className="text-3xl m-auto ml-0 underline">Resume</span>

						<div class="relative w-full h-[80vh] aspect-w-4 aspect-h-3">
						<object className=" w-full h-full bg-black" type="application/pdf" data="/Assets/resume.pdf" ></object>

						</div>

					</motion.div>
				</div>
			</div>
		</>
	)
}

export default resume