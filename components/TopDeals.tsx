"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TopDeals() {
  const deals = [
    {
      title: "Grocery Deals",
      description: "Weekly roundup of the best grocery savings across Canada",
      savings: "Up to 70% off",
      category: "Food & Groceries",
      color: "from-green-400 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200"
    },
    {
      title: "Free Samples",
      description: "Daily freebies and sample offers from top Canadian brands",
      savings: "100% Free",
      category: "Freebies",
      color: "from-rose-400 to-rose-600",
      bgColor: "from-rose-50 to-rose-100",
      borderColor: "border-rose-200"
    },
    {
      title: "Online Deals",
      description: "Exclusive promo codes and flash sales from major retailers",
      savings: "Up to 80% off",
      category: "E-commerce",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200"
    },
    {
      title: "Cashback Offers",
      description: "Best cashback deals and reward program opportunities",
      savings: "Up to 15% back",
      category: "Rewards",
      color: "from-blue-400 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200"
    },
    {
      title: "Clearance Finds",
      description: "Seasonal clearance and end-of-line product discoveries",
      savings: "Up to 90% off",
      category: "Clearance",
      color: "from-amber-400 to-amber-600",
      bgColor: "from-amber-50 to-amber-100",
      borderColor: "border-amber-200"
    },
    {
      title: "Kids & Family",
      description: "Money-saving deals on everything for Canadian families",
      savings: "Family Focused",
      category: "Family",
      color: "from-pink-400 to-pink-600",
      bgColor: "from-pink-50 to-pink-100",
      borderColor: "border-pink-200"
    }
  ]

  return (
    <section id="deals" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Top{" "}
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Deals & Coupons
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the latest money-saving opportunities handpicked by Canada's deal-finding expert
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-gradient-to-br ${deal.bgColor} ${deal.borderColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${deal.color}`}>
                      {deal.category}
                    </span>
                    <span className="text-lg font-bold text-gray-700">{deal.savings}</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{deal.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {deal.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className={`w-full bg-gradient-to-r ${deal.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300`}
                  >
                    View Deals
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white px-8 py-4 text-lg font-bold rounded-2xl transform hover:scale-105 transition-all duration-300 shadow-xl">
            See All Deals →
          </Button>
        </motion.div>
      </div>
    </section>
  )
}