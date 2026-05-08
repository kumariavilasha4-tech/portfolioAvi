import { motion } from 'framer-motion'
import Section from './ui/Section'
import GlassCard from './ui/GlassCard'
import Button from './ui/Button'
import { Mail, MessageSquare, Send, User } from 'lucide-react'

const Contact = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <h3 className="text-3xl font-bold">Let's build something <span className="text-gradient">extraordinary</span></h3>
          <p className="text-gray-400 text-lg leading-relaxed">
            I'm currently available for freelance work and full-time opportunities. 
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-6">
            {[
              { icon: <Mail size={20} />, label: 'Email', value: 'hello@alex.dev' },
              { icon: <MessageSquare size={20} />, label: 'Discord', value: 'AlexDev#1234' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="p-4 glass-dark text-accent-purple group-hover:text-accent-cyan transition-colors">
                  {item.icon}
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest">{item.label}</div>
                  <div className="text-lg font-bold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <GlassCard className="relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 blur-3xl" />
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-purple transition-colors" size={20} />
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full pl-12 pr-6 py-4 glass-dark border border-white/5 focus:border-accent-purple/50 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-accent-purple transition-colors" size={20} />
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full pl-12 pr-6 py-4 glass-dark border border-white/5 focus:border-accent-purple/50 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Your Message</label>
              <textarea 
                rows="5"
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 glass-dark border border-white/5 focus:border-accent-purple/50 focus:outline-none transition-all resize-none"
              />
            </div>

            <Button className="w-full flex items-center justify-center gap-3">
              Send Message <Send size={18} />
            </Button>
          </form>
        </GlassCard>
      </div>
    </Section>
  )
}

export default Contact
