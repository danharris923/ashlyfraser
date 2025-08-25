'use client'

import { ArrowLeft, Download, BookOpen, DollarSign, Smartphone, CreditCard, Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

export default function CashbackComparisonPage() {
  const router = useRouter()

  const cashbackApps = [
    {
      name: "Rakuten Canada",
      rating: "4.8/5",
      strengths: ["Highest rates", "3,500+ stores", "Browser extension"],
      weaknesses: ["$25 minimum", "Quarterly payments"],
      bestFor: "Online shopping",
      score: 95
    },
    {
      name: "Checkout 51",
      rating: "4.6/5", 
      strengths: ["No minimum payout", "Grocery focus", "Receipt scanning"],
      weaknesses: ["Limited store selection", "Lower rates"],
      bestFor: "Groceries",
      score: 88
    },
    {
      name: "Drop",
      rating: "4.7/5",
      strengths: ["Automatic earnings", "Card linking", "Gift cards"],
      weaknesses: ["Limited categories", "Lower rates"],
      bestFor: "Passive earning",
      score: 85
    },
    {
      name: "Caddle",
      rating: "4.4/5",
      strengths: ["Surveys available", "Data sharing rewards", "Multiple redemption"],
      weaknesses: ["Privacy concerns", "Variable offers"],
      bestFor: "Data monetization",
      score: 78
    }
  ]

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
            <h1 className="text-xl font-bold text-blue-800">Cashback Apps Comparison 2024</h1>
            <p className="text-sm text-blue-600">Complete breakdown of Canadian cashback apps</p>
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
                  <h2 className="text-2xl font-bold">Cashback Apps Comparison 2024</h2>
                  <p className="text-blue-100">Complete breakdown of every major cashback app available to Canadians</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">8</div>
                  <div className="text-sm text-blue-100">Apps Compared</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">20%</div>
                  <div className="text-sm text-blue-100">Max Cashback</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">18K+</div>
                  <div className="text-sm text-blue-100">Downloads</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Comparison Matrix */}
          <Card className="border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-green-500" />
                App Comparison Matrix
              </h3>
              
              <div className="space-y-4">
                {cashbackApps.map((app, index) => (
                  <div key={app.name} className="border rounded-lg p-4 bg-gradient-to-r from-gray-50 to-blue-50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-blue-100 text-blue-800 text-lg px-3 py-1">#{index + 1}</Badge>
                        <h4 className="text-lg font-bold text-gray-900">{app.name}</h4>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-medium">{app.rating}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{app.score}</div>
                        <div className="text-xs text-gray-600">Overall Score</div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-green-700 mb-1">✅ Strengths</div>
                        <ul className="space-y-1">
                          {app.strengths.map((strength, idx) => (
                            <li key={idx} className="text-gray-700">• {strength}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="font-medium text-red-700 mb-1">⚠️ Weaknesses</div>
                        <ul className="space-y-1">
                          {app.weaknesses.map((weakness, idx) => (
                            <li key={idx} className="text-gray-700">• {weakness}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div className="font-medium text-blue-700 mb-1">🎯 Best For</div>
                        <div className="text-gray-700">{app.bestFor}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stacking Strategy */}
          <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-purple-500" />
                Optimal Stacking Strategy
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">🥇 The Ultimate Stack</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <div>1. <strong>Rakuten</strong> for online shopping (up to 10%)</div>
                    <div>2. <strong>Checkout 51</strong> for groceries (receipt scanning)</div>
                    <div>3. <strong>Drop</strong> for automatic passive earning</div>
                    <div>4. <strong>Credit card rewards</strong> on top of everything</div>
                  </div>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">💡 Pro Tip</h4>
                  <div className="text-sm text-gray-700">
                    Never choose just one app! Use multiple apps for different categories to maximize your earning potential. 
                    A $100 purchase could earn you $15+ with the right combination.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download CTA */}
          <div className="space-y-3">
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 text-lg font-semibold"
              onClick={() => window.open('https://www.savingsguru.ca', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Complete Comparison Guide →
            </Button>
          </div>

          {/* Social Footer */}
          <div className="border-t border-blue-200 pt-6">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">💰 Updated monthly with the latest rates and features!</p>
              <p className="text-xs text-gray-500 mt-1">Follow Ashly for cashback app updates and new opportunities</p>
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