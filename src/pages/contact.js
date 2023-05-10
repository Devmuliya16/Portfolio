import {motion} from 'framer-motion';
import {AiFillGithub,AiFillLinkedin} from 'react-icons/ai'
import {SiLeetcode} from 'react-icons/si'
import {FaTelegramPlane} from 'react-icons/fa'


function contact() {
  return (
    <div className='cont grid grid-cols-6 grid-rows-1'>

      <div className='  sm:col-start-2 col-start-1 col-span-full flex flex-col items-center overflow-hidden overflow-y-auto'>

        <motion.div className='flex flex-col space-y-6 items-center h-fit w-full m-auto py-8'>

	<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
		<div className="sm:py-6 md:py-0 md:px-6">
			<h1 className="text-4xl font-bold">Get in touch</h1>
			<p class="pt-2 pb-4">Fill in the form to start a conversation</p>
			<div className="space-y-4 ">
				<li className='flex space-x-4 hover:underline'><AiFillLinkedin  className='invert text-2xl'/><a href='https://www.linkedin.com/in/dev-muliya'>  Linkedin</a></li>
				<li className='flex space-x-4 hover:underline'><AiFillGithub  className='invert text-2xl'/><a href='https://github.com/Devmuliya16'>Github</a></li>
				<li className='flex space-x-4 hover:underline'><FaTelegramPlane  className='invert text-2xl'/><a href='https://telegram.me/Devmuliya'>Telegram</a></li>
				<li className='flex space-x-4 hover:underline'><SiLeetcode  className='invert text-2xl'/><a href='https://leetcode.com/Muliya_Dev'>Leetcode</a></li>
			</div>
		</div>
    
		<form novalidate="" className="flex flex-col mt-4 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
			<label className="block">
				<span className="mb-1">Full name</span>
				<input type="text" placeholder="Your full name" className="outline-none bg-transparent border-[1px] p-4 w-full rounded-md shadow-lg focus:ring-4 focus:ring-opacity-75 focus:ring-blue-800"/>
			</label>
			<label className="block">
				<span className="mb-1">Email address</span>
				<input type="email" placeholder="leroy@xyz.com" className="outline-none bg-transparent border-[1px] p-4 w-full rounded-md shadow-lg focus:ring-4 focus:ring-opacity-75 focus:ring-blue-800 "/>
			</label>
			<label className="block">
				<span className="mb-1">Message</span>
				<textarea rows="4" className="outline-none bg-transparent border-[1px] p-4 w-full shadow-lg rounded-md focus:ring-4 focus:ring-opacity-75 focus:ring-blue-800"/>
			</label>
			<button type="button" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700  rounded-lg hover:bg-blue-900 w-fit m-auto">Submit</button>
		</form>
	</div>


        </motion.div>

      </div>




    </div>
  )
}

export default contact