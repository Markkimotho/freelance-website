import { motion } from 'framer-motion'

const projects = [
  { title: 'Project 1', description: 'A brief description of the project and its key features.', image: '/placeholder.svg', technologies: ['React', 'Node.js'] },
  { title: 'Project 2', description: 'Another project showcasing different skills and technologies.', image: '/placeholder.svg', technologies: ['Python', 'Django'] },
  { title: 'Project 3', description: 'A complex project demonstrating advanced development capabilities.', image: '/placeholder.svg', technologies: ['Vue.js', 'GraphQL'] },
]

export default function Projects() {
  return (
    <section className="py-16 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gradient"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden backdrop-filter backdrop-blur-sm"
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-blue-500 bg-opacity-50 text-white text-sm px-2 py-1 rounded">
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
  )
}

