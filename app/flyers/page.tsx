'use client'

import { useEffect, useState } from 'react'
import { ChevronLeft, MapPin, Clock, Tag, Store, Search, Filter } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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

export default function FlyersPage() {
  const [flyerItems, setFlyerItems] = useState<FlyerItem[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStore, setSelectedStore] = useState('all')

  useEffect(() => {
    fetchFlyers()
  }, [])

  const fetchFlyers = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/flyers')
      const data = await response.json()
      setFlyerItems(data.flyers || [])
    } catch (error) {
      console.error('Error fetching flyers:', error)
      // Set mock data for development
      setFlyerItems(getMockFlyers())
    } finally {
      setLoading(false)
    }
  }

  const getMockFlyers = (): FlyerItem[] => [
    {
      id: '1',
      title: 'Fresh Strawberries',
      merchant: 'Metro',
      price: '$2.99',
      originalPrice: '$5.99',
      discount: '50% OFF',
      category: 'Produce',
      validUntil: '2025-08-31',
      location: 'Toronto, ON'
    },
    {
      id: '2',
      title: 'Chicken Breast Family Pack',
      merchant: 'No Frills',
      price: '$8.99/lb',
      originalPrice: '$12.99/lb',
      discount: '30% OFF',
      category: 'Meat',
      validUntil: '2025-08-30',
      location: 'Toronto, ON'
    },
    {
      id: '3',
      title: 'Tide Laundry Detergent',
      merchant: 'Shoppers Drug Mart',
      price: '$7.99',
      originalPrice: '$14.99',
      discount: '46% OFF',
      category: 'Household',
      validUntil: '2025-09-02',
      location: 'Toronto, ON'
    },
    {
      id: '4',
      title: 'Coca-Cola 12 Pack',
      merchant: 'Loblaws',
      price: '$3.99',
      originalPrice: '$7.49',
      discount: '47% OFF',
      category: 'Beverages',
      validUntil: '2025-08-29',
      location: 'Toronto, ON'
    },
    {
      id: '5',
      title: 'Wonder Bread',
      merchant: 'Walmart',
      price: '$1.99',
      originalPrice: '$3.49',
      discount: '43% OFF',
      category: 'Bakery',
      validUntil: '2025-08-28',
      location: 'Toronto, ON'
    },
    {
      id: '6',
      title: 'Maple Leaf Bacon',
      merchant: 'Sobeys',
      price: '$4.99',
      originalPrice: '$7.99',
      discount: '37% OFF',
      category: 'Meat',
      validUntil: '2025-08-31',
      location: 'Toronto, ON'
    }
  ]

  const filteredFlyers = flyerItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.merchant.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesStore = selectedStore === 'all' || item.merchant === selectedStore
    return matchesSearch && matchesCategory && matchesStore
  })

  const categories = ['all', ...new Set(flyerItems.map(d => d.category).filter(Boolean))]
  const stores = ['all', ...new Set(flyerItems.map(d => d.merchant))]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-green-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-green-600 hover:text-green-700 hover:bg-green-100"
                >
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
              </Link>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Grocery Deals & Flyers
              </h1>
            </div>
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
              {filteredFlyers.length} Items Available
            </Badge>
          </div>
        </div>
      </header>

      {/* Filters */}
      <div className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-green-500 w-4 h-4" />
                <Input
                  placeholder="Search flyer items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-green-200 focus:ring-green-500"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="border-green-200">
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
              <SelectTrigger className="border-green-200">
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

        {/* Flyers Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Card key={i} className="animate-pulse overflow-hidden">
                <div className="bg-green-100 h-48 w-full"></div>
                <CardContent className="p-4 space-y-3">
                  <div className="bg-green-100 h-4 rounded"></div>
                  <div className="bg-green-100 h-4 rounded w-3/4"></div>
                  <div className="bg-green-100 h-6 rounded w-1/2"></div>
                  <div className="bg-green-100 h-4 rounded w-2/3"></div>
                  <div className="bg-green-100 h-10 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredFlyers.map(item => (
              <Card 
                key={item.id} 
                className="group hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-300 overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="relative">
                    {item.imageUrl && (
                      <div className="relative w-full h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                      <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg">
                        {item.discount}
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-300 bg-white/90 backdrop-blur-sm">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 p-4">
                  <div>
                    <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                      <Store className="w-4 h-4 text-green-500" />
                      <span>{item.merchant}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-green-600">{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">{item.originalPrice}</span>
                    )}
                  </div>

                  <div className="pt-3 border-t border-green-100 space-y-2">
                    {item.validUntil && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span>Valid until {new Date(item.validUntil).toLocaleDateString()}</span>
                      </div>
                    )}
                    {item.location && (
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-green-500" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white">
                    View in Flyer
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {filteredFlyers.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Tag className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No flyer items found</h3>
            <p className="text-gray-500">Try adjusting your filters or search term</p>
          </div>
        )}
      </div>
    </div>
  )
}