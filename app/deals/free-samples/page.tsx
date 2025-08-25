'use client'

import { useState } from 'react'
import { ArrowLeft, Gift, ExternalLink, Star, Users, Clock } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

export default function FreeSamplesPage() {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState('all')

  const sampleSources = [
    {
      name: "SampleSource Canada",
      description: "Canada's leading sample platform with thousands of free products from major brands",
      features: ["5,000+ Active Samples", "Major Brand Partners", "Health & Beauty Focus", "Fast Shipping"],
      category: "Platform",
      rating: "4.8/5",
      users: "500K+",
      color: "from-blue-500 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      url: "https://samplesource.com/en-ca/"
    },
    {
      name: "GetMeFreeSamples",
      description: "Curated directory of the best free samples available to Canadians",
      features: ["Daily Sample Updates", "Verified Offers Only", "Category Filters", "Mobile Optimized"],
      category: "Directory",
      rating: "4.6/5",
      users: "250K+",
      color: "from-green-500 to-green-700",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      url: "https://getmefreesamples.com/"
    },
    {
      name: "Canadian Parent",
      description: "Family-focused sample platform featuring baby products, snacks, and household items",
      features: ["Family Product Focus", "Baby & Kids Samples", "Snack & Food Items", "Household Products"],
      category: "Family",
      rating: "4.7/5",
      users: "150K+",
      color: "from-purple-500 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      url: "https://canadianparent.com/samples/"
    },
    {
      name: "Walmart Canada Samples",
      description: "Free samples directly from Walmart Canada featuring popular grocery and household brands",
      features: ["Grocery Samples", "Household Products", "Health & Beauty", "Direct From Retailer"],
      category: "Retailer",
      rating: "4.5/5",
      users: "300K+",
      color: "from-yellow-500 to-yellow-700",
      bgColor: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-200",
      url: "https://www.walmart.ca/samples"
    },
    {
      name: "Costco Canada Samples",
      description: "Bulk sample offerings and product trials exclusive to Costco members",
      features: ["Member Exclusive", "Bulk Sample Sizes", "Premium Brands", "In-Store Tastings"],
      category: "Membership",
      rating: "4.9/5",
      users: "200K+",
      color: "from-red-500 to-red-700",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-200",
      url: "https://www.costco.ca/samples"
    },
    {
      name: "Loblaws PC Samples",
      description: "President's Choice and No Name product samples from Canada's largest grocery chain",
      features: ["PC Brand Focus", "Grocery Samples", "Seasonal Offers", "Store Pickup Available"],
      category: "Grocery",
      rating: "4.4/5",
      users: "400K+",
      color: "from-orange-500 to-orange-700",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      url: "https://www.loblaws.ca/samples"
    }
  ]

  const categories = [
    { id: 'all', label: 'All Sources', count: sampleSources.length },
    { id: 'platform', label: 'Platforms', count: sampleSources.filter(s => s.category === 'Platform').length },
    { id: 'retailer', label: 'Retailers', count: sampleSources.filter(s => s.category === 'Retailer' || s.category === 'Grocery' || s.category === 'Membership').length },
    { id: 'family', label: 'Family', count: sampleSources.filter(s => s.category === 'Family').length }
  ]

  const filteredSources = activeTab === 'all' ? sampleSources : 
    activeTab === 'platform' ? sampleSources.filter(s => s.category === 'Platform') :
    activeTab === 'retailer' ? sampleSources.filter(s => ['Retailer', 'Grocery', 'Membership'].includes(s.category)) :
    activeTab === 'family' ? sampleSources.filter(s => s.category === 'Family') :
    sampleSources

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-emerald-200">
        <div className="flex items-center h-16 px-4 max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="mr-3 p-2 hover:bg-emerald-100 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 text-emerald-700" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-emerald-800">Free Samples Canada</h1>
            <p className="text-sm text-emerald-600">Best Sources for Free Products</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-8 max-w-7xl mx-auto">
        <div className="space-y-6 pt-6">
          
          {/* Hero Section */}
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 border-0 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Gift className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Free Samples Canada</h2>
                  <p className="text-emerald-100">Discover the best sources for free products and samples</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{sampleSources.length}</div>
                  <div className="text-sm text-emerald-100">Top Sources</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-sm text-emerald-100">Free Products</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">Free</div>
                  <div className="text-sm text-emerald-100">Always</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === category.id
                    ? 'bg-emerald-500 text-white shadow-lg'
                    : 'bg-white text-emerald-700 hover:bg-emerald-50 border border-emerald-200'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Sample Sources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSources.map((source, index) => (
              <Card key={source.name} className={`bg-gradient-to-br ${source.bgColor} ${source.borderColor} border-2 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{source.name}</h3>
                        <Badge className={`bg-gradient-to-r ${source.color} text-white text-xs`}>
                          {source.category}
                        </Badge>
                      </div>
                      <p className="text-gray-700 text-sm mb-3">{source.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-medium">{source.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span>{source.users} users</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {source.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className={`w-full bg-gradient-to-r ${source.color} hover:opacity-90 text-white font-semibold py-2.5 rounded-lg transition-all duration-300`}
                      onClick={() => window.open(source.url, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Get Free Samples
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Tips Section */}
          <Card className="border-emerald-200 bg-gradient-to-br from-emerald-50 to-teal-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-500" />
                Pro Tips for Sample Success
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Badge className="bg-emerald-100 text-emerald-800 mt-1">1</Badge>
                  <div className="text-sm text-gray-700">
                    <div className="font-medium mb-1">Check daily for new samples</div>
                    <div>Popular samples go quickly - visit sources regularly</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-emerald-100 text-emerald-800 mt-1">2</Badge>
                  <div className="text-sm text-gray-700">
                    <div className="font-medium mb-1">Use different email addresses</div>
                    <div>Some platforms limit one sample per email address</div>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Badge className="bg-emerald-100 text-emerald-800 mt-1">3</Badge>
                  <div className="text-sm text-gray-700">
                    <div className="font-medium mb-1">Follow Ashly for sample alerts</div>
                    <div>Get notified when new high-value samples become available</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Footer */}
          <div className="border-t border-emerald-200 pt-6 pb-6">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">🎁 More Sample Sources Added Weekly!</p>
              <p className="text-xs text-gray-500 mt-1">Follow Ashly for the latest sample alerts and freebies</p>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}