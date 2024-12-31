import { motion } from 'framer-motion'

const Hero = (props) => {
  const handleClick = () => {
    props.scrollToProjects()
    // props.setActiveSection('projects')
  }
  return (
    <section id="home" className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Hello, I am <span className="text-primary">Adrien</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 max-w-lg"
        >
          An engineering student at CentraleSupélec who enjoy creating full-stack apps.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full sm:w-auto bg-secondary text-text px-8 py-3 rounded-lg font-medium
                     hover:bg-primary/90 transition-colors"
          onClick={handleClick}
        >
          View My Work
        </motion.button>
      </div>
    </section>
  )
}

export default Hero