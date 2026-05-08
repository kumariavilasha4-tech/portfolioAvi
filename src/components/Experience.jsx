import { motion } from 'framer-motion'
import Section from './ui/Section'
import GlassCard from './ui/GlassCard'

const experiences = [
  {
    role: 'Senior Frontend Developer',
    company: 'TechFlow Systems',
    period: '2022 - Present',
    description: 'Leading the frontend team in building a next-gen SaaS platform. Implemented advanced state management and optimized performance by 40%.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Creative Waves',
    period: '2020 - 2022',
    description: 'Designed and developed 20+ custom websites for high-profile clients. Focused on glassmorphism and motion design trends.',
  },
  {
    role: 'Junior Web Developer',
    company: 'StartUp Hub',
    period: '2018 - 2020',
    description: 'Worked on various client projects using React and Node.js. Gained expertise in responsive design and accessibility.',
  },
]

const Experience = () => {
  return (
    <Section id="experience" title="My Journey">
      <div className="relative max-w-4xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan opacity-30 md:-translate-x-1/2" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center`}>
              {/* Timeline dot */}
              <div className="absolute left-[-4px] md:left-1/2 top-6 md:top-auto w-2 h-2 rounded-full bg-accent-purple md:-translate-x-1/2 shadow-[0_0_10px_rgba(139,92,246,1)] z-10" />
              
              <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-12">
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <GlassCard>
                    <div className="text-accent-cyan text-sm font-bold mb-1">{exp.period}</div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <div className="text-gray-400 font-medium mb-4">{exp.company}</div>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </GlassCard>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Experience
