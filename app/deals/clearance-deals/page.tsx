'use client'

import { useEffect, useState } from 'react'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Instagram, Facebook, MessageCircle, Youtube, AtSign } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

interface ClearanceDeal {
  id: string
  title: string
  description: string
  savings: string
  category: string
  brand: string
  logoUrl: string
  imageUrl: string
  websiteUrl: string
  validUntil: string
}

export default function ClearanceDealsPage() {
  const router = useRouter()
  const [deals, setDeals] = useState<ClearanceDeal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDeals()
  }, [])

  const fetchDeals = async () => {
    try {
      const response = await fetch('/api/clearance')
      const data = await response.json()
      setDeals(data.clearanceDeals)
      setLoading(false)
    } catch (error) {
      console.error('Error fetching clearance deals:', error)
      setLoading(false)
    }
  }

  // Keep the fallback clearance deals in case API fails - with proper structure
  const fallbackDeals = [
    {
      id: 'lululemon',
      title: 'Lululemon Clearance',
      brand: 'Lululemon',
      description: 'Exclusive clearance on activewear, leggings, and athletic apparel',
      savings: 'Up to 70% OFF',
      category: 'Athletic Wear',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2020/09/Lululemon-Logo.png',
      imageUrl: 'https://images.unsplash.com/photo-1506629905607-53e103a0265d?w=400&h=300&fit=crop',
      websiteUrl: 'https://shop.lululemon.com/c/clearance',
      validUntil: '2025-09-15',
      // Fallback properties for old structure
      discount: 'Up to 70% OFF',
      logo: 'https://logos-world.net/wp-content/uploads/2020/09/Lululemon-Logo.png',
      url: 'https://shop.lululemon.com/c/clearance',
      color: 'from-red-400 to-red-600',
      bgColor: 'from-red-50 to-red-100'
    },
    {
      id: 'michaelkors',
      title: 'Michael Kors Clearance',
      brand: 'Michael Kors',
      description: 'Designer handbags, watches, and accessories at clearance prices',
      savings: 'Up to 60% OFF',
      category: 'Designer',
      logoUrl: 'https://1000logos.net/wp-content/uploads/2017/03/Michael-Kors-Logo.png',
      imageUrl: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=300&fit=crop',
      websiteUrl: 'https://www.michaelkors.ca/sale',
      validUntil: '2025-09-10',
      // Fallback properties
      discount: 'Up to 60% OFF',
      logo: 'https://1000logos.net/wp-content/uploads/2017/03/Michael-Kors-Logo.png',
      url: 'https://www.michaelkors.ca/sale',
      color: 'from-amber-400 to-amber-600',
      bgColor: 'from-amber-50 to-amber-100'
    },
    {
      id: 'sephora',
      title: 'Sephora Clearance',
      brand: 'Sephora',
      description: 'Beauty gift sets, makeup palettes, and skincare bundles on sale',
      savings: 'Up to 50% OFF',
      category: 'Beauty',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Sephora-Logo.png',
      imageUrl: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop',
      websiteUrl: 'https://www.sephora.com/ca/sale',
      validUntil: '2025-09-12',
      // Fallback properties
      discount: 'Up to 50% OFF',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Sephora-Logo.png',
      url: 'https://www.sephora.com/ca/sale',
      color: 'from-pink-400 to-pink-600',
      bgColor: 'from-pink-50 to-pink-100'
    },
    {
      id: 'gap',
      title: 'GAP Clearance',
      brand: 'GAP',
      description: 'Seasonal clearance on clothing for the whole family',
      savings: 'Up to 70% OFF',
      category: 'Clothing',
      logoUrl: 'https://logos-world.net/wp-content/uploads/2020/04/Gap-Logo.png',
      imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      websiteUrl: 'https://www.gap.ca/browse/division.do?cid=5243',
      validUntil: '2025-09-08',
      // Fallback properties
      discount: 'Up to 70% OFF',
      logo: 'https://logos-world.net/wp-content/uploads/2020/04/Gap-Logo.png',
      url: 'https://www.gap.ca/browse/division.do?cid=5243',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-amber-200">
        <div className="flex items-center h-16 px-4 max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="mr-3 p-2 hover:bg-amber-100 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 text-amber-700" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-amber-800">Premium Brand Clearance</h1>
            <p className="text-sm text-amber-600">Limited time exclusive deals</p>
          </div>
          <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1">
            Premium
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-8 max-w-7xl mx-auto">
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

          {loading && (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-500 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading clearance deals...</p>
            </div>
          )}

          {/* Deals grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(deals.length > 0 ? deals : fallbackDeals).map((deal) => (
              <Card 
                key={deal.id} 
                className={`group hover:shadow-lg transition-all duration-200 border-2 bg-gradient-to-br ${deal.bgColor} border-amber-200 hover:border-amber-400 overflow-hidden active:scale-95`}
              >
                <CardContent className="p-4">
                  {/* Much larger brand logo section */}
                  <div className="mb-4">
                    <div className="relative w-full h-24 bg-white rounded-lg p-4 shadow-sm mb-3">
                      <Image
                        src={deal.logoUrl || deal.logo}
                        alt={`${deal.brand} logo`}
                        fill
                        className="object-contain p-2"
                        sizes="300px"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="text-xl font-bold text-gray-900">
                        {deal.brand} Clearance
                      </h3>
                      <Badge className="px-4 py-2 text-sm font-bold text-white bg-gradient-to-r from-amber-500 to-orange-500">
                        {deal.savings || deal.discount}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {deal.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <Button 
                      className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:opacity-90 text-white font-bold py-3 text-sm rounded-xl transition-all duration-200 active:scale-95"
                      onClick={() => window.open(deal.websiteUrl || deal.url, '_blank')}
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
  )
}