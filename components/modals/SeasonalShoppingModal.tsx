'use client'

import { useEffect } from 'react'
import { ArrowLeft, Download, BookOpen, Calendar, TrendingDown, ShoppingBag } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface SeasonalShoppingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SeasonalShoppingModal({ isOpen, onClose }: SeasonalShoppingModalProps) {
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

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-amber-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-amber-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-amber-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-amber-800">Seasonal Shopping Calendar</h1>
              <p className="text-xs text-amber-600">Free Savings Guide</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-amber-600 to-orange-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Seasonal Shopping Calendar</h2>
                    <p className="text-amber-100">Month-by-month guide to the best times to buy everything</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">12 Months</div>
                    <div className="text-sm text-amber-100">Optimized</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Max</div>
                    <div className="text-sm text-amber-100">Savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Timing Matters */}
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-green-500" />
                  Why Timing Matters
                </h3>
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="font-medium text-green-800 mb-2">🎯 Retail Cycles are Predictable</div>
                  <div className="text-sm text-gray-700">Buy off-season and save big—retailers follow predictable inventory and promotional cycles that smart shoppers can leverage.</div>
                </div>
              </CardContent>
            </Card>

            {/* Seasonal Shopping Calendar Table */}
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-amber-500" />
                  When to Buy What
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-amber-50 border-b border-amber-200">
                        <th className="text-left py-3 px-4 font-semibold">Product Type</th>
                        <th className="text-left py-3 px-4 font-semibold">Best Time to Buy</th>
                        <th className="text-left py-3 px-4 font-semibold">Why It Works</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-amber-100">
                        <td className="py-3 px-4 font-medium">Clothing (all seasons)</td>
                        <td className="py-3 px-4 text-blue-600">End of season (Jan/Feb, Aug/Sep)</td>
                        <td className="py-3 px-4 text-gray-600">Stores clear inventory before new lines</td>
                      </tr>
                      <tr className="border-b border-amber-100 bg-amber-25">
                        <td className="py-3 px-4 font-medium">Linens & Towels</td>
                        <td className="py-3 px-4 text-blue-600">January ("White Sales"); July</td>
                        <td className="py-3 px-4 text-gray-600">Traditional markdown periods</td>
                      </tr>
                      <tr className="border-b border-amber-100">
                        <td className="py-3 px-4 font-medium">Electronics</td>
                        <td className="py-3 px-4 text-blue-600">Black Friday, Cyber Monday, Jan–Mar</td>
                        <td className="py-3 px-4 text-gray-600">New models drop in spring—stores discount older stock</td>
                      </tr>
                      <tr className="border-b border-amber-100 bg-amber-25">
                        <td className="py-3 px-4 font-medium">Patio & Garden Equipment</td>
                        <td className="py-3 px-4 text-blue-600">Late summer (Aug–Oct)</td>
                        <td className="py-3 px-4 text-gray-600">End-of-season clearance</td>
                      </tr>
                      <tr className="border-b border-amber-100">
                        <td className="py-3 px-4 font-medium">Appliances</td>
                        <td className="py-3 px-4 text-blue-600">Pre-Labor Day; Black Friday</td>
                        <td className="py-3 px-4 text-gray-600">Aligned with promotional events and inventory turns</td>
                      </tr>
                      <tr className="border-b border-amber-100 bg-amber-25">
                        <td className="py-3 px-4 font-medium">Holiday Decor/Toys</td>
                        <td className="py-3 px-4 text-blue-600">Post-Christmas</td>
                        <td className="py-3 px-4 text-gray-600">Heavily discounted to clear space</td>
                      </tr>
                      <tr className="bg-red-50 border-b border-red-200">
                        <td className="py-3 px-4 font-medium text-red-800">Boxing Day (Canada)</td>
                        <td className="py-3 px-4 text-red-600 font-bold">Dec. 26–31</td>
                        <td className="py-3 px-4 text-red-700">Major clearance event with steep drops</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Monthly Breakdown */}
            <Card className="border-amber-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Monthly Shopping Strategy</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="font-bold text-blue-800 mb-2">❄️ Winter (Jan-Mar)</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Winter clothing clearance</li>
                      <li>• White sales (linens)</li>
                      <li>• Electronics post-holidays</li>
                      <li>• Fitness equipment</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="font-bold text-green-800 mb-2">🌸 Spring (Apr-Jun)</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Spring cleaning supplies</li>
                      <li>• Garden equipment starts</li>
                      <li>• Tax season electronics</li>
                      <li>• Vacation planning deals</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="font-bold text-orange-800 mb-2">☀️ Summer (Jul-Sep)</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Summer clothing clearance</li>
                      <li>• Back-to-school supplies</li>
                      <li>• Patio furniture end-season</li>
                      <li>• Air conditioner deals</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="font-bold text-yellow-800 mb-2">🍂 Fall (Oct-Dec)</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Black Friday/Cyber Monday</li>
                      <li>• Winter prep items</li>
                      <li>• Holiday shopping</li>
                      <li>• Year-end clearances</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="font-bold text-red-800 mb-2">🇨🇦 Boxing Day Special</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Electronics mega-sales</li>
                      <li>• Clothing up to 70% off</li>
                      <li>• Home goods clearance</li>
                      <li>• Next year planning</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="font-bold text-purple-800 mb-2">📅 Year-Round Tips</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Track price histories</li>
                      <li>• Set sale alerts</li>
                      <li>• Plan purchases ahead</li>
                      <li>• Stack with coupons</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Steps */}
            <Card className="border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Action Steps</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-amber-100 text-amber-800 mt-1">1</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Grab your 2025 Printable Shopper Calendar</div>
                      <div>Download the complete calendar at SavingsGuru.ca</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-amber-100 text-amber-800 mt-1">2</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Set up sale alerts</div>
                      <div>Let Ashly notify you when seasonal deals go live</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-amber-100 text-amber-800 mt-1">3</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Plan major purchases</div>
                      <div>Schedule big buys around optimal timing windows</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-amber-100 text-amber-800 mt-1">4</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Track price histories</div>
                      <div>Use tools to ensure you're getting true seasonal lows</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download CTA */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.savingsguru.ca', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Read Now →
              </Button>
            </div>

            {/* Social Footer */}
            <div className="border-t border-amber-200 pt-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">📅 More Seasonal Shopping Guides Coming Soon!</p>
                <p className="text-xs text-gray-500 mt-1">Follow Ashly for timely shopping alerts and deals</p>
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
                <Button
                  size="sm"
                  variant="outline"
                  className="border-gray-600 text-gray-600 hover:bg-gray-50"
                  onClick={() => window.open('https://www.threads.com/@ashly_savingsguruca', '_blank')}
                >
                  <span className="text-xs">🧵 Threads</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}