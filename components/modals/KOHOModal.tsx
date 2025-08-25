'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Smartphone, CreditCard, TrendingUp, PiggyBank, Zap } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface KOHOModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function KOHOModal({ isOpen, onClose }: KOHOModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-emerald-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-emerald-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-emerald-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-emerald-800">KOHO</h1>
              <p className="text-xs text-emerald-600">Banking + Budgeting + Cashback</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="space-y-6 pt-6">
            
            {/* Hero Section */}
            <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 border-0 text-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-emerald-600 font-black text-xl">K</span>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">KOHO</h2>
                    <p className="text-emerald-100">Smart spending with built-in cashback</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">Up to 2%</div>
                    <div className="text-sm text-emerald-100">Cashback</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">$0</div>
                    <div className="text-sm text-emerald-100">Monthly Fees</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* All-in-One Solution */}
            <Card className="border-emerald-200 bg-emerald-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3 text-emerald-800">💳 All-in-One Financial Platform</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm">Prepaid Visa card</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PiggyBank className="w-4 h-4 text-blue-500" />
                    <span className="text-sm">Smart budgeting tools</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-sm">Spending insights & analytics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm">Automatic cashback earning</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cashback Categories */}
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Cashback Categories</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="text-3xl mb-3">🛒</div>
                    <div className="text-lg font-bold text-emerald-600">2%</div>
                    <div className="text-sm font-medium">Groceries</div>
                    <div className="text-xs text-gray-600">Loblaws, Metro, Sobeys</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="text-3xl mb-3">🍕</div>
                    <div className="text-lg font-bold text-emerald-600">2%</div>
                    <div className="text-sm font-medium">Dining</div>
                    <div className="text-xs text-gray-600">Restaurants & takeout</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="text-3xl mb-3">🚌</div>
                    <div className="text-lg font-bold text-emerald-600">2%</div>
                    <div className="text-sm font-medium">Transportation</div>
                    <div className="text-xs text-gray-600">Transit, rideshare, gas</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="border-emerald-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <CreditCard className="w-6 h-6 text-emerald-600" />
                    <h3 className="font-semibold">Prepaid Visa</h3>
                  </div>
                  <p className="text-sm text-gray-600">Load money onto your KOHO Visa and spend everywhere Visa is accepted</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <PiggyBank className="w-6 h-6 text-blue-600" />
                    <h3 className="font-semibold">Smart Budgeting</h3>
                  </div>
                  <p className="text-sm text-gray-600">Set spending limits, track goals, and get insights on your habits</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    <h3 className="font-semibold">Real-Time Insights</h3>
                  </div>
                  <p className="text-sm text-gray-600">See where your money goes with automatic categorization and analytics</p>
                </CardContent>
              </Card>

              <Card className="border-emerald-200">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Zap className="w-6 h-6 text-yellow-600" />
                    <h3 className="font-semibold">No Hidden Fees</h3>
                  </div>
                  <p className="text-sm text-gray-600">No monthly fees, overdraft fees, or minimum balance requirements</p>
                </CardContent>
              </Card>
            </div>

            {/* Premium Features */}
            <Card className="border-emerald-200 bg-gradient-to-r from-emerald-50 to-teal-50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">KOHO Premium Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm">Higher cashback rates</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm">Free Interac e-Transfers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm">Premium customer support</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm">Advanced budgeting tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm">Credit score monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      <span className="text-sm">Overdraft protection</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="border-emerald-200">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">How KOHO Works</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-emerald-100 text-emerald-800">1</Badge>
                    <div>
                      <div className="font-medium">Sign Up & Verify</div>
                      <div className="text-sm text-gray-600">Create account and verify your Canadian identity</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-emerald-100 text-emerald-800">2</Badge>
                    <div>
                      <div className="font-medium">Load Your Card</div>
                      <div className="text-sm text-gray-600">Add money via direct deposit, e-Transfer, or bank transfer</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-emerald-100 text-emerald-800">3</Badge>
                    <div>
                      <div className="font-medium">Spend & Earn</div>
                      <div className="text-sm text-gray-600">Use your KOHO Visa and automatically earn cashback</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-emerald-100 text-emerald-800">4</Badge>
                    <div>
                      <div className="font-medium">Track & Budget</div>
                      <div className="text-sm text-gray-600">Monitor spending and improve your financial health</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.koho.ca', '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Get Started with KOHO
              </Button>

              <div className="grid grid-cols-2 gap-3">
                <Button 
                  variant="outline"
                  className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  onClick={() => window.open('https://apps.apple.com/ca/app/koho/id1173719889', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  iOS App
                </Button>
                <Button 
                  variant="outline"
                  className="border-emerald-300 text-emerald-700 hover:bg-emerald-50"
                  onClick={() => window.open('https://play.google.com/store/apps/details?id=com.koho', '_blank')}
                >
                  <Smartphone className="w-4 h-4 mr-2" />
                  Android App
                </Button>
              </div>
            </div>

            {/* Social Footer */}
            <div className="border-t border-emerald-200 pt-6">
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