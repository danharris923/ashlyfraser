'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink, Gift, Percent, CreditCard, Star, Instagram, Facebook, MessageCircle, Youtube, AtSign } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface PrintableCouponsModalProps {
  isOpen: boolean
  onClose: () => void
}

const featuredCoupons = [
  {
    id: 'pc-optimum',
    title: 'PC Optimum Points',
    description: 'Earn and redeem points at Loblaws, No Frills, Shoppers Drug Mart and more',
    value: 'Points Program',
    category: 'Loyalty',
    url: 'https://www.pcoptimum.ca',
    color: 'from-yellow-400 to-amber-600',
    bgColor: 'from-yellow-50 to-amber-100',
    icon: Star
  },
  {
    id: 'checkout51',
    title: 'Checkout 51',
    description: 'Earn cash back on everyday purchases from grocery stores across Canada',
    value: 'Cash Back',
    category: 'Rebate',
    url: 'https://checkout51.com',
    color: 'from-green-400 to-emerald-600',
    bgColor: 'from-green-50 to-emerald-100',
    icon: CreditCard
  },
  {
    id: 'caddle',
    title: 'Caddle',
    description: 'Earn points and cash back on purchases with receipt scanning',
    value: 'Receipt Scanning',
    category: 'Cashback',
    url: 'https://caddle.ca',
    color: 'from-purple-400 to-violet-600',
    bgColor: 'from-purple-50 to-violet-100',
    icon: Gift
  }
]

const couponSources = [
  {
    category: 'Major Retailers',
    sources: [
      { name: 'Walmart Canada', url: 'https://walmart.ca/coupons', description: 'Weekly digital coupons and rollback deals' },
      { name: 'Loblaws Digital Coupons', url: 'https://loblaws.ca', description: 'Load coupons directly to your PC Optimum card' },
      { name: 'Metro Coupons', url: 'https://metro.ca', description: 'Weekly flyer specials and digital offers' },
      { name: 'Sobeys Coupons', url: 'https://sobeys.com', description: 'Scene+ points and digital coupons' }
    ]
  },
  {
    category: 'Coupon Aggregators',
    sources: [
      { name: 'Save.ca', url: 'https://save.ca', description: 'Print-at-home coupons from major brands' },
      { name: 'Websaver', url: 'https://websaver.ca', description: 'Digital and printable coupons for Canadian products' },
      { name: 'SmartSource Canada', url: 'https://smartsource.ca', description: 'Manufacturer coupons and special offers' },
      { name: 'Coupons.com', url: 'https://coupons.com', description: 'Wide selection of printable grocery coupons' }
    ]
  },
  {
    category: 'Cashback Apps',
    sources: [
      { name: 'Rakuten', url: 'https://rakuten.ca', description: 'Earn cash back shopping online at 750+ stores' },
      { name: 'Drop', url: 'https://earnwithdrop.com', description: 'Automatic cash back on purchases with linked cards' },
      { name: 'Paymi', url: 'https://paymi.com', description: 'Send money and earn rewards through mobile payments' },
      { name: 'Ampli', url: 'https://ampli.ca', description: 'Earn points on everyday purchases and redeem for rewards' }
    ]
  }
]

export default function PrintableCouponsModal({ isOpen, onClose }: PrintableCouponsModalProps) {
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
        
        {/* Mobile Header with Android-style back button */}
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
              <h1 className="text-lg font-semibold text-blue-800">Printable Coupons</h1>
              <p className="text-xs text-blue-600">Canadian coupons & savings</p>
            </div>
            <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1">
              Free
            </Badge>
          </div>
        </div>

        {/* Content with overscroll behavior */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="pt-4 space-y-6">
            {/* Intro text */}
            <div className="text-center">
              <p className="text-sm text-gray-700 font-medium mb-1">
                Canada's best printable coupons and cashback opportunities
              </p>
              <p className="text-xs text-gray-600">
                Save money on groceries, household items, and more
              </p>
            </div>

            {/* Featured Programs */}
            <div>
              <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                Featured Savings Programs
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {featuredCoupons.map((coupon) => {
                  const IconComponent = coupon.icon
                  return (
                    <Card 
                      key={coupon.id} 
                      className={`group hover:shadow-lg transition-all duration-200 border-2 bg-gradient-to-r ${coupon.bgColor} border-blue-200 hover:border-blue-400 overflow-hidden active:scale-95`}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${coupon.color}`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-sm font-bold text-gray-900">{coupon.title}</h3>
                            <Badge className={`text-xs text-white bg-gradient-to-r ${coupon.color} px-2 py-1 mt-1`}>
                              {coupon.category}
                            </Badge>
                          </div>
                          <span className="text-sm font-bold text-gray-700">{coupon.value}</span>
                        </div>
                        
                        <p className="text-xs text-gray-700 mb-3 leading-relaxed">
                          {coupon.description}
                        </p>

                        <Button 
                          className={`w-full bg-gradient-to-r ${coupon.color} hover:opacity-90 text-white font-medium py-2 text-sm rounded-lg transition-all duration-200 active:scale-95`}
                          onClick={() => window.open(coupon.url, '_blank')}
                        >
                          <span>Get Started</span>
                          <ExternalLink className="w-3 h-3 ml-2" />
                        </Button>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Coupon Sources */}
            {couponSources.map((section) => (
              <div key={section.category}>
                <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Percent className="w-4 h-4 text-blue-500" />
                  {section.category}
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {section.sources.map((source) => (
                    <Card 
                      key={source.name}
                      className="group hover:shadow-md transition-all duration-200 border-blue-100 hover:border-blue-300 bg-white/80 backdrop-blur-sm active:scale-95"
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-sm font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {source.name}
                          </h3>
                          <ExternalLink className="w-3 h-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                          {source.description}
                        </p>
                        <Button 
                          variant="outline"
                          size="sm"
                          className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 h-8 text-xs"
                          onClick={() => window.open(source.url, '_blank')}
                        >
                          Visit Site
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}

            {/* Footer CTA */}
            <div className="p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl border-2 border-blue-200">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  💡 Pro Tip: Stack Your Savings
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Combine printable coupons with store sales and cashback apps for maximum savings!
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Button 
                    className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-medium px-4 py-3 rounded-xl text-sm active:scale-95 transition-transform flex items-center gap-2"
                    onClick={() => window.open('https://instagram.com/ashly__savingsguruca', '_blank')}
                  >
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-4 py-3 rounded-xl text-sm active:scale-95 transition-transform flex items-center gap-2"
                    onClick={() => window.open('https://www.facebook.com/ashly.fraser.96/', '_blank')}
                  >
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-medium px-4 py-3 rounded-xl text-sm active:scale-95 transition-transform flex items-center gap-2"
                    onClick={() => window.open('https://tiktok.com/@savingsguru', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4" />
                    TikTok
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-medium px-4 py-3 rounded-xl text-sm active:scale-95 transition-transform flex items-center gap-2"
                    onClick={() => window.open('https://www.youtube.com/channel/UCbVX-yAa2etLXvkYGx1C_Dw', '_blank')}
                  >
                    <Youtube className="w-4 h-4" />
                    YouTube
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-medium px-4 py-3 rounded-xl text-sm active:scale-95 transition-transform flex items-center gap-2"
                    onClick={() => window.open('https://www.threads.com/@ashly_savingsguruca', '_blank')}
                  >
                    <AtSign className="w-4 h-4" />
                    Threads
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}