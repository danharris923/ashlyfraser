'use client'

import { useEffect, useState } from 'react'
import { X, BookOpen, CheckCircle, Star, Target, Users, TrendingUp, Lightbulb } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface CouponGuideModalProps {
  isOpen: boolean
  onClose: () => void
}

const guideSteps = [
  {
    title: 'Getting Started',
    icon: BookOpen,
    color: 'from-blue-400 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100',
    content: [
      'Collect store flyers weekly - they\'re your roadmap to savings',
      'Download store apps for digital coupons and exclusive deals',
      'Sign up for loyalty programs at your favorite stores',
      'Create a coupon organization system (binder or folder)',
      'Set aside time weekly for coupon planning and matching'
    ]
  },
  {
    title: 'Finding Coupons',
    icon: Target,
    color: 'from-green-400 to-green-600',
    bgColor: 'from-green-50 to-green-100',
    content: [
      'Check newspapers (especially Sunday editions)',
      'Visit manufacturer websites and social media pages',
      'Use coupon aggregator sites like Save.ca and WebSaver',
      'Sign up for company newsletters and mailing lists',
      'Ask friends and family to share coupons they won\'t use'
    ]
  },
  {
    title: 'Strategic Shopping',
    icon: TrendingUp,
    color: 'from-purple-400 to-purple-600',
    bgColor: 'from-purple-50 to-purple-100',
    content: [
      'Match coupons with store sales for maximum savings',
      'Shop at stores that double coupon values',
      'Time your shopping trips around sale cycles',
      'Buy in bulk when there\'s a great deal (if you have storage)',
      'Don\'t buy something just because you have a coupon'
    ]
  },
  {
    title: 'Advanced Tips',
    icon: Star,
    color: 'from-amber-400 to-amber-600',
    bgColor: 'from-amber-50 to-amber-100',
    content: [
      'Stack manufacturer coupons with store coupons',
      'Use cashback apps alongside coupons for double savings',
      'Follow the 12-week sale cycle for non-perishable items',
      'Price match policies can be combined with coupons',
      'Keep track of regular prices to recognize true deals'
    ]
  }
]

const couponTypes = [
  {
    type: 'Manufacturer Coupons',
    description: 'Issued by product manufacturers, accepted at most stores',
    examples: '$1.00 off Tide Detergent, $0.75 off Kellogg\'s Cereal',
    tips: 'Can often be combined with store coupons for bigger savings'
  },
  {
    type: 'Store Coupons',
    description: 'Issued by specific retailers, only valid at that store',
    examples: 'Loblaws $2 off $10 purchase, Metro Buy 2 Get 1 Free',
    tips: 'Check store flyers and apps weekly for new offers'
  },
  {
    type: 'Digital Coupons',
    description: 'Load to loyalty card or app, automatically apply at checkout',
    examples: 'PC Optimum offers, Sobeys Scene+ deals',
    tips: 'Load all applicable offers before shopping, they expire'
  },
  {
    type: 'Cashback Offers',
    description: 'Get money back after purchase through apps or programs',
    examples: 'Checkout 51, Caddle, Rakuten cashback',
    tips: 'Stack with coupons and store sales for maximum savings'
  }
]

const budgetingTips = [
  {
    tip: 'Set a Realistic Budget',
    description: 'Determine how much you can spend on groceries and stick to it. Factor in household size and dietary needs.'
  },
  {
    tip: 'Plan Your Meals',
    description: 'Create weekly meal plans based on sale items and available coupons to reduce impulse purchases.'
  },
  {
    tip: 'Track Your Savings',
    description: 'Keep receipts and calculate how much you saved to stay motivated and refine your strategy.'
  },
  {
    tip: 'Build a Stockpile Wisely',
    description: 'Buy extra when items are at their lowest price, but only buy what you\'ll use before expiration.'
  },
  {
    tip: 'Compare Unit Prices',
    description: 'Don\'t assume larger sizes are cheaper. Check the unit price to ensure you\'re getting the best deal.'
  }
]

