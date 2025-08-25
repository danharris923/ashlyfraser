'use client'

import { useEffect } from 'react'
import { ArrowLeft, Download, BookOpen, DollarSign, Smartphone, CreditCard } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface CashbackComparisonModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CashbackComparisonModal({ isOpen, onClose }: CashbackComparisonModalProps) {
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
              <h1 className="text-lg font-semibold text-green-800">Cashback Apps Comparison 2025</h1>
              <p className="text-xs text-green-600">Free Savings Guide</p>
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
                    <DollarSign className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">Cashback Apps Comparison 2025</h2>
                    <p className="text-green-100">Complete breakdown of every major cashback app for Canadians</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">2025</div>
                    <div className="text-sm text-green-100">Updated</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">All Apps</div>
                    <div className="text-sm text-green-100">Compared</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Top Free Canadian Cashback Options */}
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-green-500" />
                  Top Free Canadian Cashback Options (2025)
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-purple-800">Rakuten</h4>
                      <Badge className="bg-purple-500 text-white">Up to 30%</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Over 750 online retailers; payouts via PayPal, cheque, or Amazon e-gift card once you hit minimum $5.01</p>
                    <div className="text-xs text-purple-600">✓ Largest retailer network ✓ Multiple payout options ✓ $5 minimum</div>
                  </div>

                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-green-800">Checkout 51</h4>
                      <Badge className="bg-green-500 text-white">Grocery Focus</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Grocery rebates—upload receipts to earn cashback; withdraw via cheque at $20 minimum</p>
                    <div className="text-xs text-green-600">✓ Grocery specialist ✓ Receipt scanning ✓ Weekly offers</div>
                  </div>

                  <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-red-800">Great Canadian Rebates (GCR)</h4>
                      <Badge className="bg-red-500 text-white">Travel Expert</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Longstanding Canadian cashback site covering travel, credit cards, and more; payouts via PayPal or gift cards</p>
                    <div className="text-xs text-red-600">✓ Travel specialist ✓ Higher rates ✓ Gift card options</div>
                  </div>

                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-blue-800">Paymi</h4>
                      <Badge className="bg-blue-500 text-white">Auto-Link</Badge>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Linking your credit/debit card automatically earns cashback when shopping at partner retailers</p>
                    <div className="text-xs text-blue-600">✓ Automatic earning ✓ Card linking ✓ No effort required</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bonus Mentions */}
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-orange-500" />
                  Bonus Mentions
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-emerald-800">KOHO</h4>
                      <Badge className="bg-emerald-500 text-white">Up to 2%</Badge>
                    </div>
                    <p className="text-sm text-gray-700">Prepaid Mastercard offering up to 2% cashback—and up to 50% extra at selected merchants</p>
                  </div>

                  <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-indigo-800">EQ Bank Card</h4>
                      <Badge className="bg-indigo-500 text-white">0.5% + Interest</Badge>
                    </div>
                    <p className="text-sm text-gray-700">Offers 0.5% cashback plus high-interest savings on balance—great for the minimalist saver</p>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-orange-800">Caddle</h4>
                      <Badge className="bg-orange-500 text-white">Surveys + Receipts</Badge>
                    </div>
                    <p className="text-sm text-gray-700">Pays for uploading grocery receipts and completing quick surveys—effective for stacking small savings</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Comparison Table */}
            <Card className="border-green-200">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Quick Comparison Table</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-green-200">
                        <th className="text-left py-2">App</th>
                        <th className="text-left py-2">Best For</th>
                        <th className="text-left py-2">Min Cashout</th>
                        <th className="text-left py-2">Max Rate</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b border-green-100">
                        <td className="py-2 font-medium">Rakuten</td>
                        <td className="py-2">Online shopping</td>
                        <td className="py-2">$5.01</td>
                        <td className="py-2 text-green-600 font-bold">30%</td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="py-2 font-medium">GCR</td>
                        <td className="py-2">Travel & higher rates</td>
                        <td className="py-2">Varies</td>
                        <td className="py-2 text-green-600 font-bold">15%</td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="py-2 font-medium">Checkout 51</td>
                        <td className="py-2">Groceries</td>
                        <td className="py-2">$20</td>
                        <td className="py-2 text-green-600 font-bold">$5/item</td>
                      </tr>
                      <tr className="border-b border-green-100">
                        <td className="py-2 font-medium">KOHO</td>
                        <td className="py-2">Banking + cashback</td>
                        <td className="py-2">$0</td>
                        <td className="py-2 text-green-600 font-bold">2%</td>
                      </tr>
                      <tr>
                        <td className="py-2 font-medium">Paymi</td>
                        <td className="py-2">Automatic earning</td>
                        <td className="py-2">Varies</td>
                        <td className="py-2 text-green-600 font-bold">5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Action Steps */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Action Steps</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800 mt-1">1</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Visit SavingsGuru.ca</div>
                      <div>Get comparison tables and video walkthroughs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800 mt-1">2</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Choose based on spending habits</div>
                      <div>Match apps to your shopping patterns for maximum return</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-100 text-green-800 mt-1">3</Badge>
                    <div className="text-sm text-gray-700">
                      <div className="font-medium mb-1">Stack multiple apps</div>
                      <div>Use different apps for different purchase types</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Download CTA */}
            <div className="space-y-3 pb-6">
              <Button 
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white h-12 text-lg font-semibold"
                onClick={() => window.open('https://www.savingsguru.ca', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Read Now →
              </Button>
            </div>

            {/* Social Footer */}
            <div className="border-t border-green-200 pt-6">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600">💰 More Cashback Guides Coming Soon!</p>
                <p className="text-xs text-gray-500 mt-1">Follow Ashly for the latest app reviews and strategies</p>
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