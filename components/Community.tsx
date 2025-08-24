"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Community() {
  const socialPlatforms = [
    {
      name: "Facebook",
      handle: "@SavingsGuru.ca",
      followers: "60K+",
      description: "Daily deals, freebies, and money-saving tips for Canadian families",
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      url: "https://www.facebook.com/ashly.fraser.96"
    },
    {
      name: "Instagram", 
      handle: "@ashly_savingsguruca",
      followers: "250K+",
      description: "Behind-the-scenes deal hunting and exclusive Instagram-only offers",
      color: "from-pink-500 to-purple-600",
      bgColor: "from-pink-50 to-purple-100",
      borderColor: "border-pink-200",
      url: "https://www.instagram.com/ashly_savingsguruca"
    },
    {
      name: "TikTok",
      handle: "@ashly_savingsguru",
      followers: "180K+", 
      description: "Quick deal alerts and shopping hacks that go viral",
      color: "from-gray-800 to-black",
      bgColor: "from-gray-50 to-gray-100",
      borderColor: "border-gray-200",
      url: "https://www.tiktok.com/@ashly_savingsguru"
    },
    {
      name: "YouTube",
      handle: "@Ashly_Savingsguru",
      followers: "25K+",
      description: "In-depth tutorials on couponing strategies and deal walkthroughs",
      color: "from-red-500 to-red-700",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      url: "https://www.youtube.com/@Ashly_Savingsguru"
    }
  ]

  const newsletterBenefits = [
    "🎯 Exclusive deals not shared anywhere else",
    "📧 Weekly newsletter with the best Canadian savings",
    "⚡ Flash deal alerts sent directly to your inbox",
    "🔥 First access to limited-time offers",
    "📱 Mobile-friendly deal notifications",
    "💰 Monthly savings challenges and rewards"
  ]

  return (
    <section id="community" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            Join the{" "}
            <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Community
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Connect with thousands of savvy shoppers across Canada and never miss a deal again
          </p>
        </motion.div>

        {/* Social Media Platforms */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {socialPlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full bg-gradient-to-br ${platform.bgColor} ${platform.borderColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-bold text-gray-900">{platform.name}</CardTitle>
                    <span className="text-lg font-bold text-gray-700">{platform.followers}</span>
                  </div>
                  <CardDescription className="text-gray-600 font-medium">
                    {platform.handle}
                  </CardDescription>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {platform.description}
                  </p>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    className={`w-full bg-gradient-to-r ${platform.color} hover:opacity-90 text-white font-semibold py-3 rounded-xl transition-all duration-300`}
                    onClick={() => window.open(platform.url, '_blank')}
                  >
                    Follow on {platform.name}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 rounded-3xl p-8 md:p-12 border-2 border-rose-200"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              📧 VIP Newsletter
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Get exclusive deals delivered straight to your inbox
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {newsletterBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <span className="text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center md:text-left">
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Join 50,000+ Deal Hunters</h4>
                <div className="flex flex-col space-y-3">
                  <input 
                    type="email" 
                    placeholder="Enter your email address"
                    className="px-4 py-3 rounded-xl border-2 border-gray-300 focus:border-rose-500 focus:outline-none text-gray-900"
                  />
                  <Button className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 hover:from-rose-600 hover:via-pink-600 hover:to-purple-600 text-white font-bold py-3 rounded-xl transition-all duration-300">
                    Get Exclusive Deals
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-3">No spam, unsubscribe anytime</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}