'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Smartphone, Globe, Star, DollarSign, Gift, Calendar } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface RakutenModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function RakutenModal({ isOpen, onClose }: RakutenModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-purple-50 via-red-50 to-orange-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-purple-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-purple-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-purple-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-purple-800">Rakuten Canada</h1>
              <p className="text-xs text-purple-600">Online Shopping Cashback Leader</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-purple-500 to-red-500 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-purple-600 font-black text-xl">R</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Rakuten Canada</h2>
                    <p className="text-purple-100">Get paid to shop online</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">750+</div>
                    <div className="text-sm text-purple-100">Partner Stores</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Up to 10%</div>
                    <div className="text-sm text-purple-100">Cashback Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold">Real Cash Payments</h3>
                  </div>
                  <p className="text-sm text-gray-600">Get paid via PayPal or cheque - no points or complicated redemptions</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold">Double Cash Back Days</h3>
                  </div>
                  <p className="text-sm text-gray-600">Frequent bonus promotions with 2x cashback rates at popular stores</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-purple-600" />
                    <h3 className="font-semibold">Web + Mobile App</h3>
                  </div>
                  <p className="text-sm text-gray-600">Shop through website or mobile app for iOS and Android</p>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-semibold">Top Canadian Retailers</h3>
                  </div>
                  <p className="text-sm text-gray-600">Amazon.ca, Canadian Tire, Hudson's Bay, Indigo, and hundreds more</p>
                </CardContent>
              </Card>
            </div>

            {/* Popular Stores */}
            <Card className="border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Canadian Stores</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold">A</div>
                    <div className="text-sm font-medium">Amazon.ca</div>
                    <div className="text-xs text-green-600">Up to 2% back</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-600 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold">CT</div>
                    <div className="text-sm font-medium">Canadian Tire</div>
                    <div className="text-xs text-green-600">Up to 4% back</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-black rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold">HB</div>
                    <div className="text-sm font-medium">Hudson's Bay</div>
                    <div className="text-xs text-green-600">Up to 6% back</div>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg mx-auto mb-2 flex items-center justify-center text-white font-bold">I</div>
                    <div className="text-sm font-medium">Indigo</div>
                    <div className="text-xs text-green-600">Up to 5% back</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-purple-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How Rakuten Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-purple-100 text-purple-800">1</Badge>
                    <div>
                      <div className="font-medium">Sign Up for Free</div>
                      <div className="text-sm text-gray-600">Create your Rakuten Canada account</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-purple-100 text-purple-800">2</Badge>
                    <div>
                      <div className="font-medium">Shop Through Rakuten</div>
                      <div className="text-sm text-gray-600">Click through Rakuten to your favorite stores</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-purple-100 text-purple-800">3</Badge>
                    <div>
                      <div className="font-medium">Get Paid</div>
                      <div className="text-sm text-gray-600">Receive cashback quarterly via PayPal or cheque</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-purple-500 to-red-500 hover:from-purple-600 hover:to-red-600 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.rakuten.ca', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Earning with Rakuten
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  onClick={() => window.open('https://apps.apple.com/ca/app/rakuten/id794850908', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  iOS App
                </Button>
                <Button 
                  variant="outline"
                  className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.ebates.android', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Android App
                </Button>
              </div>
            </div>

            {/* Social Footer */}
            <div className="border-t border-purple-200 pt-6">
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