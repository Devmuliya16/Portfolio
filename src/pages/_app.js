import '@/styles/globals.css';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
      />
      <link rel="icon" href="/favicon.ico" />
      <meta name="title" content="Dev Muliya" />
        <meta
          name="description"
          content="I'm Dev Muliya computer engineer and full stack developer, explore my projects here and contact me to discuss potential collaborations and projects."
        />
        <meta
          name="keywords"
          content="dev, muliya, muliya dev, Dev Muliya, Dev, computer, software engineer, engineer, gujarat, india, website, contact, developer, l.d. college, ahmedabad, profile, search, online, web, computer engineer, linkedin, instagram, portfolio, projects, github"
        />
      <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="2 days" />
        <meta name="author" content="Dev Muliya" />
      <meta name="google-site-verification" content="xPaNge4witobVyvPMO7N4EAALEerD8-6i0rAGgbZRNc" />

        {/* Open Graph / Facebook */}
      <meta property="og:url" content="https://devmuliya.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Dev Muliya" />
      <meta property="og:description" content="Dev Muliya Profile & Portfolio" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dk3dupetz/image/upload/v1683987359/Portfolio/Dev_preloader_xxuziz.jpg"
        />

        {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="devmuliya.vercel.app" />
      <meta property="twitter:url" content="https://devmuliya.vercel.app/" />
        <meta name="twitter:title" content="Dev Muliya" />
      <meta name="twitter:description" content="Dev Muliya Profile & Portfolio" />
      <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dk3dupetz/image/upload/v1683987359/Portfolio/Dev_preloader_xxuziz.jpg"
      />

      <title>Dev Muliya</title>
    </Head>

      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
        <Component {...pageProps} />
          <Analytics />
          <SpeedInsights />
      </motion.div>
    </AnimatePresence>
    </>
  );
}
