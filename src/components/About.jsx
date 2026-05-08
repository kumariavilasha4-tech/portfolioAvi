import { motion } from 'framer-motion'
import Section from './ui/Section'
import GlassCard from './ui/GlassCard'

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
]

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-purple to-accent-blue rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative aspect-square rounded-2xl overflow-hidden glass border-white/10">
               {/* Replace with actual image later */}
              <div className="w-full h-full bg-secondary-dark flex items-center justify-center text-accent-purple/50 text-8xl font-black italic">
                ALEX
              </div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          <h3 className="text-3xl font-bold">
            Bridging the gap between <span className="text-accent-cyan">Design</span> and <span className="text-accent-purple">Code</span>
          </h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            I am a self-taught developer and designer based in London. I've spent the last 5 years honing my skills in creating high-performance web applications that don't just work—they wow.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed">
            My approach is simple: I treat every line of code like a stroke of paint. I'm passionate about accessibility, performance, and clean, scalable architecture.
          </p>

          <div className="grid grid-cols-3 gap-6 pt-8">
            {stats.map((stat, i) => (
              <GlassCard key={i} className="text-center p-4" hover={false}>
                <div className="text-3xl font-black text-gradient mb-1">{stat.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About
