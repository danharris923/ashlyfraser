'use client'

import { useEffect } from 'react'
import { X, Mail, Phone, MapPin, ExternalLink, Building2 } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface MailOutCouponsModalProps {
  isOpen: boolean
  onClose: () => void
}

const couponCompanies = [
  {
    category: 'Food & Beverage Companies',
    companies: [
      {
        name: 'Kraft Heinz Canada',
        address: '95 Moatfield Drive, Toronto, ON M3B 3L6',
        phone: '1-800-567-KRAFT (5738)',
        email: 'consumer.relations@kraftheinz.com',
        website: 'https://kraftheinzcompany.ca',
        products: 'Kraft Mac & Cheese, Heinz Ketchup, Philadelphia Cream Cheese',
        tips: 'Include your receipt and mention specific products you buy regularly'
      },
      {
        name: 'General Mills Canada',
        address: '5825 Explorer Drive, Mississauga, ON L4W 0C6',
        phone: '1-800-387-3074',
        email: 'consumer.services@genmills.com',
        website: 'https://generalmills.ca',
        products: 'Cheerios, Betty Crocker, Pillsbury, Nature Valley',
        tips: 'Request coupons for new product launches and seasonal items'
      },
      {
        name: 'Nestle Canada',
        address: '25 Sheppard Avenue West, Toronto, ON M2N 6S8',
        phone: '1-800-387-4636',
        email: 'consumer.services@ca.nestle.com',
        website: 'https://nestle.ca',
        products: 'KitKat, Smarties, Coffee-Mate, Lean Cuisine',
        tips: 'Mention allergies or dietary restrictions for targeted offers'
      },
      {
        name: 'Unilever Canada',
        address: '160 Bloor Street East, Toronto, ON M4W 3R2',
        phone: '1-800-598-1223',
        email: 'customer.care.ca@unilever.com',
        website: 'https://unilever.ca',
        products: 'Dove, Axe, Hellmann\'s, Ben & Jerry\'s',
        tips: 'Ask about loyalty programs and exclusive member offers'
      }
    ]
  },
  {
    category: 'Personal Care & Household',
    companies: [
      {
        name: 'Procter & Gamble Canada',
        address: '4711 Yonge Street, Toronto, ON M2N 6K8',
        phone: '1-800-668-0151',
        email: 'pgcanada.im@pg.com',
        website: 'https://pg.ca',
        products: 'Tide, Pampers, Crest, Head & Shoulders',
        tips: 'Join P&G Good Everyday for automatic coupon delivery'
      },
      {
        name: 'Johnson & Johnson Canada',
        address: '88 McNabb Street, Markham, ON L3R 5L2',
        phone: '1-800-265-7323',
        email: 'customercare@jjci.com',
        website: 'https://jnj.ca',
        products: 'Johnson\'s Baby, Band-Aid, Tylenol, Neutrogena',
        tips: 'Mention if you have a newborn for baby product samples'
      },
      {
        name: 'Colgate-Palmolive Canada',
        address: '1 Colgate Way, Morristown, NJ 07960 USA',
        phone: '1-800-468-6502',
        email: 'consumer_canada@colpal.com',
        website: 'https://colgate.ca',
        products: 'Colgate Toothpaste, Palmolive Dish Soap, Irish Spring',
        tips: 'Request coupons for professional dental recommendations'
      },
      {
        name: 'SC Johnson Canada',
        address: '1 Webster Street, Brantford, ON N3T 5R1',
        phone: '1-800-558-5252',
        email: 'canada@scj.com',
        website: 'https://scjohnson.ca',
        products: 'Windex, Glade, Raid, Ziploc',
        tips: 'Ask about seasonal cleaning product promotions'
      }
    ]
  },
  {
    category: 'Pet Care & Baby Products',
    companies: [
      {
        name: 'Mars Petcare Canada',
        address: '36 York Mills Road, Toronto, ON M2P 2A5',
        phone: '1-800-525-5273',
        email: 'consumer.care.ca@effem.com',
        website: 'https://mars.ca',
        products: 'Pedigree, Whiskas, Royal Canin, Greenies',
        tips: 'Include photos of your pets and their ages for targeted offers'
      },
      {
        name: 'Kimberly-Clark Canada',
        address: '50 Burnhamthorpe Road West, Mississauga, ON L5B 3C2',
        phone: '1-800-663-4340',
        email: 'consumer.care.canada@kcc.com',
        website: 'https://kimberly-clark.ca',
        products: 'Huggies, Pull-Ups, Kleenex, Kotex',
        tips: 'Join Huggies Rewards for ongoing coupon offers'
      }
    ]
  }
]

