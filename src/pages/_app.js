import '@/styles/globals.css'
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import Navbtn from '../../components/Navigation/Navbtn';
import Panel from '../../components/Navigation/panel';
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiLeetcode } from 'react-icons/si'
import { FaTelegramPlane } from 'react-icons/fa'
import {Analytics} from '@vercel/analytics/react'


const list = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: {
    y: -8,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1
  },
  Tap: {
    scale: 0.2
  }
}

const social = {
  hidden: {
    x: 300
  },
  visible: {
    x: 0,
    transition: {
      delayChildren: 1,
      staggerChildren: 1
    }
  }
}


export default function App({ Component, pageProps }) {
  const [toggle, _toggle] = useState(false);
  const [isLoading, _isLoading] = useState(false);
  const settoggle = () => _toggle(!toggle);

  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", (url) => {
      _isLoading(true);
    })

    router.events.on("routeChangeComplete", (url) => {
      _isLoading(false);
    });

  }, [router.asPath])



  const Pages = () => <div className="absolute inset-0 z-20 w-full backdrop-blur-md backdrop-brightness-75 grid justify-center">
    <motion.ol key={'nav'} variants={list} initial="hidden" animate="visible" className='m-auto list-decimal flex flex-col space-y-6 text-2xl'>
      <motion.li variants={item} onClick={settoggle}><Link href="/">Home</Link></motion.li>
      <motion.li variants={item} onClick={settoggle}><Link href="/about">About</Link></motion.li>
      <motion.li variants={item} onClick={settoggle}><Link href="/tech">Technologies</Link></motion.li>
      <motion.li variants={item} onClick={settoggle}><Link href="/projects">Projects</Link></motion.li>
      <motion.li variants={item} onClick={settoggle}><Link href="/contact">Contact</Link></motion.li>
      <motion.li variants={item} onClick={settoggle}><Link href="/resume">Resume</Link></motion.li>
    </motion.ol>

  </div>



  return <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content="Dev Muliya" />
      <meta name="description" content="I'm Muliya Dev computer engineer and full stack developer, explore my projects here and contact me to discuss potential collaborations and projects." />
      <meta name="keywords" content="dev, muliya, muliya dev, Dev Muliya, Dev, computer, engineer, gujarat, india, website, contact, developer, l.d. collenge, ahmedabad, profile, search, online, web, computer engineer, linkedin, instagram, portfoilo, projects, github" />
      <meta name="robots" content="index, follow" />
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="2 days" />
      <meta name="author" content="Muliya dev" />
      <meta name="google-site-verification" content="xPaNge4witobVyvPMO7N4EAALEerD8-6i0rAGgbZRNc" />
      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://devmuliya.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Muliya Dev" />
      <meta property="og:description" content="Dev Muliya Profile & Portfolio" />
      <meta property="og:image" content="https://res.cloudinary.com/dk3dupetz/image/upload/v1683987359/Portfolio/Dev_preloader_xxuziz.jpg" />

      {/*  Twitter Meta Tags  */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="talker.onrender.com" />
      <meta property="twitter:url" content="https://devmuliya.vercel.app/" />
      <meta name="twitter:title" content="Muliya Dev" />
      <meta name="twitter:description" content="Dev Muliya Profile & Portfolio" />
      <meta name="twitter:image" content="https://res.cloudinary.com/dk3dupetz/image/upload/v1683987359/Portfolio/Dev_preloader_xxuziz.jpg" />

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:image" content="https://res.cloudinary.com/dk3dupetz/image/upload/v1683987359/Portfolio/Dev_preloader_xxuziz.jpg" />
      <meta
        name="Muliya Dev"
        content="Dev Muliya Profile & Portfolio"
      />
      <title>Muliya Dev</title>
    </Head>
    <Script src='/script.js' />

    <Navbtn toggle={settoggle} value={toggle} />
    <Panel />
    {toggle && <Pages />}
    <Social />
    {isLoading && <Loader />}
    <AnimatePresence mode='wait'>
      <motion.div exit={{ opacity: 0 }} key={useRouter().asPath}>
        <Component {...pageProps} />
        <Analytics/>
      </motion.div>
    </AnimatePresence>
    <span className='dark:text-gray-600 text-gray-400 text-sm fixed right-4 bottom-1'>&#169;{new Date().getFullYear();} Muliya Dev. All rights reserved.</span>
  </>
}



const Loader = () => <motion.div

  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  className='w-8 h-8 fixed right-10 bottom-10 rounded-full border-4 border-transparent border-r-blue-900 border-t-blue-900 animate-spin'></motion.div>





const Social = () => <motion.div variants={social} initial="hidden" animate="visible" className='absolute flex sm:flex-row  flex-col  sm:top-2 sm:left-8 left-2 bottom-8 sm:h-fit sm:w-1/6 h-2/6 z-10 social'>
  <motion.a href="https://www.linkedin.com/in/dev-muliya" target='blank' initial={{ y: -800 }} animate={{ y: 0 }} whileTap={{ scale: 0.8 }} ><AiFillLinkedin className='text-2xl darklight' /></motion.a>
  <motion.a href="https://github.com/Devmuliya16" target='blank' initial={{ y: -800 }} animate={{ y: 0 }} whileTap={{ scale: 0.8 }}><AiFillGithub className='text-2xl darklight' /></motion.a>
  <motion.a href="https://telegram.me/Devmuliya" target='blank' initial={{ y: -800 }} animate={{ y: 0 }} whileTap={{ scale: 0.8 }}><FaTelegramPlane className='text-2xl darklight' /></motion.a>
  <motion.a href="https://leetcode.com/Muliya_Dev" target='blank' initial={{ y: -800 }} animate={{ y: 0 }} whileTap={{ scale: 0.8 }}><SiLeetcode className='text-2xl darklight' /></motion.a>

</motion.div>
