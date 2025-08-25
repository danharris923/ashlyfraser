'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Smartphone, MessageSquare, Receipt, Star, DollarSign, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface CaddleModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CaddleModal({ isOpen, onClose }: CaddleModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-orange-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-orange-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-orange-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-orange-800">Caddle</h1>
              <p className="text-xs text-orange-600">Surveys + Grocery Cashback</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-orange-500 to-amber-500 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-orange-600 font-black text-xl">C</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Caddle</h2>
                    <p className="text-orange-100">Canadian-owned rewards platform</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">2 Ways</div>
                    <div className="text-sm text-orange-100">To Earn</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">$0.25+</div>
                    <div className="text-sm text-orange-100">Per Survey</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Best For */}
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-orange-800">🎯 Perfect For:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Quick surveys for cash</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Grocery receipt scanning</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span className="text-sm">Canadian retailers focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Easy cash-out options</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Two Ways to Earn */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="w-8 h-8 text-blue-600" />
                    <h3 className="text-lg font-semibold">Quick Surveys</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-700">• Short 1-3 minute surveys</div>
                    <div className="text-sm text-gray-700">• $0.25 - $2.00 per survey</div>
                    <div className="text-sm text-gray-700">• Topics: shopping habits, brands</div>
                    <div className="text-sm text-gray-700">• Available daily</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Receipt className="w-8 h-8 text-green-600" />
                    <h3 className="text-lg font-semibold">Receipt Scanning</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-700">• Scan grocery receipts</div>
                    <div className="text-sm text-gray-700">• Earn on featured products</div>
                    <div className="text-sm text-gray-700">• Works at major Canadian stores</div>
                    <div className="text-sm text-gray-700">• Weekly cashback offers</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Canadian Retailers */}
            <Card className="border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Works at Canadian Favorites</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl mb-2">🛒</div>
                    <div className="text-sm font-medium">Loblaws</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl mb-2">🏪</div>
                    <div className="text-sm font-medium">Metro</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl mb-2">🛍️</div>
                    <div className="text-sm font-medium">Sobeys</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl mb-2">🏬</div>
                    <div className="text-sm font-medium">No Frills</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl mb-2">💊</div>
                    <div className="text-sm font-medium">Shoppers</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl mb-2">🏢</div>
                    <div className="text-sm font-medium">Walmart</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl mb-2">🔧</div>
                    <div className="text-sm font-medium">Canadian Tire</div>
                  </div>
                  <div className="text-center p-3 bg-orange-50 rounded-lg">
                    <div className="text-2xl mb-2">🍕</div>
                    <div className="text-sm font-medium">Restaurants</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Canadian Advantage */}
            <Card className="border-orange-200 bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-red-800">🍁 Canadian-Owned Advantage</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Built specifically for Canadian consumers</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Focuses on Canadian retailers and brands</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Surveys about Canadian shopping habits</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Customer support in Canada</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-orange-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How Caddle Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-orange-100 text-orange-800">1</Badge>
                    <div>
                      <div className="font-medium">Download & Register</div>
                      <div className="text-sm text-gray-600">Sign up with your Canadian address</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-orange-100 text-orange-800">2</Badge>
                    <div>
                      <div className="font-medium">Complete Surveys & Scan</div>
                      <div className="text-sm text-gray-600">Answer quick surveys and scan grocery receipts</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-orange-100 text-orange-800">3</Badge>
                    <div>
                      <div className="font-medium">Cash Out</div>
                      <div className="text-sm text-gray-600">Redeem for PayPal cash when you reach $5 minimum</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.caddle.ca', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Earning with Caddle
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50"
                  onClick={() => window.open('https://apps.apple.com/ca/app/caddle/id1089027806', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  iOS App
                </Button>
                <Button 
                  variant="outline"
                  className="border-orange-300 text-orange-700 hover:bg-orange-50"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.caddle.caddle', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Android App
                </Button>
              </div>
            </div>

            {/* Social Footer */}
            <div className="border-t border-orange-200 pt-6">
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