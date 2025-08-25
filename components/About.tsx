"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden bg-white">
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-sans text-gray-900">
              About{" "}
              <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Ashly Fraser
              </span>
            </h2>

            <div className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed font-sans font-normal">
              <p className="bg-gradient-to-br from-rose-50 to-pink-50 backdrop-blur-sm rounded-2xl p-8 border border-rose-200/50 font-light">
                From struggling to make ends meet to becoming Canada's most trusted deal finder, my journey started with 
                necessity and grew into a passion for helping families save money. I've helped thousands of Canadians 
                discover the art of smart shopping and strategic savings.
              </p>

              <p className="bg-gradient-to-br from-purple-50 to-blue-50 backdrop-blur-sm rounded-2xl p-8 border border-purple-200/50 font-light">
                With years of experience finding the best deals, freebies, and money-saving strategies across Canada, 
                I share daily tips that put <span className="text-rose-600 font-bold">real money back in your pocket</span>. 
                From grocery savings to exclusive online deals, I make smart shopping simple and fun.
              </p>
            </div>

          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-rose-100 to-rose-200 rounded-2xl p-6 border border-rose-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-2 font-sans">100K+</div>
              <div className="text-gray-700 font-normal font-sans">Social Followers</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-6 border border-green-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2 font-sans">$10M+</div>
              <div className="text-gray-700 font-normal font-sans">Saved for Families</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl p-6 border border-purple-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2 font-sans">Daily</div>
              <div className="text-gray-700 font-normal font-sans">Deal Updates</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl p-6 border border-blue-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2 font-sans">10+ Years</div>
              <div className="text-gray-700 font-normal font-sans">Deal Expertise</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
