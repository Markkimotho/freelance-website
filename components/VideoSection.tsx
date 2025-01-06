import { motion } from 'framer-motion'

const videos = [
  { title: 'Project Showcase 1', url: 'https://www.example.com/video1.mp4' },
  { title: 'Client Testimonial', url: 'https://www.example.com/video2.mp4' },
  { title: 'Live Coding Session', url: 'https://www.example.com/video3.mp4' },
]

export default function VideoSection() {
  return (
    <section className="py-16 bg-gray-900 bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-8 text-center text-gradient"
        >
          Video Showcase
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden backdrop-filter backdrop-blur-sm"
            >
              <video
                src={video.url}
                controls
                className="w-full h-48 object-cover"
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

