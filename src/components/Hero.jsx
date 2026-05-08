import { motion } from 'framer-motion'
import { ArrowRight, Code, MessageCircle, Briefcase } from 'lucide-react'
import Button from './ui/Button'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent-purple/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-blue/20 rounded-full blur-[140px] animate-pulse delay-700" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-block py-2 px-4 glass-dark text-accent-cyan text-sm font-bold tracking-widest uppercase rounded-full"
        >
          Available for new projects
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tight"
        >
          Hi, I'm <span className="text-gradient">Alex</span> <br /> 
          Creative Developer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I build high-end, interactive web experiences that blend art and technology. 
          Specializing in React, WebGL, and modern motion design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button variant="primary" className="flex items-center gap-2">
            View Projects <ArrowRight size={20} />
          </Button>
          <Button variant="secondary">
            Contact Me
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-16 flex justify-center gap-8 text-gray-500"
        >
          {[Code, MessageCircle, Briefcase].map((Icon, i) => (
            <a key={i} href="#" className="hover:text-white transition-colors">
              <Icon size={24} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-[10%] hidden lg:block"
      >
        <div className="w-16 h-16 glass-dark border-accent-purple/20 rotate-45" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-1/3 left-[10%] hidden lg:block"
      >
        <div className="w-12 h-12 glass border-accent-cyan/20 rounded-full" />
      </motion.div>
    </section>
  )
}

export default Hero
