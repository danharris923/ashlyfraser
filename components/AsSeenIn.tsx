"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function AsSeenIn() {
  const mediaFeatures = [
    {
      name: "Global TV",
      description: "Featured expert on money-saving strategies for Canadian families",
      logo: "📺",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "CBC News",
      description: "Go-to source for consumer savings and deal-finding advice",
      logo: "📰",
      color: "from-red-400 to-red-600"
    },
    {
      name: "CTV Morning Live",
      description: "Regular guest sharing weekly deals and couponing tips",
      logo: "🎥", 
      color: "from-green-400 to-green-600"
    },
    {
      name: "BlogTO",
      description: "Toronto's trusted voice for local deals and savings opportunities",
      logo: "📱",
      color: "from-purple-400 to-purple-600"
    }
  ]

  const brandCollaborations = [
    {
      name: "Walmart Canada",
      type: "Partnership",
      description: "Exclusive deal curation and promotional campaigns"
    },
    {
      name: "Loblaws",
      type: "Collaboration", 
      description: "Weekly grocery deal spotlights and savings guides"
    },
    {
      name: "Shoppers Drug Mart",
      type: "Brand Ambassador",
      description: "Beauty and health product deal discovery"
    },
    {
      name: "Canadian Tire",
      type: "Partnership",
      description: "Seasonal promotion and clearance deal features"
    },
    {
      name: "Metro",
      type: "Collaboration",
      description: "Weekly flyer breakdowns and exclusive offers"
    },
    {
      name: "Costco Canada",
      type: "Content Creator",
      description: "Bulk buying guides and membership deal optimization"
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

        {/* Brand Collaborations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Brand Collaborations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {brandCollaborations.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-rose-50 to-pink-50 border-2 border-rose-200 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900">{brand.name}</h4>
                      <span className="px-3 py-1 rounded-full text-xs font-bold text-rose-600 bg-rose-100">
                        {brand.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{brand.description}</p>
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