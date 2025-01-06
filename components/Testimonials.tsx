import { motion } from 'framer-motion'

const testimonials = [
  { text: "Working with this freelancer was an absolute pleasure. They delivered high-quality work on time and exceeded our expectations.", author: "John Doe, CEO" },
  { text: "I was impressed by their technical skills and ability to solve complex problems. I highly recommend their services.", author: "Jane Smith, CTO" },
  { text: "Their attention to detail and commitment to delivering excellent results make them stand out from other freelancers.", author: "Mike Johnson, Project Manager" },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gradient"
        >
          What Clients Say
        </motion.h2>
        <div className="overflow-hidden">
          <motion.div
            animate={{ x: [0, -2000] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
            className="flex"
          >
            {testimonials.concat(testimonials).map((testimonial, index) => (
              <motion.div 
                key={index} 
                className="w-80 flex-shrink-0 mx-4"
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-white bg-opacity-10 rounded-lg p-6 backdrop-filter backdrop-blur-sm h-full">
                  <p className="text-gray-300 mb-4">{testimonial.text}</p>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

