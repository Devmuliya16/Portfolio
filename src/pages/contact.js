import { motion } from 'framer-motion';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import {  useEffect, useState } from 'react';
import Head from 'next/head';

const sendmail =async (form,pos)=>{
	const response=await fetch("/api/sendmail",{
		method: "POST",
		headers: {
		  "Content-Type": "application/json",
		},
		body: JSON.stringify([form,pos]),
	})
	return await response.json();
}







function contact() {
	const [form,_form] = useState({name:"",email:"",message:""});
	const [pos,_pos] = useState({long:0,lat:0,head:0,speed:0});
	const [sending,_sending] = useState(false);

	
	const change = (e)=>{
		_form({...form,[e.target.name]:e.target.value})
	}
	useEffect(()=>{
		if ("geolocation" in navigator)
		navigator.geolocation.getCurrentPosition(({coords})=>{
			_pos({long:coords.longitude,lat:coords.latitude})
		})
	},[])

	const submit =async (e)=>{
		e.preventDefault();
		_sending(true);
		const response = await sendmail(form,pos);
		_sending(false);
		window.alert(response.message);
	}
	return (
		<>
		<Head>
			<title>Muliya Dev - contact</title>
		</Head>
	
		<div className='cont grid grid-cols-6 grid-rows-1'>

			<div className='sm:col-start-2 col-start-1 col-span-full flex flex-col items-center overflow-hidden overflow-y-auto'>

				<motion.div className='flex flex-col space-y-6 items-center h-fit w-full m-auto py-8'>

					<div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
						<div className="sm:py-6 md:py-0 md:px-6">
							<h1 className="text-4xl font-bold">Get in touch</h1>
							<p className="pt-2 pb-4">Fill in the form to start a conversation</p>
							<div className="space-y-4 ">
								<li className='flex space-x-4 hover:underline'><AiFillLinkedin className='invert text-2xl' /><a href='https://www.linkedin.com/in/dev-muliya'>  Linkedin</a></li>
								<li className='flex space-x-4 hover:underline'><AiFillGithub className='invert text-2xl' /><a href='https://github.com/Devmuliya16'>Github</a></li>
								<li className='flex space-x-4 hover:underline'><FaTelegramPlane className='invert text-2xl' /><a href='https://telegram.me/Devmuliya'>Telegram</a></li>
								<li className='flex space-x-4 hover:underline'><SiLeetcode className='invert text-2xl' /><a href='https://leetcode.com/Muliya_Dev'>Leetcode</a></li>
							</div>
						</div>

						<form className="flex flex-col mt-4 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid" onSubmit={submit} method='#'>
							<label className="block">
								<span className="mb-1">Full name</span>
								<input name="name" value={form.name} onChange={change} type="text" placeholder="Your full name" className="outline-none bg-transparent border-[1px] p-4 w-full rounded-md shadow-lg focus:ring-4 focus:ring-opacity-75 focus:ring-blue-800" required/>
							</label>
							<label className="block">
								<span className="mb-1">Email address</span>
								<input name="email" value={form.email} onChange={change} type="email" placeholder="leroy@xyz.com" className="outline-none bg-transparent border-[1px] p-4 w-full rounded-md shadow-lg focus:ring-4 focus:ring-opacity-75 focus:ring-blue-800 " required/>
							</label>
							<label className="block">
								<span className="mb-1">Message</span>
								<textarea name="message" value={form.message} onChange={change} rows="4" className="outline-none bg-transparent border-[1px] p-4 w-full shadow-lg rounded-md focus:ring-4 focus:ring-opacity-75 focus:ring-blue-800" required/>
							</label>
							<button disabled={sending} type="submit" className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-white bg-blue-700  rounded-lg hover:bg-blue-900  w-2/6 m-auto disabled:opacity-60">
								{!sending && "Submit"}
								{sending && <Loader/>}
							</button>
						</form>
					</div>


				</motion.div>

			</div>




		</div>
		</>
	)
}

export default contact

const Loader = ()=> <div className='animate-spin border-l-white border-transparent border-2 rounded-full w-6 h-6'></div>