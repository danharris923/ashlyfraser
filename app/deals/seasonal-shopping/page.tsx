'use client'

import { ArrowLeft, Calendar, Download, TrendingDown, Gift, Sun, Snowflake } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useRouter } from 'next/navigation'

export default function SeasonalShoppingPage() {
  const router = useRouter()

  const months = [
    {
      month: "January",
      icon: <Snowflake className="w-6 h-6" />,
      deals: ["Fitness Equipment", "Winter Clothing", "Home Organization", "Mattresses"],
      tip: "Post-holiday clearance sales are massive - perfect for next year's gifts"
    },
    {
      month: "February", 
      icon: <Gift className="w-6 h-6" />,
      deals: ["Valentine's Jewelry", "Winter Sports", "Presidents Day Sales", "Tax Software"],
      tip: "Buy Valentine's chocolates on Feb 15th for 75% off"
    },
    {
      month: "March",
      icon: <Sun className="w-6 h-6" />,
      deals: ["Spring Clothing", "Luggage", "Frozen Foods", "Winter Clearance"],
      tip: "Spring break travel gear goes on sale mid-month"
    },
    {
      month: "April",
      icon: <Sun className="w-6 h-6" />,
      deals: ["Spring Cleaning", "Appliances", "Outdoor Furniture", "Easter Clearance"],
      tip: "Perfect time for major appliance purchases with spring promotions"
    },
    {
      month: "May",
      icon: <Sun className="w-6 h-6" />,
      deals: ["Mother's Day Gifts", "Mattresses", "Grilling Equipment", "Spring Fashion"],
      tip: "Memorial Day weekend has the best mattress sales of the year"
    },
    {
      month: "June",
      icon: <Sun className="w-6 h-6" />,
      deals: ["Father's Day Tools", "Outdoor Gear", "Wedding Season", "Summer Clothes"],
      tip: "Graduate and wedding season = great deals on home goods"
    }
  ]

  const categories = [
    {
      category: "Electronics",
      bestTimes: ["Black Friday", "Boxing Day", "Back to School"],
      discount: "Up to 70% off",
      color: "from-blue-500 to-blue-700"
    },
    {
      category: "Clothing",
      bestTimes: ["End of Season", "Labour Day", "New Year"],
      discount: "Up to 80% off",
      color: "from-pink-500 to-pink-700"
    },
    {
      category: "Home & Garden",
      bestTimes: ["Spring", "Labour Day", "October"],
      discount: "Up to 60% off", 
      color: "from-green-500 to-green-700"
    },
    {
      category: "Appliances",
      bestTimes: ["May", "September", "Boxing Day"],
      discount: "Up to 50% off",
      color: "from-purple-500 to-purple-700"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-green-200">
        <div className="flex items-center h-16 px-4 max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.back()}
            className="mr-3 p-2 hover:bg-green-100 rounded-full"
          >
            <ArrowLeft className="w-5 h-5 text-green-700" />
          </Button>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-green-800">Seasonal Shopping Calendar</h1>
            <p className="text-sm text-green-600">Month-by-month guide to the best deals</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-8 max-w-7xl mx-auto">
        <div className="space-y-6 pt-6">
          
          {/* Hero Section */}
          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 border-0 text-white">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Seasonal Shopping Calendar</h2>
                  <p className="text-green-100">Month-by-month guide to the best times to buy everything throughout the year</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">12</div>
                  <div className="text-sm text-green-100">Months Covered</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-sm text-green-100">Max Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">32K+</div>
                  <div className="text-sm text-green-100">Downloads</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Breakdown */}
          <Card className="border-green-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-green-500" />
                Monthly Deal Calendar (First Half)
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {months.map((monthData, index) => (
                  <div key={monthData.month} className="border rounded-lg p-4 bg-gradient-to-r from-green-50 to-emerald-50">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-green-600">{monthData.icon}</div>
                      <h4 className="text-lg font-bold text-gray-900">{monthData.month}</h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="font-medium text-green-700 mb-2">🏷️ Best Deals</div>
                        <div className="grid grid-cols-2 gap-1">
                          {monthData.deals.map((deal, idx) => (
                            <div key={idx} className="text-sm text-gray-700 bg-white rounded px-2 py-1">
                              {deal}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                        <div className="font-medium text-yellow-800 text-sm mb-1">💡 Pro Tip</div>
                        <div className="text-xs text-gray-700">{monthData.tip}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Category Best Times */}
          <Card className="border-green-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-purple-500" />
                Best Times by Category
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categories.map((cat, index) => (
                  <div key={cat.category} className="border rounded-lg p-4 bg-gradient-to-r from-gray-50 to-green-50">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-lg font-bold text-gray-900">{cat.category}</h4>
                      <Badge className={`bg-gradient-to-r ${cat.color} text-white`}>
                        {cat.discount}
                      </Badge>
                    </div>
                    
                    <div>
                      <div className="font-medium text-green-700 mb-2">⏰ Best Times</div>
                      <div className="space-y-1">
                        {cat.bestTimes.map((time, idx) => (
                          <div key={idx} className="text-sm text-gray-700 bg-white rounded px-2 py-1">
                            {time}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Major Sale Events */}
          <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Gift className="w-5 h-5 text-red-500" />
                Major Canadian Sale Events
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-green-200">
                  <h4 className="font-semibold text-red-600 mb-2">🎯 Boxing Day (December 26)</h4>
                  <div className="text-sm text-gray-700">
                    Canada's biggest shopping day. Electronics, clothing, and home goods see discounts up to 70% off.
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-green-200">
                  <h4 className="font-semibold text-orange-600 mb-2">🛍️ Black Friday (Late November)</h4>
                  <div className="text-sm text-gray-700">
                    Electronics and tech deals. Many Canadian retailers now participate with significant discounts.
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-green-200">
                  <h4 className="font-semibold text-blue-600 mb-2">🎒 Back to School (August)</h4>
                  <div className="text-sm text-gray-700">
                    Electronics, clothing, and school supplies. Great time for laptops, tablets, and tech gear.
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Download CTA */}
          <div className="space-y-3">
            <Button 
              className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white h-12 text-lg font-semibold"
              onClick={() => window.open('https://www.savingsguru.ca', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download Full 12-Month Calendar →
            </Button>
          </div>

          {/* Social Footer */}
          <div className="border-t border-green-200 pt-6">
            <div className="text-center mb-4">
              <p className="text-sm text-gray-600">📅 Updated yearly with the latest sale patterns!</p>
              <p className="text-xs text-gray-500 mt-1">Follow Ashly for seasonal deal alerts and sale predictions</p>
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