export default function MailOutCouponsModal({ isOpen, onClose }: MailOutCouponsModalProps) {
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="fixed inset-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 rounded-2xl overflow-hidden">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white/90 backdrop-blur-md border-b border-emerald-200 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                📮 Mail-Out Coupon Companies
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <Badge className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-0 px-4 py-2">
                Canadian Companies
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={onClose}
                className="text-gray-600 hover:text-gray-800 hover:bg-gray-100 w-10 h-10 rounded-full"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 h-[calc(100vh-200px)] overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-xl text-gray-700 font-medium">
                Contact these Canadian companies directly for mail-out coupons and samples
              </p>
              <p className="text-gray-600 mt-2">
                Write a polite letter mentioning you're a loyal customer and would appreciate coupons
              </p>
            </div>

            {/* Pro Tips */}
            <div className="mb-8 p-6 bg-gradient-to-r from-yellow-100 to-amber-100 rounded-2xl border-2 border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                💡 Pro Tips for Success
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
                <ul className="space-y-2">
                  <li>• Include a self-addressed stamped envelope (SASE)</li>
                  <li>• Mention specific products you purchase regularly</li>
                  <li>• Keep letters brief and polite</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Include receipts showing recent purchases</li>
                  <li>• Ask about new product launches</li>
                  <li>• Follow up after 6-8 weeks if no response</li>
                </ul>
              </div>
            </div>

            {/* Company Categories */}
            <div className="space-y-8">
              {couponCompanies.map((section, sectionIndex) => (
                <div key={section.category}>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-emerald-500" />
                    {section.category}
                  </h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {section.companies.map((company) => (
                      <Card 
                        key={company.name}
                        className="group hover:shadow-xl transition-all duration-300 border-emerald-100 hover:border-emerald-300 bg-white/80 backdrop-blur-sm"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                              {company.name}
                            </h3>
                            <ExternalLink className="w-4 h-4 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                          
                          <div className="space-y-3 mb-4">
                            <div className="flex items-start gap-3">
                              <MapPin className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-600 text-sm">{company.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone className="w-4 h-4 text-emerald-500" />
                              <span className="text-gray-600 text-sm">{company.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Mail className="w-4 h-4 text-emerald-500" />
                              <span className="text-gray-600 text-sm">{company.email}</span>
                            </div>
                          </div>

                          <div className="mb-4">
                            <h4 className="font-semibold text-gray-800 mb-2">Popular Products:</h4>
                            <p className="text-gray-600 text-sm">{company.products}</p>
                          </div>

                          <div className="mb-4 p-3 bg-emerald-50 rounded-lg">
                            <h4 className="font-semibold text-emerald-800 mb-1 text-sm">💡 Tip:</h4>
                            <p className="text-emerald-700 text-sm">{company.tips}</p>
                          </div>

                          <div className="flex gap-2">
                            <Button 
                              size="sm"
                              className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                              onClick={() => window.open(`mailto:${company.email}`, '_blank')}
                            >
                              <Mail className="w-4 h-4 mr-2" />
                              Email
                            </Button>
                            <Button 
                              variant="outline"
                              size="sm"
                              className="flex-1 border-emerald-300 text-emerald-600 hover:bg-emerald-50"
                              onClick={() => window.open(company.website, '_blank')}
                            >
                              Website
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Sample Letter Template */}
            <div className="mt-12 p-6 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-2xl border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                📝 Sample Letter Template
              </h3>
              <div className="bg-white p-6 rounded-xl border border-emerald-200 text-gray-700">
                <p className="mb-4"><strong>Dear [Company Name] Consumer Relations,</strong></p>
                <p className="mb-4">I am a loyal customer who regularly purchases your products, including [specific product names]. I have been using your products for [time period] and am very satisfied with their quality.</p>
                <p className="mb-4">I would greatly appreciate any coupons, samples, or promotional offers you might be able to send me. I am always eager to try new products from your company.</p>
                <p className="mb-4">Thank you for your time and consideration. I have included a self-addressed stamped envelope for your convenience.</p>
                <p>Sincerely,<br/>[Your Name]<br/>[Your Address]</p>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-2xl border-2 border-emerald-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                📬 Start Your Coupon Collection Today!
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                Follow Ashly for more money-saving tips and coupon strategies
              </p>
              <div className="flex justify-center gap-4">
                <Button 
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-bold px-6 py-3 rounded-xl"
                  onClick={() => window.open('https://instagram.com/ashly__savingsguruca', '_blank')}
                >
                  Follow on Instagram
                </Button>
                <Button 
                  className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-gray-800 text-white font-bold px-6 py-3 rounded-xl"
                  onClick={() => window.open('https://tiktok.com/@savingsguru', '_blank')}
                >
                  Watch on TikTok
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}