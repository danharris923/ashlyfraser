"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from 'lucide-react'

export default function FinalCTA() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-pink-500/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block text-6xl mb-4"
            >
              🌌
            </motion.div>

            <h2 className="text-4xl md:text-7xl font-black leading-tight">
              Your life won't change unless you{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                take the first step
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
              I've given you the roadmap. Now it's your turn. Start today — future you will thank you.
            </p>
          </div>

          <div className="pt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => scrollToSection("pricing")}
                className="bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 hover:from-pink-700 hover:via-purple-700 hover:to-cyan-700 text-white px-16 py-8 text-2xl font-black rounded-3xl transform transition-all duration-300 shadow-2xl hover:shadow-pink-500/30 border-0 group"
              >
                <span className="flex items-center space-x-4">
                  <Sparkles className="w-8 h-8 group-hover:animate-spin" />
                  <span>Start Your Journey Now</span>
                  <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Trust indicators */}
          <div className="pt-12 space-y-6">
            <div className="flex justify-center items-center space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Secure Payment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Instant Access</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">1000+ Members</span>
              </div>
            </div>

            <div className="border-t border-gray-700/50 pt-8">
              <p className="text-gray-400 text-sm">© 2025 Ashly Fraser - The Digital Course. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
