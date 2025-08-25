'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, DollarSign, ExternalLink, Star, Users, Smartphone } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface CashbackAppsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CashbackAppsModal({ isOpen, onClose }: CashbackAppsModalProps) {
  const [activeTab, setActiveTab] = useState('all')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  const cashbackApps = [
    {
      name: "Rakuten Canada",
      description: "Canada's largest cashback platform with over 750 online retailers and up to 30% cashback",
      features: ["750+ Retailers", "Up to 30% Cashback", "PayPal Payouts", "$5 Minimum"],
      category: "Online Shopping",
      rating: "4.8/5",
      users: "12M+",
      maxCashback: "30%",
      color: "from-purple-500 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      appStore: "https://apps.apple.com/ca/app/rakuten/id1451893560",
      playStore: "https://play.google.com/store/apps/details?id=com.ebates.android"
    },
    {
      name: "Great Canadian Rebates (GCR)",
      description: "Long-standing Canadian cashback site specializing in travel, credit cards, and higher rates",
      features: ["Travel Focus", "Credit Card Rebates", "Higher Rates", "Gift Cards"],
      category: "Travel & Finance",
      rating: "4.7/5",
      users: "2M+",
      maxCashback: "15%",
      color: "from-red-500 to-red-700",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      appStore: "https://greatcanadianrebates.ca/mobile",
      playStore: "https://greatcanadianrebates.ca/mobile"
    },
    {
      name: "Checkout 51",
      description: "Grocery-focused cashback app where you upload receipts to earn cashback on everyday purchases",
      features: ["Grocery Focus", "Receipt Scanning", "Weekly Offers", "$20 Minimum"],
      category: "Grocery",
      rating: "4.5/5",
      users: "5M+",
      maxCashback: "$5/item",
      color: "from-green-500 to-green-700",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      appStore: "https://apps.apple.com/ca/app/checkout-51/id580063102",
      playStore: "https://play.google.com/store/apps/details?id=checkout51.checkout51"
    },
    {
      name: "Drop",
      description: "Automatic cashback app that links to your cards and earns points at partner retailers",
      features: ["Auto-Link Cards", "Points System", "Partner Retailers", "No Effort Required"],
      category: "Automatic",
      rating: "4.4/5",
      users: "3M+",
      maxCashback: "5%",
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      appStore: "https://apps.apple.com/ca/app/drop-cashback-rewards-app/id1090987006",
      playStore: "https://play.google.com/store/apps/details?id=com.earnwithdrop.drop"
    },
    {
      name: "Caddle",
      description: "Multi-feature app offering receipt scanning, surveys, and location-based rewards",
      features: ["Receipt Scanning", "Paid Surveys", "Location Rewards", "Multiple Earning Ways"],
      category: "Multi-Feature",
      rating: "4.3/5",
      users: "1M+",
      maxCashback: "$10/week",
      color: "from-orange-500 to-orange-700",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      appStore: "https://apps.apple.com/ca/app/caddle/id1089842551",
      playStore: "https://play.google.com/store/apps/details?id=com.caddle.caddleapp"
    },
    {
      name: "Ampli",
      description: "Location-based cashback app that automatically rewards you for visiting partner stores",
      features: ["Location-Based", "Auto Check-Ins", "Partner Stores", "Passive Earning"],
      category: "Location",
      rating: "4.2/5",
      users: "500K+",
      maxCashback: "$50/month",
      color: "from-teal-500 to-teal-700",
      bgColor: "from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
      appStore: "https://apps.apple.com/ca/app/ampli/id1234567890",
      playStore: "https://play.google.com/store/apps/details?id=com.ampli.app"
    },
    {
      name: "Paymi",
      description: "Card-linking cashback service that automatically earns rewards when shopping at partners",
      features: ["Card Linking", "Automatic Earning", "No Apps Needed", "Bank Integration"],
      category: "Banking",
      rating: "4.6/5",
      users: "2M+",
      maxCashback: "5%",
      color: "from-indigo-500 to-indigo-700",
      bgColor: "from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
      appStore: "https://paymi.com/get-started",
      playStore: "https://paymi.com/get-started"
    },
    {
      name: "KOHO",
      description: "Banking app with built-in cashback features offering up to 2% on purchases plus savings",
      features: ["Banking + Cashback", "Up to 2% Back", "Savings Account", "Budgeting Tools"],
      category: "Banking",
      rating: "4.1/5",
      users: "1M+",
      maxCashback: "2%",
      color: "from-emerald-500 to-emerald-700",
      bgColor: "from-emerald-50 to-emerald-100",
      borderColor: "border-emerald-200",
      appStore: "https://apps.apple.com/ca/app/koho/id1110855061",
      playStore: "https://play.google.com/store/apps/details?id=com.koho.bank"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Apps', count: cashbackApps.length },
    { id: 'online', label: 'Online Shopping', count: cashbackApps.filter(a => a.category === 'Online Shopping').length },
    { id: 'grocery', label: 'Grocery', count: cashbackApps.filter(a => a.category === 'Grocery').length },
    { id: 'banking', label: 'Banking', count: cashbackApps.filter(a => a.category === 'Banking').length },
    { id: 'automatic', label: 'Automatic', count: cashbackApps.filter(a => a.category === 'Automatic' || a.category === 'Location').length }
  ]

  const filteredApps = activeTab === 'all' ? cashbackApps : 
    activeTab === 'online' ? cashbackApps.filter(a => a.category === 'Online Shopping') :
    activeTab === 'grocery' ? cashbackApps.filter(a => a.category === 'Grocery') :
    activeTab === 'banking' ? cashbackApps.filter(a => a.category === 'Banking') :
    activeTab === 'automatic' ? cashbackApps.filter(a => ['Automatic', 'Location'].includes(a.category)) :
    cashbackApps

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-green-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-green-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-green-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-green-800">Cashback Apps Canada</h1>
              <p className="text-xs text-green-600">Best Canadian Cashback Apps</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Canadian Cashback Apps</h2>
                    <p className="text-green-100">Earn money back on every purchase</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{cashbackApps.length}</div>
                    <div className="text-sm text-green-100">Top Apps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">30%</div>
                    <div className="text-sm text-green-100">Max Cashback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Free</div>
                    <div className="text-sm text-green-100">To Use</div>
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
                      ? 'bg-green-500 text-white shadow-lg'
                      : 'bg-white text-green-700 hover:bg-green-50 border border-green-200'
                  }`}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>

            {/* Cashback Apps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredApps.map((app, index) => (
                <Card key={app.name} className={`bg-gradient-to-br ${app.bgColor} ${app.borderColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-bold text-gray-900">{app.name}</h3>
                          <Badge className={`bg-gradient-to-r ${app.color} text-white text-xs`}>
                            {app.maxCashback}
                          </Badge>
                        </div>
                        <p className="text-gray-700 text-sm mb-3">{app.description}</p>
                        <Badge variant="outline" className="text-xs mb-3">
                          {app.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{app.rating}</span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-600">
                          <Users className="w-4 h-4" />
                          <span>{app.users} users</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {app.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex gap-2 pt-2">
                        <Button 
                          className={`flex-1 bg-gradient-to-r ${app.color} hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-300 text-sm`}
                          onClick={() => window.open(app.appStore, '_blank')}
                        >
                          <Smartphone className="w-4 h-4 mr-1" />
                          iOS
                        </Button>
                        <Button 
                          className={`flex-1 bg-gradient-to-r ${app.color} hover:opacity-90 text-white font-semibold py-2 rounded-lg transition-all duration-300 text-sm`}
                          onClick={() => window.open(app.playStore, '_blank')}
                        >
                          <Smartphone className="w-4 h-4 mr-1" />
                          Android
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tips Section */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  Maximize Your Cashback
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800 mt-1">1</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Stack multiple apps</div>
                      <div>Use different apps for different purchase types to maximize earnings</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800 mt-1">2</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Check rates before shopping</div>
                      <div>Compare cashback rates across apps before making purchases</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800 mt-1">3</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Follow Ashly for bonus offers</div>
                      <div>Get alerts for limited-time increased cashback rates</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Footer */}
            <div className="border-t border-green-200 pt-6 pb-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">💰 More Cashback Strategies Coming Soon!</p>
                <p className="text-xs text-gray-500 mt-1">Follow Ashly for the latest app reviews and earning tips</p>
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
    </div>
  )
}