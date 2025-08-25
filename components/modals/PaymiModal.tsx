'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Smartphone, CreditCard, Shield, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface PaymiModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function PaymiModal({ isOpen, onClose }: PaymiModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-teal-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-teal-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-teal-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-teal-800">Paymi</h1>
              <p className="text-xs text-teal-600">Passive Automatic Cashback</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-teal-500 to-cyan-500 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Paymi</h2>
                    <p className="text-teal-100">Set it and forget it cashback</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-teal-100">Passive</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">Multi-Bank</div>
                    <div className="text-sm text-teal-100">Support</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-teal-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-semibold">100% Automatic</h3>
                  </div>
                  <p className="text-sm text-gray-600">Link your cards once, earn cashback forever with zero effort</p>
                </CardContent>
              </Card>

              <Card className="border-teal-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold">Multi-Bank Support</h3>
                  </div>
                  <p className="text-sm text-gray-600">Works with debit and credit cards from all major Canadian banks</p>
                </CardContent>
              </Card>

              <Card className="border-teal-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold">Bank-Level Security</h3>
                  </div>
                  <p className="text-sm text-gray-600">Industry-standard encryption protects your financial information</p>
                </CardContent>
              </Card>

              <Card className="border-teal-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">🏪</span>
                    <h3 className="font-semibold">Wide Network</h3>
                  </div>
                  <p className="text-sm text-gray-600">Earn at thousands of Canadian retailers automatically</p>
                </CardContent>
              </Card>
            </div>

            {/* Banking Partners */}
            <Card className="border-teal-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Supported Canadian Banks</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">🏦</div>
                    <div className="text-sm font-medium">RBC</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">🏛️</div>
                    <div className="text-sm font-medium">TD Canada</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">🏢</div>
                    <div className="text-sm font-medium">Scotiabank</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">🏪</div>
                    <div className="text-sm font-medium">BMO</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">🏫</div>
                    <div className="text-sm font-medium">CIBC</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">🏤</div>
                    <div className="text-sm font-medium">Credit Unions</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Retailer Categories */}
            <Card className="border-teal-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Earn at Popular Categories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">🛒</div>
                    <div className="text-sm font-medium">Groceries</div>
                    <div className="text-xs text-green-600">1-3% back</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">⛽</div>
                    <div className="text-sm font-medium">Gas Stations</div>
                    <div className="text-xs text-green-600">1-2% back</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">🍔</div>
                    <div className="text-sm font-medium">Restaurants</div>
                    <div className="text-xs text-green-600">2-5% back</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">👕</div>
                    <div className="text-sm font-medium">Retail</div>
                    <div className="text-xs text-green-600">1-4% back</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">💊</div>
                    <div className="text-sm font-medium">Pharmacy</div>
                    <div className="text-xs text-green-600">2% back</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">☕</div>
                    <div className="text-sm font-medium">Coffee Shops</div>
                    <div className="text-xs text-green-600">3% back</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">🎬</div>
                    <div className="text-sm font-medium">Entertainment</div>
                    <div className="text-xs text-green-600">2-6% back</div>
                  </div>
                  <div className="text-center p-3 bg-teal-50 rounded-lg">
                    <div className="text-2xl mb-2">🏨</div>
                    <div className="text-sm font-medium">Hotels</div>
                    <div className="text-xs text-green-600">3-8% back</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-teal-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How Paymi Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-teal-100 text-teal-800">1</Badge>
                    <div>
                      <div className="font-medium">Download & Connect</div>
                      <div className="text-sm text-gray-600">Securely link your bank accounts and cards</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-teal-100 text-teal-800">2</Badge>
                    <div>
                      <div className="font-medium">Shop As Normal</div>
                      <div className="text-sm text-gray-600">Use your linked cards at participating merchants</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-teal-100 text-teal-800">3</Badge>
                    <div>
                      <div className="font-medium">Earn Automatically</div>
                      <div className="text-sm text-gray-600">Cashback appears in your account within 1-3 days</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.paymi.com', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Earning with Paymi
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline"
                  className="border-teal-300 text-teal-700 hover:bg-teal-50"
                  onClick={() => window.open('https://apps.apple.com/ca/app/paymi/id1234567890', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  iOS App
                </Button>
                <Button 
                  variant="outline"
                  className="border-teal-300 text-teal-700 hover:bg-teal-50"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.paymi.android', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Android App
                </Button>
              </div>
            </div>

            {/* Social Footer */}
            <div className="border-t border-teal-200 pt-6">
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