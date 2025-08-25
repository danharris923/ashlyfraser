'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Smartphone, CreditCard, Shield, Star, Building, DollarSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface AmpliModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AmpliModal({ isOpen, onClose }: AmpliModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
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
              <h1 className="text-lg font-semibold text-blue-800">Ampli by RBC</h1>
              <p className="text-xs text-blue-600">Automatic Cashback with Card Linking</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <Building className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Ampli by RBC</h2>
                    <p className="text-blue-100">Automatic cashback, bank-grade security</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm text-blue-100">Automatic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">$0</div>
                    <div className="text-sm text-blue-100">Minimum Cashout</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* RBC Advantage */}
            <Card className="border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-blue-800">🏦 RBC Banking Advantage</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-600" />
                    <span className="text-sm">Bank-grade security & privacy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Building className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Backed by Royal Bank of Canada</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-purple-500" />
                    <span className="text-sm">Works with any bank's cards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-green-500" />
                    <span className="text-sm">No minimum cashout amount</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold">Link Any Card</h3>
                  </div>
                  <p className="text-sm text-gray-600">Connect your debit or credit cards from any Canadian bank</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <DollarSign className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold">Automatic Cashback</h3>
                  </div>
                  <p className="text-sm text-gray-600">Earn cashback automatically when you shop - no scanning required</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold">Bank-Level Security</h3>
                  </div>
                  <p className="text-sm text-gray-600">RBC's security infrastructure protects your financial data</p>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Star className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-semibold">No Minimums</h3>
                  </div>
                  <p className="text-sm text-gray-600">Cash out any amount - no minimum balance required</p>
                </CardContent>
              </Card>
            </div>

            {/* Partner Stores */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Participating Stores</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">☕</div>
                    <div className="text-sm font-medium">Tim Hortons</div>
                    <div className="text-xs text-green-600">2% back</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🛒</div>
                    <div className="text-sm font-medium">Loblaws</div>
                    <div className="text-xs text-green-600">1.5% back</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">⛽</div>
                    <div className="text-sm font-medium">Petro-Canada</div>
                    <div className="text-xs text-green-600">1% back</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🏢</div>
                    <div className="text-sm font-medium">Walmart</div>
                    <div className="text-xs text-green-600">1% back</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🏪</div>
                    <div className="text-sm font-medium">Shoppers</div>
                    <div className="text-xs text-green-600">2% back</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🍔</div>
                    <div className="text-sm font-medium">McDonald's</div>
                    <div className="text-xs text-green-600">3% back</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🎬</div>
                    <div className="text-sm font-medium">Cineplex</div>
                    <div className="text-xs text-green-600">4% back</div>
                  </div>
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl mb-2">🏃</div>
                    <div className="text-sm font-medium">Sport Chek</div>
                    <div className="text-xs text-green-600">2.5% back</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <Card className="border-blue-200 bg-green-50 border-green-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-green-800">🔐 Security & Trust</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-green-600 mt-1" />
                    <div className="text-sm text-gray-700">Same security standards as RBC Online Banking</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-green-600 mt-1" />
                    <div className="text-sm text-gray-700">Your card data is encrypted and never stored</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-green-600 mt-1" />
                    <div className="text-sm text-gray-700">Read-only access to transaction data</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-4 h-4 text-green-600 mt-1" />
                    <div className="text-sm text-gray-700">Regulated by Canadian banking authorities</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-blue-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How Ampli Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-blue-100 text-blue-800">1</Badge>
                    <div>
                      <div className="font-medium">Download & Link Cards</div>
                      <div className="text-sm text-gray-600">Securely connect your debit/credit cards</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-blue-100 text-blue-800">2</Badge>
                    <div>
                      <div className="font-medium">Shop Normally</div>
                      <div className="text-sm text-gray-600">Use your linked cards at participating stores</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-blue-100 text-blue-800">3</Badge>
                    <div>
                      <div className="font-medium">Earn Automatically</div>
                      <div className="text-sm text-gray-600">Cashback appears in your account within days</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.ampli.ca', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Start Earning with Ampli
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                  onClick={() => window.open('https://apps.apple.com/ca/app/ampli/id1355858252', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  iOS App
                </Button>
                <Button 
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.rbc.mobile.android.ampli', '_blank')}
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