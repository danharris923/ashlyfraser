'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, Download, BookOpen, Star, CheckCircle, AlertCircle, Store } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface CouponStackingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CouponStackingModal({ isOpen, onClose }: CouponStackingModalProps) {
  const [startY, setStartY] = useState(0)
  const [currentY, setCurrentY] = useState(0)

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

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setCurrentY(e.touches[0].clientY)
  }

  const handleTouchEnd = () => {
    const deltaY = startY - currentY
    // Swipe down to close (threshold of 100px)
    if (deltaY < -100) {
      onClose()
    }
    setStartY(0)
    setCurrentY(0)
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
      <div 
        className="fixed bottom-0 left-0 right-0 top-16 md:top-8 md:bottom-8 md:left-8 md:right-8 md:max-w-4xl md:mx-auto flex flex-col bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 animate-in slide-in-from-bottom duration-300 rounded-t-2xl md:rounded-2xl shadow-2xl"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Swipe indicator */}
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-12 h-1 bg-gray-300 rounded-full"></div>
        </div>
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-indigo-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-indigo-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-indigo-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-indigo-800">Coupon Stacking Mastery</h1>
              <p className="text-xs text-indigo-600">Free Savings Guide</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-indigo-600 to-purple-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Coupon Stacking Mastery</h2>
                    <p className="text-indigo-100">Learn the legal art of combining coupons for maximum savings</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-indigo-100">Legal</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Max</div>
                    <div className="text-sm text-indigo-100">Savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What's Allowed in Canada */}
            <Card className="border-indigo-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  What's Allowed in Canada
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="font-medium text-green-800 mb-2">✅ Legal but Store Policy Dependent</div>
                    <div className="text-sm text-gray-700">Coupon stacking is legal, but acceptance depends entirely on store policy, not government law.</div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="font-medium text-blue-800 mb-2">🏪 London Drugs Example</div>
                    <div className="text-sm text-gray-700">London Drugs allows stacking unless a coupon explicitly says "cannot be combined with any other offer".</div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="font-medium text-purple-800 mb-2">🛍️ Fields Store Policy</div>
                    <div className="text-sm text-gray-700">Fields allows you to stack a manufacturer coupon with an in-store or flyer coupon on the same item—provided no terms conflict.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Terms to Know */}
            <Card className="border-indigo-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-500" />
                  Key Terms to Know
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="font-medium text-orange-800 mb-2">"One coupon per purchase"</div>
                    <div className="text-sm text-gray-700">Often means per item, not per transaction. Buying multiple units allows you to use one coupon per item if policy permits.</div>
                  </div>
                  
                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="font-medium text-red-800 mb-2">⚠️ "Cannot be combined..." Warning</div>
                    <div className="text-sm text-gray-700">Always check if coupon terms include "cannot be combined…"—if so, stacking is not allowed, even at stores that generally permit it.</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Store-Specific Policies */}
            <Card className="border-indigo-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Store className="w-5 h-5 text-blue-500" />
                  Canadian Store Policies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="font-medium text-green-800 mb-2">✅ Stacking Friendly</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• London Drugs</li>
                      <li>• Fields</li>
                      <li>• Some independents</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="font-medium text-yellow-800 mb-2">⚠️ Policy Varies</div>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Walmart (location dependent)</li>
                      <li>• Loblaws chains</li>
                      <li>• Metro stores</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Steps */}
            <Card className="border-indigo-200 bg-gradient-to-br from-indigo-50 to-purple-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Action Steps for Success
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-indigo-100 text-indigo-800 mt-1">1</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Always carry screenshots</div>
                      <div>Keep store policies saved on your phone for reference</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-indigo-100 text-indigo-800 mt-1">2</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Read coupon terms carefully</div>
                      <div>Look for "cannot be combined" language before attempting stacks</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-indigo-100 text-indigo-800 mt-1">3</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Start with friendly stores</div>
                      <div>Build confidence at known stacking-friendly locations first</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-indigo-100 text-indigo-800 mt-1">4</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Join Ashly's community</div>
                      <div>Get real-time updates on stacking opportunities and policy changes</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download CTA */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.savingsguru.ca', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Read Now →
              </Button>
            </div>

            {/* Social Footer */}
            <div className="border-t border-indigo-200 pt-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">📚 More Free Savings Guides Coming Soon!</p>
                <p className="text-xs text-gray-500 mt-1">Follow Ashly for expert money-saving strategies</p>
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