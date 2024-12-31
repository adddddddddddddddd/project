import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    'Next.js','React.js', 'Node.js','TailwindCSS','MongoDB',
    'Python','Django', 'SQL', 
  ]

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        
        <div className="mb-8">
          <p className="text-gray-400 mb-4">
            I'm a student at CentraleSupélec, passionate about full-stack web. I love to help people by creating useful and user-friendly applications.
          </p>
          <p className="text-gray-400">
            I started coding in 2023 and I've been learning and building projects ever since. I'm always looking for new opportunities to learn and grow as a developer.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-primary/60 px-4 py-2 rounded-full text-sm text-text"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About