"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah M.",
    text: "First $10K month in 8 weeks. Ashly's system works.",
    rating: 5,
    role: "Digital Marketer",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Jason T.",
    text: "Quit my job in 3 months. Best decision ever.",
    rating: 5,
    role: "Online Entrepreneur",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Emily R.",
    text: "Resell rights paid for the course in days. Life-changing.",
    rating: 5,
    role: "Course Creator",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Mike D.",
    text: "Finally found a system that actually delivers results.",
    rating: 5,
    role: "Business Owner",
    gradient: "from-orange-500 to-red-500",
  },
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 px-4 bg-gray-900 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjZmZmZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PHBhdGggZD0iTTUwIDUwbDUwLTUwSDUwdjUwek0wIDUwbDUwLTUwSDB2NTB6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black mb-12 leading-tight">
            🌟 Real people.{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Real results.
            </span>
          </h2>

          <div className="relative h-80 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -100, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className={`bg-gradient-to-br ${testimonials[currentIndex].gradient}/10 backdrop-blur-sm rounded-3xl p-10 border border-gray-700/50 shadow-2xl max-w-3xl relative`}>
                  {/* Quote icon */}
                  <div className={`absolute -top-6 left-8 bg-gradient-to-r ${testimonials[currentIndex].gradient} p-3 rounded-full`}>
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex justify-center mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-2xl md:text-3xl text-gray-200 mb-6 italic font-medium leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  
                  <div className="text-center">
                    <p className={`bg-gradient-to-r ${testimonials[currentIndex].gradient} bg-clip-text text-transparent font-bold text-xl`}>
                      – {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced dots indicator */}
          <div className="flex justify-center space-x-3 mt-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative transition-all duration-300 ${
                  index === currentIndex 
                    ? `w-12 h-4 bg-gradient-to-r ${testimonial.gradient} rounded-full` 
                    : "w-4 h-4 bg-gray-600 hover:bg-gray-500 rounded-full"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
