import { motion } from 'framer-motion'
import Section from './ui/Section'
import GlassCard from './ui/GlassCard'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO at Innovate',
    content: "Alex is a rare talent who understands both the technical and aesthetic sides of development. The project was delivered ahead of schedule and exceeded all expectations.",
  },
  {
    name: 'Mark Chen',
    role: 'Product Manager',
    content: "The animations Alex integrated into our platform made it feel alive. User engagement increased by 25% within the first month of the redesign.",
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder of Artify',
    content: "Working with Alex was a breeze. He took our vague vision and turned it into a stunning, functional masterpiece. Highly recommended!",
  },
]

const Testimonials = () => {
  return (
    <Section id="testimonials" title="What Clients Say">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <GlassCard key={i} className="relative">
            <Quote className="absolute top-6 right-6 text-white/5" size={40} />
            <p className="text-gray-400 italic mb-8 relative z-10 leading-relaxed">
              "{t.content}"
            </p>
            <div>
              <div className="font-bold text-lg">{t.name}</div>
              <div className="text-accent-blue text-sm">{t.role}</div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

export default Testimonials
