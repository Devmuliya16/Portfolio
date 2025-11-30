import { useRouter } from "next/router"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { getProjects } from '@/lib/configReader';
import Link from "next/link";
import { IoArrowBack, IoArrowForward, IoOpenOutline } from "react-icons/io5";

function ProjectPage({ data }) {
    const router = useRouter();
    const { slug: projectSlug } = router.query;
    const currentIndex = parseInt(projectSlug);
    const project = data?.[currentIndex];
    const [scrolled, setScrolled] = useState(false);
    
    const prevIndex = currentIndex > 0 ? currentIndex - 1 : null;
    const nextIndex = currentIndex < data.length - 1 ? currentIndex + 1 : null;
    const prevProject = prevIndex !== null ? data[prevIndex] : null;
    const nextProject = nextIndex !== null ? data[nextIndex] : null;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!router.isReady || !project) {
        return (
            <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full"
                />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0f]">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[200px]" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[180px]" />
            </div>

            {/* Header */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}
            >
                <div className="max-w-7xl mx-auto px-6">
                    <div className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
                        scrolled ? 'bg-[#0a0a0f]/90 backdrop-blur-xl border border-zinc-800/50' : ''
                    }`}>
                        <Link href="/#projects" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors group">
                            <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm">Back</span>
                        </Link>
                        <Link href="/" className="flex items-center gap-1">
                            <span className="text-xl font-bold text-white">Dev</span>
                            <span className="text-blue-500 text-2xl font-bold">.</span>
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Main Content */}
            <main className="relative z-10 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-6">
                    
                    {/* Hero Section - Vertical Layout */}
                    <div className="mb-32">
                        {/* Project Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6"
                        >
                            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-mono tracking-wider">
                                PROJECT {String(currentIndex + 1).padStart(2, '0')} / {String(data.length).padStart(2, '0')}
                            </span>
                        </motion.div>
                        
                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6"
                        >
                            {project.title}
                        </motion.h1>
                        
                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.15 }}
                            className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl"
                        >
                            {project.about}
                        </motion.p>
                        
                        {/* Browser Frame with Image */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mb-10"
                        >
                            <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl shadow-black/50">
                                {/* Browser Bar */}
                                <div className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    </div>
                                    <div className="flex-1 mx-4">
                                        <div className="bg-zinc-800 rounded-lg px-4 py-1.5 text-xs text-zinc-500 truncate">
                                            {project.Link}
                                        </div>
                                    </div>
                                </div>
                                {/* Image */}
                                <img 
                                    src={project.Links[0]} 
                                    alt={project.title}
                                    className="w-full"
                                />
                            </div>
                            
                        </motion.div>
                        
                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-4xl"
                        >
                            {project.para}
                        </motion.p>
                        
                        {/* Tech Pills & CTA Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.35 }}
                            className="flex flex-col sm:flex-row sm:items-center gap-6"
                        >
                            {/* Tech Pills */}
                            <div className="flex flex-wrap gap-3">
                                {project.technology.map((tech, ind) => (
                                    <span key={ind} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-zinc-800 rounded-xl text-sm text-zinc-300">
                                        <img src={`/${tech[0]}`} alt={tech[1]} className="w-5 h-5" />
                                        {tech[1]}
                                    </span>
                                ))}
                            </div>
                            
                            {/* CTA */}
                            <a 
                                href={project.Link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 w-fit px-8 py-4 bg-white text-zinc-900 font-semibold rounded-full hover:scale-105 transition-transform shrink-0"
                            >
                                <span>Visit Live Project</span>
                                <IoOpenOutline className="text-lg" />
                            </a>
                        </motion.div>
                    </div>

                    {/* Features Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-32"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                <span className="text-blue-400 text-xl">✦</span>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white">Features</h2>
                                <p className="text-zinc-500">What this project offers</p>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-5">
                            {project.Discription.map((line, ind) => (
                                <motion.div
                                    key={ind}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: ind * 0.03 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <span className="text-blue-500 mt-1">▹</span>
                                    <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">
                                        {line}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Learnings Section */}
                    <motion.section
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-32"
                    >
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                                <span className="text-emerald-400 text-xl">◆</span>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white">Key Learnings</h2>
                                <p className="text-zinc-500">Skills and knowledge gained</p>
                            </div>
                        </div>
                        
                        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
                            {project.Learnings.map((line, ind) => (
                                <motion.div
                                    key={ind}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: ind * 0.05 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <span className="text-emerald-500 mt-1">▹</span>
                                    <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors leading-relaxed">{line}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Screenshots Gallery */}
                    {project.Links.length > 1 && (
                        <motion.section
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="mb-32"
                        >
                            <div className="flex items-center gap-4 mb-12">
                                <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                                    <span className="text-violet-400 text-xl">⬡</span>
                        </div>
                        <div>
                                    <h2 className="text-3xl font-bold text-white">Screenshots</h2>
                                    <p className="text-zinc-500">Visual walkthrough of the project</p>
                        </div>
                    </div>

                            <div className="space-y-8">
                                {project.Links.map((img, ind) => (
                                    <motion.div
                                        key={ind}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: ind * 0.1 }}
                                        className="relative group"
                                    >
                                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/10 to-violet-500/10 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                                        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                                            <img 
                                                src={img} 
                                                alt={`${project.title} screenshot ${ind + 1}`}
                                                className="w-full"
                                            />
                                        </div>
                                        <p className="text-center text-zinc-600 text-sm mt-4">Screenshot {ind + 1} of {project.Links.length}</p>
                </motion.div>
                                ))}
                            </div>
                        </motion.section>
                    )}

                    {/* Navigation Footer */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="pt-16 border-t border-zinc-800/50"
                    >
                        <p className="text-center text-zinc-600 text-sm mb-8">Continue Exploring</p>
                        
                        <div className="flex items-center justify-between">
                            {prevProject ? (
                                <Link href={`/project/${prevIndex}`} className="group flex items-center gap-6 max-w-[45%]">
                                    <div className="w-16 h-16 rounded-2xl border border-zinc-800 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all shrink-0">
                                        <IoArrowBack className="text-xl text-zinc-500 group-hover:text-blue-400 transition-colors" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-600 uppercase tracking-wider mb-1">Previous Project</p>
                                        <p className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors truncate">{prevProject.title}</p>
                                    </div>
                                </Link>
                            ) : <div />}

                            {nextProject ? (
                                <Link href={`/project/${nextIndex}`} className="group flex items-center gap-6 text-right max-w-[45%]">
                                    <div>
                                        <p className="text-xs text-zinc-600 uppercase tracking-wider mb-1">Next Project</p>
                                        <p className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors truncate">{nextProject.title}</p>
                                    </div>
                                    <div className="w-16 h-16 rounded-2xl border border-zinc-800 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all shrink-0">
                                        <IoArrowForward className="text-xl text-zinc-500 group-hover:text-blue-400 transition-colors" />
                                    </div>
                                </Link>
                            ) : <div />}
                        </div>
                    </motion.div>
            </div>
            </main>
        </div>
    )
}

export default ProjectPage

export async function getServerSideProps() {
    const data = await getProjects()
    return {
        props: { data }
    }
}
