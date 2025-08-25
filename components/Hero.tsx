"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion } from "framer-motion"

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background with soft pastels */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-white/60"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
  {/* Mobile Layout: Stack vertically */}
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12 lg:min-h-[80vh]">
    {/* Main content - takes full width on mobile, limited on desktop */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full lg:w-3/5 space-y-8 relative z-20"
    >
      <div className="space-y-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-green-600 font-medium tracking-wide">DEALS UPDATED DAILY</span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
          Follow Canada's{" "}
          <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
            Favorite Deal Finder
          </span>
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 font-medium leading-relaxed">
          Hi, I'm Ashly Fraser — Canada's top couponing and deal-finding influencer. I help thousands of families 
          save money every day through smart shopping, exclusive deals, and proven money-saving strategies.
        </p>

        <p className="text-base md:text-lg text-gray-600 leading-relaxed">
          From finding the best freebies to uncovering hidden discounts, I share daily deals that put real money 
          back in your pocket. Join my community of savvy shoppers and never pay full price again!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => scrollToSection("deals")}
          className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 border-0"
        >
          <span className="flex items-center space-x-2">
            <span>See Today's Deals</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          </span>
        </Button>
        <Button
          onClick={() => scrollToSection("community")}
          variant="outline"
          className="border-2 border-rose-300 bg-white/80 text-rose-600 hover:bg-rose-50 hover:border-rose-400 px-8 md:px-10 py-5 md:py-6 text-base md:text-lg font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 backdrop-blur-sm"
        >
          Join the Community
        </Button>
      </div>

      {/* Social Media Icons */}
      <div className="flex items-center space-x-4 pt-8">
        <span className="text-gray-600 text-sm font-medium">CONNECT WITH ME:</span>
        <div className="flex space-x-3">
          {/* Instagram */}
          <a 
            href="https://instagram.com/ashly__savingsguruca" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <span className="text-white text-xs font-bold">IG</span>
          </a>
          {/* YouTube */}
          <a 
            href="https://www.youtube.com/channel/UCbVX-yAa2etLXvkYGx1C_Dw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <span className="text-white text-xs font-bold">YT</span>
          </a>
          {/* Facebook */}
          <a 
            href="https://www.facebook.com/ashly.fraser.96/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <span className="text-white text-xs font-bold">FB</span>
          </a>
          {/* TikTok */}
          <a 
            href="https://tiktok.com/@savingsguru" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 bg-black rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <span className="text-white text-xs font-bold">TT</span>
          </a>
          {/* Threads */}
          <a 
            href="https://www.threads.com/@ashly_savingsguruca" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center hover:scale-110 transition-transform border border-gray-700"
          >
            <span className="text-white text-xs font-bold">TH</span>
          </a>
          {/* Linktree */}
          <a 
            href="https://linktr.ee/savingsguru.ca" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
          >
            <span className="text-white text-xs font-bold">LT</span>
          </a>
        </div>
      </div>
    </motion.div>

    {/* Image section - stacks below on mobile, side by side on desktop */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full lg:w-2/5 flex justify-center lg:justify-end relative mt-8 lg:mt-0"
    >
      <div className="relative">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/15 via-pink-500/15 to-purple-500/15 rounded-full blur-2xl scale-110 animate-pulse"></div>
        
        {/* Oval image container - smaller on mobile */}
        <div className="relative z-10 w-64 h-80 sm:w-80 sm:h-96 md:w-96 md:h-[28rem] rounded-full overflow-hidden border-4 border-gradient-to-r from-rose-400 via-pink-400 to-purple-400 shadow-2xl">
          <Image
            src="/images/ashly-fraser.jpg"
            alt="Ashly Fraser - Canada's Deal Finder"
            width={400}
            height={500}
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Status indicators */}
        <div className="absolute -top-4 -left-4 bg-green-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
          SAVING DAILY
        </div>
        <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-xs sm:text-sm font-bold shadow-lg">
          Deal Expert
        </div>
      </div>
    </motion.div>
  </div>
</div>
    </section>
  )
}
