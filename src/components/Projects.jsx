import { motion } from 'framer-motion'
import Section from './ui/Section'
import GlassCard from './ui/GlassCard'
import { ExternalLink, Code } from 'lucide-react'

const projects = [
  {
    title: 'Neon Nexus',
    category: 'Full Stack Web App',
    description: 'A futuristic project management tool with real-time collaboration and AI-driven insights.',
    image: 'bg-gradient-to-br from-accent-purple/20 to-black',
    tags: ['React', 'Node.js', 'Socket.io', 'Three.js'],
  },
  {
    title: 'Ether Real Estate',
    category: 'Blockchain / UI Design',
    description: 'A high-end property listing platform integrated with Ethereum for transparent transactions.',
    image: 'bg-gradient-to-br from-accent-blue/20 to-black',
    tags: ['Next.js', 'Solidity', 'Tailwind'],
  },
  {
    title: 'Glow Music Player',
    category: 'Frontend Experiment',
    description: 'An immersive music player with audio visualizers and adaptive ambient lighting.',
    image: 'bg-gradient-to-br from-accent-cyan/20 to-black',
    tags: ['React', 'Web Audio API', 'Canvas'],
  },
]

const Projects = () => {
  return (
    <Section id="projects" title="Featured Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <GlassCard key={i} className="group p-0 overflow-hidden flex flex-col">
            <div className={`aspect-video w-full ${project.image} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 gap-4">
                <button className="p-3 glass rounded-full hover:bg-white/20 transition-all">
                  <Code size={20} />
                </button>
                <button className="p-3 glass rounded-full hover:bg-white/20 transition-all">
                  <ExternalLink size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-6 flex-grow flex flex-col">
              <span className="text-xs text-accent-cyan font-bold uppercase tracking-widest mb-2">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] py-1 px-3 glass-dark rounded-full text-gray-400 border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

export default Projects
