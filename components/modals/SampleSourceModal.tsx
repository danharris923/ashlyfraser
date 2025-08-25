'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Gift, Star, Baby, Heart, Home, PawPrint } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface SampleSourceModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SampleSourceModal({ isOpen, onClose }: SampleSourceModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-rose-50 via-pink-50 to-red-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-rose-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-rose-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-rose-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-rose-800">SampleSource Canada</h1>
              <p className="text-xs text-rose-600">Canada's #1 Free Sample Platform</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-rose-500 to-pink-500 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Gift className="w-6 h-6 text-rose-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">SampleSource Canada</h2>
                    <p className="text-rose-100">Free samples delivered to your door</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-rose-100">Free Samples</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">4x/Year</div>
                    <div className="text-sm text-rose-100">Sample Campaigns</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-rose-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How SampleSource Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-rose-100 text-rose-800">1</Badge>
                    <div>
                      <div className="font-medium">Register Your Profile</div>
                      <div className="text-sm text-gray-600">Complete your detailed profile with preferences and household info</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-rose-100 text-rose-800">2</Badge>
                    <div>
                      <div className="font-medium">Wait for Campaign Openings</div>
                      <div className="text-sm text-gray-600">SampleSource opens campaigns 4 times per year (usually seasonal)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-rose-100 text-rose-800">3</Badge>
                    <div>
                      <div className="font-medium">Choose Your Samples</div>
                      <div className="text-sm text-gray-600">Select samples that match your profile and interests</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-rose-100 text-rose-800">4</Badge>
                    <div>
                      <div className="font-medium">Receive Free Delivery</div>
                      <div className="text-sm text-gray-600">Samples arrive by mail within 4-8 weeks completely free</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sample Categories */}
            <Card className="border-rose-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Sample Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <Heart className="w-8 h-8 text-rose-500 mx-auto mb-2" />
                    <div className="text-sm font-medium">Beauty</div>
                    <div className="text-xs text-gray-600">Skincare, makeup, hair care</div>
                  </div>
                  <div className="text-center p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <div className="text-2xl mb-2">🍫</div>
                    <div className="text-sm font-medium">Food</div>
                    <div className="text-xs text-gray-600">Snacks, drinks, condiments</div>
                  </div>
                  <div className="text-center p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <Home className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                    <div className="text-sm font-medium">Home</div>
                    <div className="text-xs text-gray-600">Cleaning, laundry, air care</div>
                  </div>
                  <div className="text-center p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <Baby className="w-8 h-8 text-green-500 mx-auto mb-2" />
                    <div className="text-sm font-medium">Baby</div>
                    <div className="text-xs text-gray-600">Diapers, wipes, formula</div>
                  </div>
                  <div className="text-center p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <PawPrint className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-sm font-medium">Pet</div>
                    <div className="text-xs text-gray-600">Treats, food, toys</div>
                  </div>
                  <div className="text-center p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <div className="text-2xl mb-2">💊</div>
                    <div className="text-sm font-medium">Health</div>
                    <div className="text-xs text-gray-600">Vitamins, supplements</div>
                  </div>
                  <div className="text-center p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <div className="text-2xl mb-2">🧴</div>
                    <div className="text-sm font-medium">Personal Care</div>
                    <div className="text-xs text-gray-600">Shampoo, deodorant</div>
                  </div>
                  <div className="text-center p-3 bg-rose-50 rounded-lg border border-rose-200">
                    <div className="text-2xl mb-2">🌿</div>
                    <div className="text-sm font-medium">Garden</div>
                    <div className="text-xs text-gray-600">Seeds, plant care</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tips */}
            <Card className="border-rose-200 bg-rose-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-rose-800">💡 Pro Tips for SampleSource</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Complete your profile 100% for better sample matching</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Follow their social media for campaign announcements</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Act fast when campaigns open - popular samples go quickly</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Be patient - delivery can take 4-8 weeks</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">One account per household - don't create duplicates</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.samplesource.com/?site=en', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Register for Free Samples
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline"
                  className="border-rose-300 text-rose-700 hover:bg-rose-50"
                  onClick={() => window.open('https://www.facebook.com/SampleSourceCanada', '_blank')}
                >
                  Facebook Updates
                </Button>
                <Button 
                  variant="outline"
                  className="border-rose-300 text-rose-700 hover:bg-rose-50"
                  onClick={() => window.open('https://www.instagram.com/samplesourcecanada', '_blank')}
                >
                  Instagram News
                </Button>
              </div>
            </div>

            {/* Social Footer */}
            <div className="border-t border-rose-200 pt-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">🎯 More Free Sample Sources Coming Soon!</p>
                <p className="text-xs text-gray-500 mt-1">Follow Ashly for the latest freebie tips</p>
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