'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, MapPin, Clock, Store, Search } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

interface FlyerItem {
  id: string
  title: string
  merchant: string
  price: string
  originalPrice?: string
  discount?: string
  imageUrl?: string
  validUntil?: string
  category?: string
  location?: string
}

interface GroceryFlyersModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function GroceryFlyersModal({ isOpen, onClose }: GroceryFlyersModalProps) {
  const [flyerItems, setFlyerItems] = useState<FlyerItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStore, setSelectedStore] = useState('all')

  useEffect(() => {
    if (isOpen) {
      fetchFlyers()
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

  const fetchFlyers = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/flyers')
      const data = await response.json()
      setFlyerItems(data.flyers || [])
    } catch (error) {
      console.error('Error fetching flyers:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredFlyers = flyerItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.merchant.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesStore = selectedStore === 'all' || item.merchant === selectedStore
    return matchesSearch && matchesCategory && matchesStore
  })

  const categories = ['all', ...new Set(flyerItems.map(d => d.category).filter(Boolean))]
  const stores = ['all', ...new Set(flyerItems.map(d => d.merchant))]

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div className="fixed inset-0 flex flex-col bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 animate-in slide-in-from-bottom duration-300 md:animate-in md:slide-in-from-bottom-4 md:fade-in md:zoom-in-95 md:inset-4 md:rounded-2xl md:shadow-2xl">
        
        {/* Mobile Header with Android-style back button */}
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
              <h1 className="text-lg font-semibold text-green-800">Grocery Deals</h1>
              <p className="text-xs text-green-600">{filteredFlyers.length} items available</p>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="px-4 pb-4 space-y-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 w-4 h-4" />
              <Input
                placeholder="Search deals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-11 border-green-200 focus:ring-green-500 bg-white/80"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="border-green-200 bg-white/80 h-11">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>
                      {cat === 'all' ? 'All Categories' : cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStore} onValueChange={setSelectedStore}>
                <SelectTrigger className="border-green-200 bg-white/80 h-11">
                  <SelectValue placeholder="Store" />
                </SelectTrigger>
                <SelectContent>
                  {stores.map(store => (
                    <SelectItem key={store} value={store}>
                      {store === 'all' ? 'All Stores' : store}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Content with overscroll behavior */}
        <div className="flex-1 overflow-y-auto overscroll-contain px-4 pb-4">
          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-4">
              {[...Array(8)].map((_, i) => (
                <Card key={i} className="animate-pulse overflow-hidden">
                  <div className="bg-green-100 h-32 w-full"></div>
                  <CardContent className="p-3 space-y-2">
                    <div className="bg-green-100 h-3 rounded"></div>
                    <div className="bg-green-100 h-3 rounded w-3/4"></div>
                    <div className="bg-green-100 h-5 rounded w-1/2"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-4">
              {filteredFlyers.map(item => (
                <Card 
                  key={item.id} 
                  className="group hover:shadow-lg transition-all duration-200 border-green-100 hover:border-green-300 overflow-hidden active:scale-95"
                >
                  <CardHeader className="p-0">
                    <div className="relative">
                      {item.imageUrl && (
                        <div className="relative w-full h-32 bg-gray-100 overflow-hidden">
                          <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          />
                        </div>
                      )}
                      <div className="absolute top-2 left-2 right-2 flex items-start justify-between">
                        {item.discount && (
                          <Badge className="bg-red-500 text-white text-xs px-2 py-1">
                            {item.discount}
                          </Badge>
                        )}
                        {item.category && (
                          <Badge variant="outline" className="text-green-600 border-green-300 bg-white/90 text-xs px-2 py-1">
                            {item.category}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 space-y-2">
                    <div>
                      <h3 className="font-medium text-sm line-clamp-2 text-gray-900">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1 mt-1">
                        <Store className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-600">{item.merchant}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-bold text-green-600">{item.price}</span>
                      {item.originalPrice && (
                        <span className="text-xs text-gray-400 line-through">{item.originalPrice}</span>
                      )}
                    </div>

                    {(item.validUntil || item.location) && (
                      <div className="space-y-1">
                        {item.validUntil && (
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3 text-green-500" />
                            <span className="text-xs text-gray-600">Until {new Date(item.validUntil).toLocaleDateString()}</span>
                          </div>
                        )}
                        {item.location && (
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-green-500" />
                            <span className="text-xs text-gray-600">{item.location}</span>
                          </div>
                        )}
                      </div>
                    )}

                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white h-9 text-sm font-medium active:scale-95 transition-transform">
                      View Deal
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredFlyers.length === 0 && !loading && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Store className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mb-2">No deals found</h3>
              <p className="text-sm text-gray-500">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}