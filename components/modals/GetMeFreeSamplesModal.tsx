'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Gift, Clock, Star, RefreshCw } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface GetMeFreeSamplesModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GetMeFreeSamplesModal({ isOpen, onClose }: GetMeFreeSamplesModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-green-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-green-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-green-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-green-800">GetMeFreeSamples.com</h1>
              <p className="text-xs text-green-600">Daily Updated Sample Directory</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Gift className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">GetMeFreeSamples</h2>
                    <p className="text-green-100">Your daily dose of freebies</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Daily</div>
                    <div className="text-sm text-green-100">Updates</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-green-100">Free by Mail</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Makes It Special */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-green-800">🌟 Why GetMeFreeSamples Stands Out</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Updated multiple times daily</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Fresh samples posted regularly</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-purple-500" />
                    <span className="text-sm">Wide variety of sample types</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Verified Canadian offers only</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sample Categories */}
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Sample Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">💄</div>
                    <div className="text-sm font-medium">Beauty</div>
                    <div className="text-xs text-gray-600">Skincare, makeup, hair</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🍫</div>
                    <div className="text-sm font-medium">Food</div>
                    <div className="text-xs text-gray-600">Snacks, drinks, treats</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🏠</div>
                    <div className="text-sm font-medium">Home</div>
                    <div className="text-xs text-gray-600">Cleaning, laundry</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">👶</div>
                    <div className="text-sm font-medium">Baby</div>
                    <div className="text-xs text-gray-600">Formula, diapers</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🐕</div>
                    <div className="text-sm font-medium">Pet</div>
                    <div className="text-xs text-gray-600">Treats, food, toys</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🧴</div>
                    <div className="text-sm font-medium">Personal Care</div>
                    <div className="text-xs text-gray-600">Shampoo, soap</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">💊</div>
                    <div className="text-sm font-medium">Health</div>
                    <div className="text-xs text-gray-600">Vitamins, supplements</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🌿</div>
                    <div className="text-sm font-medium">Garden</div>
                    <div className="text-xs text-gray-600">Seeds, plant care</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sample Delivery Types */}
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Types of Free Samples</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200">
                    <div className="text-2xl mb-3 text-center">📬</div>
                    <h4 className="font-semibold text-center mb-2">Mail Samples</h4>
                    <p className="text-sm text-gray-600 text-center">Traditional samples sent directly to your mailbox</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200">
                    <div className="text-2xl mb-3 text-center">🎟️</div>
                    <h4 className="font-semibold text-center mb-2">Store Coupons</h4>
                    <p className="text-sm text-gray-600 text-center">Free product coupons for in-store pickup</p>
                  </div>
                  <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg border border-orange-200">
                    <div className="text-2xl mb-3 text-center">📱</div>
                    <h4 className="font-semibold text-center mb-2">Digital Samples</h4>
                    <p className="text-sm text-gray-600 text-center">E-coupons and mobile offers</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How to Use the Site */}
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How to Use GetMeFreeSamples</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800">1</Badge>
                    <div>
                      <div className="font-medium">Visit Daily</div>
                      <div className="text-sm text-gray-600">Check the site every morning for fresh sample offers</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800">2</Badge>
                    <div>
                      <div className="font-medium">Browse Categories</div>
                      <div className="text-sm text-gray-600">Look through beauty, food, home, and other categories</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800">3</Badge>
                    <div>
                      <div className="font-medium">Click Through Links</div>
                      <div className="text-sm text-gray-600">Follow the provided links to claim your free samples</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800">4</Badge>
                    <div>
                      <div className="font-medium">Complete Forms</div>
                      <div className="text-sm text-gray-600">Fill out the company forms to request your samples</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Tips */}
            <Card className="border-green-200 bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-yellow-800">💡 Pro Tips for Success</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Check the site multiple times daily - samples go fast!</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Use your real information - fake details disqualify you</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Be patient - samples can take 6-8 weeks to arrive</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Sign up for email alerts to get notified of new samples</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-yellow-500 mt-1" />
                    <div className="text-sm text-gray-700">Read all terms and conditions before applying</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.getmefreesamples.com', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Finding Free Samples
              </Button>
            </div>

            {/* Social Footer */}
            <div className="border-t border-green-200 pt-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">🎯 More Free Sample Sources Coming Soon!</p>
                <p className="text-xs text-gray-500 mt-1">Follow Ashly for the latest freebie finds</p>
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