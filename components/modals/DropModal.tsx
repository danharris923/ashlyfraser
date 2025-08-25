'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Smartphone, Star, Gift, Coffee, Car } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface DropModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function DropModal({ isOpen, onClose }: DropModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-blue-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-blue-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-blue-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-blue-800">Drop App</h1>
              <p className="text-xs text-blue-600">Points-Based Rewards</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-blue-600 font-black text-xl">D</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Drop</h2>
                    <p className="text-blue-100">Earn points on everyday purchases</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">5M+</div>
                    <div className="text-sm text-blue-100">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">$5-$25</div>
                    <div className="text-sm text-blue-100">Gift Cards</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Best For */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">🎯 Perfect For:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Coffee className="w-4 h-4 text-orange-600" />
                    <span className="text-sm">Daily coffee & food purchases</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Rideshare & delivery apps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Gift card rewards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Passive earning on favorites</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Brands */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Earn Points At Your Favorites</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">☕</div>
                    <div className="text-sm font-medium">Tim Hortons</div>
                    <div className="text-xs text-green-600">5 pts/$1</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🚗</div>
                    <div className="text-sm font-medium">Uber</div>
                    <div className="text-xs text-green-600">3 pts/$1</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🛒</div>
                    <div className="text-sm font-medium">Amazon</div>
                    <div className="text-xs text-green-600">2 pts/$1</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🍕</div>
                    <div className="text-sm font-medium">DoorDash</div>
                    <div className="text-xs text-green-600">4 pts/$1</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">📱</div>
                    <div className="text-sm font-medium">Netflix</div>
                    <div className="text-xs text-green-600">10 pts/$1</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🎵</div>
                    <div className="text-sm font-medium">Spotify</div>
                    <div className="text-xs text-green-600">8 pts/$1</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">💻</div>
                    <div className="text-sm font-medium">Best Buy</div>
                    <div className="text-xs text-green-600">1 pt/$1</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">👕</div>
                    <div className="text-sm font-medium">H&M</div>
                    <div className="text-xs text-green-600">3 pts/$1</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Gift Card Options */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Redeem for Popular Gift Cards</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">☕</div>
                    <div className="text-sm font-medium">Starbucks</div>
                    <div className="text-xs text-blue-600">1,000 pts = $5</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🛒</div>
                    <div className="text-sm font-medium">Amazon</div>
                    <div className="text-xs text-blue-600">1,000 pts = $5</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🎬</div>
                    <div className="text-sm font-medium">Netflix</div>
                    <div className="text-xs text-blue-600">3,000 pts = $15</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🍔</div>
                    <div className="text-sm font-medium">McDonald's</div>
                    <div className="text-xs text-blue-600">1,000 pts = $5</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🎮</div>
                    <div className="text-sm font-medium">Xbox</div>
                    <div className="text-xs text-blue-600">2,000 pts = $10</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🏪</div>
                    <div className="text-sm font-medium">Walmart</div>
                    <div className="text-xs text-blue-600">1,000 pts = $5</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How Drop Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-blue-100 text-blue-800">1</Badge>
                    <div>
                      <div className="font-medium">Link Your Cards</div>
                      <div className="text-sm text-gray-600">Connect your debit and credit cards securely</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-blue-100 text-blue-800">2</Badge>
                    <div>
                      <div className="font-medium">Choose 5 Brands</div>
                      <div className="text-sm text-gray-600">Select your favorite brands to earn points from</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-blue-100 text-blue-800">3</Badge>
                    <div>
                      <div className="font-medium">Earn Automatically</div>
                      <div className="text-sm text-gray-600">Points are earned automatically when you shop</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://earnwithdrop.com', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Earning with Drop
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                  onClick={() => window.open('https://apps.apple.com/ca/app/drop-shopping-rewards-app/id1090987006', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  iOS App
                </Button>
                <Button 
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.earnwithdrop.drop', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Android App
                </Button>
              </div>
            </div>

            {/* Social Footer */}
            <div className="border-t border-blue-200 pt-6">
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