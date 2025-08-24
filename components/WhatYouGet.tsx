"use client"

import { motion } from "framer-motion"
import { Rocket, Zap, Laptop, Key, Globe } from 'lucide-react'

const features = [
  {
    icon: Rocket,
    title: "Step-by-step digital marketing roadmap",
    description: "Follow the exact blueprint I used to build my 6-figure business",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-600/20 to-cyan-600/20",
    borderColor: "border-blue-500/30",
  },
  {
    icon: Zap,
    title: "High-converting sales strategies",
    description: "Proven tactics that turn followers into paying customers",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-600/20 to-orange-600/20",
    borderColor: "border-yellow-500/30",
  },
  {
    icon: Laptop,
    title: "Done-for-you templates & automation tools",
    description: "Skip the guesswork with ready-to-use systems",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-600/20 to-pink-600/20",
    borderColor: "border-purple-500/30",
  },
  {
    icon: Key,
    title: "Master Resell Rights — keep 100% of profits",
    description: "Sell the course yourself and keep every dollar you make",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-600/20 to-emerald-600/20",
    borderColor: "border-green-500/30",
  },
  {
    icon: Globe,
    title: "Access to private entrepreneur community",
    description: "Join 1,000+ like-minded entrepreneurs on the same journey",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-600/20 to-blue-600/20",
    borderColor: "border-indigo-500/30",
  },
]

export default function WhatYouGet() {
  return (
    <section id="what-you-get" className="py-20 px-4 bg-gray-900 relative">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMjAgMjBoMjB2MjBIMjBWMjB6bS0yMCAwaDIwdjIwSDBWMjB6Ii8+PC9nPjwvZz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-7xl font-black mb-6 leading-tight">
            🎯 Everything you need to{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              build and scale online
            </span>{" "}
            in 2025
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm rounded-3xl p-8 border ${feature.borderColor} hover:border-opacity-60 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group`}
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${feature.gradient} p-4 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white leading-tight">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
