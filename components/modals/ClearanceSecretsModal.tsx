'use client'

import { useEffect } from 'react'
import { ArrowLeft, Download, BookOpen, Eye, Target, Zap, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ClearanceSecretsModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ClearanceSecretsModal({ isOpen, onClose }: ClearanceSecretsModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-red-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-red-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-red-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-red-800">Clearance Shopping Secrets</h1>
              <p className="text-xs text-red-600">Free Savings Guide</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-red-600 to-orange-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Eye className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Clearance Shopping Secrets</h2>
                    <p className="text-red-100">Insider tips on finding the deepest discounts in Canada</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Up to 90%</div>
                    <div className="text-sm text-red-100">Off Regular Price</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Insider</div>
                    <div className="text-sm text-red-100">Tactics</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How Clearances Work */}
            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-red-500" />
                  How Clearances Work in Canada
                </h3>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="font-medium text-red-800 mb-2">🎯 Regional & Timing Based</div>
                  <div className="text-sm text-gray-700">Stores regularly mark down end-of-season or slow-moving items regionally—being early and aware is key to finding the deepest discounts.</div>
                </div>
              </CardContent>
            </Card>

            {/* Insider Tactics */}
            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-yellow-500" />
                  Insider Tactics
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🏪</span>
                      <h4 className="font-bold text-blue-800">.97 Pricing at Costco</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Prices ending in .97 typically indicate manager markdowns—these are items being cleared out quickly.</p>
                    <div className="text-xs text-blue-600 font-medium">💡 Look for: $XX.97 price tags for maximum savings</div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">⏰</span>
                      <h4 className="font-bold text-green-800">Mid-Week Markdowns</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Retailers like Real Canadian Superstore and Walmart often markdown during slower hours mid-week.</p>
                    <div className="text-xs text-green-600 font-medium">💡 Best times: Tuesday-Thursday mornings, avoid weekends</div>
                  </div>

                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">🔍</span>
                      <h4 className="font-bold text-purple-800">UBH (Up-Back-Hidden) Strategy</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Check top shelves, back rows, and display ends—clearance tags often hide in these locations.</p>
                    <div className="text-xs text-purple-600 font-medium">💡 Search: High shelves, endcaps, behind regular merchandise</div>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-2xl">💎</span>
                      <h4 className="font-bold text-orange-800">Leverage Casper Currency</h4>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Bring coupons, cashback apps, or loyalty cards to stack deals on already discounted clearance items.</p>
                    <div className="text-xs text-orange-600 font-medium">💡 Stack: Clearance + coupons + cashback = maximum savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Store-Specific Clearance Codes */}
            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Canadian Store Clearance Codes</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="font-bold text-red-800 mb-1">🛒 Walmart Canada</div>
                      <div className="text-sm text-gray-700">Look for: Yellow clearance stickers, prices ending in .00 or .03</div>
                    </div>
                    
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="font-bold text-blue-800 mb-1">🏪 Costco</div>
                      <div className="text-sm text-gray-700">Manager markdown: .97 endings, asterisk (*) on price tags</div>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-bold text-green-800 mb-1">🛍️ Loblaws/Superstore</div>
                      <div className="text-sm text-gray-700">Orange clearance tags, weekly markdown schedule</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                      <div className="font-bold text-purple-800 mb-1">🏢 Canadian Tire</div>
                      <div className="text-sm text-gray-700">Red clearance tags, seasonal outdoor equipment deals</div>
                    </div>
                    
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="font-bold text-yellow-800 mb-1">🎯 Target (while open)</div>
                      <div className="text-sm text-gray-700">15%, 30%, 50%, 70%, 90% progressive markdowns</div>
                    </div>
                    
                    <div className="p-3 bg-pink-50 rounded-lg border border-pink-200">
                      <div className="font-bold text-pink-800 mb-1">🏪 Metro/Food Basics</div>
                      <div className="text-sm text-gray-700">Yellow manager special tags, perishable deep discounts</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timing Your Clearance Hunts */}
            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Best Times for Clearance Hunting</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-center">
                    <div className="text-2xl mb-2">🌅</div>
                    <div className="font-bold text-blue-800 mb-2">Early Morning</div>
                    <div className="text-sm text-gray-700">First access to overnight markdowns</div>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200 text-center">
                    <div className="text-2xl mb-2">📅</div>
                    <div className="font-bold text-green-800 mb-2">Mid-Week</div>
                    <div className="text-sm text-gray-700">Tuesday-Thursday for fresh markdowns</div>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200 text-center">
                    <div className="text-2xl mb-2">🗓️</div>
                    <div className="font-bold text-orange-800 mb-2">End of Month</div>
                    <div className="text-sm text-gray-700">Inventory clearing before new stock</div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200 text-center">
                    <div className="text-2xl mb-2">🍂</div>
                    <div className="font-bold text-purple-800 mb-2">Season End</div>
                    <div className="text-sm text-gray-700">Massive clearances on seasonal items</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Steps */}
            <Card className="border-red-200 bg-gradient-to-br from-red-50 to-orange-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-500" />
                  Action Steps
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-100 text-red-800 mt-1">1</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Be first in the know</div>
                      <div>Sign up at SavingsGuru.ca for real-time clearance alerts</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-100 text-red-800 mt-1">2</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Follow Ashly's Facebook group</div>
                      <div>Get instant notifications when members spot clearance goldmines</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-100 text-red-800 mt-1">3</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Master the timing</div>
                      <div>Shop early morning, mid-week for best selection</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-100 text-red-800 mt-1">4</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Stack your savings</div>
                      <div>Combine clearance with coupons and cashback apps</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download CTA */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.savingsguru.ca', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Read Now →
              </Button>
            </div>

            {/* Social Footer */}
            <div className="border-t border-red-200 pt-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">🔥 More Clearance Secrets Coming Soon!</p>
                <p className="text-xs text-gray-500 mt-1">Follow Ashly for real-time clearance alerts and insider tips</p>
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