export default function CouponGuideModal({ isOpen, onClose }: CouponGuideModalProps) {
  const [activeTab, setActiveTab] = useState('steps')

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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="fixed inset-4 bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-rose-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                📚 Canadian Coupon Guide
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-gradient-to-r from-rose-500 to-pink-500 text-white border-0 px-4 py-2">
                Beginner Friendly
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 w-10 h-10 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 h-[calc(100vh-200px)] overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-700 font-medium">
                Your complete guide to couponing in Canada
              </p>
              <p className="text-gray-600 mt-2">
                Learn the strategies that Canadian families use to save hundreds every month
              </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/50 backdrop-blur-sm">
                <TabsTrigger value="steps" className="data-[state=active]:bg-rose-100">Getting Started</TabsTrigger>
                <TabsTrigger value="types" className="data-[state=active]:bg-rose-100">Coupon Types</TabsTrigger>
                <TabsTrigger value="budgeting" className="data-[state=active]:bg-rose-100">Budgeting</TabsTrigger>
                <TabsTrigger value="tips" className="data-[state=active]:bg-rose-100">Pro Tips</TabsTrigger>
              </TabsList>

              <TabsContent value="steps" className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {guideSteps.map((step, index) => {
                    const IconComponent = step.icon
                    return (
                      <Card 
                        key={step.title}
                        className={`group hover:shadow-xl transition-all duration-500 border-2 bg-gradient-to-br ${step.bgColor} border-rose-200 hover:border-rose-400 overflow-hidden`}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-6">
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${step.color}`}>
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <Badge className="mb-2 bg-rose-100 text-rose-700">Step {index + 1}</Badge>
                              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                            </div>
                          </div>
                          
                          <ul className="space-y-3">
                            {step.content.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="types" className="space-y-6">
                {couponTypes.map((coupon, index) => (
                  <Card key={coupon.type} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{coupon.type}</h3>
                          <p className="text-gray-700 mb-3">{coupon.description}</p>
                          <div className="mb-3">
                            <span className="font-semibold text-gray-800">Examples: </span>
                            <span className="text-gray-600">{coupon.examples}</span>
                          </div>
                          <div className="p-3 bg-rose-50 rounded-lg">
                            <span className="font-semibold text-rose-800">💡 Tip: </span>
                            <span className="text-rose-700">{coupon.tips}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="budgeting" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {budgetingTips.map((budget, index) => (
                    <Card key={budget.tip} className="hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{budget.tip}</h3>
                            <p className="text-gray-700">{budget.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Card className="bg-gradient-to-r from-green-100 to-emerald-100 border-2 border-green-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Users className="w-6 h-6 text-green-600" />
                      Average Canadian Savings
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                      <div className="p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-green-600">$150-300</div>
                        <div className="text-gray-600">Monthly Grocery Savings</div>
                      </div>
                      <div className="p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-green-600">20-40%</div>
                        <div className="text-gray-600">Average Discount</div>
                      </div>
                      <div className="p-4 bg-white rounded-lg">
                        <div className="text-2xl font-bold text-green-600">$1,800+</div>
                        <div className="text-gray-600">Annual Savings</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tips" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-yellow-100 to-amber-100 border-2 border-yellow-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Lightbulb className="w-6 h-6 text-yellow-600" />
                        Weekly Routine
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Sunday: Plan meals and check flyers</li>
                        <li>• Monday: Load digital coupons</li>
                        <li>• Tuesday: Grocery shopping day</li>
                        <li>• Wednesday: Stock organization</li>
                        <li>• Thursday: Mid-week deals check</li>
                        <li>• Friday: Weekend prep</li>
                        <li>• Saturday: Review savings</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-blue-200">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        <Target className="w-6 h-6 text-blue-600" />
                        Best Store Policies
                      </h3>
                      <ul className="space-y-2 text-gray-700">
                        <li>• <strong>Loblaws:</strong> Price match + PC Optimum</li>
                        <li>• <strong>Metro:</strong> Double coupons up to $1</li>
                        <li>• <strong>Sobeys:</strong> Scene+ stacking</li>
                        <li>• <strong>No Frills:</strong> Low prices + PC points</li>
                        <li>• <strong>Walmart:</strong> Price match guarantee</li>
                        <li>• <strong>Shoppers:</strong> 20x points events</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      🎯 Canadian Couponing Success Formula
                    </h3>
                    <div className="text-center text-lg text-gray-700 leading-relaxed">
                      <div className="bg-white p-4 rounded-lg inline-block">
                        <strong>Store Sale</strong> + <strong>Manufacturer Coupon</strong> + <strong>Store Coupon</strong> + <strong>Cashback App</strong> = <span className="text-green-600 font-bold">Maximum Savings!</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Footer CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-rose-100 to-pink-100 rounded-2xl border-2 border-rose-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                🚀 Ready to Start Saving?
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Join thousands of Canadians who follow Ashly's money-saving strategies
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-6 py-3 rounded-xl"
                  onClick={() => window.open('https://instagram.com/ashly__savingsguruca', '_blank')}
                >
                  Daily Tips on Instagram
                </Button>
                <Button 
                  className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-bold px-6 py-3 rounded-xl"
                  onClick={() => window.open('https://tiktok.com/@savingsguru', '_blank')}
                >
                  Video Guides on TikTok
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}