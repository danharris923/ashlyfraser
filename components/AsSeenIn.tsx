"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function AsSeenIn() {
  const mediaFeatures = [
    {
      name: "The Globe and Mail",
      description: "Featured expert on Canadian consumer savings and smart shopping strategies",
      logo: "📰",
      color: "from-gray-600 to-gray-800"
    }
  ]

  const moneySavingPrograms = [
    {
      name: "Triangle Rewards",
      type: "Loyalty Program",
      description: "Earn points at Canadian Tire, Sport Chek, and more",
      icon: "🔺",
      url: "https://triangle.canadiantire.ca",
      color: "from-red-400 to-red-600"
    },
    {
      name: "Scene+ Points",
      type: "Rewards Program", 
      description: "Earn at Cineplex, Sobeys, IGA, and Scotia partners",
      icon: "🎬",
      url: "https://www.scene.ca",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Costco Membership",
      type: "Wholesale Club",
      description: "Bulk buying savings and exclusive member deals",
      icon: "🏪",
      url: "https://www.costco.ca",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Checkout 51",
      type: "Cashback App",
      description: "Earn cashback on groceries with receipt scanning",
      icon: "💰",
      url: "https://checkout51.com",
      color: "from-green-400 to-green-600"
    },
    {
      name: "Too Good To Go",
      type: "Food Waste App",
      description: "Save on surplus food from restaurants and stores",
      icon: "🍽️",
      url: "https://www.toogoodtogo.com/en-ca",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      name: "Rakuten Canada",
      type: "Cashback Portal",
      description: "Earn cashback shopping online at 750+ stores",
      icon: "🛒",
      url: "https://www.rakuten.ca",
      color: "from-orange-400 to-orange-600"
    }
  ]

  const achievements = [
    {
      title: "Top Canadian Coupon Influencer",
      year: "2023-2024",
      organization: "Canadian Savings Awards"
    },
    {
      title: "Most Trusted Deal Finder",
      year: "2023",
      organization: "Social Media Canada"
    },
    {
      title: "Consumer Advocate of the Year",
      year: "2022",
      organization: "Retail Council of Canada"
    }
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            As Seen{" "}
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              In Media
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trusted by major Canadian media outlets and leading retail brands
          </p>
        </motion.div>

        {/* Media Features */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Media Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaFeatures.map((media, index) => (
              <motion.div
                key={media.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-white border-2 border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{media.logo}</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{media.name}</h4>
                    <p className="text-gray-600 text-sm">{media.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Money Saving Programs */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Money Saving Programs and Apps</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {moneySavingPrograms.map((program, index) => (
              <motion.div
                key={program.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                      onClick={() => window.open(program.url, '_blank')}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{program.icon}</span>
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">{program.name}</h4>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${program.color}`}>
                        {program.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{program.description}</p>
                    <div className="flex items-center text-green-600 text-sm font-medium group-hover:text-green-700 transition-colors">
                      <span>Learn More</span>
                      <span className="ml-1 transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 border-2 border-purple-200"
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl mb-3">🏆</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{achievement.title}</h4>
                  <p className="text-purple-600 font-semibold mb-1">{achievement.year}</p>
                  <p className="text-gray-600 text-sm">{achievement.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}