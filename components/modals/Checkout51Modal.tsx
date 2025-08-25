'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Smartphone, Receipt, Star, DollarSign, ShoppingCart, Fuel } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface Checkout51ModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function Checkout51Modal({ isOpen, onClose }: Checkout51ModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
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
              <h1 className="text-lg font-semibold text-green-800">Checkout 51</h1>
              <p className="text-xs text-green-600">Grocery Cashback Leader</p>
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
                    <span className="text-green-600 font-black text-lg">C51</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Checkout 51</h2>
                    <p className="text-green-100">Scan receipts, earn cash</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Weekly</div>
                    <div className="text-sm text-green-100">New Offers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">$0.25-$5</div>
                    <div className="text-sm text-green-100">Per Item</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Best For */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-green-800">🎯 Perfect For:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Grocery shopping cashback</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Receipt className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Receipt scanning rewards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-4 h-4 text-orange-500" />
                    <span className="text-sm">Gas station discounts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Household item rebates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Receipt className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold">Easy Receipt Scanning</h3>
                  </div>
                  <p className="text-sm text-gray-600">Just scan your grocery receipts with your phone camera</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-semibold">Loyalty Card Integration</h3>
                  </div>
                  <p className="text-sm text-gray-600">Link your store loyalty cards for automatic cashback</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold">Weekly Fresh Offers</h3>
                  </div>
                  <p className="text-sm text-gray-600">New cashback offers every Thursday on popular items</p>
                </CardContent>
              </Card>

              <Card className="border-green-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Fuel className="w-6 h-6 text-orange-600" />
                    <h3 className="font-semibold">Gas Discounts</h3>
                  </div>
                  <p className="text-sm text-gray-600">Save on fuel purchases at participating gas stations</p>
                </CardContent>
              </Card>
            </div>

            {/* Sample Offers */}
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Sample Weekly Offers</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🥛</div>
                    <div className="text-sm font-medium">Any Milk 2L+</div>
                    <div className="text-xs text-green-600 font-bold">$0.75 back</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🍞</div>
                    <div className="text-sm font-medium">Bread Loaf</div>
                    <div className="text-xs text-green-600 font-bold">$0.50 back</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🧻</div>
                    <div className="text-sm font-medium">Paper Towels</div>
                    <div className="text-xs text-green-600 font-bold">$1.00 back</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🥤</div>
                    <div className="text-sm font-medium">Soft Drinks 12pk</div>
                    <div className="text-xs text-green-600 font-bold">$2.00 back</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">🧴</div>
                    <div className="text-sm font-medium">Shampoo</div>
                    <div className="text-xs text-green-600 font-bold">$3.00 back</div>
                  </div>
                  <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-2xl mb-2">⛽</div>
                    <div className="text-sm font-medium">Gas Fill-up</div>
                    <div className="text-xs text-green-600 font-bold">$0.05/L back</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How Checkout 51 Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800">1</Badge>
                    <div>
                      <div className="font-medium">Browse Weekly Offers</div>
                      <div className="text-sm text-gray-600">Check the app every Thursday for new deals</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800">2</Badge>
                    <div>
                      <div className="font-medium">Shop & Scan Receipt</div>
                      <div className="text-sm text-gray-600">Buy featured products and scan your receipt</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800">3</Badge>
                    <div>
                      <div className="font-medium">Get Paid</div>
                      <div className="text-sm text-gray-600">Receive payment when you reach $20 minimum</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://checkout51.com', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Earning with Checkout 51
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                  onClick={() => window.open('https://apps.apple.com/ca/app/checkout-51/id521358991', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  iOS App
                </Button>
                <Button 
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.checkout51.checkout51', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Android App
                </Button>
              </div>
            </div>

            {/* Social Footer */}
            <div className="border-t border-green-200 pt-6">
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