"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function WhatsNew() {
  const router = useRouter()

  const blogPosts = [
    {
      title: "Ultimate Canadian Grocery Savings Guide 2024",
      description: "Complete strategy for maximizing your grocery budget across all major Canadian chains",
      category: "Free Guide",
      date: "Dec 2024",
      readTime: "12 min read",
      color: "from-green-400 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      featured: true
    },
    {
      title: "Boxing Day Deals Preview: What to Expect",
      description: "Insider predictions and early access to the biggest Boxing Day sales across Canada",
      category: "Blog Post",
      date: "Dec 2024",
      readTime: "8 min read",
      color: "from-red-400 to-red-600",
      bgColor: "from-red-50 to-red-100", 
      borderColor: "border-red-200",
      featured: false
    },
    {
      title: "Holiday Shopping Cashback Stack Guide",
      description: "How to combine credit cards, apps, and loyalty programs for maximum holiday savings",
      category: "Tutorial",
      date: "Nov 2024",
      readTime: "15 min read",
      color: "from-purple-400 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      featured: false
    }
  ]

  const freeGuides = [
    {
      title: "Coupon Stacking Mastery",
      description: "Learn the legal art of combining manufacturer and store coupons for maximum savings",
      downloads: "25,000+ downloads",
      icon: "🎯"
    },
    {
      title: "Cashback Apps Comparison 2024",
      description: "Complete breakdown of every major cashback app available to Canadians",
      downloads: "18,000+ downloads", 
      icon: "💰"
    },
    {
      title: "Seasonal Shopping Calendar",
      description: "Month-by-month guide to the best times to buy everything throughout the year",
      downloads: "32,000+ downloads",
      icon: "📅"
    },
    {
      title: "Clearance Shopping Secrets",
      description: "Insider tips on finding the deepest discounts on clearance items",
      downloads: "15,000+ downloads",
      icon: "🏷️"
    }
  ]

  const masterResellRights = {
    title: "Digital Products with Master Resell Rights",
    description: "Explore Ashly's collection of digital products that you can purchase and resell for 100% profit",
    products: [
      "Complete Couponing Course Bundle",
      "Deal Hunter's Toolkit",
      "Social Media Templates for Savers",
      "Budget Planning Spreadsheet Collection"
    ]
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            What's{" "}
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              New
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Latest blog updates, free guides, and resources to supercharge your savings
          </p>
        </motion.div>

        {/* Latest Blog Posts */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Latest Blog Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={post.featured ? "md:col-span-2" : ""}
              >
                <Card className={`h-full bg-gradient-to-br ${post.bgColor} ${post.borderColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${post.color}`}>
                        {post.category}
                      </span>
                      {post.featured && (
                        <span className="px-2 py-1 rounded-full text-xs font-bold text-amber-800 bg-amber-200">
                          Featured
                        </span>
                      )}
                    </div>
                    <CardTitle className={`${post.featured ? 'text-2xl' : 'text-xl'} font-bold text-gray-900 leading-tight`}>
                      {post.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 text-base">
                      {post.description}
                    </CardDescription>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-2">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Button 
                      className={`w-full bg-gradient-to-r ${post.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300`}
                    >
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Free Guides */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-gray-900">Free Savings Guides</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {freeGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{guide.icon}</div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{guide.title}</h4>
                    <p className="text-gray-600 text-sm mb-3">{guide.description}</p>
                    <p className="text-blue-600 font-semibold text-sm mb-4">{guide.downloads}</p>
                    <Button 
                      className="bg-gradient-to-r from-blue-500 to-blue-700 hover:opacity-90 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 text-sm"
                      onClick={() => {
                        if (guide.title === "Coupon Stacking Mastery") router.push('/deals/coupon-stacking')
                        else if (guide.title === "Cashback Apps Comparison 2024") router.push('/deals/cashback-comparison')
                        else if (guide.title === "Seasonal Shopping Calendar") router.push('/deals/seasonal-shopping')
                        else if (guide.title === "Clearance Shopping Secrets") router.push('/deals/clearance-secrets')
                      }}
                    >
                      See Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Master Resell Rights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-3xl p-8 md:p-12 border-2 border-amber-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              💼 Master Resell Rights Products
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              {masterResellRights.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {masterResellRights.products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 bg-white rounded-lg p-4"
                >
                  <span className="text-amber-500">✨</span>
                  <span className="text-lg text-gray-700">{product}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center md:text-right">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-2">100% Profit Potential</h4>
                <p className="text-gray-600 mb-4">Buy once, resell forever and keep all profits</p>
                <Button className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300">
                  Explore MRR Products
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  )
}