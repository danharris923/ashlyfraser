'use client'

import { motion } from "framer-motion"
import { Sparkles, TrendingUp, Users, DollarSign } from 'lucide-react'

export default function DCCourse() {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            <Sparkles className="w-4 h-4" />
            NEW: DIGITAL MARKETING COURSE
            <Sparkles className="w-4 h-4" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            Start Your{" "}
            <span className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 bg-clip-text text-transparent">
              Digital Marketing Journey
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Master digital marketing with The Digital Course (DC) — the complete system that teaches you 
            how to build, market, and scale your online business to 6 figures and beyond.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-700"
        >
          {/* What's Included Section */}
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-white text-center mb-8">What You'll Get Inside The Digital Course:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="text-white font-semibold">Complete Digital Marketing Foundation</h4>
                  <p className="text-gray-400 text-sm">Everything you need to start and scale online</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="text-white font-semibold">Content Creator's Toolkit</h4>
                  <p className="text-gray-400 text-sm">Professional templates and strategies</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="text-white font-semibold">Social Media Mastery Templates</h4>
                  <p className="text-gray-400 text-sm">Viral-ready content for all platforms</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="text-white font-semibold">Business Planning Systems</h4>
                  <p className="text-gray-400 text-sm">Spreadsheets, trackers, and automation tools</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Digital Marketing Mastery</h3>
              <p className="text-gray-400">Learn proven strategies to build a 6-figure online business</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">100% Profit Potential</h3>
              <p className="text-gray-400">Buy once, resell forever and keep all profits</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">1,000+ Community</h3>
              <p className="text-gray-400">Join a thriving network of entrepreneurs</p>
            </div>
          </div>

          {/* TODO: Add email capture form here in the future */}
          {/* For now, using buttons with placeholder functionality */}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* DC-style button with gradient outline */}
            <a
              href="https://thedc.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              <span className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400"></span>
              <span className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-400 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></span>
              <span className="relative flex items-center gap-3 bg-gray-900 px-8 py-4 rounded-xl border-2 border-transparent">
                <span className="text-lg">Explore MRR Products</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            {/* Get Started Free button */}
            <button
              className="group relative inline-flex items-center justify-center px-8 py-4 font-bold transition-all duration-300 ease-in-out transform hover:scale-105"
              onClick={() => alert('Email capture coming soon! For now, visit thedc.vercel.app')}
            >
              <span className="absolute inset-0 w-full h-full rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 opacity-20"></span>
              <span className="relative flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-green-400/50 text-green-300 hover:text-white hover:border-green-400 transition-colors">
                <span className="text-lg">Get Started FREE!</span>
                <span className="text-xs bg-green-400/20 px-2 py-1 rounded-full">Coming Soon</span>
              </span>
            </button>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-700">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>LIVE SYSTEM</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Instant Access</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Lifetime Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-gray-500 text-sm">
            💡 Limited spots available. Join before prices increase.
          </p>
        </motion.div>
      </div>
    </section>
  )
}