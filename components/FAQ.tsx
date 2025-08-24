"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Is this really possible for me?",
    answer:
      "Yes — beginners succeed with this system daily. I've designed The Digital Course specifically for people with no prior experience. You don't need technical skills, just the willingness to learn and take action.",
  },
  {
    question: "Do I need tech skills?",
    answer:
      "No, this is beginner-friendly. Everything is explained step-by-step with done-for-you templates and tools. If you can send an email, you can do this.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Many see results within weeks. Some students have made their first sales within days of implementing the strategies. Your results depend on how quickly you take action and implement what you learn.",
  },
  {
    question: "Do I keep all profits?",
    answer:
      "YES. Always. With Master Resell Rights, you keep 100% of every sale you make. There are no ongoing fees or revenue sharing. Your success is entirely yours.",
  },
  {
    question: "What if I don't have time?",
    answer:
      "The system is designed for busy people. You can work on this in your spare time - even just 1-2 hours per day can create significant results. Many of my students started while working full-time jobs.",
  },
  {
    question: "Is there ongoing support?",
    answer:
      "You get access to our private community of 1,000+ entrepreneurs, plus regular training updates and support. You're never alone in this journey.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-white pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-6 h-6 text-pink-400 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
