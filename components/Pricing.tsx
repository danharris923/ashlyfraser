"use client"

import { motion } from "framer-motion"
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: "The Digital Mini",
    price: "$333 CAD",
    description: "Your starter kit to launch your online business",
    features: [
      "Core training to get earning quickly",
      "Includes Master Resell Rights",
      "Basic templates and tools",
      "Community access",
    ],
    buyButtonId: "buy_btn_1RsUgLDVoc6yr1ds5wZGDwGG",
    popular: false,
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-600/10 to-cyan-600/10",
    borderColor: "border-blue-500/30",
  },
  {
    name: "The Digital Course",
    price: "$555 CAD",
    description: "The full transformation program",
    features: [
      "Advanced strategies, automation, tools",
      "Full Master Resell Rights",
      "Complete template library",
      "Priority community access",
      "Bonus training modules",
    ],
    buyButtonId: "buy_btn_1RslgnDVoc6yr1dsvcYWZ2rX",
    popular: true,
    gradient: "from-purple-600 to-pink-600",
    bgGradient: "from-purple-600/10 to-pink-600/10",
    borderColor: "border-purple-500/50",
  },
  {
    name: "The Digital DUO",
    price: "$765 CAD",
    description: "All-in. Maximum growth. Maximum value.",
    features: [
      "Both courses bundled",
      "All rights, all templates, all strategies",
      "VIP community access",
      "1-on-1 strategy session",
      "Lifetime updates",
    ],
    buyButtonId: "buy_btn_1RsUdLDVoc6yr1dsKngg6Jif",
    popular: false,
    gradient: "from-green-600 to-emerald-600",
    bgGradient: "from-green-600/10 to-emerald-600/10",
    borderColor: "border-green-500/30",
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
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
            Choose Your{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Freedom Plan
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Over 1,000 entrepreneurs have already joined. Choose your plan and take the first step.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-gradient-to-br ${plan.bgGradient} backdrop-blur-sm rounded-3xl p-8 border ${plan.borderColor} ${
                plan.popular
                  ? "shadow-2xl shadow-purple-500/20 transform scale-105 border-purple-400/50"
                  : ""
              } hover:border-opacity-60 transition-all duration-300 group`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold flex items-center space-x-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    <span>MOST POPULAR</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8 pt-4">
                <h3 className="text-3xl font-black text-white mb-4">{plan.name}</h3>
                <div className={`text-5xl font-black bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent mb-4`}>
                  {plan.price}
                </div>
                <p className="text-gray-300 italic text-lg">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <div className={`bg-gradient-to-r ${plan.gradient} p-1 rounded-full mr-4 flex-shrink-0`}>
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <script async src="https://js.stripe.com/v3/buy-button.js"></script>
                <stripe-buy-button
                  buy-button-id={plan.buyButtonId}
                  publishable-key="pk_live_51PxkkBDVoc6yr1ds7VXiFMYioozHdlNUsOKjAUsHVoZtxxWo4GYOiTKSPQM1Qcz8S52ymWXAdbXoktsVKQjAbL0z00kACUCGQC"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
