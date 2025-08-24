"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Mail, PartyPopper } from "lucide-react"

const steps = [
  {
    icon: ShoppingCart,
    title: "Choose Your Plan",
    description: "Select the package that fits where you are",
    color: "from-pink-500 to-purple-600",
  },
  {
    icon: Mail,
    title: "Get Instant Access",
    description: "Pay with Stripe → Zapier sends your invite",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: PartyPopper,
    title: "Start Building & Selling",
    description: "Learn, apply, and profit",
    color: "from-green-500 to-yellow-600",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            💡 Your freedom in{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">3 steps</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative"
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl z-10">
                {index + 1}
              </div>

              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:transform hover:scale-105">
                <div
                  className={`bg-gradient-to-r ${step.color} p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transform -translate-y-1/2 z-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
