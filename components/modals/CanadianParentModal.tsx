'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Baby, Heart, Home, Gift } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface CanadianParentModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CanadianParentModal({ isOpen, onClose }: CanadianParentModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-pink-50 via-rose-50 to-red-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-pink-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-pink-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-pink-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-pink-800">Canadian Parent</h1>
              <p className="text-xs text-pink-600">Curated Family Sample Offers</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-pink-500 to-rose-500 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Baby className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Canadian Parent</h2>
                    <p className="text-pink-100">Family-focused freebies & samples</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Curated</div>
                    <div className="text-sm text-pink-100">Quality Offers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Family</div>
                    <div className="text-sm text-pink-100">Focused</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What Makes It Special */}
            <Card className="border-pink-200 bg-pink-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-pink-800">👪 Perfect for Canadian Families</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Baby className="w-4 h-4 text-blue-600" />
                    <span className="text-sm">Baby & toddler focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm">Beauty & mom care</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Household essentials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-purple-500" />
                    <span className="text-sm">Regularly updated offers</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sample Categories */}
            <Card className="border-pink-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Family Sample Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-pink-50 rounded-lg border border-pink-200">
                    <div className="text-2xl mb-2">👶</div>
                    <div className="text-sm font-medium">Baby Care</div>
                    <div className="text-xs text-gray-600">Diapers, wipes, formula</div>
                  </div>
                  <div className="text-center p-3 bg-pink-50 rounded-lg border border-pink-200">
                    <div className="text-2xl mb-2">💄</div>
                    <div className="text-sm font-medium">Beauty</div>
                    <div className="text-xs text-gray-600">Skincare, makeup</div>
                  </div>
                  <div className="text-center p-3 bg-pink-50 rounded-lg border border-pink-200">
                    <div className="text-2xl mb-2">🍼</div>
                    <div className="text-sm font-medium">Food</div>
                    <div className="text-xs text-gray-600">Baby food, snacks</div>
                  </div>
                  <div className="text-center p-3 bg-pink-50 rounded-lg border border-pink-200">
                    <div className="text-2xl mb-2">🏠</div>
                    <div className="text-sm font-medium">Household</div>
                    <div className="text-xs text-gray-600">Cleaning, laundry</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Sample Brands */}
            <Card className="border-pink-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Popular Canadian Brands Featured</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <div className="text-2xl mb-2">👶</div>
                    <div className="text-sm font-medium">Pampers</div>
                    <div className="text-xs text-gray-600">Diapers & wipes</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                    <div className="text-2xl mb-2">🍼</div>
                    <div className="text-sm font-medium">Similac</div>
                    <div className="text-xs text-gray-600">Baby formula</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="text-2xl mb-2">🧴</div>
                    <div className="text-sm font-medium">Johnson's</div>
                    <div className="text-xs text-gray-600">Baby care</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
                    <div className="text-2xl mb-2">💄</div>
                    <div className="text-sm font-medium">L'Oréal</div>
                    <div className="text-xs text-gray-600">Beauty products</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg">
                    <div className="text-2xl mb-2">🥛</div>
                    <div className="text-sm font-medium">Nestlé</div>
                    <div className="text-xs text-gray-600">Food & nutrition</div>
                  </div>
                  <div className="text-center p-3 bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg">
                    <div className="text-2xl mb-2">🧽</div>
                    <div className="text-sm font-medium">P&G</div>
                    <div className="text-xs text-gray-600">Household goods</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-pink-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How to Use Canadian Parent</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-pink-100 text-pink-800">1</Badge>
                    <div>
                      <div className="font-medium">Visit the Free Samples Section</div>
                      <div className="text-sm text-gray-600">Navigate to their dedicated freebies page</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-pink-100 text-pink-800">2</Badge>
                    <div>
                      <div className="font-medium">Browse Current Offers</div>
                      <div className="text-sm text-gray-600">Check their regularly updated list of available samples</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-pink-100 text-pink-800">3</Badge>
                    <div>
                      <div className="font-medium">Click to Claim</div>
                      <div className="text-sm text-gray-600">Follow links to brand websites to request samples</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-pink-100 text-pink-800">4</Badge>
                    <div>
                      <div className="font-medium">Sign Up for Updates</div>
                      <div className="text-sm text-gray-600">Get notified when new sample offers become available</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.canadianparent.com/freebies', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Browse Family Samples
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline"
                  className="border-pink-300 text-pink-700 hover:bg-pink-50"
                  onClick={() => window.open('https://www.facebook.com/CanadianParent', '_blank')}
                >
                  Facebook Updates
                </Button>
                <Button 
                  variant="outline"
                  className="border-pink-300 text-pink-700 hover:bg-pink-50"
                  onClick={() => window.open('https://www.instagram.com/canadianparent', '_blank')}
                >
                  Instagram News
                </Button>
              </div>
            </div>

            {/* Social Footer */}
            <div className="border-t border-pink-200 pt-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">🎯 More Family Sample Sources Coming Soon!</p>
                <p className="text-xs text-gray-500 mt-1">Follow Ashly for the latest family freebies</p>
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