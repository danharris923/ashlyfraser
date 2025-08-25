'use client'

import { useState } from 'react'
import { ArrowLeft, DollarSign, ExternalLink, Star, Users, Smartphone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

export default function CashbackAppsPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('all')

  const cashbackApps = [
    {
      name: "Rakuten Canada",
      description: "Get cash back at 3,500+ stores including Walmart, Best Buy, and Sephora",
      cashback: "Up to 10%",
      features: ["3,500+ Partner Stores", "$25 Minimum Payout", "Quarterly Payments", "Browser Extension"],
      category: "Online Shopping",
      rating: "4.8/5",
      users: "17M+",
      color: "from-purple-500 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      url: "https://www.rakuten.ca/"
    },
    {
      name: "Checkout 51",
      description: "Canada's original cash back app for groceries and everyday purchases",
      cashback: "Up to $5 per offer",
      features: ["Grocery Focus", "Weekly Offers", "No Minimum Payout", "Receipt Scanning"],
      category: "Grocery",
      rating: "4.6/5",
      users: "2M+",
      color: "from-green-500 to-green-700",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      url: "https://checkout51.com/"
    },
    {
      name: "Paymi",
      description: "Send money and earn rewards using just a phone number or email",
      cashback: "Various rewards",
      features: ["Interac e-Transfer", "Phone Number Sending", "Bank Integration", "Instant Transfers"],
      category: "Banking",
      rating: "4.5/5",
      users: "5M+",
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      url: "https://paymi.com/"
    },
    {
      name: "Caddle",
      description: "Earn points for shopping, surveys, and sharing purchase data",
      cashback: "Up to 20%",
      features: ["Receipt Scanning", "Surveys Available", "Purchase Data Rewards", "Multiple Redemption Options"],
      category: "Automatic",
      rating: "4.4/5",
      users: "1M+",
      color: "from-orange-500 to-orange-700",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      url: "https://caddle.ca/"
    },
    {
      name: "Drop",
      description: "Automatic cash back when you link your cards and shop at partner stores",
      cashback: "Up to 5%",
      features: ["Automatic Earnings", "Card Linking", "Partner Store Network", "Gift Card Rewards"],
      category: "Automatic",
      rating: "4.7/5",
      users: "3M+",
      color: "from-teal-500 to-teal-700",
      bgColor: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
      url: "https://earnwithdrop.com/"
    },
    {
      name: "Ampli",
      description: "Cash back rewards program from Canadian Tire for Triangle members",
      cashback: "Up to 10X CT Money",
      features: ["Triangle Integration", "Canadian Tire Family", "Bonus Offers", "Fuel Rewards"],
      category: "Retail",
      rating: "4.3/5",
      users: "800K+",
      color: "from-red-500 to-red-700",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      url: "https://www.canadiantire.ca/en/triangle.html"
    },
    {
      name: "Pogo",
      description: "Earn points automatically when you pay with linked cards",
      cashback: "Up to 2%",
      features: ["Automatic Point Earning", "Card Linking", "Local Business Focus", "Instant Rewards"],
      category: "Automatic",
      rating: "4.2/5",
      users: "500K+",
      color: "from-indigo-500 to-indigo-700",
      bgColor: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
      url: "https://pogorewards.com/"
    },
    {
      name: "Flipp",
      description: "Find deals and earn cash back by shopping weekly flyers",
      cashback: "Store-specific offers",
      features: ["Weekly Flyer Access", "Price Matching", "Deal Alerts", "Shopping Lists"],
      category: "Grocery",
      rating: "4.9/5",
      users: "6M+",
      color: "from-yellow-500 to-yellow-700",
      bgColor: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
      url: "https://flipp.com/"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Apps', count: cashbackApps.length },
    { id: 'online', label: 'Online Shopping', count: cashbackApps.filter(app => app.category === 'Online Shopping').length },
    { id: 'grocery', label: 'Grocery', count: cashbackApps.filter(app => app.category === 'Grocery').length },
    { id: 'automatic', label: 'Automatic', count: cashbackApps.filter(app => app.category === 'Automatic').length },
    { id: 'banking', label: 'Banking', count: cashbackApps.filter(app => app.category === 'Banking').length }
  ]

  const filteredApps = activeTab === 'all' ? cashbackApps : 
    activeTab === 'online' ? cashbackApps.filter(app => app.category === 'Online Shopping') :
    activeTab === 'grocery' ? cashbackApps.filter(app => app.category === 'Grocery') :
    activeTab === 'automatic' ? cashbackApps.filter(app => app.category === 'Automatic') :
    activeTab === 'banking' ? cashbackApps.filter(app => app.category === 'Banking') :
    cashbackApps

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-blue-200">
        <div className="flex items-center h-16 px-4 max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="mr-3 p-2 hover:bg-blue-100 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 text-blue-700" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-blue-800">Canadian Cashback Apps</h1>
            <p className="text-sm text-blue-600">Maximize your savings with these apps</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-8 max-w-7xl mx-auto">
        <div className="space-y-6 pt-6">
          
          {/* Hero Section */}
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Canadian Cashback Apps</h2>
                  <p className="text-blue-100">Earn money back on your everyday purchases</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{cashbackApps.length}</div>
                  <div className="text-sm text-blue-100">Top Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">20%</div>
                  <div className="text-sm text-blue-100">Max Cashback</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-sm text-blue-100">To Use</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === category.id
                    ? 'bg-blue-500 text-white shadow-lg'
                    : 'bg-white text-blue-700 hover:bg-blue-50 border border-blue-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredApps.map((app, index) => (
              <Card key={app.name} className={`bg-gradient-to-br ${app.bgColor} ${app.borderColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{app.name}</h3>
                        <Badge className={`bg-gradient-to-r ${app.color} text-white text-xs`}>
                          {app.category}
                        </Badge>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{app.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{app.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{app.users} users</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4 text-green-500" />
                        <span className="font-medium text-green-600">{app.cashback}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {app.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full bg-gradient-to-r ${app.color} hover:opacity-90 text-white font-semibold py-2.5 rounded-lg transition-all duration-300`}
                      onClick={() => window.open(app.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Download App
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips Section */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-blue-500" />
                Maximize Your Cashback
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-100 text-blue-800 mt-1">1</Badge>
                  <div className="text-sm text-gray-700">
                    <div className="font-medium mb-1">Stack multiple apps</div>
                    <div>Use Rakuten for online shopping and Checkout 51 for groceries</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-100 text-blue-800 mt-1">2</Badge>
                  <div className="text-sm text-gray-700">
                    <div className="font-medium mb-1">Link your credit cards</div>
                    <div>Automatic apps like Drop and Pogo work in the background</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-blue-100 text-blue-800 mt-1">3</Badge>
                  <div className="text-sm text-gray-700">
                    <div className="font-medium mb-1">Check weekly offers</div>
                    <div>Apps like Checkout 51 and Caddle refresh offers regularly</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Footer */}
          <div className="border-t border-blue-200 pt-6">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">💰 More Money-Saving Tips Coming Soon!</p>
              <p className="text-xs text-gray-500 mt-1">Follow Ashly for cashback strategies and app updates</p>
            </div>
            <div className="flex justify-center space-x-3">
              <Button
                size="sm"
                variant="outline"
                className="border-pink-300 text-pink-600 hover:bg-pink-50"
                onClick={() => window.open('https://instagram.com/ashly__savingsguruca', '_blank')}
              >
                <span className="text-xs">📸 Instagram</span>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50"
                onClick={() => window.open('https://www.facebook.com/ashly.fraser.96/', '_blank')}
              >
                <span className="text-xs">👍 Facebook</span>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-gray-700 text-gray-700 hover:bg-gray-50"
                onClick={() => window.open('https://tiktok.com/@savingsguru', '_blank')}
              >
                <span className="text-xs">🎵 TikTok</span>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-red-300 text-red-600 hover:bg-red-50"
                onClick={() => window.open('https://www.youtube.com/channel/UCbVX-yAa2etLXvkYGx1C_Dw', '_blank')}
              >
                <span className="text-xs">📺 YouTube</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}