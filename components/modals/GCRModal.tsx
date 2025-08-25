'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Globe, Star, DollarSign, Gift, Plane } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface GCRModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GCRModal({ isOpen, onClose }: GCRModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-red-50 via-white to-red-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
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
              <h1 className="text-lg font-semibold text-red-800">Great Canadian Rebates</h1>
              <p className="text-xs text-red-600">Canada's Premium Cashback Platform</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-red-600 to-red-700 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-red-600 font-black text-lg">GCR</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Great Canadian Rebates</h2>
                    <p className="text-red-100">Higher rates, better rewards</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">500+</div>
                    <div className="text-sm text-red-100">Partner Stores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Up to 15%</div>
                    <div className="text-sm text-red-100">Cashback Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Best For */}
            <Card className="border-red-200 bg-red-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-red-800">🎯 Best For:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Higher cashback rates than competitors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Travel bookings (Air Canada, Expedia)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Gift card redemptions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-sm">PayPal cash payments</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-red-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold">Higher Rates</h3>
                  </div>
                  <p className="text-sm text-gray-600">Often beats Rakuten and other competitors with better cashback percentages</p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Gift className="w-6 h-6 text-purple-600" />
                    <h3 className="font-semibold">Flexible Payments</h3>
                  </div>
                  <p className="text-sm text-gray-600">Choose between PayPal cash or gift cards from top retailers</p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Plane className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold">Travel Specialist</h3>
                  </div>
                  <p className="text-sm text-gray-600">Excellent cashback rates for Air Canada, hotels, and travel bookings</p>
                </CardContent>
              </Card>

              <Card className="border-red-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-red-600" />
                    <h3 className="font-semibold">Web Platform</h3>
                  </div>
                  <p className="text-sm text-gray-600">Clean, easy-to-use website optimized for Canadian shoppers</p>
                </CardContent>
              </Card>
            </div>

            {/* Popular Categories */}
            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Top Cashback Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">✈️</div>
                    <div className="text-sm font-medium">Travel</div>
                    <div className="text-xs text-green-600">Up to 8% back</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">👗</div>
                    <div className="text-sm font-medium">Fashion</div>
                    <div className="text-xs text-green-600">Up to 12% back</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">🛒</div>
                    <div className="text-sm font-medium">Department</div>
                    <div className="text-xs text-green-600">Up to 6% back</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">💻</div>
                    <div className="text-sm font-medium">Electronics</div>
                    <div className="text-xs text-green-600">Up to 4% back</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">🏠</div>
                    <div className="text-sm font-medium">Home & Garden</div>
                    <div className="text-xs text-green-600">Up to 10% back</div>
                  </div>
                  <div className="text-center p-3 bg-red-50 rounded-lg">
                    <div className="text-2xl mb-2">🎁</div>
                    <div className="text-sm font-medium">Gifts</div>
                    <div className="text-xs text-green-600">Up to 15% back</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-red-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How GCR Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-100 text-red-800">1</Badge>
                    <div>
                      <div className="font-medium">Join for Free</div>
                      <div className="text-sm text-gray-600">Sign up at greatcanadianrebates.ca</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-100 text-red-800">2</Badge>
                    <div>
                      <div className="font-medium">Shop Through GCR</div>
                      <div className="text-sm text-gray-600">Click through to your favorite stores</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-100 text-red-800">3</Badge>
                    <div>
                      <div className="font-medium">Choose Your Reward</div>
                      <div className="text-sm text-gray-600">Get PayPal cash or gift cards quarterly</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.greatcanadianrebates.ca', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Earning with GCR
              </Button>
            </div>

            {/* Social Footer */}
            <div className="border-t border-red-200 pt-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">🎯 More Exclusive Deals Coming Soon!</p>
                <p className="text-xs text-gray-500 mt-1">Follow Ashly for the latest cashback tips</p>
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