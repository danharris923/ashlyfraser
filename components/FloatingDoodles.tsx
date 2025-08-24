"use client"

import { motion } from "framer-motion"

const doodles = [
  { emoji: "✈️", x: "10%", y: "20%", delay: 0 },
  { emoji: "🍭", x: "85%", y: "15%", delay: 1 },
  { emoji: "🎉", x: "15%", y: "70%", delay: 2 },
  { emoji: "🎈", x: "80%", y: "60%", delay: 0.5 },
  { emoji: "⭐", x: "5%", y: "50%", delay: 1.5 },
  { emoji: "🚀", x: "90%", y: "80%", delay: 2.5 },
  { emoji: "💎", x: "20%", y: "90%", delay: 3 },
  { emoji: "🌟", x: "75%", y: "30%", delay: 1.8 },
]

export default function FloatingDoodles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {doodles.map((doodle, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20"
          style={{ left: doodle.x, top: doodle.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: doodle.delay,
            ease: "easeInOut",
          }}
        >
          {doodle.emoji}
        </motion.div>
      ))}
    </div>
  )
}
