import { motion } from 'framer-motion'
import Section from './ui/Section'
import GlassCard from './ui/GlassCard'
import { Code2, Palette, Zap } from 'lucide-react'

const skillGroups = [
  {
    title: 'Frontend',
    icon: <Code2 className="text-accent-purple" />,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    title: 'Design',
    icon: <Palette className="text-accent-blue" />,
    skills: ['Figma', 'Adobe XD', 'UI/UX Design', 'Prototyping', 'Branding'],
  },
  {
    title: 'Tools',
    icon: <Zap className="text-accent-cyan" />,
    skills: ['Git', 'Vite', 'Docker', 'Firebase', 'AWS'],
  },
]

const Skills = () => {
  return (
    <Section id="skills" title="My Expertise">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillGroups.map((group, i) => (
          <GlassCard key={i} className="group relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-accent-purple/10 transition-colors duration-500" />
            
            <div className="mb-6 p-3 glass-dark inline-block rounded-xl">
              {group.icon}
            </div>
            
            <h3 className="text-2xl font-bold mb-6">{group.title}</h3>
            
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, j) => (
                <span 
                  key={j}
                  className="px-4 py-2 glass-dark text-sm text-gray-300 rounded-lg border border-white/5 group-hover:border-accent-purple/30 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

export default Skills
