import { motion } from 'framer-motion'

const GlassCard = ({ children, className = '', hover = true }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -10, transition: { duration: 0.3 } } : {}}
      className={`glass p-6 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default GlassCard
