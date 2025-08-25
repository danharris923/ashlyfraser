'use client'

import { useEffect } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Instagram, Facebook, MessageCircle, Youtube, AtSign } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface ClearanceDealsModalProps {
  isOpen: boolean
  onClose: () => void
}

const clearanceDeals = [
  {
    id: 'lululemon',
    brand: 'Lululemon',
    description: 'Exclusive clearance on activewear, leggings, and athletic apparel',
    discount: 'Up to 70% OFF',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Lululemon-Logo.png',
    url: 'https://shopstyle.it/l/cj22Z',
    color: 'from-red-400 to-red-600',
    bgColor: 'from-red-50 to-red-100'
  },
  {
    id: 'michaelkors',
    brand: 'Michael Kors',
    description: 'Designer handbags, watches, and accessories at clearance prices',
    discount: 'Up to 60% OFF',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Michael-Kors-Logo.png',
    url: 'https://shopstyle.it/l/cj24F',
    color: 'from-amber-400 to-amber-600',
    bgColor: 'from-amber-50 to-amber-100'
  },
  {
    id: 'sephora',
    brand: 'Sephora',
    description: 'Beauty gift sets, makeup palettes, and skincare bundles on sale',
    discount: 'Gift Sets',
    logo: 'https://www.sephora.com/img/ufe/icons/logo-sephora-v2.svg',
    url: 'https://www.savingsguru.ca/2024/11/06/sephora-sale-gift-sets/',
    color: 'from-pink-400 to-pink-600',
    bgColor: 'from-pink-50 to-pink-100'
  },
  {
    id: 'gap',
    brand: 'GAP',
    description: 'Seasonal clearance on clothing for the whole family',
    discount: 'Flash Sale',
    logo: 'https://logos-world.net/wp-content/uploads/2020/09/Gap-Logo.png',
    url: 'https://shopstyle.it/l/cj24C',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'from-blue-50 to-blue-100'
  }
]

export default function ClearanceDealsModal({ isOpen, onClose }: ClearanceDealsModalProps) {
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
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Mobile Header with Android-style back button */}
        <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-amber-200">
          <div className="flex items-center h-14 px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="mr-3 p-2 hover:bg-amber-100 rounded-full"
            >
              <ArrowLeft className="w-5 h-5 text-amber-700" />
            </Button>
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-amber-800">Premium Brand Clearance</h1>
              <p className="text-xs text-amber-600">Limited time exclusive deals</p>
            </div>
            <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1">
              Premium
            </Badge>
          </div>
        </div>

        {/* Content with overscroll behavior */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          <div className="pt-4 space-y-4">
            {/* Intro text */}
            <div className="text-center mb-6">
              <p className="text-sm text-gray-700 font-medium mb-1">
                Handpicked exclusive deals from top Canadian retailers
              </p>
              <p className="text-xs text-gray-600">
                Limited time offers - shop now before they're gone!
              </p>
            </div>

            {/* Deals grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {clearanceDeals.map((deal) => (
                <Card 
                  key={deal.id} 
                  className={`group hover:shadow-lg transition-all duration-200 border-2 bg-gradient-to-br ${deal.bgColor} border-amber-200 hover:border-amber-400 overflow-hidden active:scale-95`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative w-32 h-16 bg-white rounded-lg p-3 shadow-sm">
                        <Image
                          src={deal.logo}
                          alt={`${deal.brand} logo`}
                          fill
                          className="object-contain"
                          sizes="128px"
                        />
                      </div>
                      <Badge className={`px-3 py-1 text-sm font-bold text-white bg-gradient-to-r ${deal.color}`}>
                        {deal.discount}
                      </Badge>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                        {deal.brand} Clearance
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {deal.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Button 
                        className={`flex-1 bg-gradient-to-r ${deal.color} hover:opacity-90 text-white font-bold py-3 text-sm rounded-xl transition-all duration-200 active:scale-95`}
                        onClick={() => window.open(deal.url, '_blank')}
                      >
                        <span>Shop Now</span>
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                      <div className="text-center">
                        <div className="text-lg font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                          SAVE
                        </div>
                        <div className="text-xs text-gray-600 font-medium">
                          BIG
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-xl border-2 border-amber-200">
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  🎯 More Exclusive Deals Coming Soon!
                </h3>
                <p className="text-sm text-gray-700 mb-4">
                  Follow Ashly for the latest clearance finds and flash sales
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