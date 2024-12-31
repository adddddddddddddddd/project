import { motion } from "framer-motion";
import hmsdihlPresentationImage from "../assets/hmsdihl-presentation-image.png";

const Projects = () => {
  const projects = [
    {
      title: "How Many Steps Do I Have Left?",
      description: "An application that helps you get out of sedentarity.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      image: hmsdihlPresentationImage,
      url: "https://hmsdihl.vercel.app/",
    },
    {
      title: "Comming Soon",
      description: "An application that helps you get music recommendations according to your Spotify feed.",
      tech: ["React", "Node.js", "MongoDB", "TailwindCSS", 'Next.js'],
      image: "https://via.placeholder.com/500x300",
      url: "https://google.com",
    },
    
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background2 rounded-lg overflow-hidden shadow-primary shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                 <a href={project.url}>
                  <button className="bg-secondary text-text px-4 py-2 rounded">
                    View Project
                  </button></a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-background2 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
