'use client'

import { ArrowLeft, Download, Tag, Search, Clock, Target, AlertCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

export default function ClearanceSecretsPage() {
  const router = useRouter()

  const secrets = [
    {
      title: "End Cap Psychology",
      description: "Items placed at the end of aisles are often clearance - retailers use prime real estate to move inventory fast",
      tip: "Always check end caps first, especially in clothing and electronics sections"
    },
    {
      title: "The 70% Rule",
      description: "Most clearance follows a pattern: 25% → 50% → 70% → final clearance at 90%",
      tip: "Wait for 70% mark for best value vs availability balance"
    },
    {
      title: "Timing is Everything",
      description: "Best clearance times: Tuesday mornings (new markdowns), Thursday evenings (weekly prep)",
      tip: "Shop early morning Tuesday for freshest clearance selections"
    },
    {
      title: "Color Coding System",
      description: "Many stores use colored tags or stickers to indicate markdown dates and discount levels",
      tip: "Learn your store's color system - ask employees about their clearance schedule"
    }
  ]

  const storeSecrets = [
    {
      store: "Target",
      schedule: "Tuesday & Thursday",
      tip: "Look for items ending in .x4 or .x8 - these are clearance prices",
      bestSections: ["Clothing", "Home Decor", "Electronics"]
    },
    {
      store: "Walmart", 
      schedule: "Tuesday mornings",
      tip: "Clearance items often end in .00 or .03",
      bestSections: ["Groceries", "Seasonal", "Electronics"]
    },
    {
      store: "Hudson's Bay",
      schedule: "Wednesday & Saturday",
      tip: "Bay Days and seasonal transitions offer deepest clearance",
      bestSections: ["Fashion", "Home", "Beauty"]
    },
    {
      store: "Canadian Tire",
      schedule: "Thursday mornings",
      tip: "Triangle members get early access to clearance events",
      bestSections: ["Automotive", "Tools", "Seasonal"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-orange-200">
        <div className="flex items-center h-16 px-4 max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="mr-3 p-2 hover:bg-orange-100 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 text-orange-700" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-orange-800">Clearance Shopping Secrets</h1>
            <p className="text-sm text-orange-600">Insider tips for finding the deepest discounts</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-8 max-w-7xl mx-auto">
        <div className="space-y-6 pt-6">
          
          {/* Hero Section */}
          <Card className="bg-gradient-to-r from-orange-600 to-red-600 border-0 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Tag className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Clearance Shopping Secrets</h2>
                  <p className="text-orange-100">Insider tips on finding the deepest discounts on clearance items</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">90%</div>
                  <div className="text-sm text-orange-100">Max Discount</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-orange-100">Insider Tips</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">15K+</div>
                  <div className="text-sm text-orange-100">Downloads</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Secrets */}
          <Card className="border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Search className="w-5 h-5 text-orange-500" />
                The 4 Core Clearance Secrets
              </h3>
              
              <div className="space-y-4">
                {secrets.map((secret, index) => (
                  <div key={secret.title} className="border rounded-lg p-4 bg-gradient-to-r from-orange-50 to-red-50">
                    <div className="flex items-start gap-3">
                      <Badge className="bg-orange-100 text-orange-800 mt-1">#{index + 1}</Badge>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{secret.title}</h4>
                        <p className="text-gray-700 mb-3">{secret.description}</p>
                        <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                          <div className="font-medium text-yellow-800 text-sm mb-1">💡 Pro Tip</div>
                          <div className="text-xs text-gray-700">{secret.tip}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Store-Specific Secrets */}
          <Card className="border-orange-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-500" />
                Store-Specific Clearance Schedules
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {storeSecrets.map((store, index) => (
                  <div key={store.store} className="border rounded-lg p-4 bg-gradient-to-r from-red-50 to-pink-50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900">{store.store}</h4>
                      <Badge className="bg-gradient-to-r from-red-500 to-red-700 text-white">
                        {store.schedule}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="p-3 bg-white rounded border">
                        <div className="font-medium text-red-700 text-sm mb-1">🎯 Price Tip</div>
                        <div className="text-xs text-gray-700">{store.tip}</div>
                      </div>
                      
                      <div>
                        <div className="font-medium text-gray-800 text-sm mb-2">Best Sections:</div>
                        <div className="flex flex-wrap gap-1">
                          {store.bestSections.map((section, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 text-gray-700 rounded px-2 py-1">
                              {section}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Advanced Strategies */}
          <Card className="border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-500" />
                Advanced Clearance Strategies
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-purple-600 mb-2">🔄 The Rotation Method</h4>
                  <div className="text-sm text-gray-700">
                    Visit the same stores weekly to learn their clearance patterns. Most retailers follow predictable schedules.
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-blue-600 mb-2">📱 App Advantage</h4>
                  <div className="text-sm text-gray-700">
                    Many store apps show clearance items before they hit the floor. Download apps for your favorite retailers.
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-green-600 mb-2">🤝 Employee Intelligence</h4>
                  <div className="text-sm text-gray-700">
                    Build relationships with store employees. They often know when major clearance events are coming.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Warning Section */}
          <Card className="border-red-300 bg-red-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-red-700">
                <AlertCircle className="w-5 h-5" />
                Clearance Shopping Warnings
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">⚠️</span>
                  <div className="text-gray-700">
                    <strong>Check return policies:</strong> Many clearance items are final sale
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">⚠️</span>
                  <div className="text-gray-700">
                    <strong>Inspect carefully:</strong> Clearance items may have minor defects
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 mt-0.5">⚠️</span>
                  <div className="text-gray-700">
                    <strong>Don't overbuy:</strong> Just because it's cheap doesn't mean you need it
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download CTA */}
          <div className="space-y-3">
            <Button 
              className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white h-12 text-lg font-semibold"
              onClick={() => window.open('https://www.savingsguru.ca', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Complete Clearance Guide →
            </Button>
          </div>

          {/* Social Footer */}
          <div className="border-t border-orange-200 pt-6">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">🏷️ Updated with new store policies and insider tips!</p>
              <p className="text-xs text-gray-500 mt-1">Follow Ashly for clearance alerts and deal notifications</p>
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