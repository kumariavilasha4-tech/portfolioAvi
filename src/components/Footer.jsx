import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-12 px-6 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <a href="#home" className="text-2xl font-black text-gradient tracking-tighter">ALEX.</a>
          <p className="text-gray-500 text-sm mt-2">© 2026 Alex Dev. All rights reserved.</p>
        </div>

        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -5 }}
          className="p-4 glass-dark rounded-full text-accent-cyan hover:text-white transition-colors"
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>

      {/* Background decoration */}
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent-cyan/5 rounded-full blur-[100px]" />
    </footer>
  )
}

export default Footer
