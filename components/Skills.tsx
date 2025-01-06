import { motion } from 'framer-motion'

const skills = [
  'Python', 'JavaScript', 'React', 'Node.js', 'Docker', 'AWS', 'GraphQL', 'TypeScript',
  'MongoDB', 'PostgreSQL', 'Redis', 'Kubernetes', 'CI/CD', 'Machine Learning'
]

export default function Skills() {
  return (
    <section className="py-16 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gradient"
        >
          My Skills
        </motion.h2>
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            className="flex whitespace-nowrap"
          >
            {skills.concat(skills).map((skill, index) => (
              <motion.div 
                key={index} 
                className="inline-block mx-4"
                whileHover={{ scale: 1.1 }}
              >
                <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center backdrop-filter backdrop-blur-sm">
                  <h3 className="text-xl font-semibold text-white">{skill}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

